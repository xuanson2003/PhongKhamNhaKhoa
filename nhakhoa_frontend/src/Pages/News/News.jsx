import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCircleInfo,
    faEye,
    faLocationDot,
    faMoneyCheckDollar,
    faNotesMedical,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faHandPointUp } from '@fortawesome/free-regular-svg-icons';

function ServiceDetail() {
    return (
        <>
            <BreadScrum
                title="danh sách tin tức"
                links={[
                    { title: 'trang chủ', href: config.routes.home },
                    { title: 'danh sách tin tức', href: config.routes.news },
                ]}
            />
            <section class="news-single section">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-12">
                        <div class="single-main" style={{padding:'30px 20px'}}>
						<div className="col-12 ">
                        <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads//rang-e-buot-co-chua-duoc-khong.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads//bien-phap-cai-thien-van-de-rang-mieng-e-buot-4.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/nieng-rang-khong-mac-cai-5-1.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads//rang-e-buot-co-chua-duoc-khong.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads//rang-e-buot-co-chua-duoc-khong.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="single-news mb-4">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '140px',
                                                                        objectFit: 'cover',
                                                                        borderRadius:'7px'
                                                                    }}
                                                                    src={
                                                                        'https://cloud.nhakhoadangluu.com.vn/wp-content/uploads//rang-e-buot-co-chua-duoc-khong.jpg.avif'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 ">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '18px' }}
                                                                    >
                                                                       Bệnh ê buốt răng có chữa hết được không?
                                                                    </a>
                                                                </h2>
                                                                <p className="text mt-1">
                                                                Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...
                                                                </p>
                                                                <p className="mt-1" style={{fontSize:'11px'}}>
                                                                <FontAwesomeIcon icon={faCalendarDays} /> 14/09/2024 <span style={{marginLeft:'4%'}}><FontAwesomeIcon icon={faEye} /> 2600</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                <div className="pagination text-center" style={{marginTop:'80px'}}>
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
					</div>
					<div class="col-lg-4 col-12">
						<div class="main-sidebar">
							<div class="single-widget search">
								<div class="form">
									<input type="email" placeholder="Tìm kiếm nhanh"/>
									<a class="button" href="#"><i class="fa fa-search"></i></a>
								</div>
							</div>
							
							<div class="single-widget category">
								<h3 class="title">Danh mục tin tức</h3>
								<ul class="categor-list">
									<li><a href="#">Chăm sóc răng miệng tổng quát</a></li>
									<li><a href="#">Niềng răng và chỉnh nha</a></li>
									<li><a href="#">Nha khoa thẩm mỹ</a></li>
									<li><a href="#">Cấy ghép Implant</a></li>
									<li><a href="#">Điều trị tủy và phục hình răng</a></li>
								</ul>
							</div>
							
							<div class="single-widget recent-post">
								<h3 class="title">Tin tức nổi bật</h3>
								<div class="single-post">
									<div class="image">
										<img src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Bọc răng sứ thẩm mỹ làm đẹp thời đại mới</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>12/11/2020</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>35</li>
										</ul>
									</div>
								</div>
								
								<div class="single-post">
									<div class="image">
										<img src="https://drhelen.com.au/wp-content/uploads/2018/12/Depositphotos_310525048_L.jpg.webp" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Top 5 địa điểm nên tới để niềng răng trong suốt Invisalign</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>05/11/2019</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>59</li>
										</ul>
									</div>
								</div>
								
								<div class="single-post">
									<div class="image">
										<img src="https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg" alt="#"/>
									</div>
									<div class="content">
										<h5><a href="#">Nha khoa thẩm mỹ giúp cải thiện vẻ ngoài của răng, từ tẩy trắng răng đến bọc răng sứ, mang lại nụ cười hoàn hảo.</a></h5>
										<ul class="comment">
											<li><i class="fa fa-calendar" aria-hidden="true"></i>08/09/2019</li>
											<li><i class="fa fa-commenting-o" aria-hidden="true"></i>44</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="single-widget side-tags">
								<h3 class="title">Từ khóa tìm kiếm</h3>
								<ul class="tag">
									<li><a href="#">rang</a></li>
									<li><a href="#">thammirang</a></li>
									<li><a href="#">ganimplant</a></li>
									<li><a href="#">maccaitrongsuot</a></li>
									<li><a href="#">phhuchoirang</a></li>
									<li><a href="#">taytrangrangcaptoc</a></li>
									<li><a href="#">tramrang</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default ServiceDetail;
