var mongoose = require("../dbConnection.js");

var mySchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    tags: [String],
    probability: Number
}, {
    strict: false
});

module.exports = mongoose.model('RandomRule', mySchema, 'random_rules');