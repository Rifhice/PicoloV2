var express = require("express");
var app = express();

const router = express.Router();

router.use("/Test", require("./Route/Test"));
router.use("/EnvironmentRules", require("./Route/EnvironmentRules"));
router.use("/AttachedRules", require("./Route/AttachedRules"));
router.use("/RandomRules", require("./Route/RandomRules"));
router.use("/UserCount", require("./Route/UserCount"));

module.exports = router;
