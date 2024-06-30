const express = require('express')
const router = express.Router()
const userControllerTest = require('../controllers/userControllerTest')
//const upload = require('../middleware/multerConfig')

router.get('/', userControllerTest.getAllUser)
router.get('/:id', userControllerTest.getByIdUser)
router.post('/', userControllerTest.createUser)
router.put('/:id', userControllerTest.updateUser)
router.delete('/:id', userControllerTest.deleteUser)

module.exports = router
