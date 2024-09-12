import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { Link } from 'react-router-dom';


function Price() {
    return (
        <>
            <BreadScrum
                title="bảng giá"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'bảng giá', href: config.routes.price },
                ]}
            />
            <section class="pricing-table section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Chúng tôi mang lại sự tin tưởng cho khách hàng</h2>
							{/* <img src="img/section-img.png" alt="#"/> */}
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									<i class="icofont icofont-ui-cut"></i>
								</div>
								<h4 class="title">Niềng răng sứ</h4>
								<div class="price">
									<p class="amount">1 199 000đ<span>/ Gói</span></p>
								</div>	
							</div>
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Niềng thẩm mỹ</li>
								<li><i class="icofont icofont-ui-check"></i>Bảo hành vàng 12 tháng</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Chăm sóc định kỳ tại nhà</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Nha sĩ tư vấn hỗ trợ</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Hỗ trợ dung dịch vệ sinh răng miệng</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Đặt ngay</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									<i class="icofont icofont-tooth"></i>
								</div>
								<h4 class="title">Cấy ghép Implant</h4>
								<div class="price">
									<p class="amount">19 999 000<span>/ Gói</span></p>
								</div>	
							</div>
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Đặt ngay</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									<i class="icofont-heart-beat"></i>
								</div>
								<h4 class="title">Vệ sinh răng miệng</h4>
								<div class="price">
									<p class="amount">399 000đ<span>/ Gói</span></p>
								</div>	
							</div>
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li><i class="icofont icofont-ui-check"></i>Donec ultricies metus</li>
								<li><i class="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Đặt ngay</a>
							</div>
						</div>
					</div>
				</div>	
			</div>	
		    </section>
        </>
    );
}

export default Price;
