import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import { Breadcrumb, Table, Card, Button, Alert, notification, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHouse, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/Components/Loading/Loading';
import '~/Assets/css/registerLst.css';

import RegisterColumn from '~/Config/Table/RegisterCollumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import request from '~/Utils/httpRequest';
import addNews from '~/Config/Form/news/news';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import openNotification from '../../Components/Notification/Notification';

export default function RegisterLst() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModal, setOpenModal] = useState('0');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const formRefAdd = useRef();
    const formRefEdit = useRef();
    const [currentId, setCurrentId] = useState(false);
    const [viewData, setViewData] = useState(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            let res = await request.get('get-list-booking');
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

    const openModalView = useCallback(async (record) => {
        try {
            setIsLoading(true);
            const response = await request.get(`get-booking-by-id/${record.id}`);
            if (response.data.success) {
                setViewData(response.data.data); // Lưu thông tin chi tiết vào state
                setOpenModal('view'); // Mở modal xem chi tiết
            } else {
                openNotification('top', 'Thất bại', 'Không thể tải chi tiết bản ghi', 'error');
            }
        } catch (err) {
            console.error('Error fetching details:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleAddNews = useCallback(async (values) => {
        try {
            setIsLoading(true);
            const response = await request.post('insert-news', values);
            if (response.data.success) {
                openNotification('top', 'Thành công', 'Thêm mới tin tức thành công', 'success');
                fetchData();
            } else {
                openNotification('top', 'Thất bại', 'Thêm mới tin tức thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, []);
    const handleEditNews = async (values) => {
        try {
            setIsLoading(true);
            const response = await request.put('update-news', { id: currentId, ...values });
            console.log(response);
            if (response.data.success) {
                openNotification('top', 'Thành công', 'Cập nhật tin tức thành công', 'success');
                fetchData();
            } else {
                openNotification('top', 'Thất bại', 'Cập nhật tin tức thất bại', 'error');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    function handleDelete(record) {
        Modal.confirm({
            title: (
                <p>
                    Xóa tin tức <b className="fs-5 text-danger">{record.name}</b>
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
                    response = await request.delete(`delete-news/${record.id}`);
                } catch (err) {
                    console.error('Error fetching data:', err);
                } finally {
                    if (response?.data?.success) {
                        openNotification(
                            'top',
                            'Xóa thành công',
                            `Tin tức "${record.name}" đã được xóa thành công`,
                            'success',
                        );
                        fetchData();
                    } else {
                        openNotification('top', 'Xóa thất bại', 'Có lỗi xảy ra khi xóa tin tức.', 'error');
                    }
                }
            },
            onCancel() {},
        });
    }
    const actions = useCallback(
        (record) => [
            {
                onClick: () => openModalView(record),
                label: (
                    <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                        <FontAwesomeIcon className="text-primary me-2" icon={faEye} />
                        Xem
                    </p>
                ),
            } 
        ],
        [handleDelete],
    );

    const columns = RegisterColumn({
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
                            title: 'Danh sách đặt lịch',
                        },
                    ]}
                />
                 
            </div>

            <Card title={`Danh sách đặt lịch (${data.length})`} bordered={true} className="mt-3">
                <Table dataSource={data} columns={columns} rowKey="id" />
            </Card>

             

            <Modal
                title={<h2 className="modal-title">Chi tiết đặt lịch</h2>}
                centered
                open={openModal === 'view'}
                onCancel={() => setOpenModal('0')}
                width={700}
                footer={[
                    <Button
                        key="close"
                        type="primary"
                         
                        onClick={() => setOpenModal('0')}
                        style={{ fontWeight: 'bold' }}
                    >
                        Đóng
                    </Button>,
                ]}
            >
                <div style={{maxHeight:300, overflowY:'auto'}}>
                {viewData ? (
                    <div className="modal-content">
                        <div className="info-section">
                            <div className="info-row">
                                <strong>Trạng thái:</strong>
                                <span
                                    className={`status-badge ${
                                        viewData.status === 'Chờ xác nhận' ? 'pending' : 'confirmed'
                                    }`}
                                >
                                    {viewData.status}
                                </span>
                            </div>
                            <div className="info-row">
                                <strong>Bác sĩ:</strong>
                                <span>{viewData.doctor_name || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Bệnh nhân:</strong>
                                <span>{viewData.patient_name || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Phòng khám:</strong>
                                <span>{viewData.clinic_name || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Email:</strong>
                                <span>{viewData.booking_email || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Số điện thoại:</strong>
                                <span>{viewData.booking_phone || 'N/A'}</span>
                            </div>
                        </div>

                        <div className="info-section">
                            <div className="info-row">
                                <strong>Ngày đặt lịch:</strong>
                                <span>
                                    {viewData.booking_date
                                        ? new Date(viewData.booking_date).toLocaleDateString()
                                        : 'N/A'}
                                </span>
                            </div>
                            <div className="info-row">
                                <strong>Thời gian:</strong>
                                <span>{viewData.booking_time || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Giới tính:</strong>
                                <span>{viewData.booking_sex || 'N/A'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Ghi chú:</strong>
                                <span>{viewData.notes || 'Không có'}</span>
                            </div>
                            <div className="info-row">
                                <strong>Ngày gửi:</strong>
                                <span>
                                    {viewData.created_at ? new Date(viewData.created_at).toLocaleString() : 'N/A'}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading isLoading={true} />
                )}
                </div>
            </Modal>

            <Loading isLoading={isLoading} />
        </div>
    );
}
