import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCircleInfo,
    faEye,
    faLocationDot,
    faMagnifyingGlass,
    faMoneyCheckDollar,
    faNotesMedical,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import NewsItem from '~/Components/NewsItem/NewsItem';

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
            <section className="news-single " style={{marginTop:'-30px'}}>
                <div className="container">
                <div className="single-main " style={{padding:'15px 20px'}}>
                    <div className="news-body d-flex" >
                    <select className="form-control w-25 " style={{height:'40px',borderColor:'white',borderBottomColor:'#2072C3',borderRadius:'0px'}} type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="o">Tất cả</option>
                                                        <option value="o">Theo tên</option>
                                                    </select>
                        <input style={{borderColor:'white',borderBottomColor:'#2072C3',borderRadius:'0px',height:'40px',marginLeft:'25px'}} type="text" className="form-control " placeholder="  Tìm kiếm tin tức"></input>
                        <div className="input-group-append " style={{marginLeft:'25px'}}>
                            <button className="btn btn-outline-secondary" style={{height:'40px'}} type="button" id="button-addon2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginBottom:'5px'}} />
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="row" >
                        <div className="col-lg-8 col-12">
                            <div className="single-main" style={{ padding: '30px 20px' }}>
                                <div className="col-12 ">
                                <p className="mb-4">
                                            Hiển thị <span style={{color:"#3982CC"}}>40</span> trong số <span style={{color:"#3982CC"}}>40</span> kết quả
                                        </p>
                                    <NewsItem  data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt rshghgsggsggăng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <hr />  
                                    <NewsItem data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                    <div className="pagination text-center" style={{ marginTop: '80px' }}>
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
                                    <NewsItem isSm data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                   
                                    </div>

                                    <div class="single-post">
                                    <NewsItem isSm data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />
                                   
                                    </div>

                                    <div class="single-post">
                                    <NewsItem isSm data={{ image: "https://cloud.nhakhoadangluu.com.vn/wp-content/uploads/cao-voi-rang-3-1.jpg.avif", title: "Bệnh ê buốt răng có chữa hết được không?", description: 'Tôi bị ê buốt răng sau khi sinh em bé, bệnh đến nay cũng đã được hơn 1 năm rồi. Mẹ tôi bảo là do khi sinh ra, răng...', create_date: '14/09/2024', views: '5000000' }} />

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
