var express = require('express');
const router = express.Router();
var models = require('../Models');

var AttachedRule = models.AttachedRule

router.get('/', function (req, res) {
    AttachedRule.find(function (err, athletes) {
        if (err) return handleError(err);
        res.send(athletes)
    })
})

module.exports = router;