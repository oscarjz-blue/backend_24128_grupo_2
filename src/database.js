import {createPool} from 'mysql2/promise';

const pool = createPool({ //esta constante almacena todo lo que contiene la funcion create poool 
  host: 'localhost',
  port: '3306',
  user: 'root',
  password:'',
  database:'movies_db'
});

export default  pool; // exporto pool para ser utilizado en routes