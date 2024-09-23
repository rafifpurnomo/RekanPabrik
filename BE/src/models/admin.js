const conn = require('../config/db_connection')
const bcrypt = require('bcrypt');

const getAllAdmin = () => {
    const SQLQuery = "SELECT * FROM admin"
    return conn.execute(SQLQuery)
}

const addAdmin = async (email, plainpassword, role, first_name, last_name) => {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(plainpassword, saltRounds);
    const SQLQuery = "INSERT INTO admin (username , password, role, first_name, last_name) VALUES (? ,?, ?, ?, ?)"
    return conn.execute(SQLQuery, [email, hashedPass, role, first_name, last_name]);
}

const searchByEmail= async (email) => {
    const SQLQuery = "SELECT * FROM admin WHERE email = ? ";
    return conn.execute(SQLQuery, [email]);
}

module.exports = {
    getAllAdmin,
    addAdmin,
    searchByEmail
}