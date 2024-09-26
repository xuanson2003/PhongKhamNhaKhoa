import React, { useEffect, useState } from 'react';
import sectionImg from '~/Assets/img/section-img.png';
import ServiceItem from '../ServiceItem/ServiceItem';

function Service() {
    const [services, setServices] = useState([]); // Quản lý danh sách dịch vụ
    const [loading, setLoading] = useState(true); // Quản lý trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Quản lý trạng thái lỗi
    
    // Gọi API để lấy danh sách dịch vụ
    const fetchServices = async () => {
        try {
            const response = await fetch('http://localhost:4000/get-all-services');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setServices(data.data); // Lưu danh sách dịch vụ vào state
            setLoading(false); // Kết thúc trạng thái tải dữ liệu
        } catch (err) {
            setError(err.message); // Lưu thông báo lỗi nếu có
            setLoading(false); // Kết thúc trạng thái tải dữ liệu
        }
    };

    // Gọi API khi component được render lần đầu
    useEffect(() => {
        fetchServices();
    }, []);

    if (loading) {
        return <p>Loading services...</p>; // Hiển thị thông báo trong lúc tải dữ liệu
    }

    if (error) {
        return <p>Error: {error}</p>; // Hiển thị thông báo lỗi nếu có
    }
    return (
        <section className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Nha Khoa Để Bảo Vệ Sức Khỏe Răng Miệng Của Bạn</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Khám phá các dịch vụ chuyên nghiệp của chúng tôi để bảo vệ sức khỏe răng miệng và nâng
                                cao chất lượng cuộc sống.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                        {services.map((service) => (
                            <ServiceItem key={service.id} data={service} />
                        ))}
                    </div>
            </div>
        </section>
    );
}

export default Service;
