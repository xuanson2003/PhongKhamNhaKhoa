const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const { sequelize } = require('../config');

class DoctorController {

    // [GET] /get-all-doctor
    async getDoctor(req, res) {
        try {
            const userQuery = `
                select id,address,image,name,description from sm_user  
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

     // [GET] /get-top-4-doctor
     async getTop4Doctor(req, res) {
        try {
            const userQuery = `
                SELECT image FROM sm_user ORDER BY created_at DESC LIMIT 4;
            `;

            const news = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });
    
            return res.json({
                success: true,
                data:news
            });
        } catch (error) {
            return res.status(500).json({success: false, error: 'Server error' });
        }
    } 

}

module.exports = new DoctorController();
