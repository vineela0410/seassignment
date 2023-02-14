const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(express.json());
app.use(cors());

app.disable('etag');

// Define Routes
app.use('/api/', require('./routes/api'));

//load static assets
app.use(express.static('frontend/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});



app.listen(5000, () => { console.log("Server started: 5000") })