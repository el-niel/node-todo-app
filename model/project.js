const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    name: { type: String, required: [true, 'please add a name'] },
    description: { type: String, required: [true, 'please add a description'] },

    createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
