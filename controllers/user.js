const passport = require('passport');
const passportConfig = require('../config/passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Save = require('../models/Save');

const signToken = userID => {
    return JWT.sign({
        iss: "Pravinkanna",
        sub: userID
    }, "Thisisthebestsecretorkeyintheentiremilkywaygalaxy", { expiresIn: "30d" });
}

//@description Create a user
//@route POST /api/user/register
//@access Public
exports.register = async (req, res) => {
    try {
        let errors = []
        const { name, email, password, password2, role } = req.body;

        //Checking  fields not empty
        if (!name || !email || !password) {
            errors.push("Please fill in all fields");
        }

        //Checking  passwords length
        if (password.length < 6) {
            errors.push("Password should be at least 6 characters");
        }

        //Checking  both passwords are same
        if (password !== password2) {
            errors.push("Password and verify password should be same");
        }

        //Checking  fields not empty
        if (errors.length > 0) {
            return res.status(400).json({ message: { msgBody: errors, msgError: true } });
        }

        //Checking if email alredy exist
        const user = await User.findOne({ email: email });
        if (user)
            return res.status(400).json({ message: { msgBody: ["Email already exists"], msgError: true } });

        //Saving user in DB
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: { msgBody: ["Error has occured"], msgError: true } });
    }
}

//@description Login a user
//@route POST /api/user/login
//@access Public
exports.login = async (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, email, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { email, role } });
    }
}


//@description Logout a user
//@route GET /api/user/logout
//@access Private
exports.logout = async (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { email: "", role: "" }, success: true });
}

//@description Save a program
//@route GET /api/user/save
//@access Private
exports.getSaveProgram = async (req, res) => {
    try {
        const document = await User.findById({ _id: req.user._id }).populate('programs')
        res.status(201).json({ programs: document.programs, authenticated: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: { msgBody: ["Error has occurred"], msgError: true } });
    }

}

//@description Save a program
//@route POST /api/user/save
//@access Private
exports.saveProgram = async (req, res) => {
    try {

        const save = new Save(req.body);
        await save.save();
        req.user.programs.push(save);
        await req.user.save();
        res.status(201).json({ message: { msgBody: "Succesfully saved", msgError: false } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: { msgBody: ["Error has occurred"], msgError: true } });
    }
}

//@description Make authenticated in sync with react
//@route POST /api/user/authenticated
//@access Private
exports.authenticated = async (req, res) => {
    try {
        const { name, email, role } = req.user;

        res.status(200).json({ isAuthenticated: true, user: { name, email, role } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: { msgBody: ["Error has occurred"], msgError: true } });
    }
}