require('dotenv').config();
const { sequelize } = require('../config');
const { v4: uuidv4 } = require('uuid');

class ClinicController {
    // [GET] /get-list-clinic
    async getClinicLst(req, res) {
        try {
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
}

module.exports = new ClinicController();
