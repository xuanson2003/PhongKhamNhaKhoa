import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';

function Feautes() {
    return (
        <section className="Feautes section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng Tôi Luôn Sẵn Sàng Giúp Đỡ Bạn & Gia Đình Bạn</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn và gia đình với dịch vụ chăm sóc sức khỏe
                                tận tâm và chuyên nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-ambulance-cross"></i>
                            </div>
                            <h3>Dịch Vụ Nha Khoa Toàn Diện</h3>
                            <p>
                                Dịch vụ nha khoa chất lượng cao với đội ngũ nha sĩ giàu kinh nghiệm và trang thiết bị
                                hiện đại, sẵn sàng đáp ứng mọi nhu cầu chăm sóc răng miệng của bạn.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-medical-sign-alt"></i>
                            </div>
                            <h3>Nhà Thuốc Nha Khoa Đa Dạng</h3>
                            <p>
                                Nhà thuốc của chúng tôi cung cấp đa dạng các sản phẩm chăm sóc răng miệng chất lượng
                                cao, đáp ứng mọi nhu cầu nha khoa của bạn.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features last">
                            <div className="signle-icon">
                                <i className="icofont icofont-stethoscope"></i>
                            </div>
                            <h3>Chăm Sóc Sức Khỏe Răng Miệng Toàn Diện</h3>
                            <p>
                                Dịch vụ chăm sóc và điều trị nha khoa toàn diện với các chuyên gia nha khoa hàng đầu và
                                công nghệ tiên tiến để đảm bảo sức khỏe răng miệng tốt nhất cho bạn.
                            </p>
                        </div>
                        {/* End Single features */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feautes;
