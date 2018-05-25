var mongoose = require("../dbConnection.js");

var Schema = mongoose.Schema
var mySchema = new mongoose.Schema({
    id: Schema.Types.ObjectId,
    greetings: 'string'
});

module.exports = mongoose.model('test', {
    mySchema
}, 'test');;