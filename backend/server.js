const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();
PORT = process.env.PORT;

app.use("/api/user", userRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

