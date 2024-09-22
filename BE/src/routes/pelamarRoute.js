const express = require('express');
const router = express.Router();
const pelamarController = require('../controllers/pelamarController')

router.get('/getAllPelamar', pelamarController.getAllPelamar);
router.post('/createAccountPelamar', pelamarController.createAccountPelamar);

module.exports = router;