const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const { sequelize } = require('../config');

class NewsController {

    // [GET] /get-all-news
    async getNews(req, res) {
        try {
            const userQuery = `
                select * from dc_news ORDER BY created_at desc 
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

    // [GET] /get-top-news
    async getTopNews(req, res) {
        try {
            const userQuery = `
                SELECT * FROM dc_news ORDER BY view DESC LIMIT 3;
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

    // [GET] /get-top-3-news
    async getTop3News(req, res) {
        try {
            const userQuery = `
                SELECT * FROM dc_news ORDER BY created_at DESC LIMIT 3;
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

    // [GET] /get-news-by-id
    async getNewsById(req, res) {
        try {
            const id = req.params.id;

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid news ID',
                });
            }

            const newsQuery = `
                SELECT * FROM dc_news 
                WHERE id = :id
            `;

            const newsDetail = await sequelize.query(newsQuery, {
                replacements: { id: id }, // Đảm bảo newsId là kiểu số
                type: sequelize.QueryTypes.SELECT,
            });

            if (!newsDetail.length) {
                return res.status(404).json({
                    success: false,
                    message: 'News not found',
                });
            }

            return res.json({
                success: true,
                data: newsDetail[0], 
            });
        } catch (error) {
            console.error('Error fetching news:', error); 

            return res.status(500).json({
                success: false,
                error: 'Server error',
            });
        }
    }
    
    
}

module.exports = new NewsController();
