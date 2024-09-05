import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';
import pf1 from '~/Assets/img/pf1.jpg';
import pf2 from '~/Assets/img/pf2.jpg';
import pf3 from '~/Assets/img/pf3.jpg';
import pf4 from '~/Assets/img/pf4.jpg';

function Doctor() {
    return (
        <section className="portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Danh Sách Các Bác Sĩ Của Chúng Tôi</h2>
                            <img src={sectionImg} alt="Ảnh mô tả" />
                            <p>
                                Khám phá đội ngũ bác sĩ chuyên nghiệp của chúng tôi. Xem thông tin và lịch trình làm
                                việc để chọn bác sĩ phù hợp với nhu cầu của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="owl-carousel portfolio-slider">
                            <div className="single-pf">
                                <img src={pf1} alt="Dự án 1" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf2} alt="Dự án 2" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf3} alt="Dự án 3" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf4} alt="Dự án 4" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf1} alt="Dự án 5" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf2} alt="Dự án 6" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf3} alt="Dự án 7" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                            <div className="single-pf">
                                <img src={pf4} alt="Dự án 8" />
                                <a href="portfolio-details.html" className="btn">
                                    Xem Chi Tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Doctor;
