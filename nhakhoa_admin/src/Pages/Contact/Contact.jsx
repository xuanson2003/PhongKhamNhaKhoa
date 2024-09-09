import { Alert, Button, notification } from 'antd';
import React from 'react';

function Contact(props) {
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
        return (
            <div>
                <Button type="primary" onClick={() => openNotification('topLeft')}>
                    topLeft
                </Button>
                <Button type="primary" onClick={() => openNotification('topRight')}>
                    topRight
                </Button>
            </div>
        );
    };
}
export default Contact;
