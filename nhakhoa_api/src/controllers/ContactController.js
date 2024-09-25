const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const { sequelize } = require('../config');

class ContactController {

    // [POST] /add-contact
    async addContact(req, res) {
        try {
            const {
                name,
                email = null,
                phone = null,
                topic = null,
                content = null,
            } = req.body;
            // Tạo ID mới cho người dùng (UUID/GUID)
            const userId = uuidv4();

            // Câu lệnh SQL thêm mới người dùng vào bảng sm_user
            const insertQuery = `
                INSERT INTO dc_contact (id, name, email, phone, topic, content)
                VALUES (:id, :name, :email, :phone, :topic, :content)
            `;

            // Thực thi câu lệnh SQL
            await sequelize.query(insertQuery, {
                replacements: {
                    id: userId,
                    name,
                    email,
                    phone,
                    topic,
                    content,
                },
                type: sequelize.QueryTypes.INSERT,
            });

            res.json({
                success: true,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
        }
    }

}

module.exports = new ContactController();
