import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import { Breadcrumb, Table, Card, Button, Alert, notification, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/Components/Loading/Loading';

import NewsColumn from '~/Config/Table/DoctorColumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import request from '~/Utils/httpRequest';
import addNews from '~/Config/Form/news/news'
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import openNotification from '../../Components/Notification/Notification';
import { Link } from 'react-router-dom';
import config from '~/Config';

export default function DoctorLst() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModal, setOpenModal] = useState('0');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const formRefAdd = useRef();
    const formRefEdit = useRef();
    const [currentId, setCurrentId] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            let res = await request.get('get-doctor-admin');
            if (res.data.success) {
                setData(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, []);

     

     

    function handleDelete (record) {
        Modal.confirm({
            title: (
                <p>
                    Xóa bác sĩ <b className="fs-5 text-danger">{record.name}</b>
                </p>
            ),
            icon: <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="mt-2 me-2 text-warning fs-5" />,
            content: 'Hành động này không thẻ hoàn tác',
            okText: 'Xóa',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk: async () => {
                let response;
                try {
                    response = await request.delete(`delete-user/${record.id}`);
                } catch (err) {
                    console.error('Error fetching data:', err);
                } finally {
                    if (response?.data?.success) {
                        openNotification(
                            'top',
                            'Xóa thành công',
                            `Bác sĩ "${record.name}" đã được xóa thành công`,
                            'success',
                        );
                        fetchData();
                    } else {
                        openNotification('top', 'Xóa thất bại', 'Có lỗi xảy ra khi xóa bác sĩ.', 'error');
                    }
                }
            },
            onCancel() {},
        });
    }

    const actions = useCallback(
        (record) => [
            {
                onClick: () => {},
                label: (
                    <Link to={config.routes.edit_doctor.replace(":id", `${record.id}`)} className="d-flex align-items-center mb-0 pe-2 ps-2">
                        <FontAwesomeIcon className="text-primary me-2" icon={faPencil} />
                        Sửa
                    </Link>
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
        ],
        [handleDelete],
    );

    const columns = NewsColumn({
        searchedColumn,
        searchText,
        setSearchText,
        setSearchedColumn,
        actions,
        dropdownStyle: 'bottomRight',
    });

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
                            title: 'Danh sách bác sĩ',
                        },
                    ]}
                />
                 
            </div>

            <Card title={`Danh sách bác sĩ (${data.length})`} bordered={true} className="mt-3">
                <Table dataSource={data} columns={columns} rowKey="id" />
            </Card>

             

            

            <Loading isLoading={isLoading} />
        </div>
    );
}
