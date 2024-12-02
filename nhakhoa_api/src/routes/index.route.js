const express = require('express');

const uploadController = require('../controllers/UploadController');
const AuthController = require('../controllers/AuthController');

const upload = require('../middleware/upload');
const fetchUser = require('../middleware/fetchUser');
const deleteFile = require('../middleware/deleteFile');
const PositionController = require('../controllers/PositionController');
const ServicesController = require('../controllers/ServicesController');
const NewsController = require('../controllers/NewsController');
const DoctorController = require('../controllers/DoctorController');
const ContactController = require('../controllers/ContactController');
const PriceController = require('../controllers/PriceController');
const BookingController = require('../controllers/BookingController');
const ClinicController = require('../controllers/ClinicController');

function route(app) {
    // image
    app.use('/images', express.static('./src/upload/images'));
    app.post('/upload', upload.single('file'), uploadController.upload, deleteFile, (req, res) => {
        res.status(500).json({ success: false, message: 'Thêm ảnh thất bại, đã xóa ảnh' });
    });
    app.patch('/update-file', uploadController.updateFile);

    // login - signup - get-user
    app.post('/signup', AuthController.signup);
    app.post('/login', AuthController.login);
    app.post('/get-user', fetchUser, AuthController.getUser);
    app.get('/search-user', AuthController.searchUser);

    // position
    app.get('/get-list-position', PositionController.getPositionLst);
    app.post('/get-position-by-id', PositionController.getPositionById);
    app.post('/insert-position', PositionController.insertPosition);
    app.put('/update-position', PositionController.updatePosition);
    app.delete('/delete-position/:id', PositionController.deletePosition);

    //services - serviceDetail
    app.get('/get-all-services', ServicesController.getServices);
    app.get('/get-service-detail/:id', ServicesController.getServiceDetail);
    app.get('/get-top-latest-service', ServicesController.getTopLatestServices);
    app.get('/get-all-services-admin', ServicesController.getServicesAdmin);
    app.post('/insert-service', ServicesController.insertService);
    app.put('/update-service', ServicesController.updateService);
    app.delete('/delete-service/:id', ServicesController.deleteService);

    //news
    app.get('/get-all-news', NewsController.getNews);
    app.get('/get-top-news', NewsController.getTopNews);
    app.get('/get-top-3-news', NewsController.getTop3News);
    app.get('/get-news-by-id/:id', NewsController.getNewsById);
    app.get('/get-all-news-admin', NewsController.getNewsAdmin);
    app.post('/insert-news', NewsController.insertNews);
    app.put('/update-news', NewsController.updateNews);
    app.delete('/delete-news/:id', NewsController.deleteNews);

    //doctor
    app.get('/get-all-doctor', DoctorController.getDoctor);
    app.get('/get-top-4-doctor', DoctorController.getTop4Doctor);
    app.get('/get-doctor-by-id/:id', DoctorController.getDoctorById);
    app.post('/get-doctor-by-time/:id', DoctorController.getDoctorByTime);

    //conatct
    app.post('/add-contact', ContactController.addContact);

    //price
    app.get('/get-price', PriceController.getPrice);

    // booking
    app.post('/insert-booking', BookingController.insertBooking);
    app.get('/get-booking-by-id/:id', BookingController.getBookingById);
    app.get('/get-list-booking', BookingController.getBookingLst);
    app.patch('/change-status-booking', BookingController.changeStatusBooking);

    //clinic
    app.get('/get-list-clinic', ClinicController.getClinicLst);

    // demo
    app.get('/', async (req, res) => {
        res.send('hello');
    });
}

module.exports = route;
