

CREATE DATABASE movies_db;

use movies_db;

CREATE TABLE  usuario (
    id INT  PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(8) NOT NULL,
    role VARCHAR(25) NOT NULL DEFAULT 'USER',
    active TINYINT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from  usurio;