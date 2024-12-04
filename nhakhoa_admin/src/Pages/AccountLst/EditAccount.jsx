import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import Loading from '~/Components/Loading/Loading';
import addAccount from '~/Config/Form/Account/AddAccount/Index';
import request from '~/Utils/httpRequest';
import openNotification from '../../Components/Notification/Notification';
import { useParams } from 'react-router-dom';

function EditAccount(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState('');
    const formRefEdit = useRef();
    const { id } = useParams();

    async function handleCropImage(file) {
        const formData = new FormData();
        formData.append('file', file);

        let resAvatar = await request.post('upload', formData);
        setAvatar(resAvatar?.data ? resAvatar.data.image_url : '');
    }

    useEffect(() => {
        getDetailUser();
    }, []);

    async function getDetailUser() {
        try {
            const response = await request.get(`/get-detail-user-by-id/${id}`);
            if (response?.data?.success) {
                console.log(response.data.data);
                formRefEdit.current.setFormValues(response.data.data);
            } else {
                openNotification('top', 'Lỗi', 'Lấy thông tin người dùng thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleEditAccount() {
        try {
            setIsLoading(true);
            const formData = formRefEdit.current.getFormData();
            formData.image_url = avatar;
            const responseUser = await request.post('signup', formData);

            if (!responseUser.data.success && responseUser.data.errorField === 'email') {
                openNotification('top', 'Thất bại', 'Email này đã được đăng ký', 'error');
                return;
            }
            if (responseUser.data.success) {
                openNotification('top', 'Thành công', 'Thêm mới người dùng thành công', 'success');
                formRefEdit.current.resetForm();
            } else {
                openNotification('top', 'Thất bại', 'Thêm mới người dùng thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Card title={`Chỉnh sửa tài khoản`} bordered={true} className="mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <ConfigForm config={addAccount} ref={formRefEdit} onFinish={handleEditAccount} />
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

export default EditAccount;
