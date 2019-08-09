var db = require('../db');

module.exports = {
  messages: {
    get: function (/*callback*/) {
      db.query(`SELECT * FROM messages`, function(err, results) {
        console.log('messages');
        if (err) {
          console.log(`messages: ${err}`)
        }
        // else {
        //   callback(results)
        // }
      });
    },
    // a function which produces all the messages
    post: function (json) {
      db.query(`INSERT INTO messages (message, chatroom, username) VALUES (?,?,?)`, [json.message, json.roomname, json.username], function(err, results) {
        if (err) {
          console.log(`messages: ${err}`)
        }
      });
    }
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query(`SELECT * FROM users`, function(err, results) {
        console.log('users');
        if (err) {
          console.log(`users: ${err}`)
        }
      });
    },
    post: function (user) {
      db.query(`INSERT INTO users (username) VALUES (?)`, [user.username], function (err, results) {
        if (err) {
          console.log(`users: ${err}`);
        }
      })
    }
  }
};

