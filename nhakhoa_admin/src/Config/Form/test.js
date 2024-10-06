const loginForm = {
    name: 'loginForm',
    layout: 'vertical',
    fields: [
        {
            title: 'email',
            name: 'email',
            type: 'email',
            rules: [
                {
                    type: 'email',
                    message: 'Email không hợp lệ',
                },
                {
                    required: true,
                    message: 'Email là bắt buộc',
                },
            ],
            size: 'middle',
        },
        {
            title: 'password',
            name: 'password',
            type: 'password',
            rules: [
                {
                    required: true,
                    message: 'Mật khẩu là bắt buộc',
                },
            ],
            size: 'middle',
        },
        {
            title: 'Mô tả ngắn',
            name: 'description',
            type: 'editor',
            style: '',
            className: '',
            height: 400,
            rules: [
                {
                    required: true,
                    message: 'Mô tả ngắn là bắt buộc',
                },
            ],
            size: 'basic'
        }
    ],
    actions: [
        {
            title: 'Hoàn thành',
            type: 'submit',
            className: '',
            style: '',
            property: {
                type: 'primary',
                icon: "fa-regular fa-paper-plane",
            }
        },
        {
            title: 'Làm mới',
            type: 'reset',
            className: '',
            style: '',
            property: {
                type: 'default',
                icon: "fa-solid fa-arrow-rotate-right"
            }
        }
    ]
};

export default loginForm;
