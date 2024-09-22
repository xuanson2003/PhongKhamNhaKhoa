import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot, faMagnifyingGlass, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import config from '~/Config';

function DoctorList() {
    return (
        <>
            <BreadScrum
                title="danh sách bác sĩ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'danh sách bác sĩ ', href: config.routes.doctor_list },
                ]}
            />

            <section className="blog section" id="blog">
                <div className="container ">
                    <div className="single-news ">
                    <div className="news-body d-flex" style={{padding:'15px 20px'}}>
                    <select className="form-control w-25 " style={{height:'40px',borderColor:'white',borderBottomColor:'#2072C3',borderRadius:'0px'}} type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="o">Tất cả</option>
                                                        <option value="o">Theo tên</option>
                                                    </select>
                        <input style={{borderColor:'white',borderBottomColor:'#2072C3',borderRadius:'0px',height:'40px',marginLeft:'25px'}} type="text" className="form-control " placeholder="  Tìm kiếm tên bác sĩ"></input>
                        <div className="input-group-append " style={{marginLeft:'25px'}}>
                            <button className="btn btn-outline-secondary" style={{height:'40px'}} type="button" id="button-addon2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginBottom:'5px'}} />
                            </button>
                        </div>
                    </div>
                    </div>

                    <div className="row mt-4" >
                        <div className="col-xl-6 col-12 mb-4">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-4 mb-2">
                                            <img
                                                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                                                src={
                                                    'https://www.vinmec.com/static/uploads/small_bsi_chi_f6bd94b785.JPG'
                                                }
                                                alt="#"
                                            />
                                            <a href="" style={{ color: 'white' }} className="btn mt-2 w-100">
                                                Xem thêm
                                            </a>
                                        </div>
                                        <div className=" col-md-8">
                                            <h2>
                                                <a href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                    Bác sĩ Nguyễn Ngọc Quỳnh
                                                </a>
                                            </h2>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faUserGraduate} /> Thạc sĩ
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường
                                                1, Quận 10, TP. Hồ Chí Minh
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm cống hiến trong lĩnh
                                                vực răng sứ thẩm mỹ Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục
                                                hình tại Cuba Từng công tác tại Bệnh viện răng hàm mặt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>

                        <div className="col-xl-6 col-12 mb-4">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-4 mb-2">
                                            <img
                                                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                                                src={
                                                    'https://cdn.bookingcare.vn/fo/w384/2021/06/26/121702-bs-pham-thi-hong-hoa.jpg'
                                                }
                                                alt="#"
                                            />
                                            <a href="" style={{ color: 'white' }} className="btn mt-2 w-100">
                                                Xem thêm
                                            </a>
                                        </div>
                                        <div className=" col-md-8">
                                            <h2>
                                                <a href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                    Bác sĩ Nguyễn Ngọc Quỳnh
                                                </a>
                                            </h2>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faUserGraduate} /> Thạc sĩ
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường
                                                1, Quận 10, TP. Hồ Chí Minh
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm cống hiến trong lĩnh
                                                vực răng sứ thẩm mỹ Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục
                                                hình tại Cuba Từng công tác tại Bệnh viện răng hàm mặt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>

                        <div className="col-xl-6 col-12 mb-4">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-4 mb-2">
                                            <img
                                                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                                                src={'https://cdn.bookingcare.vn/fo/w384/2022/08/02/085824-bs-nhan.png'}
                                                alt="#"
                                            />
                                            <a href="" style={{ color: 'white' }} className="btn mt-2 w-100">
                                                Xem thêm
                                            </a>
                                        </div>
                                        <div className=" col-md-8">
                                            <h2>
                                                <a href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                    Bác sĩ Nguyễn Ngọc Quỳnh
                                                </a>
                                            </h2>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faUserGraduate} /> Thạc sĩ
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường
                                                1, Quận 10, TP. Hồ Chí Minh
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm cống hiến trong lĩnh
                                                vực răng sứ thẩm mỹ Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục
                                                hình tại Cuba Từng công tác tại Bệnh viện răng hàm mặt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>

                        <div className="col-xl-6 col-12 mb-4">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-4 mb-2">
                                            <img
                                                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                                                src={
                                                    'https://www.vinmec.com/static/uploads/small_bsi_chi_f6bd94b785.JPG'
                                                }
                                                alt="#"
                                            />
                                            <a href="" style={{ color: 'white' }} className="btn mt-2 w-100">
                                                Xem thêm
                                            </a>
                                        </div>
                                        <div className=" col-md-8">
                                            <h2>
                                                <a href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                    Bác sĩ Nguyễn Ngọc Quỳnh
                                                </a>
                                            </h2>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faUserGraduate} /> Thạc sĩ
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường
                                                1, Quận 10, TP. Hồ Chí Minh
                                            </p>
                                            <p className="text">
                                                <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm cống hiến trong lĩnh
                                                vực răng sứ thẩm mỹ Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục
                                                hình tại Cuba Từng công tác tại Bệnh viện răng hàm mặt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Blog */}
                        </div>
                    </div>
                    <div className="col-12">
                <div className="pagination">
                  <ul className="pagination-list">
                    <li>
                      <a href="#"><i className="icofont-rounded-left"></i></a>
                    </li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                      <a href="#"><i className="icofont-rounded-right"></i></a>
                    </li>
                  </ul>
                </div>
                </div>

                </div>
            </section>
        </>
    );
}

export default DoctorList;
