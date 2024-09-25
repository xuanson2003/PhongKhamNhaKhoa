import React, { useEffect, useState } from 'react';
import { Breadcrumb, Table, Card, Button, Alert, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

import PositionColumn from '~/Config/Table/PositionColumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Loading from '~/Components/Loading/Loading';
import request from '~/Utils/httpRequest';
import openNotification from '../Notification/Notification';

const PositionLst = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [api, contextHolder] = notification.useNotification();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            let res = await request.get('/get-list-position');
            if (res.data.success) {
                setData(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (record) => {
        console.log('Thông tin cần sửa:', record);
    };

    const handleDelete = async (record) => {
        setIsLoading(true);
        let response;
        try {
            response = await request.delete(`/delete-position/${record.id}`);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setIsLoading(false);
            if (response?.data?.success) {
                openNotification('top', 'Xóa thành công', 'Chức vụ đã được xóa thành công.', 'success');
                fetchData();
            } else {
                openNotification('top', 'Xóa thất bại', 'Có lỗi xảy ra khi xóa chức vụ.', 'error');
            }
        }
    };

    const actions = (record) => [
        {
            onClick: () => handleEdit(record),
            label: (
                <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                    <FontAwesomeIcon className="text-primary me-2" icon={faPencil} />
                    Sửa
                </p>
            ),
        },
        {
            onClick: () => handleDelete(record),
            label: (
                <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                    <FontAwesomeIcon className="text-danger me-2" icon={faTrashCan} />
                    Xóa
                </p>
            ),
        },
    ];

    const columns = PositionColumn({
        searchedColumn,
        searchText,
        setSearchText,
        setSearchedColumn,
        actions,
        dropdownStyle: 'bottomRight',
    });


    return (
        <div>
            {contextHolder}
            <div className="d-flex">
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <FontAwesomeIcon icon={faHouse} />,
                        },
                        {
                            title: 'Danh sách tài khoản',
                        },
                    ]}
                />
                <div className="ms-auto">
                    <Button primary type="primary" icon={<FontAwesomeIcon icon={faPlus} />} size="media">
                        Thêm mới
                    </Button>
                </div>
            </div>
            <Loading isLoading={isLoading} />
            <Card title="Danh sách chức vụ" bordered={true} className="mt-3">
                <Table dataSource={data} columns={columns} rowKey="id" /> {/* Đảm bảo có rowKey */}
            </Card>
        </div>
    );
};

export default PositionLst;
