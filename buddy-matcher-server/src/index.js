
var pg = require("pg");
const express   = require('express');
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json({type: 'application/json'});
const app       = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//const pool = new pg.Pool(config);

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

app.get('/user/:userId', (req, res, next) => {
  res.status(200).send(dummyUserOne);
   //pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       //var queryString = 'SELECT * FROM agency';
       //client.query(queryString, function (err, result) {
         //   done();
           // returnResponse(err,res,result, queryString);
       //})
   //})
});

app.get('/user/:userId/matches', (req, res, next) => {
  res.status(200).send(dummyUserTwo);
   //pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       //var queryString = 'SELECT * FROM agency';
       //client.query(queryString, function (err, result) {
         //   done();
           // returnResponse(err,res,result, queryString);
       //})
   //})
});

app.post('/user/new', function (req, res, next) {
  res.status(200).send(req.body);
   //pool.connect(function (err, client, done) {
       //if (err) {
         //  console.log('error',"Cannot connect to the DB: " + err);
           //done()
       //}
       //var queryString = 'SELECT * FROM agency';
       //client.query(queryString, function (err, result) {
         //   done();
           // returnResponse(err,res,result, queryString);
       //})
   //})
});




// Specialized unknown URL handling goes here if required. Express already cleanly handles unknown URLs though.
app.listen(4000, function () {
    console.log('Server is running on Port 4000');
});
