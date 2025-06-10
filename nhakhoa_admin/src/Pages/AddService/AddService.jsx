import { Card } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import Loading from '~/Components/Loading/Loading';
import openNotification from '~/Components/Notification/Notification';
import serviceForm from '~/Config/Form/service/service';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import request from '~/Utils/httpRequest';

export default function AddService() {
    const formRefAdd = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState('');

    async function handleCropImage(file) {
        const formData = new FormData();
        formData.append('file', file);

        let resAvatar = await request.post('upload', formData);
        setAvatar(resAvatar?.data ? resAvatar.data.image_url : '');
    }
    const handleAddService = useCallback(async (values) => {
        try {
            setIsLoading(true);
    
            // Gán giá trị avatar vào formData
            const formData = { ...values, avatar };
    
            const response = await request.post('insert-service', formData);
            if (response.data.success) {
                openNotification('top', 'Thành công', 'Thêm mới dịch vụ thành công', 'success');
            } else {
                openNotification('top', 'Thất bại', 'Thêm mới dịch vụ thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, [avatar]);
    

    return (
        <div>
            <Card title={`Thêm mới dịch vụ`} bordered={true} className="mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <ConfigForm config={serviceForm} ref={formRefAdd} onFinish={handleAddService} />
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
