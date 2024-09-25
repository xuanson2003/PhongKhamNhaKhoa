import sectionImg from '~/Assets/img/section-img.png';
import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';import NewsItem from '~/Components/NewsItem/NewsItem';
import request from '~/Utils/httpRequest';
import NewsHome from '../NewsItem/NewsHome';

function Blog() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Pagination state

    // Fetch the news data from the API
    useEffect(() => {
        request.get('get-top-3-news')
            .then(response => {
                if (response.data.success) {
                    setNewsData(response.data.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <section className="blog section" id="blog" style={{ backgroundColor: '#edf2ff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Theo dõi tin tức y tế mới nhất của chúng tôi.</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Cập nhật thông tin y tế mới nhất và các bài viết hữu ích từ chúng tôi. Đừng bỏ lỡ những
                                tin tức quan trọng.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {newsData.map((newsItem, index) => (
                        <React.Fragment key={newsItem.id}>
                            <NewsHome isSm
                                data={{
                                    id:newsItem.id,
                                    image: newsItem.avatar,
                                    name: newsItem.name,
                                    description: newsItem.description,
                                    create_date: new Date(newsItem.created_at).toLocaleDateString('vi-VN'),
                                }}
                            />
                            {index < newsData.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </>
            )}
                </div>
            </div>
        </section>
    );
}

export default Blog;
