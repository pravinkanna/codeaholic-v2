const mongoose = require('mongoose');
const Submission = require('../models/Submission')

//Problem Schema
const problemSchema = new mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'Staff' },
    name: String,
    difficulty: String,
    statement: String,
    input_format: String,
    constraints: String,
    output_format: String,
    sample_testcases: [{ input: String, output: String }],
    hidden_testcases: [{ input: String, output: String }],
    tags: [String],
    submissions: [{ type: mongoose.Types.ObjectId, ref: 'Submission' }],
    date: { type: Date, default: Date.now }
});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;       