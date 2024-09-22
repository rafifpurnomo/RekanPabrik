const conn = require('../config/db_connection')
const bcrypt = require('bcrypt');

const getAllPelamar = () => {
    const SQLQuery = "SELECT * FROM pelamar"
    return conn.execute(SQLQuery)
}

const addPelamar = async (email, plainpassword, role, first_name, last_name) => {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(plainpassword, saltRounds);
    const SQLQuery = "INSERT INTO pelamar (username , password, role, first_name, last_name) VALUES (? ,?, ?, ?, ?)"
    return conn.execute(SQLQuery, [email, hashedPass, role, first_name, last_name]);
}

const searchByEmail = async (email) => {
    const SQLQuery = "SELECT * FROM pelamar WHERE email = ? ";
    return connection.execute(SQLQuery, [email]);
}

module.exports = {
    getAllPelamar,
    addPelamar,
    searchByEmail
}