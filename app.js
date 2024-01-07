const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pug = require('pug');

const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Set the views directory

// Connect to MongoDB using Mongoose (replace with your MongoDB connection string)
// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Define a route to render the Pug template
app.get('/', async (req, res) => {
  res.render('index', { title: 'My Pug Page'});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
