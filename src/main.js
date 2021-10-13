const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./config/database');
db.connect();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
