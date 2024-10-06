import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle(routes) {
    const location = useLocation();
    
    useEffect(() => {
        const currentRoute = routes.find(route => route.path === location.pathname);
        if (currentRoute && currentRoute.title) {
            document.title = "MediPlus - " + currentRoute.title;
        } else {
            document.title = 'MediPlus - quản trị';
        }
    }, [location, routes]);
}

export default usePageTitle;