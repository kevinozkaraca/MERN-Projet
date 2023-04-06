const express = require('express');
require('dotenv').config({ path: './config/.env' });
const app = express();
PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});