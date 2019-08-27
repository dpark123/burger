CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int not null auto_increment,
  burger_name tinytext,
  devoured boolean,
  PRIMARY KEY (id)
);