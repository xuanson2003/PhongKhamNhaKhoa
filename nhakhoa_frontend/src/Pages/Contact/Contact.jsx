import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import bgContact from '~/Assets/img/bg_contact.webp';

function Contact() {
    return (
        <>
            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Liên Hệ Với Chúng Tôi</h2>
                                <BreadScrum data={['Trang chủ', 'Liên hệ']} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-us-left">
                                    <img
                                        src={bgContact}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-us-form">
                                    <h2>Liên Hệ Với Chúng Tôi</h2>
                                    <p>Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi.</p>
                                    <form className="form" method="post" action="mail/mail.php">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Họ Tên" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Số Điện Thoại"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Chủ Đề"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Tin Nhắn Của Bạn"
                                                        required=""
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group login-btn">
                                                    <button className="btn" type="submit">
                                                        Gửi
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont icofont-ui-call"></i>
                                    <div className="content">
                                        <h3>+(000) 1234 56789</h3>
                                        <p>info@company.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont-google-map"></i>
                                    <div className="content">
                                        <h3>Tầng 3, tòa nhà 125 Hoàng Ngân</h3>
                                        <p>Cầu Giấy, Hà Nội</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="single-info">
                                    <i className="icofont icofont-wall-clock"></i>
                                    <div className="content">
                                        <h3>Thứ Hai - Thứ Bảy: 8:00 - 17:00</h3>
                                        <p>Chủ Nhật Đóng Cửa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
