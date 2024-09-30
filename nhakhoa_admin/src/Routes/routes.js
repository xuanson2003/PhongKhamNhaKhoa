import config from '~/Config';
import AccountLst from '~/Pages/AccountLst/AccountLst';
import Contact from '~/Pages/Contact/Contact';
import Dashbroad from '~/Pages/Dashbroad/Dashbroad';
import Login from '~/Pages/Login/Login';
import NewsLst from '~/Pages/NewsLst/NewsLst';
import PositionLst from '~/Pages/PositionLst/PositionLst';
import Profile from '~/Pages/Profile/Profile';
import Register from '~/Pages/Register/Register';
import ServiceLst from '~/Pages/ServiceLst/ServiceLst';

const publicRoutes = [
    { path: config.routes.login, component: <Login />, layout: null, title: "đăng nhập" },
    { path: config.routes.login_2, component: <Login />, layout: null, title: "đăng nhập" },
    { path: config.routes.register, component: <Register />, layout: null, title: "đăng ký" },
];

const privateRoutes = [
    { path: config.routes.dashbroad, component: <Dashbroad />, title: "trang chủ" },
    { path: config.routes.patient_list, component: <></>, title: "danh sách bệnh nhân" },
    { path: config.routes.doctor_list, component: <></>, title: "danh sách bác sĩ" },
    { path: config.routes.add_doctor, component: <></>, title: "thêm mới bác sĩ" },
    { path: config.routes.service_list, component: <ServiceLst/> , title: "danh sách dịch vụ" },
    { path: config.routes.news_list, component: <NewsLst/> , title: "danh sách tin tức" },
    { path: config.routes.add_service, component: <></>, title: "thêm mới dịch vụ" },
    { path: config.routes.profile, component: <Profile />, title: "hồ sơ cá nhân" },
    { path: config.routes.user_list, component: <AccountLst />, title: "danh sách tài khoản" },
    { path: config.routes.position_list, component: <PositionLst/>, title: "danh sách chức vụ" },
    { path: config.routes.contact_list, component: <Contact/>, title: "danh sách liên hệ" },
];

export { publicRoutes, privateRoutes };
