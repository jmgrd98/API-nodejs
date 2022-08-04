const produtoController = {
    listarProdutos:(req, res) => {
        res.json([{nome: "Produto 1"}, {nome: "Produto 2"}])
    }
}

module.exports = produtoController