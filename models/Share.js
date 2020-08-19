const mongoose = require('mongoose');

//Shared Schema
const ShareSchema = new mongoose.Schema({
    language_id: {
        type: String,
        trim: true,
        required: [true, "Please give a Language"]
    },
    source_code: {
        type: String,
        trim: true,
        required: [true, "Please give a valid code"]
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Share', ShareSchema);;