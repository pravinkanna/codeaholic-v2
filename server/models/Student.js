const mongoose = require('mongoose')

//Student Schema
const StudentSchema = new mongoose.Schema({
    type: String,
    reg_no: String,
    name: String,
    phone_no: String,
    email: String,
    password: String,
    solutions: [{ type: mongoose.Types.ObjectId, ref: 'Solution' }],
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;