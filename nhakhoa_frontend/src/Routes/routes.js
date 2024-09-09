import config from '~/Config';
import Home from '~/Pages/Home/Home';
import Contact from '~/Pages/Contact/Contact';
import DoctorList from '~/Pages/DoctorList/DoctorList';
import DoctorDetail from '~/Pages/DoctorDetail/DoctorDetail';
import Services from '~/Pages/Services/Services';
import ServiceDetail from '~/Pages/ServiceDetail/ServiceDetail';
 

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.home_1, component: <Home /> },
    { path: config.routes.contact, component: <Contact /> },
    { path: config.routes.doctor_list, component: <DoctorList /> },
    { path: config.routes.doctor_detail, component: <DoctorDetail /> },
    { path: config.routes.services, component: <Services /> },
    { path: config.routes.service_detail, component: <ServiceDetail /> },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
