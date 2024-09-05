import React from 'react';
import slider from '~/Assets/img/slider.jpg';
import slider2 from '~/Assets/img/slider2.jpg';
import slider3 from '~/Assets/img/slider3.jpg';

function HeroSlider() {
    return (
        <section className="slider">
            <div className="hero-slider">
                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider2})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Chúng Tôi Cung Cấp Dịch Vụ <span>Nha Khoa</span> Mà Bạn Có Thể{' '}
                                        <span>Tin Tưởng!</span>
                                    </h1>
                                    <p>
                                        Chúng tôi mang đến dịch vụ Nha Khoa chất lượng cao mà bạn có thể tin tưởng cho
                                        sức khỏe răng miệng của bạn.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Tìm Hiểu Thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}

                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Phòng Khám Nha Khoa <span>Uy Tín</span> Với Dịch Vụ <span>Chuyên Nghiệp</span>
                                    </h1>
                                    <p>
                                        Đội ngũ nha sĩ dày dạn kinh nghiệm và thiết bị tiên tiến, sẵn sàng đáp ứng mọi
                                        nhu cầu chăm sóc răng miệng.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Về Chúng Tôi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}

                {/* Bắt đầu Slider */}
                <div className="single-slider" style={{ backgroundImage: `url(${slider3})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text">
                                    <h1>
                                        Nâng Cao <span>Sức Khỏe Răng Miệng</span> Tại Phòng Khám Chúng Tôi
                                    </h1>
                                    <p>
                                        Dịch vụ nha khoa toàn diện với các giải pháp điều trị hiệu quả và phương pháp
                                        tiên tiến nhất cho sức khỏe răng miệng của bạn.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">
                                            Đặt Lịch Hẹn
                                        </a>
                                        <a href="#" className="btn primary">
                                            Liên Hệ Ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kết thúc Slider */}
            </div>
        </section>
    );
}

export default HeroSlider;
