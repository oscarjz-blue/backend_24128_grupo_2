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

-- to show all tables
show tables;

DESCRIBE usuario;