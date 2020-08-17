const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');


//configs
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB();

//Express bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Router definition
const ide = require('./routes/ide');

//Routes
app.use('/api/ide', ide);

// To use Production Build
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, console.log("Server started on PORT:", PORT))