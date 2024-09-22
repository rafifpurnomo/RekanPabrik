const perusahaanModel = require("../models/perusahaan");

const getAllPerusahaan = async (req, res) => {
    try {
        const [data] = await perusahaanModel.getAllPerusahaan();

        if (data.length > 0) {
            res.json({
              massage: "menampilkan data akun perusahaan",
              data: data,
            });
          } else {
              res.json({
                  massage: "Tidak ada pelamar terdaftar"
              })
          }
    } catch (error) {
        res.status(500).json({
            massage: "error",
            serverMassage: error,
          });
    }
}

const createAccountPerusahaan = async (req, res) => {
    const {email, password, namaPerusahaan} = req.body;
    const role = "perusahaan";
    
    try {
      const [cekPerusahaan] = await perusahaanModel.searchByEmail(email);
      
      if (cekPerusahaan.length > 0) {
        return res.status(400).json({
          message: "email sudah terdaftar",
          success: false,
        });
      }
  
      await perusahaanModel.addPerusahaan(email, password, role, namaPerusahaan);
      res.status(200).json({ message: "perusahaan registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = {
    getAllPerusahaan,
    createAccountPerusahaan
}