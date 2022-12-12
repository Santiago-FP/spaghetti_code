const {Sequelize} = require('sequelize');
const config = require('../../config');

const db = new Sequelize({
    dialect: 'postgres',
    username: config.db.user,
    password: config.db.password,
    port: config.db.port,
    host: config.db.host,
    database: config.db.name
})

module.exports = db
