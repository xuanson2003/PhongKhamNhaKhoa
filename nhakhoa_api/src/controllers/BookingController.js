require('dotenv').config();
const { sequelize } = require('../config');
const { v4: uuidv4 } = require('uuid');

class BookingController {
    // [GET] /get-list-booking
    async getBookingLst(req, res) {
        try {
            const query = `select id, doctor_id, patient_name, created_at, status from dc_booking`;

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

    // [PATCH] /change-status-booking
    async changeStatusBooking(req, res) {
        try {
            const {id, status = null} = req.body;
            const query = `update dc_booking set status = :status where id = :id `;

            const response = await sequelize.query(query, {
                replacements: { id, status },
                type: sequelize.QueryTypes.UPDATE,
            });

            return res.json({
                success: true,
                data: {id, status},
            });
        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    }

    // [GET] /get-booking-by-id
    async getBookingById(req, res) {
        try {
            const id = req.params.id;
            const query = `select * from dc_booking where id = :id`;

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

    // [POST] /insert-booking
    async insertBooking(req, res) {
        try {
            const {
                status = null,
                doctor_id = null,
                patient_name = null,
                booking_date = null,
                booking_time = null,
                notes = null,
                created_at = null,
                updated_at = null,
                booking_email = null,
                booking_phone = null,
                clinic_id = null,
                booking_sex = null,
            } = req.body;
            const id = uuidv4();

            const query = `INSERT INTO public.dc_booking
                            (id, status, doctor_id, patient_name, booking_date, booking_time, notes, created_at, updated_at, booking_email, booking_phone, clinic_id, booking_sex)
                            VALUES(:id, :status, :doctor_id, :patient_name, :booking_date, :booking_time, :notes, now(), now(), :booking_email, :booking_phone, :clinic_id, :booking_sex);`;

            await sequelize.query(query, {
                replacements: {
                    id,
                    status,
                    doctor_id,
                    patient_name,
                    booking_date,
                    booking_time,
                    notes,
                    created_at,
                    updated_at,
                    booking_email,
                    booking_phone,
                    clinic_id,
                    booking_sex,
                },
                type: sequelize.QueryTypes.INSERT,
            });

            return res.json({
                success: true,
                data: {
                    id,
                    status,
                    doctor_id,
                    patient_name,
                    booking_date,
                    booking_time,
                    notes,
                    created_at,
                    updated_at,
                    booking_email,
                    booking_phone,
                    clinic_id,
                    booking_sex,
                },
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: error });
        }
    }
}

module.exports = new BookingController();
