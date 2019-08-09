var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('messaged fetched');
      console.log(res);
      res.writeHead(200);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // post to database
      // console.log(req.body);

      // console.log('messaged posted');
      // res.writeHead(200);
      //models.messages.post(req.json);
      res.end();
      // how to attach data to res object?
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body);
      res.end();
    }
  }
};

