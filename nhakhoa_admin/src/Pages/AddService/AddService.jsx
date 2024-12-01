import { Card } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import Loading from '~/Components/Loading/Loading';
import openNotification from '~/Components/Notification/Notification';
import serviceForm from '~/Config/Form/service/service';
import request from '~/Utils/httpRequest';

export default function AddService() {
    const formRefAdd = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handleAddService = useCallback(async (values) => {
        try {
            setIsLoading(true);
            const response = await request.post('insert-service', values);
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
    },  [])
    return (
        <div>
            <Card title={`Thêm mới dịch vụ`} bordered={true} className="mt-3">
                <ConfigForm
                    config={serviceForm}
                    ref={formRefAdd}
                    onFinish={handleAddService}                  
                />
            </Card>
            <Loading isLoading={isLoading} />
        </div>
        
    );
}
