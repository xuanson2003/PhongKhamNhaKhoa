import { Card } from 'antd';
import React, { useRef, useState } from 'react';

import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import Loading from '~/Components/Loading/Loading';
import add from '~/Config/Form/Account/AddAccount/add';
import request from '~/Utils/httpRequest';
import openNotification from '../../Components/Notification/Notification';

function AddDoctor(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState('');
    const formRefAdd = useRef();

    async function handleCropImage(file) {
        const formData = new FormData();
        formData.append('file', file);

        let resAvatar = await request.post('upload', formData);
        setAvatar(resAvatar?.data ? resAvatar.data.image_url : '');
    }

    async function handleAddAccount() {
        try {
            setIsLoading(true);
            const formData = formRefAdd.current.getFormData();
            formData.image_url = avatar;
            const responseUser = await request.post('signup', formData);

            if (!responseUser.data.success && responseUser.data.errorField === 'email') {
                openNotification('top', 'Thất bại', 'Email này đã được đăng ký', 'error');
                return;
            }
            if (responseUser.data.success) {
                openNotification('top', 'Thành công', 'Thêm mới bác sĩ thành công', 'success');
                formRefAdd.current.resetForm();
            } else {
                openNotification('top', 'Thất bại', 'Thêm mới bác sĩ thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Card title={`Thêm mới bác sĩ`} bordered={true} className="mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <ConfigForm config={add} ref={formRefAdd} onFinish={handleAddAccount} />
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

export default AddDoctor;
