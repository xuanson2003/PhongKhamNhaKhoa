import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <>
            <BreadScrum
                title="danh sách dịch vụ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'danh sách dịch vụ', href: config.routes.services },
                ]}
            />
            <section class="services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Nha Khoa Để Bảo Vệ Sức Khỏe Răng Miệng Của Bạn</h2>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYBAMAAABO02PvAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8adtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtENTI36AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAACkSURBVCiRY2AYNKBHALs44/sGLKLMDAys/y9ikbBPYGD/9hWLxPqDDDwX7mAx6e8TBv0J+QoYEtyfVzPEJ8hPgAuwuLg4MZi4uMQviFfoV+B6AuKquLg4MPD9//+L4f7///8U5BrOMDD/////B0P///8PGPihEt8ZOC//YACxwBIfGJihRjkwMP/+wgAyBWyUAbL9+7F5DwTqF+CQkEnAIUF3AACwtT7DE233HgAAAABJRU5ErkJggg=="
                                    alt="#"
                                />
                                <p>
                                    Khám phá các dịch vụ chuyên nghiệp của chúng tôi để bảo vệ sức khỏe răng miệng và
                                    nâng cao chất lượng cuộc sống.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service ">
                                <i class="icofont icofont-prescription"></i>
                                <h4>
                                    <a href="service-details.html">Nha khoa tổng quát</a>
                                </h4>
                                <p>Sức khỏe răng miệng là tiền đề cho một cơ thể khỏe mạnh</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont-screw-driver"></i>
                                <h4>
                                    <a href="service-details.html">Cấy ghép Implant</a>
                                </h4>
                                <p>
                                    Giải pháp phục hình chức năng thẩm mỹ và chức năng ăn nhai tối ưu cho người bị mất
                                    răng
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont-simple-smile"></i>
                                <h4>
                                    <a href="service-details.html">Nha khoa thẩm mỹ</a>
                                </h4>
                                <p>
                                    Mang đến cho bạn những nụ cười bạn mà luôn luôn mơ ước và tặng bạn sự tự tin mà bạn
                                    mong muốn
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
							<Link to={config.routes.service_detail} onClick={() => {}}>
								<div class="single-service ">
									<i class="icofont-first-aid-alt"></i>
									<h4>
										<a href="service-details.html">Chỉnh nha không mắc cài Invisalign</a>
									</h4>
									<p>Giải pháp chỉnh nha thẩm mỹ cao cho một hàm răng đẹp và khỏe mạnh</p>
								</div>
							</Link>	
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-tooth"></i>
                                <h4>
                                    <a href="service-details.html">Nhổ răng khôn</a>
                                </h4>
                                <p>
                                    Tiểu phẫu an toàn, nhẹ nhàng với hệ thống máy móc hiện đại và đội ngũ bác sĩ tay
                                    nghề cao
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont-users-alt-3"></i>
                                <h4>
                                    <a href="service-details.html">Nha khoa trẻ em</a>
                                </h4>
                                <p>Mang đến cho trẻ một hàm răng khỏe mạnh để nụ cười luôn rạng rỡ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section class="blog section" id="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-news">
                                <div class="news-head">
                                    <img
                                        src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div class="news-body">
                                    <div class="news-content">
                                        <div class="date">22 Aug, 2020</div>
                                        <h2>
                                            <a href="blog-single.html">We have annnocuced our new product.</a>
                                        </h2>
                                        <p class="text">
                                            Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt sed do incididunt sed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <Link to={config.routes.service_detail} onClick={() => {}}>
                                <div class="single-news">
                                    <div class="news-head">
                                        <img
                                            src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg"
                                            alt="#"
                                        />
                                    </div>
                                    <div class="news-body">
                                        <div class="news-content">
                                            <div class="date">15 Jul, 2020</div>
                                            <h2>
                                                <a href="blog-single.html">Chăm sóc răng miệng tổng quát</a>
                                            </h2>
                                            <p class="text">
                                                Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt sed do incididunt sed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-news">
                                <div class="news-head">
                                    <img
                                        src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg"
                                        alt="#"
                                    />
                                </div>
                                <div class="news-body">
                                    <div class="news-content">
                                        <div class="date">05 Jan, 2020</div>
                                        <h2>
                                            <a href="blog-single.html">We provide highly business soliutions.</a>
                                        </h2>
                                        <p class="text">
                                            Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt sed do incididunt sed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Services;
