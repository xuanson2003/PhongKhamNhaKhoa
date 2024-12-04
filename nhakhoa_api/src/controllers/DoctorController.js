const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const { sequelize } = require('../config');

class DoctorController {
    // [GET] /get-all-doctor
    async getDoctor(req, res) {
        try {
            const userQuery = `
                select * from sm_user where position_id = '1' 
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            // Cập nhật trường image cho từng user
            const updatedUsers = users.map(user => {
                // Kiểm tra nếu `image` không bắt đầu bằng 'http'
                if (user.image && !user.image.startsWith('http')) {
                    user.image = `${req.protocol}://${req.get('host')}/${user.image}`;
                } else if (!user.image) {
                    user.image = null; // Nếu không có image, gán giá trị null
                }
                return user;
            });

            return res.json({
                success: true,
                data: updatedUsers
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [GET] /get-top-4-doctor
    async getTop4Doctor(req, res) {
        try {
            const userQuery = `
                SELECT * FROM sm_user where position_id = '1' ORDER BY created_at DESC LIMIT 4;
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            const updatedUsers = users.map(user => {
                // Kiểm tra nếu `image` không bắt đầu bằng 'http'
                if (user.image && !user.image.startsWith('http')) {
                    user.image = `${req.protocol}://${req.get('host')}/${user.image}`;
                } else if (!user.image) {
                    user.image = null; // Nếu không có image, gán giá trị null
                }
                return user;
            });

            return res.json({
                success: true,
                data: updatedUsers
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [GET] /get-top-6-doctor
    async getTop6Doctor(req, res) {
        try {
            const userQuery = `
                SELECT id,image,name FROM sm_user where position_id = '1' ORDER BY created_at DESC LIMIT 6;
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });
const updatedUsers = users.map(user => {
                // Kiểm tra nếu `image` không bắt đầu bằng 'http'
                if (user.image && !user.image.startsWith('http')) {
                    user.image = `${req.protocol}://${req.get('host')}/${user.image}`;
                } else if (!user.image) {
                    user.image = null; // Nếu không có image, gán giá trị null
                }
                return user;
            });

            return res.json({
                success: true,
                data: updatedUsers
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

    // [GET] /get-doctor-by-id
    async getDoctorById(req, res) {
        try {
            const id = req.params.id;

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid news ID',
                });
            }

            const newsQuery = `
                SELECT 
                        sm_user.*, 
                        dc_clinic.name AS clinic_name
                    FROM 
                        sm_user
                    JOIN 
                        dc_clinic 
                    ON 
                        sm_user.clinic_id = dc_clinic.id
                    WHERE 
                        sm_user.id = :id;
            `;

            const doctorDetail = await sequelize.query(newsQuery, {
                replacements: { id: id }, // Đảm bảo newsId là kiểu số
                type: sequelize.QueryTypes.SELECT,
            });

            if (!doctorDetail.length) {
                return res.status(404).json({
                    success: false,
                    message: 'News not found',
                });
            }

            return res.json({
                success: true,
                data: doctorDetail[0],
            });
        } catch (error) {
            console.error('Error fetching news:', error);

            return res.status(500).json({
                success: false,
                error: 'Server error',
            });
        }
    }

    async getDoctorByTime(req, res) {
        try {
            const id = req.params.id;
            const { time = null } = req.body;

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid doctor ID',
                });
            }

            if (!time) {
                return res.status(400).json({
                    success: false,
                    message: 'Time parameter is required',
                });
            }

            // Validate the time format (yyyy-mm-dd)
            const datePattern = /^\d{4}-\d{2}-\d{2}$/;
            if (!datePattern.test(time)) {
                return res.status(400).json({
                    success: false,
                    message: 'Time parameter must be in the format yyyy-mm-dd',
                });
            }

            const doctorQuery = `
                SELECT ts.*
                FROM dc_time_slots ts
                JOIN dc_doctor_working_hours dh ON ts.id = dh.time_slot_id
                WHERE dh.user_id = :id AND ts.time = :time;
            `;

            const doctorDetail = await sequelize.query(doctorQuery, {
                replacements: { id: id, time: time },
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: doctorDetail || [],
            });
        } catch (error) {
            console.error('Error fetching doctor:', error);

            return res.status(500).json({
                success: false,
                error: 'Server error',
            });
        }
    }

    // [GET] /get-list-doctor-by-clinic
    async getClinicLst(req, res) {
        try {
            const id = req.params.id;
            const query = `select id, name from dc_clinic`;

            const clinicLst = await sequelize.query(query, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: clinicLst,
            });
        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    }


    //get-doctor-admin
    async getDoctorAdmin(req, res) {
        try {
            const userQuery = `
                select id,name,is_active,gender from sm_user  where position_id='1'
            `;

            const users = await sequelize.query(userQuery, {
                type: sequelize.QueryTypes.SELECT,
            });

            return res.json({
                success: true,
                data: users
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    }

}

module.exports = new DoctorController();
