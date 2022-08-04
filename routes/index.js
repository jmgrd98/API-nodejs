const express = require("express")
const routes = express.Router()
const produtoController = require('../Controllers/produtoController')

routes.get('/', (req,res) => produtoController.listarProdutos)


module.exports = routes