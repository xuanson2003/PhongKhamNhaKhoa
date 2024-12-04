import React, { useCallback, useEffect, useState } from 'react';
import { Breadcrumb, Table, Card, Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';

import AccountColumn from '~/Config/Table/AccountColumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Loading from '~/Components/Loading/Loading';
import request from '~/Utils/httpRequest';
import openNotification from '~/Components/Notification/Notification';
import { Link } from 'react-router-dom';
import config from '~/Config';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

function AccountLst(props) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const actions = useCallback(
        (record) => [
            {
                onClick: () => {},
                label: (
                    <Link to={config.routes.user_edit.replace(":id", `${record.id}`)} className="d-flex align-items-center mb-0 pe-2 ps-2">
                        <FontAwesomeIcon className="text-primary me-2" icon={faPencil} />
                        Sửa
                    </Link>
                ),
            },
            {
                onClick: () => {
                    handleDelete(record);
                },
                label: (
                    <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                        <FontAwesomeIcon className="text-danger me-2" icon={faTrashCan} />
                        Xóa
                    </p>
                ),
            },
        ],
        [],
    );

    const handleDelete = useCallback(async (record) => {
        Modal.confirm({
            title: <p>Xóa người dùng</p>,
            icon: <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="mt-2 me-2 text-warning fs-5" />,
            content: 'Hành động này không thẻ hoàn tác',
            okText: 'Xóa',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk: async () => {
                try {
                    setIsLoading(true);
                    const response = await request.delete(`delete-user/${record.id}`);
                    if (response?.data?.success) {
                        openNotification('top', 'Xóa thành công', `Xóa người dùng thành công`, 'success');
                        fetchData();
                    } else {
                        openNotification('top', 'Xóa thất bại', 'Có lỗi xảy ra khi xóa chức vụ.', 'error');
                    }
                } catch (err) {
                    console.error('Error fetching data:', err);
                } finally {
                    setIsLoading(false);
                }
            },
            onCancel() {},
        });
    }, []);

    const columns = AccountColumn({
        searchedColumn,
        searchText,
        setSearchText,
        setSearchedColumn,
        actions,
        dropdownStyle: 'bottomRight',
    });

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            let res = await request.get('search-user');
            if (res.data.success) {
                setData(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

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
                            title: 'Danh sách người dùng',
                        },
                    ]}
                />
            </div>
            <Card title="Danh sách người dùng" bordered={false} className="mt-3">
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    // scroll={{
                    //     x: 1200,
                    // }}
                    dataSource={data}
                    columns={columns}
                />
            </Card>
            <Loading isLoading={isLoading} />
        </div>
    );
}

export default AccountLst;
