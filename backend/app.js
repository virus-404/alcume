const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const mysql = require('./sql_db');


const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("/mongodb://localhost:27017/alcume", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => {
  console.log('Connected to Mongo database (!)')
})
.catch(() => {
  console.log('Connection to Mongo failed (!)')
});


try {
  mysql.connect( function(err) {if (err) throw err;});
  console.log('Connected to MySQL database (!)');
} catch (err) {
  console.log('Connection to MySQL failed (!)');
  console.log(err);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
})

app.use("/api/posts",postRoutes);
app.use("/api/user",userRoutes);

module.exports = app;
