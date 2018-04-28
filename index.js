/* ====================
   Impoer Node Modules
==================== */
const express = require("express"); // Fast, unopinionated, minimalist web framework for node
const app = express(); // Initiate Express Application
const router = express.Router();
const mongoose = require("mongoose"); // Node tool for MongoDB
const config = require("./config/database"); // Mongoose Config
const path = require("path"); // NodeJS Package for file paths
const authentication = require("./routes/authentication")(router);
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
   if (err) {
      console.log("Could NOT connect to the database: ", err);
   } else {
      console.log("Connected to the database: " + config.db);
   }
});

// Provide static directory for frontend
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/dist/"));
app.use('/authentication', authentication);

// Connect server to angular index.html
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname + "/client/dist/index.html"));
})

// Start Server: Listen on port 3000
app.listen(3000, () => console.log("Listen on port 3000"));