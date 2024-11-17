import TableAction from '~/Components/TableAction/TableAction';
import TableColumnSearch from '~/Components/TableColumnSearch/TableColumnSearch';

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
            title: 'Tên tin tức',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name', 'Nhập tên tin tức'),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'right',
            render: (text) => {
                const date = new Date(text);
                return Intl.DateTimeFormat('vi-VN').format(date);
            },
            sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
            
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
