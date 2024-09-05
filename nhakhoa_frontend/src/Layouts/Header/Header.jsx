import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/Assets/img/logo.png';
import config from '~/Config';

function Header() {
    let [activeMenu, setActiveMenu] = useState(config.routes.home_1);

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
                                            <li>
                                                <Link to="#">Bác sĩ</Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Dịch vụ <i className="icofont-rounded-down"></i>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link to="404.html">Chỉnh nha mắc cài truyền thống</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="404.html">Nha khoa thẩm mĩ</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="404.html">Nhổ răng không</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="404.html">Nha khỏa trẻ em</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="404.html">Răng giả tháo lắp</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">Bảng giá</Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Tin tức <i className="icofont-rounded-down"></i>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link to="blog-single.html">Tin tức 1</Link>
                                                    </li>
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
                                    <Link to="appointment.html" className="btn">
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
