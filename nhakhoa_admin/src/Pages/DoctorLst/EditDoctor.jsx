import { Breadcrumb, Button, Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import Loading from '~/Components/Loading/Loading';
import addAccount from '~/Config/Form/Account/AddAccount/Index';
import request from '~/Utils/httpRequest';
import openNotification from '../../Components/Notification/Notification';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import config from '~/Config';

function EditAccount(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState('');
    const refAvatar = useRef();
    const formRefEdit = useRef();
    const { id } = useParams();
    const navigate = useNavigate()

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
                formRefEdit.current.setFormValues(response.data.data);
                refAvatar.current.setUrlImage(response.data.data.avatar)
            } else {
                openNotification('top', 'Lỗi', 'Lấy thông tin bác sĩ thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleEditAccount() {
        try {
            setIsLoading(true);
            const formData = formRefEdit.current.getFormData();
            formData.image = avatar;
            formData.id = id;
            const responseUser = await request.patch('update-user', formData);

            if (!responseUser.data.success && responseUser.data.errorField === 'email') {
                openNotification('top', 'Thất bại', 'Email này đã được đăng ký', 'error');
                return;
            }
            if (responseUser.data.success) {
                openNotification('top', 'Thành công', 'Cập nhật bác sĩ thành công', 'success');
            } else {
                openNotification('top', 'Thất bại', 'Cập nhật bác sĩ thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
             <div className="d-flex">
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <FontAwesomeIcon icon={faHouse} />,
                        },
                        {
                            href: config.routes.user_list,
                            title: 'Danh sách bác sĩ',
                        },
                        {
                            title: 'Chỉnh sửa bác sĩ',
                        },
                    ]}
                />
                <div className="ms-auto">
                    <Button
                        type="primary"
                        icon={<FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />}
                        size="media"
                        style={{ width: 90 }}
                        onClick= {() => navigate(-1)}
                    >
                        Quay lại
                    </Button>
                </div>
            </div>
            <Card title={`Chỉnh sửa bác sĩ`} bordered={true} className="mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <ConfigForm config={addAccount} ref={formRefEdit} onFinish={handleEditAccount} />
                    </div>
                    <div className="col-md-2">
                        <ImageCropper ref={refAvatar} displayStyle="square" onImageCropped={handleCropImage} />
                    </div>
                </div>
            </Card>
            <Loading isLoading={isLoading} />
        </div>
    );
}

export default EditAccount;
