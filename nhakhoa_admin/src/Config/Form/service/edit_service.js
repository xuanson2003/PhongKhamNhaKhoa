const serviceForm = {
    name: 'serviceForm',
    layout: 'vertical',
    fields: [
        {
            title: 'Tên dịch vụ',
            name: 'name',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Tên dịch vụ là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 } }, // chiểu dài của label (8 / 24)
            col: 6, // chiểu dài tổng của cả label và input
            size: 'middle',
        },
        {
            title: 'Giá',
            name: 'price',
            type: 'number',
            rules: [
                {
                    required: true,
                    message: 'Giá là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 } },
            col: 6,
            size: 'middle',
        },
        {
            title: 'Tên icon',
            name: 'icon',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Tên icon là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 4 } },
            col: 12,
            size: 'middle',
        },
        {
            title: 'Mô tả',
            name: 'description',
            type: 'textarea',
            size: 'large',
            labelCol: { xs: { span: 4 } },
            rules: [
                {
                    required: true,
                    message: 'Mô tả ngắn là bắt buộc',
                },
            ],
        },
        {
            title: 'Nội dung',
            name: 'content',
            type: 'editor',
            style: '',
            className: '',
            height: 400,
            rules: [
                {
                    required: true,
                    message: 'Nội dung là bắt buộc',
                },
            ],
            size: 'adv'//basic - adv
        }
    ],
    actions: [
        
        {
            title: 'Làm mới',
            type: 'reset',
            className: '',
            style: '',
            property: {
                type: 'default',
                icon: "fa-solid fa-arrow-rotate-right"
            }
        },
        {
            title: 'Cập nhật',
            type: 'submit',
            className: '',
            style: '',
            property: {
                type: 'primary',
                icon: "fa-plus",
            }
        },
    ],
};

export default serviceForm;
