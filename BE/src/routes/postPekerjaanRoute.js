const express = require('express');
const router = express.Router();
const postPekerjaanController = require('../controllers/postingPekerjaanController');

router.get('/getPost/:idPerusahaan', postPekerjaanController.getAllPostByIdPerusahaan);
router.post('/newPostPekerjaan', postPekerjaanController.createdPostinganPekerjaan);

module.exports = router;