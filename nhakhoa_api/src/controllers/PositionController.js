require('dotenv').config();
const { sequelize } = require('../config');
const { v4: uuidv4 } = require('uuid');

class PositionController {
    // [GET] /get-list-position
    async getPositionLst(req, res) {
        try {
            const query = `select id, name, base_salary, overtime_rate, allowances from dc_position`;

            const positionLst = await sequelize.query(query, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: positionLst,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [POST] /get-position-by-id
    async getPositionById(req, res) {
        try {
            const { id } = req.body;
            const query = `select * from dc_position where id = :id`;

            const position = await sequelize.query(query, {
                replacements: { id },
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: position[0],
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [POST] /insert-position
    async insertPosition(req, res) {
        try {
            const { name, description, base_salary, overtime_rate, allowances } = req.body;
            const id = uuidv4();

            const query = `insert into dc_position (id, name, description, base_salary, overtime_rate, allowances) 
                            values ( :id, :name, :description, :base_salary, :overtime_rate, :allowances)`;

            await sequelize.query(query, {
                replacements: { id, name, description, base_salary, overtime_rate, allowances },
                type: sequelize.QueryTypes.INSERT,
            });

            return res.json({
                success: true,
                data: { id, name, description, base_salary, overtime_rate, allowances }
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [PUT] /update-position
    async updatePosition(req, res) {
        try {
            const { id, name, description, base_salary, overtime_rate, allowances } = req.body;

            const query = `UPDATE dc_position
                            SET name = :name,
                                description = :description,
                                base_salary = :base_salary,
                                overtime_rate = :overtime_rate,
                                allowances = :allowances
                            WHERE id = :id;`;

            await sequelize.query(query, {
                replacements: { id, name, description, base_salary, overtime_rate, allowances },
                type: sequelize.QueryTypes.UPDATE,
            });

            return res.json({
                success: true,
                data: { id, name, description, base_salary, overtime_rate, allowances }
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [DELETE] /delete-position
    async deletePosition(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).json({ success: false, error: 'User not found' });
            }

            const query = `delete from dc_position where id = :id`;

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

module.exports = new PositionController();
