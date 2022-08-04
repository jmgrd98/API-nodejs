const sequelize = require("sequelize")

const DB_NAME = "teste"
const DB_USER = "root"
const DB_PASS = "root"
const DB_CONFIG = {
    "dialect": "mysql",
    "host": "localhost",
    "port": 3000
}

let db = {}
    try {
        db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
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
        hasConnection
    })

    module.exports = db
