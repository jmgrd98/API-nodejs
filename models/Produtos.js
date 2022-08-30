const { DataTypes } = require('sequelize/types')
const { ModuleResolutionKind } = require('typescript')
const db = require('../database')
const Produtos = db.define('Produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: DataTypes.FLOAT
    },
    quantidade:{
        type: DataTypes.INTEGER
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updateAt:{
        type: DataTypes.DATE
    }
},
    {
    tableName : "Produtos",
    }
)

module.exports = Produtos