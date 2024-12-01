import { Card, Form } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import Loading from '~/Components/Loading/Loading';
import openNotification from '~/Components/Notification/Notification';
import serviceForm from '~/Config/Form/service/edit_service';
import request from '~/Utils/httpRequest';
import { useParams } from 'react-router-dom';

export default function EditService() {
    const { id } = useParams(); // Lấy `id` từ tham số đường dẫn
    const [form] = Form.useForm(); // Form instance
    const [isLoading, setIsLoading] = useState(false);

    // Gọi API lấy chi tiết dịch vụ khi component được mount
    useEffect(() => {
        const fetchServiceDetail = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:4000/get-service-detail/${id}`);
                if (!response.ok) throw new Error('Lỗi khi lấy dữ liệu dịch vụ');
                const data = await response.json();

                if (data.success) {
                    const formData = {
                        avatar: data.data.avatar, // Đường dẫn ảnh (nếu cần chỉnh sửa preview, xử lý tại ConfigForm)
                        name: data.data.name,
                        price: parseFloat(data.data.price), // Đảm bảo kiểu số
                        icon: data.data.icon,
                        description: data.data.description,
                        content: data.data.content, // Nội dung HTML
                    };

                    console.log('Dữ liệu trước khi setFieldsValue:', formData);

                    // Gán dữ liệu từ API vào form
                    form.setFieldsValue(formData);

                    console.log('Form Values sau khi setFieldsValue:', form.getFieldsValue());
                } else {
                    throw new Error('Không tìm thấy dữ liệu dịch vụ');
                }
            } catch (err) {
                openNotification('top', 'Thất bại', err.message, 'error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id, form]);

    // Hàm xử lý cập nhật dịch vụ
    const handleEditService = useCallback(async (values) => {
        try {
            setIsLoading(true);
            const response = await request.post('insert-service', values);
            if (response.data.success) {
                openNotification('top', 'Thành công', 'Cập nhật dịch vụ thành công', 'success');
            } else {
                openNotification('top', 'Thất bại', 'Cập nhật dịch vụ thất bại', 'error');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <Card title="Cập nhật dịch vụ" bordered={true} className="mt-3">
                {/* Form configuration */}
                <ConfigForm
                    config={serviceForm} // Config chứa các trường form
                    form={form} // Truyền form instance
                    onFinish={handleEditService} // Hàm xử lý submit
                />
            </Card>
            {/* Loading component */}
            <Loading isLoading={isLoading} />
        </div>
    );
}
