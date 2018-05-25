var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function (req, res) {
    res.send("Hello world !")
    // Connect to the db
    MongoClient.connect("mongodb://heroku_hkrj1ct1:e26m5cncqlrrthjdnf9muntac5@ds211289.mlab.com:11289/heroku_hkrj1ct1", function (err, db) {

        db.collection('test', function (err, collection) {

            collection.find().toArray(function (err, items) {
                if (err) throw err;
                res.send(items);
            });

        });

    });
})




module.exports = router;