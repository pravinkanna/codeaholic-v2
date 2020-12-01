const mongoose = require('mongoose')

//User Schema
const SaveSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    language_id: {
        type: Number,
        required: true,
    },
    source_code: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Save', SaveSchema);;