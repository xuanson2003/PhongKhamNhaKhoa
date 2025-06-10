import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/Assets/img/logo.png';
import config from '~/Config';

function Header() {
    let [activeMenu, setActiveMenu] = useState(config.routes.home_1);
    const [services, setServices] = useState([]); // State to store service data

    useEffect(() => {
        // Fetching services data from the API
        const fetchServices = async () => {
            const response = await fetch('http://localhost:4000/get-all-services-top');
            const data = await response.json();
            if (data.success) {
                setServices(data.data); // Save the data to state
            }
        };

        fetchServices();
    }, []);
    const [news, setNews] = useState([]); // Dữ liệu tin tức từ API

    useEffect(() => {
        // Lấy dữ liệu tin tức từ API
        const fetchNews = async () => {
            const response = await fetch('http://localhost:4000/get-top-3-news');
            const data = await response.json();
            if (data.success) {
                setNews(data.data); // Lưu dữ liệu vào state
            }
        };

        fetchNews();
    }, []);
    return (
        <header className="header">
            {/* Header Inner */}
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                {/* Start Logo */}
                                <div className="logo">
                                    <Link
                                        to={config.routes.home_1}
                                        onClick={() => {
                                            setActiveMenu(config.routes.home_1);
                                        }}
                                    >
                                        <img src={logo} alt="#" />
                                    </Link>
                                </div>
                                {/* Mobile Nav */}
                                <div className="mobile-nav"></div>
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                {/* Main Menu */}
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            <li className={activeMenu === config.routes.home_1 ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.home_1}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.home_1);
                                                    }}
                                                >
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li className={activeMenu === config.routes.doctor_list ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.doctor_list}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.doctor_list);
                                                    }}
                                                >
                                                    Bác sĩ
                                                </Link>
                                            </li>
                                            <li className={activeMenu === config.routes.services ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.services}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.services);
                                                    }}
                                                >
                                                    Dịch vụ <i className="icofont-rounded-down"></i>
                                                </Link>
                                                <ul className="dropdown">
                                                    {/* Render service items from API */}
                                                    {services.map((service, index) => (
                                                        <li key={index}>
                                                            <Link to={config.routes.service_detail.replace(':id', service.id)}>{service.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li className={activeMenu === config.routes.price ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.price}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.price);
                                                    }}
                                                >
                                                    Bảng giá
                                                </Link>
                                            </li>
                                            <li className={activeMenu === config.routes.price ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.news}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.news);
                                                    }}
                                                >
                                                    Tin tức <i className="icofont-rounded-down"></i>
                                                </Link>
                                                <ul className="dropdown">
                                                    {/* Render news items from API */}
                                                    {news.map((item) => (
                                                        <li key={item.id}>
                                                            <Link to={`/chi-tiet-tin-tuc/${item.id}`} >{item.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li className={activeMenu === config.routes.contact ? 'active' : ''}>
                                                <Link
                                                    to={config.routes.contact}
                                                    onClick={() => {
                                                        setActiveMenu(config.routes.contact);
                                                    }}
                                                >
                                                    Liên hệ
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className="get-quote">
                                    <Link
                                        to={config.routes.book}
                                        onClick={() => {
                                            setActiveMenu(config.routes.book);
                                        }}
                                        className="btn"
                                    >
                                        Đặt lịch khám
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
