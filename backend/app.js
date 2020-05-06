const express = require('express');
const bodyParser = require("Body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully (!)'
  })
});


app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id : '00001',
      title: 'First server-side post',
      content: 'It works! :D'
    },
    {
      id : '00002',
      title: 'Second server-side post',
      content: 'It works again! XD'
    },
  ];
  return res.status(200).json({
    message: 'Post fetched succesfully (!)',
    posts: posts
  });
});

module.exports = app;
