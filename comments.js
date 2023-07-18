// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Create a route for the app
app.get('/', (req, res) => {
  res.send('Welcome to the comments app');
});

// Import routes
require('./routes/comments.js')(app);

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});