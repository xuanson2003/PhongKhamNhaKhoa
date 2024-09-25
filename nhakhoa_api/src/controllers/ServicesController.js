const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const { sequelize } = require('../config');

class ServicesController {
    // Get get service
    async getServices(req, res) {
        try {
            const userQuery = `
                select name, icon, description,id
                from dc_service ds 
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: users,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    async getServiceDetail(req, res){
        try{
            const { id } = req.params; // Lấy id từ tham số URL
            const serviceDetailQuery=`
                select *
                from dc_service 
                WHERE id = :id
            `;

            const serviceDetail = await sequelize.query(serviceDetailQuery, {
                replacements: { id: id}, // Thay thế :id bằng giá trị id
                type: sequelize.QueryTypes.SELECT,
            });

            if (serviceDetail.length === 0) {
                return res.status(404).json({
                    success: false,
                    error: 'Service not found',
                });
            }
            
            return res.json({
                success: true,
                data: serviceDetail[0], // Trả về dịch vụ đầu tiên
            });
        } catch(error){
            return res.status(500).json({
                success:false,
                error:'server error',
            });
            
        }
    }
}

module.exports = new ServicesController();
