//import all the necessary packages and modules
var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var cors = require('cors');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./models/user.js'); // get our mongoose model

//Create an instance of the express app
var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));


var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(config.web.client_id, '', '');

//used to create signand verify tokenks, and serve data
var port = process.env.PORT || 8080;
//connect to database
mongoose.connect(config.database);



//use bodyParser to get info from POST/url parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});*/

//morgan to log requests
app.use(morgan('dev'));

// basic route
app.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.post('/api/authenticate' , (req,res) => {
  var idtoken = req.body.idtoken

  client.verifyIdToken(idtoken, config.web.client_id, (e, login) => {
    var payload = login.getPayload();
    res.json({user: payload, idtoken: req.body.idtoken});
  });

});

app.post('/api/authenticate/data' , (req,res) => {
  var idtoken = req.body.idtoken

  client.verifyIdToken(idtoken, config.web.client_id, (e, login) => {
  
    res.json({user: payload, idtoken: req.body.idtoken});
  });

});
//start server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
