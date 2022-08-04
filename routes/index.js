const express = require("express");
const router = express.Router();
const produtoController = require('../Controllers/produtoController.js');

router.get('/', (req,res) => produtoController.listarProdutos);



module.exports = router;