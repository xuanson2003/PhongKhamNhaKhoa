import React from 'react';

function CallAction() {
    return (
        <section className="call-action overlay" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="content">
                            <h2>Bạn có cần chăm sóc y tế khẩn cấp? Gọi ngay: 1234 56789</h2>
                            <p>
                                Đội ngũ y tế của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, với dịch vụ chăm sóc chuyên
                                nghiệp và tận tâm.
                            </p>
                            <div className="button">
                                <a href="#" className="btn">
                                    Liên hệ ngay
                                </a>
                                <a href="#" className="btn second">
                                    Tìm hiểu thêm<i className="fa fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallAction;
