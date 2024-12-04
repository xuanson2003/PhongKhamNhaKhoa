import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Breadcrumb, Table, Card, Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHouse } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/Components/Loading/Loading';
import '~/Assets/css/registerLst.css';

import RegisterColumn from '~/Config/Table/RegisterCollumn';
import request from '~/Utils/httpRequest';
import openNotification from '../../Components/Notification/Notification';

export default function RegisterLst() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModal, setOpenModal] = useState('0');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
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
                setViewData(response.data.data);
                setOpenModal('view');
            } else {
                openNotification('top', 'Thất bại', 'Không thể tải chi tiết bản ghi', 'error');
            }
        } catch (err) {
            console.error('Error fetching details:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleStatusChange = async (status) => {
        if (!viewData) return;
        try {
            setIsLoading(true);
            const response = await request.patch('/change-status-booking', { id: viewData.id, status });
            if (response.data.success) {
                openNotification('top', 'Thành công', `Trạng thái đã được cập nhật thành ${status}`, 'success');
                fetchData();
                setOpenModal('0');
            } else {
                openNotification('top', 'Thất bại', 'Cập nhật trạng thái thất bại', 'error');
            }
        } catch (err) {
            console.error('Error updating status:', err);
        } finally {
            setIsLoading(false);
        }
    };

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
            },
        ],
        []
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
                        key="confirm"
                        type="danger"
                        className='btn-warning '
                        onClick={() => handleStatusChange('Chờ xác nhận')}
                    >
                        Chờ xác nhận
                    </Button>,
                    <Button
                        key="confirm"
                        type="primary"
                        className='btn-info '

                        onClick={() => handleStatusChange('Đã xác nhận')}
                    >
                        Đã xác nhận
                    </Button>,
                    <Button
                        key="complete"
                        type="primary"
                        className='btn-success '

                        onClick={() => handleStatusChange('Hoàn thành')}
                    >
                        Hoàn thành
                    </Button>,
                    <Button
                        key="reject"
                        type="danger"
                        className='btn-danger '

                        onClick={() => handleStatusChange('Từ chối')}
                    >
                        Từ chối
                    </Button>,
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
                <div style={{ maxHeight: 300, overflowY: 'auto' }}>
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
                                        {viewData.created_at
                                            ? new Date(viewData.created_at).toLocaleString()
                                            : 'N/A'}
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
