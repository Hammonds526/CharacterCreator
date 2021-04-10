const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:
    {
      id: { type: Number },
      username: { type: String },
      password: { type: String },
      characters: 
        {
          name: { type: String },
          level: { type: Number },
          race: { type: String },
          class: { type: String },
          subClass: { type: String },
          abilities: [{}],
          feats: [{ type: Schema.Types.ObjectId, ref: "Actions"}],
          spells: [{
              name: {},
              level: {},
              type: {},
              description: {},
            }],
        },
    },
});


const Users = mongoose.model("Users", userSchema);

module.exports = Users
