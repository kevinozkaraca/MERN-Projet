const express = require('express');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();
PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
