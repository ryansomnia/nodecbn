require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(process.env.APP_PORT);
console.log('Backend berjalan di port:',process.env.APP_PORT);



