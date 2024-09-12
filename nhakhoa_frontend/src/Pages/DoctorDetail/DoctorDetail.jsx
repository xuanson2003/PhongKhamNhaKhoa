import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCircleInfo,
    faLocationDot,
    faMoneyCheckDollar,
    faNotesMedical,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import config from '~/Config';

function DoctorDetail() {
    return (
        <>
            <BreadScrum
                title="Chi tiết bác sĩ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'chi tiết bác sĩ ', href: config.routes.doctor_detail },
                ]}
            />

      <section className="contact-us " data-stellar-background-ratio="0.5">
      <div className="">
      <div className="call-action  " style={{backgroundImage: `url('https://kimdesign.com.vn/upload/hinhanh/277770583_715134853232623_7587760752469643101_n(2).jpg')`}}>
                    <div className="inner">
                                <div className="contact-us-form row" style={{padding:'70px 90px'}}>
                                   
                                    <div className='col-lg-7'style={{padding:'30px 30px',backgroundColor:'white',borderRadius:'7px'}} >
                                    <h2>ĐĂNG KÝ KHÁM</h2>
                                    <p>Bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi.</p>
                                    <form className="form" method="post" action="mail/mail.php">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Họ Tên" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <select className="form-control" type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="1">Nam</option>
                                                        <option value="2">Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Số Điện Thoại"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Ngày sinh"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                           
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <select className="form-control" type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="o">Địa chỉ khám</option>
                                                        <option value="2">Ngõ 20 Hồ Tùng Mậu</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        name="subject"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <select className="form-control" type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="1">7:00 - 8:00</option>
                                                        <option value="2">8:00 - 9:00</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="form-group">
                                                    <select className="form-control" type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="1">Chọn bác sĩ</option>
                                                        <option value="2">Bác Sĩ Hoàng Nam</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Nội dung hẹn khám"
                                                        required=""
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                            
                                            <div class="  w-100"  style={{backgroundColor:'#D4EFFC',borderRadius:'5px'}}>
                                            <div className="contact-us-form mb-1" style={{padding: '25px 25px',}}>
                                                <h5 className="mb-2" href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                LƯU Ý
                                                </h5>
                                            <p className="text " style={{marginBottom: '5px'}}>
                                            Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám bệnh, khi điền thông tin anh/chị vui lòng:
                                            </p>
                                            <p className="text  ml-4" style={{marginBottom: '5px'}}>
                                            * Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú 
                                            </p>
                                            <p className="text  ml-4" style={{marginBottom: '5px'}}>
                                            * Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước khi ấn "Xác nhận"
                                            </p>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <div className="form-group login-btn">
                                                    <button className="btn" type="submit">
                                                        Gửi
                                                    </button>
                                                </div>
                                                <p className="text mt-4 " style={{marginBottom: '0px'}} >
                                            Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với <span style={{color:'#3780CB'}}>Điều khoản sử dụng</span> dịch vụ của chúng tôi !
                                            </p>
                                            </div>
                                            
                                            
                                            
                                        </div>
                                    </form>
                                
                                   </div>
                                   <div className='col-lg-5'>
                                   </div>
                                </div>
            </div>
            </div>
            </div>
        </section>




            <section className=" section" id="blog" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className=" row">
                                        <div className=" col-md-2 mb-2">
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '190px',
                                                    borderRadius: '7px',
                                                    objectFit: 'cover',
                                                }}
                                                src={
                                                    'https://cdn.bookingcare.vn/fo/w384/2021/06/26/121702-bs-pham-thi-hong-hoa.jpg'
                                                }
                                                alt="#"
                                            />
                                        </div>
                                        <div className=" col-md-10">
                                            <h2>
                                                <h5 href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                    Bác sĩ Nguyễn Ngọc Quỳnh
                                                </h5>
                                            </h2>
                                            <p className="text mt-2">
                                                <FontAwesomeIcon icon={faUserGraduate} /> Thạc sĩ
                                            </p>
                                            <p className="text mt-2">
                                                <FontAwesomeIcon icon={faNotesMedical} /> Chuyên khoa chỉnh sửa hàm
                                            </p>
                                            <p className="text mt-2">
                                                <FontAwesomeIcon icon={faCircleInfo} /> Bác sĩ có hơn 12 năm kinh nghiệm
                                                học tập và làm việc về lĩnh vực Nha khoa, Chữa tủy răng, Nhổ răng khôn,
                                                Chữa đau răng, Răng sâu, Chân răng có mủ, Niềng răng, Răng sứ thẩm mỹ,
                                                Trổng răng giả, Bác sĩ Răng Hàm Mặt từ Đại học Y Dược TP. HCM, Chuyên
                                                gia về: Nội nha, Niềng răng, Phục hình răng sứ, Nha khoa tổng quát
                                            </p>
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <div className="row mt-1">
                                        <div className="col-sm-8">
                                            <h6 href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                <FontAwesomeIcon icon={faCalendarDays} /> Đặt lịch khám
                                            </h6>
                                            <div className="row">
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    08:00 - 08:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    09:00 - 09:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    10:00 - 10:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    11:00 - 11:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    12:00 - 12:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    13:00 - 13:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    14:00 - 14:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    15:00 - 15:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    16:00 - 16:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    17:00 - 17:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    18:00 - 18:30
                                                </a>
                                                <a
                                                    href=""
                                                    style={{
                                                        color: 'white',
                                                        background: '#D8D8D8',
                                                        borderRadius: '4px',
                                                        lineHeight: 2.2,
                                                    }}
                                                    className=" col-md-2 ml-3 w-100 mt-3"
                                                >
                                                    19:00 - 19:30
                                                </a>
                                            </div>
                                            <p href="blog-single.html" className="text mt-3">
                                                Chọn{' '}
                                                <FontAwesomeIcon icon={faHandPointUp} style={{ color: '#1C77D1' }} /> và
                                                đặt (Phí đặt lịch 0đ)
                                            </p>
                                        </div>

                                        <div className="col-sm-4">
                                            <h6 href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                <FontAwesomeIcon icon={faLocationDot} /> Địa chỉ khám
                                            </h6>
                                            <p className="text mt-2">
                                                470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                                            </p>
                                            <p href="blog-single.html" className="text mt-2">
                                                <i class="icofont icofont-ui-call"></i> Số điện thoại :{' '}
                                                <span style={{ color: '#1C77D1' }}>
                                                    <a>0637736372</a>
                                                </span>
                                            </p>
                                            <p href="blog-single.html" className="text mt-2">
                                                <FontAwesomeIcon icon={faMoneyCheckDollar} /> Giá khám :{' '}
                                                <span style={{ color: '#1C77D1' }}>
                                                    <a>Xem chi tiết</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="mb-4">
                                        <h6 className="text mb-3">Bác sĩ Chuyên khoa I Trần Thị Mỹ Nga</h6>
                                        <p className="text mb-3 ml-4">
                                            <ul>
                                                <li>
                                                    * Bác sĩ có hơn 12 năm kinh nghiệm học tập và làm việc về lĩnh vực
                                                    Nha khoa, Chữa tủy răng, Nhổ răng khôn, Chữa đau răng, Răng sâu,
                                                    Chân răng có mủ, Niềng răng, Răng sứ thẩm mỹ, Trổng răng giả,...
                                                </li>
                                                <li>* Bác sĩ Răng Hàm Mặt từ Đại học Y Dược TP. HCM</li>
                                                <li>
                                                    * Chuyên gia về: Nội nha, Niềng răng, Phục hình răng sứ, Nha khoa
                                                    tổng quát
                                                </li>
                                            </ul>
                                        </p>

                                        <h6 className="text mb-3 ">Khám và điều trị</h6>
                                        <p className="text mb-3 ml-4">
                                            <ul>
                                                <li>
                                                    * Điều trị Nội nha: chữa đau răng, nhức răng, răng bị ê buốt, răng
                                                    vỡ lớn, khắc phục răng chữa tủy xong vẫn còn đau nhức,…
                                                </li>
                                                <li>
                                                    * Điều trị răng sâu, trám răng sâu, trám răng bị mẻ, vỡ, trám răng
                                                    cửa bị gãy, trám thẩm mỹ răng cửa bị thưa,...
                                                </li>
                                                <li>* Điều trị Nha chu, viêm nướu răng</li>
                                                <li>
                                                    * Tiểu phẫu nhổ răng khôn, răng hư, răng sâu nặng chỉ còn chân
                                                    răng,…
                                                </li>
                                                <li>
                                                    * Niềng răng chỉnh nha cho mọi trường hợp răng hô, móm, lệch lạc,
                                                    sai khớp cắn
                                                </li>
                                                <li>
                                                    * Nha khoa thẩm mỹ: Tẩy trắng răng, điều chỉnh cười hở lợi, Bọc răng
                                                    sứ thiết kế nụ cười, Phục hình răng,...
                                                </li>
                                            </ul>
                                        </p>

                                        <h6 className="text mb-3 ">Quá trình công tác</h6>
                                        <p className="text mb-3 ml-4">
                                            <ul>
                                                <li>* Chuyên gia về lĩnh vực niềng răng chỉnh nha</li>
                                                <li>* Chuyên gia Điều trị chuyên sâu về lĩnh vực Răng Hàm Mặt</li>
                                            </ul>
                                        </p>

                                        <h6 className="text mb-3 ">Quá trình đào tạo</h6>
                                        <p className="text mb-3 ml-4">
                                            <ul>
                                                <li>* Tốt nghiệp Chứng chỉ chỉnh nha (2022)</li>
                                                <li>* Tốt nghiệp BSCKI Nha khoa (2022)</li>
                                                <li>* Chứng chỉ hành nghề khám chữa bệnh do Sở Y tế cấp phép (2018)</li>
                                                <li>* Tốt nghiệp Bác sĩ Răng Hàm Mặt Đại học Y Dược TP. HCM (2011)</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <iframe
                                        width="1196"
                                        height="673"
                                        style={{ borderRadius: '10px' }}
                                        src="https://www.youtube.com/embed/QWenojhqjXw"
                                        title='VTV3 - TRÒ CHUYỆN CÙNG CHUYÊN GIA NHA KHOA QUỐC TẾ VIỆT PHÁP VỀ "NIỀNG RĂNG Ở TRẺ EM"?'
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5>
                                    BÁC SĨ KHÁC{' '}
                                    <span className="float-right mt-2" style={{ fontSize: '14px', color: '#1A76D1' }}>
                                        Xem thêm <FontAwesomeIcon icon={faAnglesRight} />
                                    </span>
                                    <hr
                                        style={{
                                            width: '125px',
                                            height: '4px',
                                            backgroundColor: '#1A76D1',
                                            marginTop: '5px',
                                        }}
                                    ></hr>
                                </h5>

                                <section className="contact-us " id="blog">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4 col-12 mb-4">
                                                {/* Single Blog */}
                                                <div className="single-news">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    src={
                                                                        'https://tse4.mm.bing.net/th?id=OIP.27lT64Vl8C2C4rHegZQs7QHaHa&pid=Api&P=0&h=180'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 mb-3 mt-1">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '16px' }}
                                                                    >
                                                                        Bác sĩ Nguyễn Ngọc Quỳnh
                                                                    </a>
                                                                </h2>
                                                                <p className="text">
                                                                    <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm
                                                                    cống hiến trong lĩnh vực răng sứ thẩm mỹ Từ tu
                                                                    nghiệp
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Single Blog */}
                                            </div>
                                            <div className="col-xl-4 col-12 mb-4">
                                                {/* Single Blog */}
                                                <div className="single-news">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    src={
                                                                        'https://nhakhoafamily.vn/wp-content/uploads/2022/11/bs-trang.jpg'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 mb-3 mt-1">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '16px' }}
                                                                    >
                                                                        Bác sĩ Nguyễn Ngọc Quỳnh
                                                                    </a>
                                                                </h2>
                                                                <p className="text">
                                                                    <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm
                                                                    cống hiến trong lĩnh vực răng sứ thẩm mỹ Từ tu
                                                                    nghiệp
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Single Blog */}
                                            </div>

                                            <div className="col-xl-4 col-12 mb-4">
                                                {/* Single Blog */}
                                                <div className="single-news">
                                                    <div className="inner ">
                                                        <div className=" row">
                                                            <div className=" col-md-4">
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    src={
                                                                        'https://cdn.bookingcare.vn/fo/w384/2022/08/02/085824-bs-nhan.png'
                                                                    }
                                                                    alt="#"
                                                                />
                                                            </div>
                                                            <div className=" col-md-8 mb-3 mt-1">
                                                                <h2>
                                                                    <a
                                                                        href="blog-single.html"
                                                                        style={{ color: '#1C77D1', fontSize: '16px' }}
                                                                    >
                                                                        Bác sĩ Nguyễn Ngọc Quỳnh
                                                                    </a>
                                                                </h2>
                                                                <p className="text">
                                                                    <FontAwesomeIcon icon={faCircleInfo} /> Hơn 10 năm
                                                                    cống hiến trong lĩnh vực răng sứ thẩm mỹ Từ tu
                                                                    nghiệp
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DoctorDetail;
