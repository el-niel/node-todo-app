const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Log to console for dev
    console.log(err);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not fount`;
        error = new MyCustomError(message);
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Dulicate field value entered';
        error = new MyCustomError(message);
    }

    res.json({
        success: false,
        error: error.message,
    });
};

module.exports = errorHandler;
