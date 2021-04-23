// importing modules
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, required: true },
  // password: { type: String, required: true },
  characters: [
    {
      name: { type: String },
      level: { type: Number },
      race: { type: String },
      class: { type: String },
      subClass: { type: String },
      abilities: [{}],
      feats: [{ type: String }],
      spells: [{ type: String }],
    },
  ],
});

// var UserSchema = new Schema({
//   email: {type: String, required:true, unique:true},
//   username : {type: String, unique: true, required:true},
// });

// plugin for passport-local-mongoose
userSchema.plugin(passportLocalMongoose);

// export userschema
const User = mongoose.model("User", userSchema);

module.exports = User;
