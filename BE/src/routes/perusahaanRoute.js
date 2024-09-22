const express = require('express');
const router = express.Router();
const perusahaanController = require('../controllers/perusahaanController')

router.get("/getAllPerusahaan", perusahaanController.getAllPerusahaan);
router.post("/createdAccountPerusahaan", perusahaanController.createAccountPerusahaan);

module.exports = router;