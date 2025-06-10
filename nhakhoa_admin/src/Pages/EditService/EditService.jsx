import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import Loading from '~/Components/Loading/Loading';
import openNotification from '~/Components/Notification/Notification';
import serviceForm from '~/Config/Form/service/edit_service';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import { useParams } from 'react-router-dom';
import request from '~/Utils/httpRequest';

export default function EditService() {
    const { id } = useParams(); // Lấy `id` từ tham số đường dẫn
    const formRef = useRef(); // Form instance
    const [avatar, setAvatar] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Gọi API lấy chi tiết dịch vụ khi component được mount
    useEffect(() => {
        const fetchServiceDetail = async () => {
            setIsLoading(true);
            try {
                const response = await request.get(`get-service-detail/${id}`);
                if (response.data.success) {
                    const serviceData = response.data.data;
                    formRef.current.setFormValues(serviceData); // Gán giá trị vào form
                    setAvatar(serviceData.avatar || ''); // Gán giá trị avatar
                } else {
                    openNotification('top', 'Thất bại', 'Không thể lấy thông tin dịch vụ', 'error');
                }
            } catch (err) {
                console.error('Lỗi khi lấy thông tin dịch vụ:', err);
                openNotification('top', 'Lỗi', 'Có lỗi xảy ra khi tải dữ liệu dịch vụ', 'error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id]);

    // Hàm xử lý khi crop ảnh
    const handleCropImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await request.post('upload', formData);
            if (response.data?.avatar) {
                setAvatar(response.data.avatar);
                openNotification('top', 'Thành công', 'Ảnh đã được cập nhật', 'success');
            } else {
                openNotification('top', 'Thất bại', 'Không thể tải lên ảnh', 'error');
            }
        } catch (err) {
            console.error('Lỗi khi tải lên ảnh:', err);
            openNotification('top', 'Lỗi', 'Có lỗi xảy ra khi tải lên ảnh', 'error');
        }
    };

    // Hàm xử lý cập nhật dịch vụ
    const handleEditService = async (values) => {
        try {
            setIsLoading(true);
            const payload = { ...values, id, avatar }; // Chuẩn bị dữ liệu gửi đi

            const response = await request.put('update-service', payload);
            if (response.data.success) {
                openNotification('top', 'Thành công', 'Cập nhật dịch vụ thành công', 'success');
            } else {
                openNotification('top', 'Thất bại', 'Cập nhật dịch vụ thất bại', 'error');
            }
        } catch (err) {
            console.error('Lỗi khi cập nhật dịch vụ:', err);
            openNotification('top', 'Lỗi', 'Có lỗi xảy ra khi cập nhật dịch vụ', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Card title="Chỉnh sửa dịch vụ" bordered={true} className="mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <ConfigForm
                            config={serviceForm}
                            ref={formRef} // Truyền form instance từ EditService
                            onFinish={handleEditService}
                        />
                    </div>
                    <div className="col-md-2">
                        <ImageCropper displayStyle="square" onImageCropped={handleCropImage} />
                    </div>
                </div>
            </Card>
            <Loading isLoading={isLoading} />
        </div>
    );
}
