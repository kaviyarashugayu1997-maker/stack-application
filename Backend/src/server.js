require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_DB_NAME, PORT } = process.env;
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:27017/${MONGO_DB_NAME}?authSource=admin`;

mongoose.connect(MONGO_URI)
    .then(() => console.log("Success: Connected to MongoDB Container"))
    .catch(err => console.error("Error: DB Connection Failed", err));

app.get('/status', (req, res) => {
    res.json({ message: "Inventory API Online", db_state: "Connected" });
});

app.listen(PORT || 5000, () => console.log(`Backend running on ${PORT}`));
