const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.DB_URI, () => {
        console.log('Database connected!!!!'.green.bold);
    });
};

module.exports = connectDB;
