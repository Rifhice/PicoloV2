var express = require('express');
const router = express.Router();
var models = require('../Models');

var RandomRule = models.RandomRule

router.get('/', function (req, res) {
    RandomRule.find(function (err, athletes) {
        if (err) return handleError(err);
        res.send(athletes)
    })
})

module.exports = router;