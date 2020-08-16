const mongoose = require('mongoose');

//Staff Schema
const AdminSchema = new mongoose.Schema({
    type: String,
    username: String,
    name: String,
    phone_no: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
});


const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;