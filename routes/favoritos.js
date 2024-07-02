const express = require('express')
const router = express.Router()
const favoritosController = require('../controllers/favoritosController')
const upload = require('../middlewares/middleware')


router.get('/', favoritosController.getAllMovies)
router.get('/:id', favoritosController.getMovieById)
router.post('/', upload.single('image'), favoritosController.createMovie)
router.put('/:id', upload.single('image'), favoritosController.updateMovie)
router.delete('/:id', favoritosController.deleteMovie)
module.exports = router