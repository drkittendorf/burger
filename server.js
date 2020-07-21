const express = require("express");
// const path = require("path");
const app = express();
// process.env looks at process variables, sets an initial port.
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));


//set static folder
app.use(express.static("public"));



// Starts our server.
app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));