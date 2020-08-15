const mongoose = require('mongoose');

//Submission Schema
const SubmissionSchema = new mongoose.Schema({
    student_id: { type: mongoose.Types.ObjectId, ref: 'Student' },
    problem_id: { type: mongoose.Types.ObjectId, ref: 'Problem' },
    language: String,
    code: String,
    status: String,
    date: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = Submission;