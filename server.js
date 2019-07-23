'use strict';

//Application Dependencies
require('sqreen');
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const cors = require ('cors');

//Load environmental Variables from dovenv
require('dotenv').config();

//Application Setup
const app = express();
const PORT = process.env.PORT || 3000;
const API_LITY = process.env.API_LITY;

app.use(cors());

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

//API Routes
app.get('/apiPwnd', getApiPwnd);
// app.get('/apiPass', getApiPass);
app.use('*', (request, response) => {
  response.send('you got to the wronge place');
})

//Listen for Requests
app.listen(PORT, () => console.log(`listening on ${PORT}`));

//Error Handler
function handleError (err, res) {
  console.error(err);
  if (res) res.status(500).send('Not authorized for access');
}

function getApiPwnd (request, response) {
  console.log('request.query.data',request.query.data);
  // console.log('this is our request ', Object.keys(request.query)[0]);
  const useremail = encodeURIComponent(request.query.data);
  console.log('this is our encoded email: ', useremail);
  // const temp = `bravelemming%40gmail.com`;
  const url = `https://haveibeenpwned.com/api/v2/breachedaccount/${request.query.data}`;
  return superagent.get(url)
    // .set('User-Agent', 'operation-breach')
    .then(result => {
      console.log('these are our results: ', result);
      response.send(result);
      console.log('hit the api return');
    })
    .catch(error => handleError(error));
}


function lookup(userObj) {
  const SQL = `SELECT * FROM users WHERE username=$1;`;
  const ISQL = `INSTERT INTO users (username, password) VALUES ($1, $2);`;
  const values = [userObj.username];
  const iValues = [userObj.username, userObj.password];


  client.query(SQL,values)
    .then(result => {
      if (result.rowCount >0 ){
        console.log("username found ");

      }else{
        console.log("username not found");
        client.query(ISQL, iValues);

      }
    });
}




