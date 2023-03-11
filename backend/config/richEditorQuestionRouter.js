const express = require('express')
const router = express.Router()
const controller = require('../controllers/richEditorQuestionController')
const { requireAuth } = require('../middlware/authMiddlware')



//get

router.get('/api/richEditor/getQuestions', controller.AllQuestions)
router.get('/api/richEditor/getQuestion/:id', controller.OneQuestion)

//post
router.post('/api/richEditor/postQuestion',  controller.NewQuestion)

//delete
router.delete('/api/richEditor/deleteQuestion/:id', controller.DeleteQuestion)

//put
router.put('/api/richEditor/updateQuestion/:id',  controller.ChangeQuestion)
router.put('/api/richEditor/rateQuestion/:id',  controller.rateQuestion)


module.exports = router