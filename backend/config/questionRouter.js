const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')
const { requireAuth } = require('../middlware/authMiddlware')



//get

router.get('/api/getQuestions', controller.AllQuestions)
router.get('/api/getQuestion/:id', controller.OneQuestion)

//post
router.post('/api/postQuestion',  controller.NewQuestion)

//delete
router.delete('/api/deleteQuestion/:id', controller.DeleteQuestion)

//put
router.put('/api/updateQuestion/:id',  controller.ChangeQuestion)
router.put('/api/rateQuestion/:id',  controller.rateQuestion)


module.exports = router