import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';

function ServiceDetail() {
    return (
        <>
            <BreadScrum
                title="chi tiết tin tức"
                links={[
                    { title: 'danh sách tin tức', href: config.routes.services },
                    { title: 'chi tiết tin tức', href: config.routes.service_detail },
                ]}
            />

<section class="news-single " style={{padding:'30px 30px'}}>
			<div class="container">
				<div class="row">
							<div class="col-12">
								<div class="single-main">
                                <h2 className='mb-3'>
                                    <a
                                        href="blog-single.html"
                                        style={{ color: '#1C77D1', fontSize: '33px' }}
                                    >
                                       Nha Khoa Kim hân hạnh đồng hành cùng trường Đại học Harvard trong dự án Field Global Immersion.  Nha khoa Quốc tế Việt Đức hoạt động và phát triển 15 năm.
                                    </a>
                                </h2>
                                <div class="meta" style={{padding:'2px 0px'}}>
										<div class="mt-2 mb-2 ml-1">
											<span class="author img-fluid"><a href="#"><img style={{height:'30px',width:'30px', borderRadius: '100%'}} src="https://sakuradental.vn/wp-content/uploads/2023/11/tay-trang-rang.jpg" alt="#"/>  Phạm Bảo Khang</a></span>
											<span class="date ml-5"><i class="fa fa-clock-o"></i>03/12/2019</span>
											<span class="views ml-5"><i class="fa fa-eye"></i>33,000 Lượt xem</span>
											<span class="views ml-5"><i class="fa fa-comments"></i>2,100 Lượt bình luận</span>
										</div>
									</div>
                                    <div class="news-text mt-4">
										<blockquote class="overlay">
											<p>Mỗi phòng khám thuộc hệ thống Nha Khoa Kim Nha Khoa Kim Nha Khoa Kim được Sở Y tế các tỉnh thành thẩm định tế các tỉnh các danh mục kỹ thuật khác nhau. Quý khách sẽ được tế các tỉnh thực hiện các dịch vụ theo đúng những danh mục kỹ thuật mà Sở Y tế cho phép. Những danh mục khác sẽ được thực hiện tại bệnh viện.</p>					
										</blockquote>
									</div>
                                   

                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Khi nói về tiệt trùng trong nha khoa, nếu chúng ta chỉ quan tâm có 1 cái lò hấp, một tủ tia cực tím, một máy rung siêu âm, một phòng riêng thì thật sự là thiếu sót rất nhiều. Tiệt khuẩn nha khoa không phải trang bị máy móc, quy trình chuẩn mà. Điều này cần nỗ lực của cả một tập thể và sức mạnh của hy sinh mới có thể làm được. Phòng tiệt khuẩn nha khoa trung tâm 1 chiều  Nha Khoa Kim đã và đang cố gắng làm điều đó tốt hơn.
                                    </p>
                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Nha khoa Quốc tế Việt Đức hoạt động và phát triển 15 năm, minh chứng cho chất lượng dịch vụ và tin tưởng khách hàng, Nha khoa Việt Đức đã thực hiện thành công hơn 20.000 trường hợp. Thương hiệu được bầu chọn “Top 10 Uy tín tại Việt Nam” và “Dịch vụ tốt cho gia đình và trẻ em”. Đặc biệt, điểm đến của các bác sĩ đầu ngành, chính trị gia, MC và người nổi tiếng. Khi bọc sứ tại Nha Khoa Quốc Tế Việt Đức, khách hàng sẽ được trải nghiệm khác biệt, Nha khoa Quốc tế Việt Đức hoạt động và phát triển 15 năm, minh chứng cho chất lượng dịch vụ và tin tưởng khách hàng, Nha khoa Việt Đức đã thực hiện thành công hơn 20.000 trường hợp. Thương hiệu được bầu chọn “Top 10 Uy tín tại Việt Nam” và “Dịch vụ tốt cho gia đình và trẻ em”. Đặc biệt, điểm đến của các bác sĩ đầu ngành, chính trị gia, MC và người nổi tiếng. Khi bọc sứ tại Nha Khoa Quốc Tế Việt Đức, khách hàng sẽ được trải nghiệm khác biệt.
                                    </p>
									<div class="news-head mt-4">
										<img className="" src="https://nhakhoakim.com/wp-content/uploads/2024/05/IMG_3707-scaled.jpg" alt="#"/>
									</div>
                                    <p className='mt-2 text-center' style={{  fontSize: '15px' }}>
                                    <i>Hệ thống làm sạch trước Cắm ghép Implant cho trường cần kiểm soát nhiễm khuẩn mức độ cao tại Nha Khoa Kim</i>
                                    </p>
                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1 chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ, vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test kiểm định cùng 8 bước khuẩn chuẩn.
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1 chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ, vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test kiểm định cùng 8 bước khuẩn chuẩn.
                                    </p>

                                    <div class="news-head mt-4">
										<img className="" src="https://nhakhoakim.com/wp-content/uploads/2024/03/z5206747137908_c15700b1ae497bb1e033d8b2f01b88a4-scaled.jpg" alt="#"/>
									</div>
                                    <p className='mt-2 text-center' style={{  fontSize: '15px' }}>
                                    <i>Hệ thống làm sạch trước Cắm ghép Implant cho trường cần kiểm soát nhiễm khuẩn mức độ cao tại Nha Khoa Kim</i>
                                    </p>
                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1 chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ, vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test kiểm định cùng 8 bước khuẩn chuẩn.
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1 chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ, vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test kiểm định cùng 8 bước khuẩn chuẩn.
                                    </p>
                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Gồm 8 bước:
                                 </p>
                                 <p className='mt-3' style={{  fontSize: '17px' }}>
                                 1. Kiểm tra và vệ sinh răng miệng
                                 </p>
                                 <p className='mt-3' style={{  fontSize: '17px' }}>
                                 2. Chụp ảnh màu răng ban đầu
                                 </p>
                                 <p className='mt-3' style={{  fontSize: '17px' }}>
                                 3. Bảo vệ nướu bằng đê cao su hoặc gel bảo vệ
                                 </p>
                                 <p className='mt-3' style={{  fontSize: '17px' }}>
                                 4. Áp dụng gel tẩy trắng lên bề mặt răng
                                 </p>
                                    <p className='mt-3' style={{  fontSize: '17px' }}>
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    Nha Khoa Kim cam kết có trang bị phòng thanh trùng trung tâm 1 chiều diện tích đủ rộng đảm bảo 4 vùng chuyên biệt (vùng dơ, vùng sạch, vùng tiệt khuẩn và vùng lưu trữ) với đầy đủ máy móc thiết bị hiện đại và cam kết xử lý dụng cụ đầy đủ với 4 test kiểm định cùng 8 bước khuẩn chuẩn.
                                    Tay khoan và các vật liệu bán thiết yếu thường bị bỏ qua không hấp, được dùng chung cho nhiều bệnh nhân bằng việc sát trùng bằng chất sát khuẩn hoặc ngâm trong dung dịch Cidex điều này chưa đảm bảo 100% an toàn tuyệt đối do các vi sinh vật, cũng như dịch tiết có thể nằm trong những ngõ ngách của tay khoan, kèm chỉnh nha. Chính vì thế Nha Khoa Kim quy định các vật liệu dụng cụ bán thiết yếu nhưng chịu được nhiệt chuyển qua hấp như dụng thiết yếu.
                                    </p>
									<div class="blog-bottom mt-4">
										<ul class="social-share">
											<li class="facebook"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
											<li class="twitter"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
											<li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
											<li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
											<li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
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
