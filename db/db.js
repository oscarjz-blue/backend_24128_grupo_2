const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_db'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err)
        return
    }
    console.log('Connected to the database.')
})


connection.query('CREATE DATABASE IF NOT EXISTS movies_db', (err, results) => {
    if (err) {
      console.error('Error creating database:', err)
      return
    }
    console.log('Database ensured.')

    connection.changeUser({ database: 'movies_db' }, (err) => {
      if (err) {
        console.error('Error switching to movies_db:', err)
        return
      }
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS movies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        director VARCHAR(255) NOT NULL,
        year INT NOT NULL)
    `
    
    connection.query(createTableQuery, (err, results) => {
      if (err) {
        console.error('Error creating table:', err)
        return;
      }
      console.log('Table ensured.')
    })

})}

);

module.exports = connection