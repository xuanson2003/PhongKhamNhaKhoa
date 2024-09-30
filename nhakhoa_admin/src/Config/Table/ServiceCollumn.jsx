import TableAction from '~/Components/TableAction/TableAction';
import TableColumnSearch from '~/Components/TableColumnSearch/TableColumnSearch';
import request from '~/Utils/httpRequest';

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
            title: 'Ảnh bìa',
            dataIndex: 'avatar', // dữ liệu sẽ lấy từ trường 'avatar'
            key: 'avatar',
            align: 'center', // căn giữa ảnh
            render: (avatarUrl) => (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
            ),
            sorter: false, // không sắp xếp ảnh
        },        
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name', 'Nhập tên dịch vụ'),
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Giá ',
            dataIndex: 'price',
            key: 'base_price',
            align: 'right',
            render: (text) => Intl.NumberFormat('vi-VN').format(text),
            sorter: (a, b) => (Number(a.price) - (Number(b.price))),
        },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
            align: 'right',
            ...getColumnSearchProps('name', 'Nhập tên icon'),
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
