const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET_KEY} = require('../config/const')

// creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    // Lấy token từ header Authorizationjjj
    const authHeader = req.headers['authorization'];
    const token = authHeader && (authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader);

    if (!token) {
        return res.status(401).json({ error: 'Token is required for authentication' });
    }

    try {
        const user = jwt.verify(token, SECRET_KEY);
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            // Token hết hạn
            return res.status(401).json({ error: 'Token has expired. Please login again' });
        }
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = fetchUser;
