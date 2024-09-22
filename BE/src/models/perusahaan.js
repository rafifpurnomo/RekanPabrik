const conn = require('../config/db_connection')
const bcrypt = require('bcrypt');

const getAllPerusahaan = () => {
    const SQLQuery = "SELECT * FROM perusahaan"
    return conn.execute(SQLQuery)
}

const addPerusahaan = async (email, plainpassword, role, namaPerusahaan) => {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(plainpassword, saltRounds);
    const SQLQuery = "INSERT INTO pelamar (username , password, role, nama_perusahaan) VALUES (? ,?, ?, ?)"
    return conn.execute(SQLQuery, [email, hashedPass, role, namaPerusahaan]);
}

const searchByEmail = async (email) => {
    const SQLQuery = "SELECT * FROM perusahaan WHERE email = ? ";
    return connection.execute(SQLQuery, [email]);
}

module.exports = {
    getAllPerusahaan,
    addPerusahaan,
    searchByEmail
}