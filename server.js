const express = require("express");
const path = require("path");
const app = express();
//set static folder
app.use(express.static((path.join(_dirname, "public"))));

// process.env looks at process variables
const PORT = process.env.PORT || 5000;






// Starts our server.
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });