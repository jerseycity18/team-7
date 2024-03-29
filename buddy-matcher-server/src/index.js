
var pg = require("pg");
const express   = require('express');
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json({type: 'application/json'});
const app       = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const config = require('./config');
const pool = new pg.Pool(config);

var dummyUserOne = {
  userId: 1,
  firstName: 'Andrew',
  lastName: 'Parks',
  email: 'parksa243@gmail.com',
  communication: 2,
  location: '4545 Center blvd Long Island City, Queens',
  interests: ['Programming','Skiing']

}
var dummyUserTwo = {
  userId: 1,
  firstName: 'Rory',
  lastName: 'Kronmiller',
  email: 'wrk91@gmail.com',
  communication: 5,
  location: 'Germantown Maryland',
  interests: ['Programming','Running']

}
//app.use(bodyParser.urlencoded({extended : false}));

app.get('/api/users', (req, res, next) => {
  //res.status(200).send(dummyUserOne);
   pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       var queryString = 'select name,phone,address,city,zipcode,gender,email,communication,has_idd from codeforgood.user';
       client.query(queryString, function (err, result) {
            done();
            res.status(200).send(result.rows);
           // returnResponse(err,res,result, queryString);
       })
   })
});

app.get('/api/user/:userId', (req, res, next) => {
  //res.status(200).send(dummyUserTwo);
   pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       var id = req.params.userId;
       var queryString = 'select name,phone,address,city,zipcode,gender,email,communication,has_idd from codeforgood.user WHERE codeforgood.user.id=' + id;
       client.query(queryString, function (err, result) {
            done();
            res.status(200).send(result.rows);
           // returnResponse(err,res,result, queryString);
       })
   })
});

app.get('/api/user/:userId/interests', (req, res, next) => {
  //res.status(200).send(dummyUserTwo);
   pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       var id = req.params.userId;
       var queryString = "select" +"'interest'"+", string_agg(interest, ', ') as interests from codeforgood.user_interests ui join codeforgood.interests i on i.id = ui.interest_id where ui.user_id ="+id;
       client.query(queryString, function (err, result) {
            done();
            res.status(200).send(result.rows);
           // returnResponse(err,res,result, queryString);
       })
   })
});

app.get('/api/:userId/matches', function (req, res, next) {
  //res.status(200).send(req.body);
   pool.connect(function (err, client, done) {
       //var queryString = 'SELECT * FROM agency';
       var id = req.params.userId;
       var match = generateRandom(1,12,id);
       var queryString = 'select name,phone,address,city,zipcode,gender,email,communication,has_idd from codeforgood.user WHERE id='+id; 
       client.query(queryString, function (err, result) {
            done();
            result.rows[0].interests = ['Programming', 'Hackathons', 'Skiing', 'Running'];
            result.rows[0].interestsInCommon = ['Skiing', 'Running'];
            res.status(200).send(result.rows);
            //returnResponse(err,res,result, queryString);
       })
   })
});

function generateRandom(min, max, id) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === id) ? generateRandom(min, max) : num;
}


// Specialized unknown URL handling goes here if required. Express already cleanly handles unknown URLs though.
app.listen(4000, function () {
    console.log('Server is running on Port 4000');
});
