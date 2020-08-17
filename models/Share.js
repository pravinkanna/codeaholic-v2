const mongoose = require('mongoose');

//Shared Schema
const ShareSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
    },
    language_id: {
        type: String,
        trim: true,
        required: [true, "Please give a Language"]
    },
    source_code: {
        type: String,
        required: [true, "Please give a valid code"]
    },
    stdin: {
        type: String,
        required: [true, "Please give a valid input"]
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Share', ShareSchema);;