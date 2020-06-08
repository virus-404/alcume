const moongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchemaLite = moongoose.Schema({
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true}
});

userSchemaLite.plugin(uniqueValidator);

module.exports = moongoose.model("userLite", userSchemaLite);
