var mongoose = require('mongoose');
var fs = require('fs');

var taskSchema = mongoose.Schema({

    username: String,
    task_1C: Boolean,
    task_2C: Boolean,
    task_3C: Boolean,
    task_4C: Boolean,
    task_5C: Boolean,
    task_6C: Boolean,
    task_7C: Boolean,
    task_8C: Boolean
    
});

module.exports = mongoose.model('Task', taskSchema);
