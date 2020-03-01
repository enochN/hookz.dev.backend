const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").server;
const http = require("http");

const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//IMPORT ROUTES
//IMPORT ROUTES
require("./app/routes/webhookRoutes")(app);
require("./app/routes/webhookDataRoutes")(app);

// app.use(express.static("./client/build"));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
    httpServer: server
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
