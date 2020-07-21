const express = require("express");
// const path = require("path");
const app = express();
// process.env looks at process variables, sets an initial port.
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));


//set static folder
// app.use(express.static((path.join(_dirname, "public", "index.html"))));
//set static folder
app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(_dirname, "public", "index.html"));
// });

// Starts our server.
app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));