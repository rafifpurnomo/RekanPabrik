const pelamarModel = require("../models/pelamar");

const getAllPelamar = async (req, res) => {
  try {
    const [data] = await pelamarModel.getAllPelamar();

    if (data.length > 0) {
      res.json({
        massage: "menampilkan data akun pelamar",
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
};

const createAccountPelamar = async (req, res) => {
  const {email, password, first_name, last_name} = req.body;
  const role = "pelamar";
  
  try {
    const [cekUser] = await pelamarModel.searchByEmail(email);
    
    if (cekUser.length > 0) {
      return res.status(400).json({
        message: "email sudah terdaftar",
        success: false,
      });
    }

    await pelamarModel.addPelamar(email, password, role, first_name, last_name);
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = {
  getAllPelamar,
  createAccountPelamar
};
