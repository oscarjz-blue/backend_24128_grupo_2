const mysql = require('mysql2')
var connection = ''
const PORT = process.env.PORT || 3000
// conexion con MySql en Local
if (PORT == 3000) {
    console.log('Servidor en puerto >>>', PORT)
    console.log('Conexion con base de datos local')
    const localMySql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movies_db'
    })
    localMySql.connect((err) => {
        if (err) {
            console.log('Error connecting to the database:', err)
            return
        }
        console.log('Connected to the database')
    })
    connection = localMySql
}
// conexion con MySql en la Nube
if (PORT == 10000) {
    console.log('Servidor en puerto >>> ', PORT)
    console.log('Conexion con base de datos en la nube')
    const nubeMysql = mysql.createConnection({
        host: 'blbi19fk4lrij7poczid-mysql.services.clever-cloud.com',
        user: 'ur4ijn8gmbfvu9qs',
        password: 'uXmQ7g4Yif6PfW0MWUPQ',
        database: 'blbi19fk4lrij7poczid'
    })
    nubeMysql.connect((err) => {
        if (err) {
            console.log('Error connecting to the database:', err)
            return
        }
        console.log('Connected to the database')
    })
    connection = nubeMysql
}

module.exports = connection

