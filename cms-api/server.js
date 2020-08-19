var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
User = require('./api/models/userModel'),
Client = require('./api/models/clientModel'),
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cms'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

var clientRoutes = require('./api/routes/clientRoutes');
clientRoutes(app);

app.listen(port);

console.log('cms RESTful API server started on: ' + port);