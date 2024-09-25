import React, { useState } from 'react';
import { Breadcrumb, Table, Card, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';

import AccountColumn from '~/Config/Table/AccountColumn';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const data = [
    {
        key: '1',
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@phongkham.com',
        phone: '090-123-4567',
        gender: 'Nam',
        position: 'Bác sĩ nha khoa',
        is_active: true,
    },
    {
        key: '2',
        name: 'Lê Thị B',
        email: 'lethib@phongkham.com',
        phone: '090-987-6543',
        gender: 'Nữ',
        position: 'Y tá',
        is_active: true,
    },
    {
        key: '3',
        name: 'Trần Quang C',
        email: 'tranquangc@phongkham.com',
        phone: '090-555-1234',
        gender: 'Nam',
        position: 'Phụ tá nha khoa',
        is_active: true,
    },
    {
        key: '4',
        name: 'Phạm Thị D',
        email: 'phamthid@phongkham.com',
        phone: '090-444-5678',
        gender: 'Nữ',
        position: 'Nhân viên vệ sinh',
        is_active: false,
    },
    {
        key: '5',
        name: 'Đỗ Văn E',
        email: 'dovane@phongkham.com',
        phone: '090-333-8765',
        gender: 'Nam',
        position: 'Lễ tân',
        is_active: true,
    },
    {
        key: '6',
        name: 'Hoàng Thị F',
        email: 'hoangthif@phongkham.com',
        phone: '090-222-3456',
        gender: 'Nữ',
        position: 'Y tá',
        is_active: true,
    },
    {
        key: '7',
        name: 'Vũ Văn G',
        email: 'vuvang@phongkham.com',
        phone: '090-111-6543',
        gender: 'Nam',
        position: 'Nhân viên vệ sinh',
        is_active: true,
    },
    {
        key: '8',
        name: 'Nguyễn Thị H',
        email: 'nguyenthih@phongkham.com',
        phone: '090-999-1234',
        gender: 'Nữ',
        position: 'Bác sĩ nha khoa',
        is_active: true,
    },
    {
        key: '9',
        name: 'Lê Văn I',
        email: 'levani@phongkham.com',
        phone: '090-888-4321',
        gender: 'Nam',
        position: 'Nhân viên vệ sinh',
        is_active: false,
    },
    {
        key: '10',
        name: 'Phạm Thị J',
        email: 'phamthij@phongkham.com',
        phone: '090-777-8765',
        gender: 'Nữ',
        position: 'Phụ tá nha khoa',
        is_active: true,
    },
    {
        key: '11',
        name: 'Trần Văn K',
        email: 'tranvank@phongkham.com',
        phone: '090-666-3456',
        gender: 'Nam',
        position: 'Lễ tân',
        is_active: true,
    },
    {
        key: '12',
        name: 'Đỗ Thị L',
        email: 'dothil@phongkham.com',
        phone: '080-555-7890',
        gender: 'Nữ',
        position: 'Y tá',
        is_active: true,
    },
];

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
    const actions = [
        {
            onclick: () => {},
            label: (
                <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                    <FontAwesomeIcon className="text-primary me-2" icon={faPencil} />
                    Sửa
                </p>
            ),
        },
        {
            onclick: () => {},
            label: (
                <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                    <FontAwesomeIcon className="text-danger me-2" icon={faTrashCan} />
                    Xóa
                </p>
            ),
        },
    ];
    const columns = AccountColumn({
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
                            title: 'Danh sách tài khoản',
                        },
                    ]}
                />
                <div className="ms-auto">
                    <Button
                        danger
                        type="primary"
                        icon={<FontAwesomeIcon icon={faTrashCan} />}
                        size="media"
                        style={{ width: 90 }}
                    >
                        Xóa
                    </Button>
                </div>
            </div>
            <Card title="Danh sách tài khoản" bordered={false} className="mt-3">
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
        </div>
    );
}

export default AccountLst;
