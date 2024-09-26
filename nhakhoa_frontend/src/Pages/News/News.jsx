import React, { useState, useEffect } from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import NewsItem from '~/Components/NewsItem/NewsItem';
import NewsNbItem from '~/Components/NewsItem/NewsNbItem';
import request from '~/Utils/httpRequest';

const ITEMS_PER_PAGE = 8; 

function ServiceDetail() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [filteredNews, setFilteredNews] = useState([]); // State for filtered news
    const [filterOption, setFilterOption] = useState('all'); // State for filter option

    useEffect(() => {
        request.get('get-all-news')
            .then(response => {
                if (response.data.success) {
                    setNewsData(response.data.data);
                    setFilteredNews(response.data.data); // Initialize filtered news
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleSearch = () => {
        let filtered = newsData;

        if (filterOption === 'name') {
            filtered = newsData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } if (filterOption === 'date') {
            filtered = newsData.filter(item => {
                const dateMatch = new Date(item.created_at).toLocaleDateString('vi-VN').includes(searchQuery);
                return  dateMatch;
            });
        }   else {
            filtered = newsData.filter(item => {
                const viewsMatch = item.view.toString().includes(searchQuery);
                const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
                const descriptionMatch = item.description.toLowerCase().includes(searchQuery.toLowerCase());

                const dateMatch = new Date(item.created_at).toLocaleDateString('vi-VN').includes(searchQuery);

                return nameMatch || descriptionMatch || viewsMatch || dateMatch;
            });
        }

        setFilteredNews(filtered);
        setCurrentPage(1); 
    };

    return (
        <>
            <BreadScrum
                title="danh sách tin tức"
                links={[
                    { title: 'trang chủ', href: config.routes.home },
                    { title: 'danh sách tin tức', href: config.routes.news },
                ]}
            />
            <section className="news-single" style={{ marginTop: '-30px' }}>
                <div className="container">
                    <div className="single-main" style={{ padding: '15px 20px' }}>
                        <div className="news-body d-flex">
                            <select
                                className="form-control w-25"
                                style={{
                                    height: '40px',
                                    borderColor: 'white',
                                    borderBottomColor: '#2072C3',
                                    borderRadius: '0px'
                                }}
                                name="filter"
                                value={filterOption}
                                onChange={(e) => setFilterOption(e.target.value)} // Update filter option
                            >
                                <option value="all">Tất cả</option>
                                <option value="name">Theo tên</option>
                                <option value="date">Theo ngày</option>
                            </select>
                            <input
                                style={{
                                    borderColor: 'white',
                                    borderBottomColor: '#2072C3',
                                    borderRadius: '0px',
                                    height: '40px',
                                    marginLeft: '25px'
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm tin tức"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                            />
                            <div className="input-group-append" style={{ marginLeft: '25px' }}>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{ height: '40px' }}
                                    type="button"
                                    onClick={handleSearch} // Trigger search on click
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginBottom: '5px' }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="single-main" style={{ padding: '30px 20px' }}>
                                <div className="col-12">
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <>
                                            <p className="mb-4">
                                                Hiển thị <span style={{ color: "#3982CC" }}>{currentNews.length}</span> trong số{' '}
                                                <span style={{ color: "#3982CC" }}>{filteredNews.length}</span> kết quả
                                            </p>
                                            {currentNews.map((newsItem, index) => (
                                                <React.Fragment key={newsItem.id}>
                                                    <NewsItem
                                                        data={{
                                                            id:newsItem.id,
                                                            image: newsItem.avatar,
                                                            name: newsItem.name,
                                                            description: newsItem.description,
                                                            create_date: new Date(newsItem.created_at).toLocaleDateString('vi-VN'),
                                                            views: Number(newsItem.view).toLocaleString(),
                                                        }}
                                                    />
                                                    {index < currentNews.length - 1 && <hr />}
                                                </React.Fragment>
                                            ))}

                                            {/* Custom Pagination */}
                                            <div className="pagination">
                                                <ul className="pagination-list">
                                                    <li>
                                                        <a 
                                                            href="#" 
                                                            onClick={() => handlePageChange(currentPage - 1)}
                                                            disabled={currentPage === 1}
                                                        >
                                                            <i className="icofont-rounded-left"></i>
                                                        </a>
                                                    </li>
                                                    {[...Array(totalPages)].map((_, index) => (
                                                        <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                                            <a href="#" onClick={() => handlePageChange(index + 1)}>
                                                                {index + 1}
                                                            </a>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <a 
                                                            href="#" 
                                                            onClick={() => handlePageChange(currentPage + 1)}
                                                            disabled={currentPage === totalPages}
                                                        >
                                                            <i className="icofont-rounded-right"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-12">
                            <div className="main-sidebar">
                                <div className="single-widget category">
                                    <h3 className="title">Danh mục tin tức</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">Chăm sóc răng miệng tổng quát</a></li>
                                        <li><a href="#">Niềng răng và chỉnh nha</a></li>
                                        <li><a href="#">Nha khoa thẩm mỹ</a></li>
                                        <li><a href="#">Cấy ghép Implant</a></li>
                                        <li><a href="#">Điều trị tủy và phục hình răng</a></li>
                                    </ul>
                                </div>

                                <div className="single-widget recent-post">
                                    <NewsNbItem />
                                </div>

                                <div className="single-widget side-tags">
                                    <h3 className="title">Từ khóa tìm kiếm</h3>
                                    <ul className="tag">
                                        <li><a href="#">rang</a></li>
                                        <li><a href="#">thammirang</a></li>
                                        <li><a href="#">ganimplant</a></li>
                                        <li><a href="#">maccaitrongsuot</a></li>
                                        <li><a href="#">phhuchoirang</a></li>
                                        <li><a href="#">taytrangrangcaptoc</a></li>
                                        <li><a href="#">tramrang</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceDetail;
