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
            dataIndex: 'doctor_name',
            key: 'doctor_name',
            ...getColumnSearchProps('doctor_name', 'Nhập tên bác sĩ'),
            sorter: (a, b) => a.doctodoctor_namer_id.localeCompare(b.doctor_name),
        },
        {
            title: 'Tên bệnh nhận',
            dataIndex: 'patient_name',
            key: 'patient_name',
            ...getColumnSearchProps('patient_name', 'Nhập tên bệnh nhân'),
            sorter: (a, b) => a.patient_name.localeCompare(b.patient_name),
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
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: '10%',
            filters: [
                { text: 'Chờ xác nhận', value: 'Chờ xác nhận' },
                { text: 'Đã xác nhận', value: 'Đã xác nhận' },
                { text: 'Hoàn thành', value: 'Hoàn thành' },
                { text: 'Từ chối', value: 'Từ chối' },
            ],
            onFilter: (value, record) => record.status === value,
            render: (text, record) => {
                let status = '';
                let color = '';
        
                switch (record.status) {
                    case 'Chờ xác nhận':
                        status = 'Chờ xác nhận';
                        color = 'orange'; // Màu cam thể hiện trạng thái đang chờ.
                        break;
                    case 'Đã xác nhận':
                        status = 'Đã xác nhận';
                        color = 'blue'; // Màu xanh dương thể hiện trạng thái đã xử lý.
                        break;
                    case 'Hoàn thành':
                        status = 'Hoàn thành';
                        color = 'green'; // Màu xanh lá thể hiện trạng thái đã hoàn tất.
                        break;
                    case 'Từ chối':
                        status = 'Từ chối';
                        color = 'red'; // Màu đỏ thể hiện trạng thái bị từ chối.
                        break;
                    default:
                        status = 'Không xác định';
                        color = 'gray'; // Màu xám cho trạng thái không rõ ràng.
                }
        
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
