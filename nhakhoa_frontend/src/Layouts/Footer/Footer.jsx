import React from 'react';

function Footer(props) {
    return (
        <footer id="footer" className="footer">
            {/* Phần trên của chân trang */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Về Chúng Tôi</h2>
                                <p>Phòng Khám Nha Khoa Chuyên Nghiệp - Nụ Cười Của Bạn Là Sứ Mệnh Của Chúng Tôi</p>
                                {/* Mạng xã hội */}
                                <ul className="social">
                                    <li>
                                        <a href="#">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-vimeo"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                                {/* Kết thúc Mạng xã hội */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h2>Liên Kết Nhanh</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Trang chủ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Về Chúng Tôi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Dịch Vụ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Các Vụ Việc Của Chúng Tôi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Liên Kết Khác
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Tư Vấn
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Tài Chính
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Khách Hàng Nói Gì
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Câu Hỏi Thường Gặp
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                    Liên Hệ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Giờ Mở Cửa</h2>
                                <p>Giờ Làm Việc: Chúng Tôi Luôn Sẵn Sàng Chăm Sóc Sức Khỏe Răng Miệng Của Bạn</p>
                                <ul className="time-sidual">
                                    <li className="day">
                                        Thứ Hai - Thứ Sáu <span>8.00-20.00</span>
                                    </li>
                                    <li className="day">
                                        Thứ Bảy <span>9.00-18.30</span>
                                    </li>
                                    <li className="day">
                                        Thứ Hai - Thứ Năm <span>9.00-15.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Bản Tin</h2>
                                <p>Đăng ký nhận bản tin của chúng tôi để nhận tất cả tin tức trong hộp thư của bạn.</p>
                                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                    <input
                                        name="email"
                                        placeholder="Địa chỉ Email"
                                        className="common-input"
                                        onFocus={(e) => (e.target.placeholder = '')}
                                        onBlur={(e) => (e.target.placeholder = 'Địa chỉ email của bạn')}
                                        required
                                        type="email"
                                    />
                                    <button className="button">
                                        <i className="icofont icofont-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ Kết thúc Phần trên của chân trang */}
            {/* Bản quyền */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="copyright-content">
                                <p>
                                    © Bản quyền 2018 | Đã đăng ký bản quyền bởi{' '}
                                    <a href="https://www.wpthemesgrid.com" target="_blank" rel="noopener noreferrer">
                                        wpthemesgrid.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ Kết thúc Bản quyền */}
        </footer>
    );
}

export default Footer;
