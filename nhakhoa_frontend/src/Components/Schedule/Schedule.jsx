import React from 'react';

function Schedule() {
    return (
        <section className="schedule">
            <div className="container">
                <div className="schedule-inner">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* single-schedule */}
                            <div className="single-schedule first">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="fa fa-ambulance"></i>
                                    </div>
                                    <div className="single-content">
                                        <h4>Trường Hợp Khẩn Cấp</h4>
                                        <p>
                                            Cung cấp dịch vụ khẩn cấp nhanh chóng và chuyên nghiệp để bảo vệ sức khỏe
                                            của bạn và gia đình.
                                        </p>
                                        <a href="#">
                                            TÌM HIỂU THÊM<i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* single-schedule */}
                            <div className="single-schedule middle">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icofont-prescription"></i>
                                    </div>
                                    <div className="single-content">
                                        <h4>Lịch Trình Bác Sĩ</h4>
                                        <p>
                                            Xem lịch làm việc của bác sĩ để sắp xếp thời gian khám hợp lý. Theo dõi giờ
                                            làm việc để không bỏ lỡ cuộc hẹn quan trọng.
                                        </p>
                                        <a href="#">
                                            TÌM HIỂU THÊM<i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            {/* single-schedule */}
                            <div className="single-schedule last">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icofont-ui-clock"></i>
                                    </div>
                                    <div className="single-content">
                                        <h4>Giờ Mở Cửa</h4>
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
                                        <a href="#">
                                            TÌM HIỂU THÊM<i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Schedule;
