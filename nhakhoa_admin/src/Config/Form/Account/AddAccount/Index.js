const addAccount = {
    name: 'add-account',
    layout: 'horizontal',
    fields: [
        {
            title: 'Email',
            name: 'email',
            type: 'input',
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
            col: 6,
            size: 'middle',
        },
        {
            title: 'Họ tên',
            name: 'name',
            type: 'input',
            rules: [
                {
                    required: true,
                    message: 'Họ tên là bắt buộc',
                },
            ],
            size: 'middle',
            col: 6,
        },
        {
            title: 'Mật khẩu',
            name: 'password',
            type: 'password',
            rules: [
                {
                    required: true,
                    message: 'Mật khẩu là bắt buộc',
                },
            ],
            size: 'middle',
            col: 6,
        },
        {
            title: 'Chức vụ',
            name: 'position_id',
            type: 'select',
            rules: [
                {
                    required: true,
                    message: 'Chức vụ là bắt buộc',
                },
            ],
            col: 6,
            size: 'middle',
            options: [
                {
                    value: '1',
                    label: 'Bác sĩ'
                },
                {
                    value: '2',
                    label: 'Nhân viên vệ sinh'
                },
            ]
        },
        {
            title: 'Giới tính',
            name: 'gender',
            type: 'select',
            rules: [
                {
                    required: true,
                    message: 'Giới tính là bắt buộc',
                },
            ],
            col: 6,
            size: 'middle',
            options: [
                {
                    value: 'nam',
                    label: 'Nam'
                },
                {
                    value: 'nữ',
                    label: 'Nữ'
                },
            ]
        },
        {
            title: 'Điện thoại',
            name: 'phone',
            type: 'input',
            rules: [
                {
                    required: true,
                    message: 'Điện thoại là bắt buộc',
                },
            ],
            col: 6,
            size: 'middle',
        },
        {
            title: 'Địa chỉ',
            name: 'address',
            type: 'input',
            rules: [
                {
                    required: true,
                    message: 'Địa chỉ là bắt buộc',
                },
            ],
            col: 6,
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
                icon: 'fa-solid fa-arrow-rotate-right',
            },
        },
        {
            title: 'Thêm mới',
            type: 'submit',
            className: '',
            style: '',
            property: {
                type: 'primary',
                icon: 'fa-solid fa-plus',
            },
        },
    ],
};

export default addAccount;
