import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';

function ServiceDetail() {
    return (
        <>
            <BreadScrum
                title="chi tiết dịch vụ"
                links={[
                    { title: 'danh sách dịch vụ', href: config.routes.services },
                    { title: 'chi tiết dịch vụ', href: config.routes.service_detail },
                ]}
            />
            <section class="news-single section">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-12">
						<div class="row">
							<div class="col-12">
								<div class="single-main">
									<div class="news-head">
										<img className="" src="https://www.shutterstock.com/image-photo/portrait-young-doctor-teaching-on-600nw-2137161001.jpg" alt="#"/>
									</div>
									<h1 class="news-title"><a href="news-single.html">Hơn 80 thử nghiệm lâm sàng được triển khai để kiểm tra vi khuẩn trên răng.</a></h1>
									<div class="meta">
										<div class="meta-left">
											<span class="author img-fluid"><a href="#"><img src="https://watermark.lovepik.com/photo/20211210/large/lovepik-male-doctor-holding-teeth-model-picture_501789567.jpg" alt="#"/>Nguyễn Ngọc Cương</a></span>
											<span class="date"><i class="fa fa-clock-o"></i>03/12/2019</span>
										</div>
										<div class="meta-right">
											{/* <span class="comments"><a href="#"><i class="fa fa-comments"></i>05 Comments</a></span> */}
											<span class="views"><i class="fa fa-eye"></i>33 000 Lượt xem</span>
										</div>
									</div>
									<div class="news-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>
										<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod</p>
										<div class="image-gallery">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-12">
													<div class="single-image">
														<img src="img/blog2.jpg" alt="#"/>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-12">
													<div class="single-image">
														<img src="img/blog3.jpg" alt="#"/>
													</div>
												</div>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>
										<blockquote class="overlay">
											<p>Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales</p>					
										</blockquote>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse</p>
									</div>
									<div class="blog-bottom">
										<ul class="social-share">
											<li class="facebook"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
											<li class="twitter"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
											<li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
											<li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
											<li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
										</ul>
										<ul class="prev-next">
											<li class="prev"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
											<li class="next"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
										</ul>
									</div>
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
								<h3 class="title">Danh mục dịch vụ</h3>
								<ul class="categor-list">
									<li><a href="#">Chăm sóc răng miệng tổng quát</a></li>
									<li><a href="#">Niềng răng và chỉnh nha</a></li>
									<li><a href="#">Nha khoa thẩm mỹ</a></li>
									<li><a href="#">Cấy ghép Implant</a></li>
									<li><a href="#">Điều trị tủy và phục hình răng</a></li>
								</ul>
							</div>
							
							<div class="single-widget recent-post">
								<h3 class="title">Dịch vụ nổi bật</h3>
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
