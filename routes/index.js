const express = require("express");
const routes = express.Router();
const produtoController = require('../Controllers/produtoController.js');

routes.get('/produto/lista', (req,res) => produtoController.listarProdutos);
routes.post('/produto/cadastrar', (req, res) => produtoController.cadastrarProduto)


module.exports = routes;