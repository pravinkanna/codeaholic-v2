const mongoose = require('mongoose')

//Staff Schema
const StaffSchema = new mongoose.Schema({
    type: String,
    reg_no: String,
    name: String,
    phone_no: String,
    email: String,
    password: String,
    problems: [{ type: mongoose.Types.ObjectId, ref: 'Problem' }],
    date: { type: Date, default: Date.now }
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;