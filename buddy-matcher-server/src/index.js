var pg = require("pg");
const express   = require('express');
const app       = express();

//const pool = new pg.Pool(config);

app.get('/user/:userId', (req, res, next) => {
  res.status(200).send("Getting user");
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