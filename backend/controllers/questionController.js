const Question = require('../models/questionSchema')
const Comment = require('../models/commentSchema')

// get  questions

const AllQuestions = (req, res) => {
    Question.find().sort({ createdAt: -1 })
        .then(questions => {
            res.json(questions)
        })
        .catch(err => res.send(err))
}

 // get question

const OneQuestion = (req, res) => {
    Question.findById(req.params.id)
        .then(result => res.send(result))
        .catch( err => res.send(err))
}


const NewQuestion = (req, res) => {
        const question = new Question(req.body)
        // question.user_id = res.locals.user._id
        question.save()
            .then((question) => {
                res.json(question)
            })
            .catch(err => {
                res.send(err)
            })
}

const DeleteQuestion = (req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then((result) => {
            Comment.deleteMany({ question_id: req.params.id })
                .then((response) => { res.send(result) })
                .catch(err => res.send(err))
        })
        .catch(err => res.send(err))
}


const ChangeQuestion = (req, res) => {
        Question.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false})
            .then(result => res.send(result))
            .catch(err => res.send(err))
    
}

module.exports = {
    AllQuestions,
    OneQuestion,
    NewQuestion,
    DeleteQuestion,
    ChangeQuestion
}