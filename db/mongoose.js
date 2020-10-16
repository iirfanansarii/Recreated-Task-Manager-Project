// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

//set to use global javascript promise
mongoose.Promise = global.Promise;

//to connect our database which is TaskManager
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//To exports mongoose objects
module.exports = {
    mongoose
};

/** 
 * Create a db folder in api folder
 * Create a mongoose.db file in db folder
 * Install MongoDB in api file -npm install mongoose --save 
 * 
 * **/ 
