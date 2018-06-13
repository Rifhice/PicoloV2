var express = require('express');
const router = express.Router();
var models = require('../Models');

var EnvironmentRule = models.EnvironmentRule

router.get('/', function (req, res) {
    EnvironmentRule.find(function (err, athletes) {
        if (err) return handleError(err);
        res.send(athletes)
    })
})

module.exports = router;