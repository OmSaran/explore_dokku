var express = require('express');
var app = express()
PORT = 3000

app.get('/', function(req, res) {
    res.send('BONJOUR!');
})

app.listen(PORT, function() { console.log('Hosted on port: ' + PORT ); });