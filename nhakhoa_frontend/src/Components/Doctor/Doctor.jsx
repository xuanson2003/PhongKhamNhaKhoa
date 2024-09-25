import sectionImg from '~/Assets/img/section-img.png';
import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';import NewsItem from '~/Components/NewsItem/NewsItem';
import request from '~/Utils/httpRequest';
import NewsHome from '../NewsItem/NewsHome';
import DoctorHome from '../DoctorItem/DoctorHome';

function Doctor() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the news data from the API
    useEffect(() => {
        request.get('get-top-4-doctor')
            .then(response => {
                if (response.data.success) {
                    setNewsData(response.data.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <section className="portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Danh Sách Các Bác Sĩ Của Chúng Tôi</h2>
                            <img src={sectionImg} alt="Ảnh mô tả" />
                            <p>
                                Khám phá đội ngũ bác sĩ chuyên nghiệp của chúng tôi. Xem thông tin và lịch trình làm
                                việc để chọn bác sĩ phù hợp với nhu cầu của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="owl-carousel ">
                           
                           
                        {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {newsData.map((newsItem) => (
                        <React.Fragment key={newsItem.id}>
                            <DoctorHome
                                data={{
                                    id:newsItem.id,
                                    image: newsItem.image,
                                     }}
                            />
                        </React.Fragment>
                    ))}
                </>
            )}
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Doctor;
