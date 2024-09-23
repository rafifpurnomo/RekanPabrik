const conn = require('../config/db_connection')

const getAllPostByIDPerusahaan = (idPerusahaan) => {
    const SQLQuery = "SELECT * FROM posting_pekerjaan WHERE id_perushaan = ?"
    return conn.execute(SQLQuery, [idPerusahaan])
}

const addPostPekerjaan = (idPerusahaan, posisi, lokasi, jobDetails, requirements, status, createdAt) =>  {
    const SQLQuery = "INSERT INTO posting_pekerjaan(id_perusahaan, posisi, lokasi, job_details, requirements, status, createdAt) VALUES (?,?,?,?,?,?,?)"
    return conn.execute(SQLQuery, [idPerusahaan, posisi, lokasi, jobDetails, requirements, status, createdAt]);
}

const deletePostingan = (idPostingan) => {
    const SQLQuery = "DELETE FROM posting_pekerjaan WHERE id_postingan = ?"
    return conn.execute(SQLQuery, [idPostingan])
}

module.exports = {
    getAllPostByIDPerusahaan,
    addPostPekerjaan,
    deletePostingan,
}