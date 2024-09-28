import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';

function ServiceDetail() {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    }

    const { id } = useParams(); 
    const [serviceDetail, setServiceDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [topService, setTopService] = useState([]);
    const [loadingTop, setLoadingTop] = useState(true);
    const [errorTop, setTopError] = useState(null);

    useEffect(() => {
        const fetchServiceDetail = async () => {
            try {
                const response = await fetch(`http://localhost:4000/get-service-detail/${id}`);
                if (!response.ok) {
                    throw new Error('Lỗi khi lấy dữ liệu dịch vụ');
                }
                const data = await response.json();
                setServiceDetail(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id]);

    useEffect(() => {
        const fetchTopServices = async () => {
            try {
                const response = await fetch('http://localhost:4000/get-top-latest-service');
                if (!response.ok) {
                    throw new Error('Lỗi khi lấy danh sách dịch vụ mới nhất');
                }
                const data = await response.json();
                setTopService(data.data);
            } catch (err) {
                setTopError(err.message);
            } finally {
                setLoadingTop(false);
            }
        };

        fetchTopServices();
    }, []);

    if (loading) return <p>Loading service details...</p>;
    if (error) return <p>Error: {error}</p>;

    if (loadingTop) return <p>Loading top services...</p>;
    if (errorTop) return <p>Error: {errorTop}</p>;

    return (
        <>
            <BreadScrum
                title="Chi tiết dịch vụ"
                links={[
                    { title: 'Danh sách dịch vụ', href: config.routes.services },
                    { title: 'Chi tiết dịch vụ', href: config.routes.service_detail },
                ]}
            />
            <section className="news-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-main">
                                        <div className="news-head">
                                            <img src={serviceDetail.avatar} alt={serviceDetail.name} />
                                        </div>
                                        <h1 className="news-title">
                                            <a href="news-single.html">{serviceDetail.name}</a>
                                        </h1>
                                        <div className="meta">
                                            <div className="meta-left">
                                                <span className="date">
                                                    <i className="fa fa-clock-o"></i>{formatDate(serviceDetail.created_at)}
                                                </span>
                                            </div>
                                            <div className="meta-right">
                                                <span className="views">
                                                    <i className="fa fa-eye"></i>33,000 Lượt xem
                                                </span>
                                            </div>
                                        </div>
                                        <div className="news-text">
                                            <p>{serviceDetail.content}</p>
                                            <blockquote className="overlay">
                                                <p>{serviceDetail.description}</p>
                                            </blockquote>
                                        </div>
                                        <div className="blog-bottom">
                                            <ul className="social-share">
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fa fa-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fa fa-twitter"></i>
                                                        <span>Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="google-plus">
                                                    <a href="#">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#">
                                                        <i className="fa fa-pinterest"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="prev-next">
                                                <li className="prev">
                                                    <a href="#">
                                                        <i className="fa fa-angle-double-left"></i>
                                                    </a>
                                                </li>
                                                <li className="next">
                                                    <a href="#">
                                                        <i className="fa fa-angle-double-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="main-sidebar">
                                <div className="single-widget search">
                                    <div className="form">
                                        <input type="text" placeholder="Tìm kiếm nhanh" />
                                        <a className="button" href="#">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="single-widget category">
                                    <h3 className="title">Danh mục dịch vụ</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">Chăm sóc răng miệng tổng quát</a></li>
                                        <li><a href="#">Niềng răng và chỉnh nha</a></li>
                                        <li><a href="#">Nha khoa thẩm mỹ</a></li>
                                        <li><a href="#">Cấy ghép Implant</a></li>
                                        <li><a href="#">Điều trị tủy và phục hình răng</a></li>
                                    </ul>
                                </div>

                                <div className="single-widget recent-post">
                                    <h3 className="title">Dịch vụ mới nhất</h3>
                                    {topService.length > 0 ? (
                                        topService.map((service) => (
                                            <div className="single-post" key={service.id}>
                                                <div className="image">
                                                    <img src={service.avatar} alt={service.name} />
                                                </div>
                                                <div className="content">
                                                    <h5>
                                                        <a href="#">{service.name}</a>
                                                    </h5>
                                                    <ul className="comment">
                                                        <li>
                                                            <i className="fa fa-calendar" aria-hidden="true"></i>{formatDate(service.created_at)}
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-commenting-o" aria-hidden="true"></i>35
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Không có dịch vụ mới nào.</p>
                                    )}
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
