const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const { sequelize } = require('../config');

class ServicesController {

    // [POST] /get-user
    async getServices(req, res) {
        try {
            const userQuery = `
                select * from dc_service
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });
    
            return res.json({
                success: true,
                data:users
            });
        } catch (error) {
            return res.status(500).json({success: false, error: 'Server error' });
        }
    } 
}

module.exports = new ServicesController();
