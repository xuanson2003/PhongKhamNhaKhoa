import React from 'react';

function FunFact() {
    return (
        <div id="fun-facts" className="fun-facts section overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Start Single Fun */}
                        <div className="single-fun">
                            <i className="icofont icofont-home"></i>
                            <div className="content">
                                <span className="counter">156</span>
                                <p>Phòng Bệnh Viện</p>
                            </div>
                        </div>
                        {/* End Single Fun */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Start Single Fun */}
                        <div className="single-fun">
                            <i className="icofont icofont-user-alt-3"></i>
                            <div className="content">
                                <span className="counter">68</span>
                                <p>Bác Sĩ Chuyên Khoa</p>
                            </div>
                        </div>
                        {/* End Single Fun */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Start Single Fun */}
                        <div className="single-fun">
                            <i className="icofont-simple-smile"></i>
                            <div className="content">
                                <span className="counter">4379</span>
                                <p>Bệnh Nhân Hài Lòng</p>
                            </div>
                        </div>
                        {/* End Single Fun */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/* Start Single Fun */}
                        <div className="single-fun">
                            <i className="icofont icofont-table"></i>
                            <div className="content">
                                <span className="counter">32</span>
                                <p>Năm Kinh Nghiệm</p>
                            </div>
                        </div>
                        {/* End Single Fun */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunFact;
