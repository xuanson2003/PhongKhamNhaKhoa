import { notification, Alert } from 'antd';

const openNotification = (placement, message, description, type = 'success') => {
    notification.open({
        description: (
            <Alert
                message={message}
                description={description}
                type={type}
                showIcon
            />
        ),
        placement,
        showProgress: true,
        pauseOnHover: true,
    });
};

export default openNotification;
