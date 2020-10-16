const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId,
   
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task }

/**
 * Create new file in models which is list.model.js 
 * Go to app.js file and load in the  mongoose model
 */