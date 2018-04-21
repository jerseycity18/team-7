var pg = require("pg");
const express   = require('express');
const app       = express();

//const pool = new pg.Pool(config);

var dummyUserOne = {
  userId: 1,
  firstName: 'Andrew',
  lastName: 'Parks',
  email: 'parksa243@gmail.com',
  communication: 2,
  location: '4545 Cneter blvd Long Island City, Queens',
  interests: ['Programming','Skiing']

}

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

app.get('/')



// Specialized unknown URL handling goes here if required. Express already cleanly handles unknown URLs though.
app.listen(4000, function () {
    console.log('Server is running on Port 4000');
});