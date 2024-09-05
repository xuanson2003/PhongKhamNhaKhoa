import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// css
import '~/Assets/css/bootstrap.min.css';
import '~/Assets/css/nice-select.css';
import '~/Assets/css/font-awesome.min.css';
import '~/Assets/css/icofont.css';
import '~/Assets/css/slicknav.min.css';
import '~/Assets/css/owl-carousel.css';
import '~/Assets/css/datepicker.css';
import '~/Assets/css/magnific-popup.css';
import '~/Assets/css/animate.min.css';
import '~/Assets/css/normalize.css';
import '~/Assets/css/style.css';
import '~/Assets/css/responsive.css';
// base css
import '~/Style/_base.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
