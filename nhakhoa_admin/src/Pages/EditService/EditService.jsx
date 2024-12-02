import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import Loading from '~/Components/Loading/Loading';
import openNotification from '~/Components/Notification/Notification';
import serviceForm from '~/Config/Form/service/edit_service';
import { useParams } from 'react-router-dom';
import request from '~/Utils/httpRequest';

export default function EditService() {
    const { id } = useParams(); // Lấy `id` từ tham số đường dẫn
    const form = useRef(); // Form instance
    const [isLoading, setIsLoading] = useState(false);

    // Gọi API lấy chi tiết dịch vụ khi component được mount
    useEffect(() => {
        const fetchServiceDetail = async () => {
            setIsLoading(true);
            try {
                const response = await request.get(`get-service-detail/${id}`);
                console.log(response)

                if (response.data.success) {
                    // Gán giá trị cho form
                    form.current.setFormValues(response.data.data);
                } else {
                    openNotification('top', 'Thất bại', 'error');
                }
            } catch (err) {
                openNotification('top', 'Thất bại', err.message, 'error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchServiceDetail();
    }, [id]);

    // Hàm xử lý cập nhật dịch vụ
    const handleEditService = async (values) => {
        try {
            setIsLoading(true);
            values.id = id;
            const response = await request.put(`update-service`, values);

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
    };

    return (
        <div>
            <Card title="Cập nhật dịch vụ" bordered={true} className="mt-3">
                <ConfigForm
                    config={serviceForm}
                    ref={form} // Truyền form instance từ EditService
                    onFinish={handleEditService}
                />
            </Card>
            <Loading isLoading={isLoading} />
        </div>
    );
}
