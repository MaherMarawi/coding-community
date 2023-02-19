const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
// const { checkedUser } = require('../middlware/authMiddlware')

router.get('/api/checkUser', controller.checkedUser)
router.post('/api/SignUp', controller.RegisterPage)
router.post('/api/Login', controller.SignIn)
router.get('/api/Logout', controller.SignOut)
router.get('/api/getUsers', controller.Users)
router.get('/api/getUser/:id', controller.oneUser)
router.put('/api/updateUser/:id', controller.updateUser)
module.exports = router