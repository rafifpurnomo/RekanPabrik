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

module.exports = {
  getAllPelamar,
};
