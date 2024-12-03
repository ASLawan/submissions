const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const { WebSocketServer } = require("ws");
const subRoutes = require("./routes/submissionRoutes");

dotenv.config();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;

// Websocket instance
// const wss = new WebSocketServer({ port: 5001 });

// wss.on("connection", (ws) => {
//   console.log("Client Connected!");
// });

const app = express();

//middlware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));
app.use(subRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${HOST} at: ${PORT}`);
});
