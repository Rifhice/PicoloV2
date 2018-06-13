var mongoose = require("../dbConnection.js");

var mySchema = new mongoose.Schema({
    greetings: 'string',
    Whallah: 'string'
}, {
    strict: false
});

module.exports = mongoose.model('Test', mySchema, 'test');