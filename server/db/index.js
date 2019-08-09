var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'chat',
  user: 'student',
  password: 'student'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id' + connection.threadId);
});

// connection.query('SELECT message FROM messages', function (error, results, fields) {
//   if (error) { throw error; }

//   results.forEach(result => {
//     console.log(result);
//   });
// });

connection.end();



