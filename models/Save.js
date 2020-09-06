const mongoose = require('mongoose')

//User Schema
const SaveSchema = new mongoose.Schema({
    program: {
        type: String,
        required: true,
    },
    languageId: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Save', SaveSchema);;