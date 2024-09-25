import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AdminContextProvider } from './Context/AdminContext';

// css
import '~/Assets/css/demo.css';
import '~/Assets/css/demo.css.map';
import '~/Assets/css/fonts.css';
import '~/Assets/css/fonts.min.css';
import '~/Assets/css/kaiadmin.css';
import '~/Assets/css/kaiadmin.css.map';
import '~/Assets/css/plugins.css';
import '~/Assets/css/plugins.css.map';
import '~/Assets/css/plugins.min.css';
import '~/Assets/css/bootstrap.min.css';
import '~/Assets/css/kaiadmin.min.css';

// base css
import '~/Style/_base.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hoc/CrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <AdminContextProvider>
            <App />
        </AdminContextProvider>
    </BrowserRouter>,
);

reportWebVitals();
