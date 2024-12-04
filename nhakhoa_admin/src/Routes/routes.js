import config from '~/Config';
import AccountLst from '~/Pages/AccountLst/AccountLst';
import AddService from '~/Pages/AddService/AddService';
import Contact from '~/Pages/Contact/Contact';
import Dashbroad from '~/Pages/Dashbroad/Dashbroad';
import Login from '~/Pages/Login/Login';
import NewsLst from '~/Pages/NewsLst/NewsLst';
import PositionLst from '~/Pages/PositionLst/PositionLst';
import Profile from '~/Pages/Profile/Profile';
import Register from '~/Pages/Register/Register';
import ServiceLst from '~/Pages/ServiceLst/ServiceLst';
import EditService from '~/Pages/EditService/EditService';
import AddAccount from '~/Pages/AccountLst/AddAccount';
import EditAccount from '~/Pages/AccountLst/EditAccount';
import RegisterLst from '~/Pages/RegisterLst/RegisterLst';
import DoctorLst from '~/Pages/DoctorLst/DoctorLst';
import AddDoctor from '~/Pages/DoctorLst/AddDoctor';
import EditDoctor from '~/Pages/DoctorLst/EditDoctor';

const publicRoutes = [
    { path: config.routes.login, component: <Login />, layout: null, title: "đăng nhập" },
    { path: config.routes.login_2, component: <Login />, layout: null, title: "đăng nhập" },
    { path: config.routes.register, component: <Register />, layout: null, title: "đăng ký" },
];

const privateRoutes = [
    { path: config.routes.dashbroad, component: <Dashbroad />, title: "trang chủ" },
    { path: config.routes.patient_list, component: <></>, title: "danh sách bệnh nhân" },

    { path: config.routes.doctor_list, component: <DoctorLst/>, title: "danh sách bác sĩ" },
    { path: config.routes.add_doctor, component: <AddDoctor/>, title: "thêm mới bác sĩ" },
    { path: config.routes.edit_doctor, component: <EditDoctor />, title: "chỉnh sửa bác sĩ" },


    { path: config.routes.service_list, component: <ServiceLst/> , title: "danh sách dịch vụ" },
    { path: config.routes.add_service, component: <AddService/>, title: "thêm mới dịch vụ" },
    { path: config.routes.edit_service, component: <EditService/>, title: "cập nhật dịch vụ" },

    { path: config.routes.news_list, component: <NewsLst/> , title: "danh sách tin tức" },

    { path: config.routes.profile, component: <Profile />, title: "hồ sơ cá nhân" },

    { path: config.routes.user_list, component: <AccountLst />, title: "danh sách tài khoản" },
    { path: config.routes.user_add, component: <AddAccount />, title: "thêm mới tài khoản" },
    { path: config.routes.user_edit, component: <EditAccount />, title: "chỉnh sửa tài khoản" },

    { path: config.routes.position_list, component: <PositionLst/>, title: "danh sách chức vụ" },

    { path: config.routes.contact_list, component: <Contact/>, title: "danh sách liên hệ" },

    { path: config.routes.register_list, component: <RegisterLst/>, title: "danh sách đặt lịch" }


];

export { publicRoutes, privateRoutes };
