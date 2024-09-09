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
            <section class="blog section" id="blog">
			<div class="container">
				
				<div class="row">
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-news">
							<div class="news-head">
								<img src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg" alt="#"/>
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">22 Aug, 2020</div>
									<h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
					</div>
					
					    <div class="col-lg-4 col-md-6 col-12">
                        <Link to={config.routes.service_detail} onClick={() => {
                                                        }}>
    						<div class="single-news">
    							<div class="news-head">
    								<img src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg" alt="#"/>
    							</div>
    							<div class="news-body">
    								<div class="news-content">
    									<div class="date">15 Jul, 2020</div>
    									<h2><a href="blog-single.html">Chăm sóc răng miệng tổng quát</a></h2>
    									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
    								</div>
    							</div>
    						</div>
                        </Link>
    					</div>
                        
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-news">
							<div class="news-head">
								<img src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg" alt="#"/>
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">05 Jan, 2020</div>
									<h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default Services;
