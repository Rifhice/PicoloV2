var express = require('express');
const router = express.Router();
var models = require('../Models');

var Test = models.Test

router.get('/', function (req, res) {
    Test.find(function (err, athletes) {
        if (err) return handleError(err);
        res.send(athletes)
    })
})

module.exports = router;