require('dotenv').config();
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

    //detailService
    async getServiceDetail(req, res) {
        try {
            const { id } = req.params; // Lấy id từ tham số URL
            const serviceDetailQuery = `
                select *
                from dc_service 
                WHERE id = :id
            `;

            const serviceDetail = await sequelize.query(serviceDetailQuery, {
                replacements: { id: id }, // Thay thế :id bằng giá trị id
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
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'server error',
            });
        }
    }

    //Top latest services
    async getTopLatestServices(req, res) {
        try {
            
            const topServiceQuery = `
                SELECT name, id, avatar, created_at
                FROM dc_service
                WHERE created_at IS NOT NULL
                ORDER BY created_at DESC
                LIMIT 3;
            `;

            const topService = await sequelize.query(topServiceQuery, {              
                type: sequelize.QueryTypes.SELECT,
            });

            if (topService.length === 0) {
                return res.status(404).json({
                    success: false,
                    error: 'Service not found',
                });
            }

            return res.json({
                success: true,
                data: topService.slice(0, 3), // Trả về 3 dịch vụ mới nhất
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'server error',
            });
        }
    }
}

module.exports = new ServicesController();
