const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
      username: { type: String },
      password: { type: String },
      characters:[ 
        {
          name: { type: String },
          level: { type: Number },
          race: { type: String },
          class: { type: String },
          subClass: { type: String },
          abilities: [{}],
          feats: [{ type: String}],
          spells: [{type: String}],
        },
      ],
});


const User = mongoose.model("User", UserSchema);

module.exports = User
