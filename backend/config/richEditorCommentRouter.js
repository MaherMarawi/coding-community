const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlware/authMiddlware')
const commentController = require('../controllers/richEditorCommentController')

router.get('/api/richEditor/getComments/:id', commentController.GetComments)
router.post('/api/richEditor/postComment/:id', commentController.NewComment)
router.delete('/api/richEditor/deleteComment/:id',  commentController.DeleteComment)
router.put('/api/richEditor/updateComment/:id', commentController.ChangeComment)

module.exports = router