DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255)
);

CREATE TABLE messages(
  /* Describe your table here.*/
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255),
  chatroom VARCHAR(255),
  username VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id)
  REFERENCES users(user_id)
);

INSERT INTO users (username)
VALUES ('Hien'), ('Jesse'), ('Natalie');

INSERT INTO messages (message, chatroom, user_id)
VALUES
  ('Peace Out', 'Lobby', 1),
  ('So long suckers', 'Lobby', 2),
  ('We da best', 'Lobby', 3);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

