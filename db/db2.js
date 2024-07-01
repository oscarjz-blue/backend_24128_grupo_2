const mysql = require("mysql2/promise");
var poolCon = ''
const PORT = process.env.PORT || 3000
if (PORT == 3000) {
    console.log("Creating connection pool...")
    console.log('Conexion con base de datos local')
    const poolLocal = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movies_db'
    })
    poolCon = poolLocal
}

if (process.env.PORT == 10000) {
    console.log("Creating connection pool...")
    console.log('Conexion con base de datos en la nube')
    const poolNube = mysql.createPool({
        host: 'blbi19fk4lrij7poczid-mysql.services.clever-cloud.com',
        user: 'ur4ijn8gmbfvu9qs',
        password: 'uXmQ7g4Yif6PfW0MWUPQ',
        database: 'blbi19fk4lrij7poczid'
    })
    poolCon = poolNube
}

module.exports = poolCon;


