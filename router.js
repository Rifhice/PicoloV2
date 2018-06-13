var express = require('express');
var app = express();

const router = express.Router();

router.use('/Test', require("./Route/Test"));
router.use('/EnvironmentRules', require("./Route/EnvironmentRule"));

module.exports = router;