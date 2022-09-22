const Sequelize = require("sequelize")

const DB_NAME = "projeto_gama"
const DB_USER = "postgres"
const DB_PASS = "root"
const DB_CONFIG = {
    "dialect": "postgres",
    "host": "localhost",
    "port": 5432
}

let db = {}
    try {
        db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
    }
    catch(error){
        console.error("Error!!!")
    }

    async function hasConnection(){
        try {
            await db.authenticate()
            console.log('Working!')
        } catch (error) {
            console.error('Error!')
        }
    }

    Object.assign(db, {
        hasConnection,
    })

    module.exports = db
