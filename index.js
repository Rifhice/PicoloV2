const express = require("express");
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(
  "/api",
  require("./router.js")
);

var server = app.listen(process.env.PORT || 1337, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})