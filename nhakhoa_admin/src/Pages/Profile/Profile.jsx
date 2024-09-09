import React from 'react';
import { Button, Divider, notification, Space, Alert } from 'antd';
import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
} from '@ant-design/icons';

const Profile = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement) => {
        api.open({
            message: '',
            description: (
                <Alert
                    message="Thành công"
                    description="Đăng ký tài khoản thành công, vui lòng chờ đến khi tài khoản được duyệt"
                    type="success"
                    showIcon
                    className="show"
                    style={{ marginTop: -8 }}
                />
            ),
            placement,
            showProgress: true,
            pauseOnHover: true,
        });
    };

    return (
        <div>
            {contextHolder}
            <Space>
                <Button type="primary" onClick={() => openNotification('topLeft')} icon={<RadiusUpleftOutlined />}>
                    topLeft
                </Button>
                <Button type="primary" onClick={() => openNotification('topRight')} icon={<RadiusUprightOutlined />}>
                    topRight
                </Button>
            </Space>
            <Divider />
            <Space>
                <Button
                    type="primary"
                    onClick={() => openNotification('bottomLeft')}
                    icon={<RadiusBottomleftOutlined />}
                >
                    bottomLeft
                </Button>
                <Button
                    type="primary"
                    onClick={() => openNotification('bottomRight')}
                    icon={<RadiusBottomrightOutlined />}
                >
                    bottomRight
                </Button>
            </Space>
        </div>
    );
};

export default Profile;
