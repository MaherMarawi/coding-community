

const mongoose = require('mongoose');

const User = require('./userSchema');

const Schema = mongoose.Schema;

const richEditorQuestionSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Please write a title'],
        minlength: 1
    },
    comments_count: {
        type: Number,
        default: 0
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    user_name: {
        type: Schema.Types.String,
        ref: User
    },
    comment_id: {
        type: String
    },
    rate: {
        type: Array,
        default: []
    }
}, { timestamps: true })

const RichEditorQuestion = mongoose.model('RichEditorQuestion', richEditorQuestionSchema)

module.exports = RichEditorQuestion