const addPostion = {
    name: 'add-postion',
    layout: 'horizontal',
    fields: [
        {
            title: 'Tên chức vụ',
            name: 'name',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Tên chức vụ là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 }},
            col: 6,
            size: 'middle',
        },
        {
            title: 'Lương cơ bản',
            name: 'base_salary',
            type: 'number',
            rules: [
                {
                    required: true,
                    message: 'Lương cơ bản là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 }},
            col: 6,
            size: 'middle',
        },
        {
            title: 'Lương tăng ca (theo giờ)',
            name: 'overtime_rate',
            type: 'number',
            rules: [
                {
                    required: true,
                    message: 'Lương tăng ca là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 }},
            col: 6,
            size: 'middle',
        },
        {
            title: 'Phụ cấp (tháng)',
            name: 'allowances',
            type: 'number',
            rules: [
                {
                    required: true,
                    message: 'Phụ cấp là bắt buộc',
                },
            ],
            labelCol: { xs: { span: 8 }},
            col: 6,
            size: 'middle',
        },
        {
            title: 'Mô tả',
            name: 'description',
            type: 'textarea',
            size: 'large',
            labelCol: { xs: { span: 4 }},
        },
        
    ],
    actions: [
        // {
        //     title: 'Làm mới',
        //     type: 'reset',
        //     className: '',
        //     style: '',
        //     property: {
        //         type: 'default',
        //         icon: 'fa-solid fa-arrow-rotate-right',
        //     },
        // },
        // {
        //     title: 'Thêm',
        //     type: 'submit',
        //     className: '',
        //     style: '',
        //     property: {
        //         type: 'primary',
        //         icon: 'fa-solid fa-plus',
        //     },
        // },
    ],
};

export default addPostion;
