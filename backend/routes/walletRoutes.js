// backend/routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.post('/receive', walletController.receive);
router.post('/transfer', walletController.transfer);
router.get('/balance/:address', walletController.getBalance);
router.get('/history/:address', walletController.getTransactionHistory);

module.exports = router;
