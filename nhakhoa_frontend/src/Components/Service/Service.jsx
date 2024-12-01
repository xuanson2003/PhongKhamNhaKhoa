import React, { useEffect, useState } from 'react';
import sectionImg from '~/Assets/img/section-img.png';
import ServiceItem from '../ServiceItem/ServiceItem';

function Service() {
    const [services, setServices] = useState([]); // Quản lý danh sách dịch vụ
    const [loading, setLoading] = useState(true); // Quản lý trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Quản lý trạng thái lỗi
    const [visibleServices, setVisibleServices] = useState(6); // Quản lý số lượng dịch vụ hiển thị

    // Gọi API để lấy danh sách dịch vụ
    const fetchServices = async () => {
        try {
            const response = await fetch('http://localhost:4000/get-all-services');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("API trả về dữ liệu: ", data.data); // In ra dữ liệu dịch vụ từ API
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

    useEffect(() => {
        console.log(`Hiển thị ${visibleServices} dịch vụ`); // In ra số lượng dịch vụ đang hiển thị
        console.log("Danh sách dịch vụ hiện tại: ", services.slice(0, visibleServices)); // In ra các dịch vụ đang được hiển thị
    }, [visibleServices, services]);

    if (loading) {
        return <p>Loading services...</p>; // Hiển thị thông báo trong lúc tải dữ liệu
    }

    if (error) {
        return <p>Error: {error}</p>; // Hiển thị thông báo lỗi nếu có
    }

    // Hàm xử lý khi người dùng nhấn nút "Xem thêm"
    const handleShowMore = () => {
        console.log("Bấm nút Xem thêm"); // Thông báo khi nút Xem thêm được bấm
        setVisibleServices(services.length); // Hiển thị tất cả dịch vụ
    };

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
                <div className="row">
                    {/* Hiển thị các dịch vụ, ban đầu chỉ hiển thị 6 dịch vụ */}
                    {services.slice(0, visibleServices).map((service) => (
                        <ServiceItem key={service.id} data={service} />
                    ))}
                </div>
                {/* Nếu số lượng dịch vụ hiện tại nhỏ hơn tổng số dịch vụ, hiển thị nút "Xem thêm" */}
                {visibleServices < services.length && (
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={handleShowMore}>
                            Xem thêm
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Service;
