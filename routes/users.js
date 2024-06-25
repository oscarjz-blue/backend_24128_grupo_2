const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
//const upload = require('../middleware/multerConfig')

router.get('/', userController.getAllUser)
router.get('/:id', userController.getByIdUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
