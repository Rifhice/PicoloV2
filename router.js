var express = require('express');
var app = express();

const router = express.Router();

router.use('/Test', require("./test"));

module.exports = router;