const routes = {
    // public
    login: '/dang-nhap',
    login_2: '/',
    register: '/dang-ky',
    // private
    dashbroad: '/quan-tri',
    patient_list: '/danh-sach-benh-nhan',
    doctor_list: '/danh-sach-bac-si',
    add_doctor: '/them-moi-bac-si',
    service_list: '/danh-sach-dich-vu',
    add_service: '/them-moi-dich-vu',
    profile: '/thong-tin-tai-khoan',
    user_list: '/danh-sach-tai-khoan',
    user_add: '/them-moi-tai-khoan',
    position_list: '/danh-sach-chuc-vu',
    contact_list: '/danh-sach-lien-he',
    news_list:'/danh-sach-tin-tuc',
    edit_service:'/danh-sach-dich-vu/cap-nhat-dich-vu/:id',
    register_list:'/danh-sach-dat-lich'

};

export default routes;
