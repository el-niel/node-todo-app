const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    name: { type: String, required: [true, 'please add a name'] },
    description: { type: String, required: [true, 'please add a description'] },
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
    },

    createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
