var express = require("express");
const router = express.Router();
var models = require("../Models");

var UserCount = models.UserCount;

router.get("/", function(req, res) {
  UserCount.find(function(err, count) {
    if (err) return handleError(err);
    res.send(count);
  });
});

router.post("/", function(req, res) {
  UserCount.findById("5b448c7f8104f046600cb245", function(err, count) {
    if (err) return handleError(err);

    count.set({ count: count.count + 1 });
    count.save(function(err, updatedCount) {
      if (err) return handleError(err);
      res.send(updatedCount);
    });
  });
});

module.exports = router;
