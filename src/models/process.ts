var mongoose = require('mongoose');

var processSchema = mongoose.Schema({

    username: String,
    taskAnswer: String,
    task1: String,
    task2: String,
    task3: String,
    task4: String,
    task5: String,
    task6: String,
    timestamp: String,
    time1: String,
    time2: String,
    qID: String,
    submit: String

});

module.exports = mongoose.model('Process', processSchema);
