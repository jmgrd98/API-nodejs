const express = require("express");
const router = require("./routes/index");
const db = require('./database/db.js');
const app = express();
db.hasConnection();

app.use(router)
app.use(express.json())

app.listen(3000, () => console.log('Funfando!'))