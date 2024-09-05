import config from '~/Config';
import Home from '~/Pages/Home/Home';
import Contact from '~/Pages/Contact/Contact';

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.home_1, component: <Home /> },
    { path: config.routes.contact, component: <Contact /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
