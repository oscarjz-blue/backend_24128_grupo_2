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
        host: 'sql113.infinityfree.com',
        user: 'if0_36804421',
        password: 'cursonode',
        database: 'if0_36804421_movies_db'
    })
    poolCon = poolNube
}

module.exports = poolCon;


