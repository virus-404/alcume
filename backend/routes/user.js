const express = require('express');
const bcrypt = require('bcrypt');
const userNOSQL = require("../models/no_sql/user");
const User = require("../models/sql/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {

  var user = new User(
    req.body.name,
    req.body.email,
    req.body.telephone,
    req.body.birthday
  );

  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const userLite = new userNOSQL({
      email: req.body.email,
      password: hash
    });
    userLite.save()
      .then( result => {
        user.user_id = result.id;
        user.insert((err) => {return err}).then(
          res.status(201).json({
            message: 'User created successfully!',
          })
        ).catch (
          res.status(500).json({
            error: err
          })
        );

      })
      .catch( err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

module.exports = router;


//https://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor
//https://www.terlici.com/2015/08/13/mysql-node-express.html
