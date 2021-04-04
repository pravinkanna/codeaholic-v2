const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const morgan = require('morgan');
const chalk = require('chalk');

//Load configs
dotenv.config({ path: './config/config.env' });

const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;

const ide = require('./routes/ide');
const user = require('./routes/user');


//Morgan middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Connect to Database
connectDB();

//Cookie parser middleware 
app.use(cookieParser());

//Express body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Express session Middleware
app.use(session({
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api/ide', ide);
app.use('/api/user', user);

if (process.env.NODE_ENV === 'production') {
    // To use Production Build
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Server
app.listen(PORT, console.log(chalk.green(`Server running in ${chalk.blue(process.env.NODE_ENV)} mode on port ${chalk.blue(PORT)}`)))
