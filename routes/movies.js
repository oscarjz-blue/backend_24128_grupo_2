const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const upload = require('../middlewares/middleware')


router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)
router.post('/', upload.single('image'), movieController.createMovie)
router.put('/:id', upload.single('image'), movieController.updateMovie)
router.delete('/:id', movieController.deleteMovie)
module.exports = router