// backend/controllers/walletController.js
const walletService = require('../services/walletService');

exports.receive = async (req, res) => {
  const { address, amount } = req.body;
  // Logic to handle receiving tokens
  // Use walletService to interact with blockchain
};

exports.transfer = async (req, res) => {
  const { from, to, amount, token } = req.body;
  // Logic to handle transferring tokens
  // Use walletService to interact with blockchain
};

exports.getBalance = async (req, res) => {
  const { address } = req.params;
  const balance = await walletService.getBalance(address);
  res.json({ balance });
};

exports.getTransactionHistory = async (req, res) => {
  const { address } = req.params;
  const history = await walletService.getTransactionHistory(address);
  res.json({ history });
};
