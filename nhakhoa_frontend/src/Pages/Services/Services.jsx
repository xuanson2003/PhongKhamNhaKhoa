import React, { useEffect, useState } from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { Link } from 'react-router-dom';
import ServiceItem from '~/Components/ServiceItem/ServiceItem';

function Services() {
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
        <>
            <BreadScrum
                title="danh sách dịch vụ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'danh sách dịch vụ', href: config.routes.services },
                ]}
            />
            <section class="services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Nha Khoa Để Bảo Vệ Sức Khỏe Răng Miệng Của Bạn</h2>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYBAMAAABO02PvAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8adtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtENTI36AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAACkSURBVCiRY2AYNKBHALs44/sGLKLMDAys/y9ikbBPYGD/9hWLxPqDDDwX7mAx6e8TBv0J+QoYEtyfVzPEJ8hPgAuwuLg4MZi4uMQviFfoV+B6AuKquLg4MPD9//+L4f7///8U5BrOMDD/////B0P///8PGPihEt8ZOC//YACxwBIfGJihRjkwMP/+wgAyBWyUAbL9+7F5DwTqF+CQkEnAIUF3AACwtT7DE233HgAAAABJRU5ErkJggg=="
                                    alt="#"
                                />
                                <p>
                                    Khám phá các dịch vụ chuyên nghiệp của chúng tôi để bảo vệ sức khỏe răng miệng và
                                    nâng cao chất lượng cuộc sống.
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
        </>
    );
}

export default Services;
