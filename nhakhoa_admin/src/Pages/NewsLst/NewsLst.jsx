import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import { Breadcrumb, Table, Card, Button, Alert, notification, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/Components/Loading/Loading';

import NewsColumn from '~/Config/Table/NewsCollumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import request from '~/Utils/httpRequest';
import addNews from '~/Config/Form/news/news'
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import openNotification from '../../Components/Notification/Notification';

export default function NewsLst() {
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
            let res = await request.get('get-all-news-admin');
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
    },  [])

    const openModalEdit = useCallback(async (record) => {
        try {
            setOpenModal('edit');

            if (formRefEdit.current) {
                formRefEdit.current.resetForm();
            }

            const response = await request.get('get-news-by-id/' + record.id);
            
            if (response.data.success) {
                setCurrentId(record.id);
                formRefEdit.current.setFormValues(response.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

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

    function handleDelete (record) {
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
                onClick: () => openModalEdit(record),
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
                            title: 'Danh sách tin tức',
                        },
                    ]}
                />
                <div className="ms-auto">
                    <Button
                        primary
                        type="primary"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => setOpenModal('add')}
                        size="media"
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>

            <Card title={`Danh sách tin tức (${data.length})`} bordered={true} className="mt-3">
                <Table dataSource={data} columns={columns} rowKey="id" />
            </Card>

            <Modal
                title="Thêm mới tin tức"
                centered
                open={openModal === 'add'}
                onCancel={() => setOpenModal('0')}
                closable={true}
                width={700}
                footer={[
                    <Button key="reset" onClick={() => formRefAdd.current.resetForm()}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /> Làm mới
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => formRefAdd.current.submit()}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" /> Thêm
                    </Button>,
                ]}
            >
                <ConfigForm config={addNews} ref={formRefAdd} onFinish={handleAddNews} />
            </Modal>

            <Modal
                title="Chỉnh sửa tin tức"
                centered
                open={openModal === 'edit'}
                onCancel={() => setOpenModal('0')}
                width={700}
                footer={[
                    <Button key="reset" onClick={() => formRefEdit.current.resetForm()}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /> Làm mới
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => formRefEdit.current.submit()}>
                        <FontAwesomeIcon icon="fa-solid fa-floppy-disk" /> Lưu lại
                    </Button>
                ]}
            >
                <ConfigForm config={addNews} ref={formRefEdit} onFinish={handleEditNews} />
            </Modal>

            <Loading isLoading={isLoading} />
        </div>
    );
}