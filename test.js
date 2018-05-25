var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function (req, res) {
    MongoClient.connect('mongodb://heroku_hkrj1ct1:e26m5cncqlrrthjdnf9muntac5@ds211289.mlab.com:11289/heroku_hkrj1ct1', function (err, client) {
        if (err) throw err;

        var db = client.db('heroku_hkrj1ct1');

        db.collection('test').findOne({}, function (findErr, result) {
            if (findErr) throw findErr;
            res.send(result);
            client.close();
        });
    });
})




module.exports = router;