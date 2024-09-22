const postPekerjaanModel = require('../models/postingPekerjaan');

const getAllPostByIdPerusahaan = async (req, res) => {
    const {idPerusahaan} = req.params;

    try {
        const [data] = await postPekerjaanModel.getAllPostByIDPerusahaan(idPerusahaan);
        if (data.length > 0) {
            res.json({
                message: `Menampilkan data postingan pekerjaan untuk perusahaan dengan ID ${idPerusahaan}`,
                data: data,
              });
        } else {
            res.json({
                message: `Data postingan pekerjaan untuk perusahaan dengan ID ${idPerusahaan} tidak ada`,
                data: data,
              });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error saat memperbarui status pengajuan",
            serverMessage: error,
          });
    }
}

const createdPostinganPekerjaan = async (req, res) => {
    const { idPerusahaan, posisi, lokasi, jobDetails, requirements, status } = req.body;

    try {
        if (!idPerusahaan || !posisi || !lokasi || !jobDetails || !requirements || !status) {
            return res.status(400).json({
                message: "Semua field harus diisi. Pastikan tidak ada field yang kosong.",
            });
        }

        const createdAt = new Date();
        await postPekerjaanModel.addPostPekerjaan(idPerusahaan, posisi, lokasi, jobDetails, requirements, status, createdAt);
        
        const insertedData = {
            idPerusahaan,
            posisi,
            lokasi,
            jobDetails,
            requirements,
            status,
            createdAt
        };
        
        res.status(201).json({
            message: "Postingan pekerjaan berhasil dibuat.",
            data: insertedData
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan saat membuat postingan pekerjaan.",
            serverMessage: error.message,
        });
    }
};


module.exports = {
    getAllPostByIdPerusahaan,
    createdPostinganPekerjaan
}