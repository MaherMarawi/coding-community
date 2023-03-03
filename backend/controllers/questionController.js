const Question = require('../models/questionSchema')
const Comment = require('../models/commentSchema')
const handelErrors = (err) => {
    //console.log(err.message, err.code)

    let errors = { title: '', description: '' }

    
    if (err.errors.title.properties.path == "title") {
        errors.title = err.errors.title.properties.message
        return errors
    }
    if (err.errors.title.properties.path == "description") {
        errors.description = err.errors.title.properties.message
        return errors
    }
    // if (err.message == 'password is incorrect') {
    //     errors.password = 'Password is incorrect'
    //     return errors
    // }
    // if (err.message == 'please enter your email') {
    //     errors.email = 'Please enter your email'
    //     return errors
    // }
}
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
                const errors = handelErrors(err)
                res.send({errors})
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
        Question.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(result => {res.send(result)})
            .catch(err => res.send(err))
}

const rateQuestion = (req, res) => {
    Question.findByIdAndUpdate(req.params.id, req.body, {new: true, timestamps: false})
        .then(result => {res.send(result)})
        .catch(err => res.send(err))
}

module.exports = {
    AllQuestions,
    OneQuestion,
    NewQuestion,
    DeleteQuestion,
    ChangeQuestion,
    rateQuestion
}