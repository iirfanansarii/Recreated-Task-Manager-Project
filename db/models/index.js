//importing all the model
const { List } = require('./list.model');
const { Task } = require('./task.model');
const { User } = require("./user.model");


module.exports = {
  List,
  Task,
  User,
};


/**
 * We can use this file to combine all that model so that it's easier to import them from other files
 * 
 * 
 */