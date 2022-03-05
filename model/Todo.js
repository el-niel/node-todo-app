const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please a todo name'],
    },

    description: {
        type: String,
        required: [true, 'please add a description'],
        trim: true,
    },

    items: [String],

    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Todo', todoSchema);
