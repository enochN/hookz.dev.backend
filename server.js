const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//IMPORT ROUTES
require("./app/routes/webhookRoutes")(app);
require("./app/routes/webhookDataRoutes")(app);

// app.use(express.static("./client/build"));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
