const bcrypt = require('bcryptjs');
const User = require('../models/User');

//@description Create a user
//@route POST /api/user/register
//@access Public
exports.register = async (req, res, next) => {
    try {
        let errors = []
        const { name, email, password } = req.body;

        //Checking  fields not empty
        if (!name || !email || !password) {
            errors.push({ msg: "Please fill in all fields" });
        }

        //Checking  passwords length
        if (password.length < 6) {
            errors.push({ msg: "Password should be at least 6 characters" });
        }

        //Checking  fields not empty
        if (errors.length > 0) {
            res.status(400).send(errors)
        }

        //hashing password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        const user = await newUser.save();
        console.log(user);
        res.status(201).send("Registered");
    } catch (err) {
        console.log(err);
        res.status(400).send("Not Registered");
    }
}

//@description Login a user
//@route GET /api/user/login
//@access Public
exports.login = async (req, res, next) => {
    // const { name, email, password, password2 } = req.body;
    console.log(req.body);
    res.status(200).send("login");
}


//@description Logout a user
//@route POST /api/user/logout
//@access Private
exports.logout = async (req, res, next) => {
    res.status(200).send("logout");
}
