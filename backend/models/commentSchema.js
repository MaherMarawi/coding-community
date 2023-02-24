
const mongoose = require('mongoose');
const User = require('./userSchema');
const Question = require('./questionSchema')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
        minlength: 1
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: Question
    },
    user_name: {
        type: Schema.Types.String,
        ref: User
    },
    userCode: {
        type: String
    },
    rate: {
        type: Array,
        default: []
    }
}, { timestamps: true })
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment