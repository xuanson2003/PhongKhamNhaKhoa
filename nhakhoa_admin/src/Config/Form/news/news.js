const addNews = {
    name: 'add-postion',
    layout: 'horizontal',
    fields: [
        {
            title: 'Tên tin tức',
            name: 'name',
            type: 'text',
            rules: [
                {
                    required: true,
                    message: 'Tên tin tức là bắt buộc',
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

export default addNews;
