const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config.js');

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const routes = require('./routes.js');
app.use('/', routes);

// DATABASE
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('Mongo DB connected');
  })
  .catch(error => {
    console.log(error);
  })

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
