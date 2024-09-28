import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container-fluid d-flex justify-content-between">
                <nav className="pull-left">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="http://www.themekita.com">
                                MediPlus
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                {' '}
                                Trợ giúp{' '}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                {' '}
                                Giấy phép{' '}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright">
                    2024, làm với <i className="fa fa-heart heart text-danger"></i> bởi
                    <a href="http://www.themekita.com"> Nhóm 8</a>
                </div>
                <div>
                    Truy cập
                    <Link target="_blank" href="https://themewagon.com/"> Mediplus</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
