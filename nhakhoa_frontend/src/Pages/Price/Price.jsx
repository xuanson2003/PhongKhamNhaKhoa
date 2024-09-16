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
								<h2>Bảng giá dịch vụ tại nha khoa Mediplus</h2>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYBAMAAABO02PvAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8adtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtENTI36AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAACkSURBVCiRY2AYNKBHALs44/sGLKLMDAys/y9ikbBPYGD/9hWLxPqDDDwX7mAx6e8TBv0J+QoYEtyfVzPEJ8hPgAuwuLg4MZi4uMQviFfoV+B6AuKquLg4MPD9//+L4f7///8U5BrOMDD/////B0P///8PGPihEt8ZOC//YACxwBIfGJihRjkwMP/+wgAyBWyUAbL9+7F5DwTqF+CQkEnAIUF3AACwtT7DE233HgAAAABJRU5ErkJggg==" alt="#"/>
								<p>Chúng tôi luôn mang đến sự hài lòng và tin tưởng cho khách hàng</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div class="col-lg-12">
							<div class="card">	
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped mb-0">
											<thead>
												<tr>
													<th className='text-center' style={{color:'#1a76d1'}}>Tên dịch vụ</th>
													<th className='text-center' style={{color:'#1a76d1'}}>Giá/ Chi phí</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Niềng răng thẩm mỹ</td>
													<td className='text-right'>199 999 000đ</td>
												</tr>
												<tr>
													<td>Chụp phim X-Quang(tại chỗ, Panaroma, Cephalo, 3D CBCT)	</td>
													<td className='text-right'>199 999 000đ - 499 999 000đ</td>
												</tr>
												<tr>
													<td>Chỉnh nha mắc bằng khay trong suốt Invisalisn</td>
													<td className='text-right'>1 999 999 000đ</td>
												</tr>
												<tr>
													<td>Nâng khớp cắn điều chỉnh mặt phẳng nhai bằng kỹ thuật số</td>
													<td className='text-right'>29 999 000đ - 199 999 000đ</td>
												</tr>
												<tr>
													<td>Bộ mắc cài kim loại/mắc cài sứ (gắn lại)</td>
													<td className='text-right'>599 999 000đ</td>
												</tr>
												
											</tbody>
										</table>
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

export default Price;
