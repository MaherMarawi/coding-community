const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlware/authMiddlware')
const commentController = require('../controllers/commentController')

router.get('/api/getComments/:id', commentController.GetComments)
router.post('/api/postComment/:id', commentController.NewComment)
router.delete('/api/deleteComment/:id',  commentController.DeleteComment)
router.put('/api/updateComment/:id', requireAuth, commentController.ChangeComment)

module.exports = router