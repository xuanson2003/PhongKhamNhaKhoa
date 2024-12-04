import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCircleInfo,
    faLocationDot,
    faMoneyCheckDollar,
    faNotesMedical,
    faPhone,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import config from '~/Config';
import request from '~/Utils/httpRequest';
import DoctorTime from '~/Components/DoctorItem/DoctorTime';
import axios from 'axios';

function DoctorDetail() {
    const { id } = useParams();
    const [doctorDetail, setDoctorDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [doctorData, setDoctorData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(''); // State for the selected date
    const [availabilityLoading, setAvailabilityLoading] = useState(false); // Loading state for availability

    // Fetch doctor detail
    useEffect(() => {
        const fetchDoctorDetail = async () => {
            try {
                const response = await request.get(`get-doctor-by-id/${id}`);
                if (response.data.success) {
                    setDoctorDetail(response.data.data);
                } else {
                    setError('Doctor not found');
                }
            } catch (err) {
                console.error('Error fetching doctor detail:', err);
                setError('Failed to fetch doctor detail');
            } finally {
                setLoading(false);
            }
        };

        fetchDoctorDetail();
    }, [id]);

    // Set today's date when doctor details are fetched
    useEffect(() => {
        if (doctorDetail) {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0]; // yyyy-mm-dd format
            setSelectedDate(formattedDate); // Set the state to today's date
        }
    }, [doctorDetail]);

    // Fetch doctor availability based on selected date
    useEffect(() => {
        const getDoctorByTime = async () => {
            if (!selectedDate) return; // Skip if no date selected
    
            setAvailabilityLoading(true); // Set loading for availability
            try {
                const response = await request.post(`/get-doctor-by-time/${id}`, {
                    time: selectedDate, // Send the date in ISO format
                });

                if (response.data.success) {
                    setDoctorData(response.data.data);
                } else {
                    setError('No available slots for the selected date');
                }
            } catch (error) {
                console.error('Error fetching doctor availability:', error);
            } finally {
                setAvailabilityLoading(false); // Reset loading state
            }
        };

        getDoctorByTime();
    }, [id, selectedDate]);

    if (loading) return <p>Loading doctor details...</p>;
    if (error) return <p>{error}</p>;
    if (!doctorDetail) return <p>No doctor detail available.</p>;

    return (
        <>
            <BreadScrum
                title="Chi tiết bác sĩ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'chi tiết bác sĩ', href: config.routes.doctor_detail },
                ]}
            />
          


            <section className="section" id="blog" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Single Blog */}
                            <div className="single-news">
                                <div className="news-body news-content">
                                    <div className="row">
                                        <div className="col-md-2 mb-2">
                                            <img
                                                style={{
                                                    width: '150px',
                                                    height: '150px',
                                                    borderRadius: "50%",
                                                    objectFit: 'cover',
                                                  
                                                }}
                                                src={doctorDetail.image}
                                                alt={doctorDetail.name}
                                            />
                                        </div>
                                        <div className="col-md-10 mt-3">
                                            <h4 style={{ color: '#1C77D1' }}>{doctorDetail.name}</h4>
                                            <p className="text mt-2">
                                                <FontAwesomeIcon icon={faNotesMedical} /> Chuyên khoa chỉnh sửa hàm
                                            </p>
                                            <p className="text mt-2">
                                                <FontAwesomeIcon icon={faCircleInfo} /> {doctorDetail.description}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row mb-4">
                                        <div className="mb-4 col-md-8">
                                        <div className="mb-2" style={{backgroundColor:'#E6F0FF',padding:'0px 20px',borderRadius:'8px'}}>
                                    <div class="tab-content">
                                        <h2 className='mb-3'>Thông tin chung</h2>
                                        <p className='mb-1'><b>Địa chỉ khám:</b> {doctorDetail.clinic_name}</p>
                                        <p className='mb-1'><b>Số điện thoại:</b> <a href={`tel:${doctorDetail.phone}`}>{doctorDetail.phone}</a></p>
                                        <p><b>Giá khám:</b> <a href="#">Xem chi tiết</a></p>
                                    </div>
                                    </div>
                                    <div class="tabs">
                                        <div class="tab active">Thông tin cơ bản</div>
                                        <div class="tab">Đánh giá (19)</div>
                                    </div>
                                    <div class="tab-content">
                                        <h2 className='mb-2'>Thông tin chung</h2>
                                    </div>
                                    <div  dangerouslySetInnerHTML={{ __html: doctorDetail.content }} />

                                    </div>
                                    <div className="col-md-4" style={{height:"100%"}}>
                                    <div className="container-dt" style={{backgroundColor:'#E6F0FF'}}>
                                            <div className="header-dt">
                                                <h1 className="mb-2">Đặt lịch hẹn</h1>
                                                <p className="text">{doctorDetail.clinic_name}</p>
                                            </div>
                                            <div className="content-dt"  style={{backgroundColor:'white',borderRadius:'8px'}}>
                                                <h2>Tư vấn trực tiếp</h2>
                                               
                                                 <input
                                                    className="w-100 mb-1"
                                                    type="date"
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)} // Use the value directly
                                                />
                                               
                                                <div className="row" style={{padding:'0 15px'}}>
                                            {availabilityLoading ? (
                                                <p>Loading availability...</p>
                                            ) : doctorData.length === 0 ? (
                                                // If no slots are available, show the message with the SVG icon
                                                <div style={{textAlign:"center",padding:"0 40px"}}>
                                            <div className="mb-3 mt-3" style={{maxWidth: "80px",margin: "0 auto"}}>
                                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 59"><path d="M73.988 48.95c-.68.12-4.193 2.128-4.762 2.42v-.001c-.007.004-.017.008-.024.014l-.067.034c-3.394 1.858-4.954 1.51-6.289.88C59.242 50.6 54.988 36.98 49.15 38.394c-2.475.601-2.351 7.724-3.903 9.384l.003-.008c-.01.014-.023.025-.033.04-.223.24-.44.484-.645.736-3.036 3.04-6.061-.922-6.93-1.822-.063-.07-.13-.635-.194-.704-.035-.04-.053-.064-.053-.064v.004c-3.804-4.113-12.527-8.438-18.36-7.415-10.026 1.761-11.39 19.36-11.39 19.36h74.901c-1.17-4.125-2.958-9.937-8.557-8.955z" fill="#BCDEFF"></path><path d="M21.158 55.422c0 1.18.98 2.135 2.19 2.135h43.378c1.207 0 2.19-.955 2.19-2.135V17.25H21.157v38.172z" fill="#100C25"></path><path d="M66.727 5.161H23.349c-1.21 0-2.19.955-2.19 2.135v9.972h47.755V7.296c0-1.18-.98-2.135-2.187-2.135z" fill="#100C25"></path><path d="M17.722 55.422c0 1.18.98 2.135 2.19 2.135H63.29c1.21 0 2.189-.955 2.189-2.135V17.25H17.722v38.172z" fill="#fff"></path><path d="M63.29 5.146H19.91c-1.21 0-2.189.955-2.189 2.134v9.973h47.755V7.28c.002-1.18-.978-2.134-2.187-2.134z" fill="#2D87F3"></path><path d="M30.968 13.946c1.387 0 2.512-1.096 2.512-2.45 0-1.353-1.124-2.45-2.512-2.45s-2.513 1.098-2.513 2.45c0 1.354 1.125 2.45 2.513 2.45z" fill="#100C25"></path><path d="M30.454 10.18c-.723 0-1.307-.57-1.307-1.275V3.578c0-.615.427-1.183 1.046-1.299.834-.157 1.568.464 1.568 1.25v1.616h2.213V3.65c0-1.825-1.41-3.422-3.278-3.543-2.05-.133-3.76 1.453-3.76 3.424v5.266c0 1.79 1.358 3.362 3.187 3.527.195.017.387.019.576.007 1.393-.093 1.278-2.147-.119-2.147h-.126v-.004z" fill="#fff"></path><path d="M51.018 13.941c1.388 0 2.513-1.096 2.513-2.45 0-1.352-1.125-2.45-2.513-2.45-1.387 0-2.512 1.098-2.512 2.45 0 1.354 1.125 2.45 2.512 2.45z" fill="#100C25"></path><path d="M50.485 10.18c-.723 0-1.307-.57-1.307-1.275V3.578c0-.615.427-1.183 1.046-1.299.834-.157 1.568.464 1.568 1.25v1.616h2.213V3.65c0-1.825-1.41-3.422-3.279-3.543-2.049-.133-3.759 1.453-3.759 3.424v5.266c0 1.79 1.358 3.361 3.187 3.527.195.017.387.019.576.007 1.393-.093 1.278-2.147-.118-2.147h-.127v-.004z" fill="#fff"></path><path d="M29.296 23.073h-3.143a2 2 0 00-2 2v2.964a2 2 0 002 2h3.143a2 2 0 002-2v-2.964a2 2 0 00-2-2zm0 10.255h-3.142a2 2 0 00-2 2v2.964a2 2 0 002 2h3.142a2 2 0 002-2v-2.964a2 2 0 00-2-2zm0 10.25h-3.142a2 2 0 00-2 2v2.964a2 2 0 002 2h3.142a2 2 0 002-2v-2.964a2 2 0 00-2-2z" fill="#BCDEFF"></path><path d="M41.42 23.073h-3.143a2 2 0 00-2 2v2.964a2 2 0 002 2h3.143a2 2 0 002-2v-2.964a2 2 0 00-2-2z" fill="#2D87F3"></path><path d="M41.421 33.328h-3.143a2 2 0 00-2 2v2.964a2 2 0 002 2h3.143a2 2 0 002-2v-2.964a2 2 0 00-2-2zm0 10.25h-3.143a2 2 0 00-2 2v2.964a2 2 0 002 2h3.143a2 2 0 002-2v-2.964a2 2 0 00-2-2z" fill="#BCDEFF"></path><path d="M53.523 23.073H50.38a2 2 0 00-2 2v2.964a2 2 0 002 2h3.143a2 2 0 002-2v-2.964a2 2 0 00-2-2zm0 10.255h-3.142a2 2 0 00-2 2v2.964a2 2 0 002 2h3.142a2 2 0 002-2v-2.964a2 2 0 00-2-2z" fill="#2D87F3"></path><path d="M53.523 43.578h-3.142a2 2 0 00-2 2v2.964a2 2 0 002 2h3.142a2 2 0 002-2v-2.964a2 2 0 00-2-2z" fill="#BCDEFF"></path><path d="M86.242 57.906H1.318" stroke="#100C25" stroke-width="1.55" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                   
                                                </div>
                                                <div>
                                                Không có lịch làm việc vào ngày đang chọn !
                                                    </div>
                                                    </div>
                                            ) :
                                            
                                            (
                                                doctorData.map((newsItem) => (
                                                    <DoctorTime
                                                        key={newsItem.id}
                                                        data={{
                                                            id: newsItem.id,
                                                            start_time: newsItem.start_time,
                                                            end_time: newsItem.end_time,
                                                        }}
                                                    />
                                                ))
                                            )}
                                            
                                            </div>
                                           

                                               
                                                <p className="text mt-3">
                                                Chọn{' '}
                                                <FontAwesomeIcon icon={faHandPointUp} style={{ color: '#1C77D1' }} /> và
                                                đặt (Phí đặt lịch 0đ)
                                            </p>
                              </div>
                              
                                   </div>
                                   <div className="mt-4" style={{backgroundColor:'#E6F0FF', padding:'20px 20px', borderRadius:'8px' }}>
                                   <img
                        style={{
                            width: '100%',  // Ensure width and height are equal for circular shape
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '8px',  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto',
                        }}
                        src={'https://cdn.hellobacsi.com/wp-content/uploads/2024/08/536x750-465x650.jpg'}
                        alt="#"
                    />
                    </div>
                                   </div>
                                   
                                    </div>
                                    <div class="tab-content">
                                        <h2 className='mb-2'>Video</h2>
                                    </div>
                                    <iframe
                                        width="1196"
                                        height="673"
                                        style={{ borderRadius: '10px' }}
                                        src="https://www.youtube.com/embed/QWenojhqjXw"
                                        title='VTV3 - TRÒ CHUYỆN CÙNG CHUYÊN GIA NHA KHOA QUỐC TẾ VIỆT PHÁP VỀ "NIỀNG RĂNG Ở TRẺ EM"?'
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5>
                                    Bác sĩ khác{' '}
                                    <span className="float-right mt-2" style={{ fontSize: '14px', color: '#1A76D1' }}>
                                        Xem thêm <FontAwesomeIcon icon={faAnglesRight} />
                                    </span>
                                    <hr
                                        style={{
                                            width: '110px',
                                            height: '2px',
                                            backgroundColor: '#1A76D1',
                                            marginTop: '5px',
                                        }}
                                    />
                                </h5>
                                <section className="contact-us" id="blog">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-xl-3 col-12 mb-4">
                  <div className="card">
                  <img
                        style={{
                            width: '100px',  // Ensure width and height are equal for circular shape
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: "50%",  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto'  // Centers the image horizontally
                        }}
                        src={'https://cdn.tuoitre.vn/471584752817336320/2023/8/22/base64-16926865949291871270139.png'}
                        alt="#"
                    />
                        <h2 style={{height:'40px'}} className="mt-3">
                        Bác sĩ Nguyễn Ngọc Quỳnh Anh
                            </h2>
                            <div className="location" style={{textAlign:'start',fontSize:'12px'}}>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                                </p>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faPhone} /> 0384849458
                                </p>
                               
                                
                            </div>
                           
                            </div>
                        </div>
                        <div className="col-xl-3 col-12 mb-4">
                  <div className="card">
                  <img
                        style={{
                            width: '100px',  // Ensure width and height are equal for circular shape
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: "50%",  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto'  // Centers the image horizontally
                        }}
                        src={'https://cdn.tuoitre.vn/471584752817336320/2023/8/22/base64-16926865949291871270139.png'}
                        alt="#"
                    />
                        <h2 style={{height:'40px'}} className="mt-3">
                        Bác sĩ Nguyễn Ngọc Quỳnh Anh
                            </h2>
                            <div className="location" style={{textAlign:'start',fontSize:'12px'}}>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                                </p>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faPhone} /> 0384849458
                                </p>
                               
                                
                            </div>
                           
                            </div>
                        </div>
                        <div className="col-xl-3 col-12 mb-4">
                  <div className="card">
                  <img
                        style={{
                            width: '100px',  // Ensure width and height are equal for circular shape
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: "50%",  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto'  // Centers the image horizontally
                        }}
                        src={'https://cdn.tuoitre.vn/471584752817336320/2023/8/22/base64-16926865949291871270139.png'}
                        alt="#"
                    />
                        <h2 style={{height:'40px'}} className="mt-3">
                        Bác sĩ Nguyễn Ngọc Quỳnh Anh
                            </h2>
                            <div className="location" style={{textAlign:'start',fontSize:'12px'}}>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                                </p>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faPhone} /> 0384849458
                                </p>
                               
                                
                            </div>
                           
                            </div>
                        </div>
                        <div className="col-xl-3 col-12 mb-4">
                  <div className="card">
                  <img
                        style={{
                            width: '100px',  // Ensure width and height are equal for circular shape
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: "50%",  // Make the image circular
                            display: 'block',  // Ensures the image behaves as a block element
                            margin: '0 auto'  // Centers the image horizontally
                        }}
                        src={'https://cdn.tuoitre.vn/471584752817336320/2023/8/22/base64-16926865949291871270139.png'}
                        alt="#"
                    />
                        <h2 style={{height:'40px'}} className="mt-3">
                        Bác sĩ Nguyễn Ngọc Quỳnh Anh
                            </h2>
                            <div className="location" style={{textAlign:'start',fontSize:'12px'}}>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faLocationDot} /> 470 - 472 Lê Hồng Phong, Phường 1, Quận 10, TP. Hồ Chí Minh
                                </p>
                                <p style={{fontSize:'12px'}}>
                                <i className="fas fa-map-marker-alt">
                                </i>
                                <FontAwesomeIcon icon={faPhone} /> 0384849458
                                </p>
                               
                                
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
