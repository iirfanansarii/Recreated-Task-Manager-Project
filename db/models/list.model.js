const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
       }

})
//to module
const List = mongoose.model('List', ListSchema);

module.exports = { List }

/**
 * Create a new models folder in db folder
 * Create a new file list.model.js file in models folder
 * Go to app.js file and load in the  mongoose model
 * 
 * 
 */