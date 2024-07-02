-- to create a new database
CREATE DATABASE movies_db;

-- to use database
use movies_db;

CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(8) NOT NULL,
    role VARCHAR(25) NOT NULL DEFAULT 'USER',
    active TINYINT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) NOT NULL,
  director varchar(255) NOT NULL,
  year int(11) NOT NULL,
  image varchar(255) DEFAULT NULL
) ENGINE=InnoDB;  --DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description varchar(100) NOT NULL
) ENGINE=InnoDB;

-- to show all tables
show tables;
