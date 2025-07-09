const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const resultRoutes = require("./routes/resultRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.use("/api/results", resultRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
