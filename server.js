const express = require('express');
const app = express();
const exphbs = require ('express-handlebars')
// process.env looks at process variables, sets an initial port.
const PORT = process.env.PORT || 8080;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set static folder
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public'))); //trying this
const routes = require('./controllers/burgers_controller.js');
app.use(routes)
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main' 
}));
app.set('view engine', 'handlebars');


// Starts our server.
app.listen(PORT, () => console.log(`Server started and listening on port: ${PORT}`));