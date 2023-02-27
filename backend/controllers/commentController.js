
const Comment = require('../models/commentSchema')
const Question = require('../models/questionSchema')

// const GetComments = (req, res) => {
//     Comment.find()
//         .then( result => res.send(result))
//         .catch( err => res.send(err))
// }

const GetComments = (req, res) => {
    Comment.find({ question_id: req.params.id }).sort({ createdAt: -1 })
        .then(response => res.status(200).send(response))
        .catch(err => res.status(404).send(err))

}

const NewComment = (req, res) => {
    const comment = new Comment(req.body)
    comment.question_id = req.params.id
    comment.save()
        .then((comment) => {
            Question.findById(req.params.id)
                .then(question => {
                    question.comments_count = question.comments_count+1
                    question.save()
                })
            res.status(200).send(comment)
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

const DeleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((comment) => {
            Question.findById({ _id: comment.question_id })
                .then(question => {
                    question.comments_count = question.comments_count-1
                    question.save()
                })
            res.status(200).send('Comment Removed') 
        })
        .catch(err => res.status(404).send(err))
}

const ChangeComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((result) => {
            res.status(200).send(result)
        })
        .catch(err => res.status(404).send(err))

}


module.exports = {
    GetComments,
    NewComment,
    DeleteComment,
    ChangeComment
}