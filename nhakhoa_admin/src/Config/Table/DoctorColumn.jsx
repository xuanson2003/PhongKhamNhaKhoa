import TableAction from '~/Components/TableAction/TableAction';
import TableColumnSearch from '~/Components/TableColumnSearch/TableColumnSearch';
import { Tag } from 'antd';

const ServiceColumn = ({ searchedColumn, searchText, setSearchText, setSearchedColumn, actions,  dropdownStyle }) => {
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
            title: 'Tên bác sĩ',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name', 'Nhập tên bác sĩ'),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Giới tính',
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
            width: '5%',
            render: (_, record) => <TableAction actions={actions(record)} dropdownStyle={dropdownStyle} />,
        },
    ];
};

export default ServiceColumn;
