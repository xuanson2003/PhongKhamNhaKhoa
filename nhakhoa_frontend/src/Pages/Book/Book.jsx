import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function DoctorDetail() {
    return (
        <>
      <section className="contact-us " data-stellar-background-ratio="0.5">
      <div className="">
      <div className="call-action  " style={{backgroundImage: `url('http://localhost:3000/static/media/bg_contact.f07ff5c58e5f575a0363.webp')`}}>
                    <div className="inner">
                                <div className="contact-us-form row" style={{padding:'70px 90px'}}>
                                   
                                    <div className='col-lg-7'style={{padding:'30px 30px',backgroundColor:'white',borderRadius:'14px'}} >
                                        <div style={{marginTop:'-65px'}} className=' text-center'>
                                    <FontAwesomeIcon icon={faPenToSquare}  style={{fontSize:'80px',color:'#1A76D1'}}/>
                                    </div>
                                    <h3 className='mt-4 mb-1 text-center' style={{color:'#1A76D1'}}>ĐẶT LỊCH KHÁM</h3>
                                    <p className=' text-center'>Bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi.</p>
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
                                                    <select className="form-control" style={{height:'50px'}} type="text" name="gt" placeholder="Giới tinh" required="">
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
                                                    <select className="form-control" style={{height:'50px'}} type="text" name="gt" placeholder="Giới tinh" required="">
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
                                                    <select className="form-control" style={{height:'50px'}} type="text" name="gt" placeholder="Giới tinh" required="">
                                                        <option value="1">7:00 - 8:00</option>
                                                        <option value="2">8:00 - 9:00</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="form-group">
                                                    <select className="form-control" style={{height:'50px'}} type="text" name="gt" placeholder="Giới tinh" required="">
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
                                                <h6 className="mb-2" href="blog-single.html" style={{ color: '#1C77D1' }}>
                                                LƯU Ý
                                                </h6>
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
        </>
    );
}

export default DoctorDetail;
