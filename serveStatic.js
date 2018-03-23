var express = require('express')
var path = require('path')
var open = require('open')

const port = 3000
var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'staticFiles/index.html'))
})

app.listen(port, function (err) {
  if (err)
    console.log(err);
  else
    open('http://localhost:' + port)
})
