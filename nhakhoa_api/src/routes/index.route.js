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
    app.get('/get-list-position', PositionController.getPositionLst)
    app.post('/insert-position', PositionController.insertPosition)
    app.put('/update-position', PositionController.updatePosition)
    app.delete('/delete-position/:id', PositionController.deletePosition)
    
    //services - serviceDetail
    app.get('/get-all-services', ServicesController.getServices);
    app.get('/get-service-detail/:id', ServicesController.getServiceDetail);

    //news
    app.get('/get-all-news', NewsController.getNews);
    app.get('/get-top-news', NewsController.getTopNews);
    app.get('/get-top-3-news', NewsController.getTop3News);
    app.get('/get-news-by-id/:id', NewsController.getNewsById);

    //doctor
    app.get('/get-all-doctor', DoctorController.getDoctor);
    app.get('/get-top-4-doctor', DoctorController.getTop4Doctor);

    //conatct
    app.post('/add-contact', ContactController.addContact);

    // demo
    app.get('/', async (req, res) => {
        res.send('hello');
    });
}

module.exports = route;
