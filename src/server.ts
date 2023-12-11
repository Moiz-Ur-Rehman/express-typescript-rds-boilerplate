import app from "./app";
import Socket from "./helpers/socket.helper";
import db from "./models/index";

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

Socket.createServer(app, PORT, HOSTNAME);

db.sequelize
  .authenticate()
  .then(function () {
    console.log("Nice! Database looks fine");
  })
  .catch(function (err: any) {
    console.log(err, "Something went wrong with the Database Update!");
  });
