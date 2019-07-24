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
// const API_LITY = process.env.API_LITY;
const SOCIAL_API_KEY = process.env.SOCIAL_API_KEY;

app.use(cors());

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

//API Routes
app.get('/apiPwnd', getApiPwnd);
app.get('/apiSocial', getApiSocial);
app.get('/pg', lookup);

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

//functions in routes
function getApiSocial (request, response) {
  console.log('request.query.data for social',request.query.data);
  // const userQuery = encodeURIComponent(request.query.data);
  // console.log('this is our encoded social name: ', userQuery);
  const url = `http://api.social-searcher.com/v2/search?q="${request.query.data}"&key=${SOCIAL_API_KEY}`;
  return superagent.get(url)
    // .set('rejectUnauthorized', 'false')
    .then(result => {
      console.log('these are our social api results:--------------> ', result);
      response.send(result.body);
      console.log('hit the social api return');
    })
    .catch(error => handleError(error, response));
}

function getApiPwnd (request, response) {
  // console.log('request.query.data',request.query.data);
  // console.log('this is our request ', Object.keys(request.query)[0]);
  const useremail = encodeURIComponent(request.query.data);
  // console.log('this is our encoded email: ', useremail);
  // const temp = `bravelemming%40gmail.com`;
  const url = `https://haveibeenpwned.com/api/v2/breachedaccount/${useremail}`;
  console.log(url);
  return superagent.get(url)
    .set('User-Agent', 'operation-breach')
    .then(result => {
      // console.log('these are our results:----------------> ', result);
      response.send(result.body);
      // console.log('hit the api return');
    })
    .catch(error => handleError(error, response));
}


function lookup(request, response) {
  const SQL = `SELECT username FROM users WHERE username=$1 VALUES ($1) `;

  const ISQL = `INSERT INTO users (username, password) VALUES ($1, $2)`;

  const values = [request.query.data.username];
  const iValues = [request.query.data.username, request.query.data.password];


  client.query(SQL,values)
    .then(result => {
      if (result.rowCount >0 ){
        console.log("username found");

      }else{
        console.log("username not found");
        client.query(ISQL, iValues);

      }
    });
}




