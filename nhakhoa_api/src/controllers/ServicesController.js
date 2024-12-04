require('dotenv').config();
const { sequelize } = require('../config');
const { v4: uuidv4 } = require('uuid');

class ServicesController {
    // Get get service
    async getServices(req, res) {
        try {
            const userQuery = `
                SELECT name, icon, description, id
                FROM dc_service ds
                ORDER BY created_at DESC;

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


    async getServicesTop4(req, res) {
        try {
            const userQuery = `
                SELECT name,avatar,id
                FROM dc_service
                ORDER BY id DESC
                LIMIT 4
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

    //[GET] get-all-services-admin
    async getServicesAdmin(req, res) {
        try {
            const serviceQuery = `
                select *
                from dc_service ds 
                order by created_at desc
            `;

            const service = await sequelize.query(serviceQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: service,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [POST] /insert-service
    async insertService(req, res) {
        try {
            const { name, content, description, price, icon, avatar } = req.body; // Lấy thông tin từ req.body
            const id = uuidv4();

            const query = `INSERT INTO dc_service (id, name,content, description, price, icon, avatar) 
                       VALUES (:id, :name,:content, :description, :price, :icon, :avatar)`;

            await sequelize.query(query, {
                replacements: { id, name, content, avatar, description, price, icon },
                type: sequelize.QueryTypes.INSERT,
            });

            return res.json({
                success: true,
                data: { id, name, content, description, price, icon, avatar },
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [PUT] /update-service

    async updateService(req, res) {
        try {
            const { id, name, description, price, icon } = req.body;

            const query = `UPDATE dc_service
                       SET name = :name,
                           description = :description,
                           price = :price,
                           icon = :icon
                       WHERE id = :id;`;

            await sequelize.query(query, {
                replacements: { id, name, description, price, icon },
                type: sequelize.QueryTypes.UPDATE,
            });

            return res.json({
                success: true,
                data: { id, name, description, price, icon },
            });
        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    }
    // [DELETE] /delete-service
    async deleteService(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).json({ success: false, error: 'User not found' });
            }

            const query = `delete from dc_service where id = :id`;

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
}

module.exports = new ServicesController();
