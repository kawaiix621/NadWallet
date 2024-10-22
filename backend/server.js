// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const walletRoutes = require('./routes/walletRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/wallet', walletRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
