const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRoutesPath = "/api/users";

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.static("public"));

    //Body parser
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.userRoutesPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port: ", this.port);
    });
  }
}

module.exports = Server;
