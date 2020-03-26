const express = require('express');
const path = require('path');

const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/fitrition'));

// Send all requests to index.html
app.get('/*', function (req, res) {
  console.log(`${req.method}: ${req.url}`);
  res.sendFile(path.join(__dirname + '/dist/fitrition/index.html'));
});

// default Heroku PORT
const port = +process.env.PORT || 4200;
app.listen(port);
console.log(`🚀 server started on port ${port}.`);
