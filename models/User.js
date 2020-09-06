const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

//User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    },
    programs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Save' }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function (next) {
    //Do nothing if the password is not modified
    if (!this.isModified('password'))
        return next();
    //Hashing password if newly created or modified
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err)
            return next(err);
        this.password = hashedPassword;
        next();
    })
})

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err)
        } else {
            if (!isMatch) { // If password not matched
                return cb(null, isMatch, { message: 'Incorrect password' });
            } else { //If password matches
                return cb(null, this);
            }
        }
    })
}

module.exports = mongoose.model('User', UserSchema);;