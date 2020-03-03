require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/tbKKA', apiRouter);
app.get('/', (req, res) => res.send(`Backend berjalan di port ${port}!`));

app.listen(process.env.APP_PORT, () => console.log('Backend berjalan di port:',process.env.APP_PORT));



