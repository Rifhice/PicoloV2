var express = require('express');
var app = express();

const router = express.Router();

router.use('/Test', require("./Route/Test"));

module.exports = router;