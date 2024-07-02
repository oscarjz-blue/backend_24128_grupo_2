const db = require('../db/db')
const upload = require('../middlewares/middleware')

const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM movies'
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener películas:', err)
            res.status(500).json({ error: 'Error al obtener películas' })
            return
        }
        res.json(results)
    })
}

const getMovieById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM movies WHERE id = ?'
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener película:', err)
            res.status(500).json({ error: 'Error al obtener película' })
            return
        }
        res.json(results)
    })
}

const createMovie = (req, res) => {
    const { title, director, year } = req.body
    
    const image = req.file ? req.file.path : null // Asegúrate de que la variable image esté definida
    const sql = 'INSERT INTO movies (title, director, year, image) VALUES (?, ?, ?, ?)'
    db.query(sql, [title, director, year, image], (err, results) => {
        if (err) {
            console.error('Error al crear película:', err)
            res.status(500).json({ error: 'Error al crear película' })
            return
        }
        res.json({ message: 'Movie created', movieId: results.insertId })
    })
}

const updateMovie = (req, res) => {
    const { id } = req.params
    const { title, director, year } = req.body
    const image = req.file ? req.file.path : null
    const sql = 'UPDATE movies SET title = ?, director = ?, year = ?, image = ? WHERE id = ?'
    db.query(sql, [title, director, year, image, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar película:', err)
            res.status(500).json({ error: 'Error al actualizar película' })
            return
        }
        res.json({ message: 'Movie updated' })
    })
}

const deleteMovie = (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM movies WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar película:', err)
            res.status(500).json({ error: 'Error al eliminar película' })
            return;
        }
        res.json({ message: 'Movie deleted' })
    })
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};