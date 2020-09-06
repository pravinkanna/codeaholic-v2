const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk.green(`DB Connected on Host ${chalk.blue(connect.connection.host)}`));
    } catch (err) {
        console.log("DB Connection Error:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;