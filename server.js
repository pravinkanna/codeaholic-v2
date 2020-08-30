const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db')

//Routes path config
const ide = require('./routes/ide');

//Load configs
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB();

//Morgan middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Express bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/api/ide', ide);

if (process.env.NODE_ENV === 'production') {
    // To use Production Build
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, console.log(`Server started \t Mode: ${process.env.NODE_ENV} PORT: ${PORT}`))