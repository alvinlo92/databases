var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (json) {
      console.log(json)
      db.query(`SELECT user_id FROM users WHERE username = ${json.username}`, function(err, results){
        if (err) {
          throw err;
        } else {
          console.log(results);
          db.query(`INSERT INTO messages (message, chatroom, user_id) VALUES (${json.message}, ${json.roomname}, ${json.username})`);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (json) {
      console.log(json);
    }
  }
};

