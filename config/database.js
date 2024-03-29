const { Sequelize } = require('sequelize');

const dialect = 'postgres';
const host = process.env.DB_HOST || 'localhost';
const database = process.env.DB_NAME || 'postgres';
const username = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASS || 'postgres';

module.exports = new Sequelize(database, username, password, {host, dialect});
