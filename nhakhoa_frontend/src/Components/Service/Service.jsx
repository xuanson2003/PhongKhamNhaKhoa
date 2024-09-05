import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';

function Service() {
    return (
        <section className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Nha Khoa Để Bảo Vệ Sức Khỏe Răng Miệng Của Bạn</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Khám phá các dịch vụ chuyên nghiệp của chúng tôi để bảo vệ sức khỏe răng miệng và nâng
                                cao chất lượng cuộc sống.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-prescription"></i>
                            <h4>
                                <a href="service-details.html">Nha khoa tổng quát</a>
                            </h4>
                            <p>Sức khỏe răng miệng là tiền đề cho một cơ thể khỏe mạnh</p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont-screw-driver"></i>
                            <h4>
                                <a href="service-details.html">Cấy ghép Implant</a>
                            </h4>
                            <p>
                                Giải pháp phục hình chức năng thẩm mỹ và chức năng ăn nhai tối ưu cho người bị mất răng
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont-simple-smile"></i>
                            <h4>
                                <a href="service-details.html">Nha khoa thẩm mỹ</a>
                            </h4>
                            <p>
                                Mang đến cho bạn những nụ cười bạn mà luôn luôn mơ ước và tặng bạn sự tự tin mà bạn mong
                                muốn
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont-first-aid-alt"></i>
                            <h4>
                                <a href="service-details.html">Chỉnh nha không mắc cài Invisalign</a>
                            </h4>
                            <p>Giải pháp chỉnh nha thẩm mỹ cao cho một hàm răng đẹp và khỏe mạnh</p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont icofont-tooth"></i>
                            <h4>
                                <a href="service-details.html">Nhổ răng khôn</a>
                            </h4>
                            <p>
                                Tiểu phẫu an toàn, nhẹ nhàng với hệ thống máy móc hiện đại và đội ngũ bác sĩ tay nghề
                                cao
                            </p>
                        </div>
                        {/* End Single Service */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                            <i className="icofont-users-alt-3"></i>
                            <h4>
                                <a href="service-details.html">Nha khoa trẻ em</a>
                            </h4>
                            <p>Mang đến cho trẻ một hàm răng khỏe mạnh để nụ cười luôn rạng rỡ</p>
                        </div>
                        {/* End Single Service */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
