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

    
    async getTop6News(req, res) {
        try {
            const userQuery = `
                SELECT * FROM dc_news ORDER BY view DESC LIMIT 6;
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
    
    //CRUD- Admin
    //[GET] get-all-services-admin
    async getNewsAdmin(req, res) {
        try {
            const newsQuery = `
                select *
                from dc_news ds 
                order by created_at desc
            `;

            const news = await sequelize.query(newsQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: news,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [POST] /insert-news
    async insertNews(req, res) {
        try {
            const { name, description } = req.body; // Lấy thông tin từ req.body
            const id = uuidv4();
    
            const query = `INSERT INTO dc_news (id, name, description) 
                           VALUES (:id, :name, :description)`;
    
            await sequelize.query(query, {
                replacements: { id, name, description },
                type: sequelize.QueryTypes.INSERT,
            });
    
            return res.json({
                success: true,
                data: { id, name, description },
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }
    

    // [PUT] /update-newws
    
    async updateNews(req, res) {
        try {
            const { id, name, description } = req.body; // Lấy thông tin từ req.body
    
            const query = `UPDATE dc_news
                           SET name = :name,
                               description = :description
                           WHERE id = :id;`;
    
            await sequelize.query(query, {
                replacements: { id, name, description },
                type: sequelize.QueryTypes.UPDATE,
            });
    
            return res.json({
                success: true,
                data: { id, name, description },
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }
    
    // [DELETE] /delete-news
    async deleteNews(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).json({ success: false, error: 'User not found' });
            }

            const query = `delete from dc_news where id = :id`;

            await sequelize.query(query, {
                replacements: { id: id },
                type: sequelize.QueryTypes.DELETE,
            });

            return res.json({
                success: true,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }
    //get-dashboard
    async countRecords(req, res) {
        try {
            const tables = ['dc_booking', 'dc_service', 'dc_news'];
            const counts = {};
    
            // Lặp qua từng bảng để đếm số lượng bản ghi
            for (const table of tables) {
                const query = `SELECT COUNT(*) AS count FROM ${table};`;
                const [result] = await sequelize.query(query, {
                    type: sequelize.QueryTypes.SELECT,
                });
                counts[table] = result.count;
            }
    
            return res.json({
                success: true,
                data: counts,
            });
        } catch (error) {
            console.error('Error counting records:', error);
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }
    
}

module.exports = new NewsController();
