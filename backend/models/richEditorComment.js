
const mongoose = require('mongoose');
const User = require('./userSchema');
const RichEditorQuestion = require('./questionSchema')
const Schema = mongoose.Schema;

const richEditorCommentSchema = new Schema({
    text: {
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
        ref: RichEditorQuestion
    },
    user_name: {
        type: Schema.Types.String,
        ref: User
    },
    rate: {
        type: Array,
        default: []
    }
}, { timestamps: true })
const RichEditorComment = mongoose.model('RichEditorComment', richEditorCommentSchema)

module.exports = RichEditorComment