const pg = require('pg');
const dbURL = 'postgres://localhost:5432/users';


//set up database
// const client = new pg.Client(dbURL);
// client.connect();
// client.on('error', err => console.error(err));

// function lookup(userObj) {
//   const SQL = `SELECT * FROM users WHERE username=$1;`;
//   const ISQL = `INSTERT INTO users (username, password) VALUES ($1, $2);`;
//   const values = [userObj.username];
//   const iValues = [userObj.username, userObj.password];


//   client.query(SQL,values)
//     .then(result => {
//       if (result.rowCount >0 ){
//         console.log("username found ");

//       }else{
//         console.log("username not found");
//         client.query(ISQL, iValues);

//       }
//     });
// }
