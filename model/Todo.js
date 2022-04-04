const mongoose = require('mongoose');
const slugify = require('slugify');

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

    items: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Project',
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
});

todoSchema.pre('save', function (next) {
    this.name = slugify(this.name, '_');

    next();
});

module.exports = mongoose.model('Todo', todoSchema);
