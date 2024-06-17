const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./models');

dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Stonks!');
});

db.sequelize.sync().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
});