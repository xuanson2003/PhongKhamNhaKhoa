const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/DentalClinic');

async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { connectDb, sequelize };
