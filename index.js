require("dotenv").config();

const Server = require("./src/server");

// const app = express();
const server = new Server();

server.listen();

// app.listen(3000);
