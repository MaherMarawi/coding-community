const express = require('express')
const router = express.Router()
const controller = require('../controllers/mailController')

//post
router.post('/api/SendEmail', controller.NewEmail)



module.exports = router