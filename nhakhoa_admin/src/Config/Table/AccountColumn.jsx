import { Tag } from 'antd';
import TableAction from '~/Components/TableAction/TableAction';
import TableColumnSearch from '~/Components/TableColumnSearch/TableColumnSearch';

const AccountColumn = ({ searchedColumn, searchText, setSearchText, setSearchedColumn, actions, dropdownStyle }) => {
    const getColumnSearchProps = (dataIndex, dataTitle) =>
        TableColumnSearch({
            dataTitle,
            dataIndex,
            searchedColumn,
            searchText,
            setSearchText,
            setSearchedColumn,
        });

    return [
        {
            title: '',
            dataIndex: 'id',
            key: '',
            hidden: true
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name', 'Nhập họ tên'),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '25%',
            ...getColumnSearchProps('email', 'Nhập email'),
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: '15%',
            ...getColumnSearchProps('phone', 'Nhập số điện thoại'),
            sorter: (a, b) => a.phone.localeCompare(b.phone),
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
            width: '10%',
            filters: [
                { text: 'Nam', value: 'Nam' },
                { text: 'Nữ', value: 'Nữ' },
            ],
            onFilter: (value, record) => record.gender === value,
        },
        {
            title: 'Chức vụ',
            dataIndex: 'position_name',
            key: 'position_name',
            width: '15%',
            ...getColumnSearchProps('position', 'Nhập chức vụ'),
            sorter: (a, b) => a.position.localeCompare(b.position),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'is_active',
            key: 'is_active',
            width: '10%',
            filters: [
                { text: 'Hoạt động', value: true },
                { text: 'Bị khóa', value: false },
            ],
            onFilter: (value, record) => record.is_active === value,
            render: (text, record) => {
                const status = record.is_active ? 'Hoạt động' : 'Bị khóa';
                const color = record.is_active ? 'green' : 'volcano';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => <TableAction actions={actions(record)} dropdownStyle={dropdownStyle} />,
        },
    ];
};

export default AccountColumn;
