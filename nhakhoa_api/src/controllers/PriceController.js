const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const { sequelize } = require('../config');

class PriceController {
    // Get get service
    async getPrice(req, res) {
        try {
            const priceQuery = `
                select name,price,id
                from dc_service ds 
            `;

            const prices = await sequelize.query(priceQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: prices,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    
}

module.exports = new PriceController();
