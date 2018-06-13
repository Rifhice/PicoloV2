var mongoose = require("../dbConnection.js");

var mySchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    tags: [String],
    preferred_card: [String]
}, {
    strict: false
});

module.exports = mongoose.model('AttachedRule', mySchema, 'attached_rules');