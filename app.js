const express = require("express");
const routes = require("./routes/index");
const db = require('./database/db.js');
const app = express();
db.hasConnection();

app.use(routes)
app.use(express.json())

app.listen(3000, () => console.log('Funfando!'))