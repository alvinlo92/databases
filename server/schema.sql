CREATE DATABASE chat;

USE chat;

CREATE TABLE messages(
  /* Describe your table here.*/
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255),
  chatroom VARCHAR(255),
  user_id INT NOT NULL,
  CONSTRAINT fk_user
  FOREIGN KEY fk_user(user_id)
  REFERENCES users(user_id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users(
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

