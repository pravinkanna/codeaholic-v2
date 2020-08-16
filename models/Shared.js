const mongoose = require('mongoose');

//Shared Schema
const SharedSchema = new mongoose.Schema({
    language: String,
    code: String,
    date: { type: Date, default: Date.now }
});

const Shared = mongoose.model('Shared', SharedSchema);
module.exports = Shared;