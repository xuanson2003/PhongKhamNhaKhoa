import TableAction from '~/Components/TableAction/TableAction';
import TableColumnSearch from '~/Components/TableColumnSearch/TableColumnSearch';

const PositionColumn = ({ searchedColumn, searchText, setSearchText, setSearchedColumn, actions,  dropdownStyle }) => {
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
            title: 'Chức vụ',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name', 'Nhập chức vụ'),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Lương cơ bản',
            dataIndex: 'base_salary',
            key: 'base_salary',
            align: 'right',
            render: (text) => Intl.NumberFormat('vi-VN').format(text),
            sorter: (a, b) => (Number(a.base_salary) - (Number(b.base_salary))),
        },
        {
            title: 'Lương tăng ca (giờ)',
            dataIndex: 'overtime_rate',
            key: 'overtime_rate',
            align: 'right',
            render: (text) => Intl.NumberFormat('vi-VN').format(text),
            sorter: (a, b) => (Number(a.overtime_rate) - (Number(b.overtime_rate))),
        },
        {
            title: 'Phụ cấp',
            dataIndex: 'allowances',
            key: 'allowances',
            align: 'right',
            render: (text) => Intl.NumberFormat('vi-VN').format(text),
            sorter: (a, b) => (Number(a.allowances) - (Number(b.allowances))),
        },
        {
            title: '',
            key: 'action',
            width: '5%',
            render: (_, record) => <TableAction actions={actions(record)} dropdownStyle={dropdownStyle} />,
        },
    ];
};

export default PositionColumn;
