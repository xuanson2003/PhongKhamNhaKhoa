import React from 'react';
import { Spin } from 'antd';

const Loading = ({ isLoading, children }) => {
    return (
        <div>
            {isLoading ? (
                <div className='position-fixed top-0 start-0 end-0 bottom-0' style={{zIndex: 100}}>
                    <div className="d-flex justify-content-center align-items-center  position-absolute top-50 start-50 translate-middle">
                        <Spin tip="Đang tải..." size="large" />
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default Loading;
