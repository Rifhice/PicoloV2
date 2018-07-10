var mongoose = require("../dbConnection.js");

var mySchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    attached: {},
    
}, {
    strict: false
});

module.exports = mongoose.model('EnvironmentRule', mySchema, 'environment_rules');