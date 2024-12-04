import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    faAddressBook,
    faNotesMedical,
    faPhoneVolume,
    faRankingStar,
    faUserDoctor,
    faUsers,
    faClipboardList,
    faNewspaper 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '~/Assets/img/logo.png';
import './Sidebar.css';
import config from '~/Config';
import bg from '~/Assets/img/dental_clinic_bg.jpg';

function Sidebar() {
    const location = useLocation();
    const getActiveClass = (path) => {
        return location.pathname.startsWith(path) ? 'active' : '';
    };
    return (
        <div className="sidebar" data-background-color="dark">
            <img src={bg} alt="" className="sidebar-bg" />
            <div className="sidebar-layer"></div>
            <div className="sidebar-logo">
                <div className="logo-header bg-transparent">
                    <Link to={config.routes.dashbroad} className="logo">
                        <img src={logo} alt="navbar brand" className="navbar-brand" height="28" />
                    </Link>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right"></i>
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left"></i>
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt"></i>
                    </button>
                </div>
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                <i className="fas fa-home"></i>
                                <p>Dashboard</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="dashboard">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.dashbroad}`)}>
                                        <Link to={config.routes.dashbroad}>
                                            <span className="sub-item">Trang chủ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h"></i>
                            </span>
                            <h4 className="text-section">Hỗ trợ viên</h4>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#patient">
                                <FontAwesomeIcon icon={faAddressBook} />
                                <p>Bệnh nhân</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="patient">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.patient_list}`)}>
                                        <Link to={config.routes.patient_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#doctor">
                                <FontAwesomeIcon icon={faUserDoctor} />
                                <p>Bác sĩ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="doctor">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.add_doctor}`)}>
                                        <Link to={config.routes.add_doctor}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.doctor_list}`)}>
                                        <Link to={config.routes.doctor_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#service">
                                <FontAwesomeIcon icon={faNotesMedical} />
                                <p>Dịch vụ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="service">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.add_service}`)}>
                                        <Link to={config.routes.add_service}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.service_list}`)}>
                                        <Link to={config.routes.service_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#news">
                                <FontAwesomeIcon icon={faNewspaper} />
                                <p>Tin tức</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="news">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.add_news}`)}>
                                        <Link to={config.routes.add_news}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.news_list}`)}>
                                        <Link to={config.routes.news_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#register">
                                <FontAwesomeIcon icon={faClipboardList} />
                                <p>Danh sách đặt lịch</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="register">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.register_list}`)}>
                                        <Link to={config.routes.register_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#contact">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <p>Liên hệ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="contact">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.contact_list}`)}>
                                        <Link to={config.routes.contact_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h"></i>
                            </span>
                            <h4 className="text-section">Hệ thống</h4>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#user-list">
                                <FontAwesomeIcon icon={faUsers} />
                                <p>Tài khoản</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="user-list">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.user_add}`)}>
                                        <Link to={config.routes.user_add}>
                                            <span className="sub-item">Thêm mới</span>
                                        </Link>
                                    </li>
                                    <li className={getActiveClass(`${config.routes.user_list}`)}>
                                        <Link to={config.routes.user_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="collapse" href="#position-list">
                                <FontAwesomeIcon icon={faRankingStar} />
                                <p>Chức vụ</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="position-list">
                                <ul className="nav nav-collapse">
                                    <li className={getActiveClass(`${config.routes.position_list}`)}>
                                        <Link to={config.routes.position_list}>
                                            <span className="sub-item">Danh sách</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
