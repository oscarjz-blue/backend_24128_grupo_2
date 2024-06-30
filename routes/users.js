const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get("/user/", userController.renderUsers);
router.post("/user/add", userController.createUsers);
router.get("/user/update/:id", userController.editUser);
router.post("/user/update/:id", userController.updateUser);
router.get("/user/delete/:id", userController.deleteUser);

module.exports = router
