const Produto = require('../models')

const produtoController = {
    listarProdutos:(req, res) => {
        res.json([{nome: "Produto 1"}, {nome: "Produto 2"}])
    },
    
    async cadastrarProduto(req, res) {
        const {nome, preco, quantidade} = req.body
        const novoProduto = await Produto.create({
            nome,
            preco,
            quantidade
        })
        res.json(novoProduto)
    }
}

module.exports = produtoController