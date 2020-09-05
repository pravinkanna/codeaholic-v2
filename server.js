const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const chalk = require('chalk');

const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3002;

const ide = require('./routes/ide');
const auth = require('./routes/auth');

//Load configs
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport);

//Connect to Database
connectDB();

//Express body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cookie parser middleware 
app.use(cookieParser());

//Morgan middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Express session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

}))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/ide', ide);
app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
    // To use Production Build
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Server
app.listen(PORT, console.log(chalk.green(`Server running in ${chalk.blue(process.env.NODE_ENV)} mode on port ${chalk.blue(PORT)}`)))