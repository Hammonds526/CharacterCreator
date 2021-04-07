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

const actionSchema = new Schema({
  spell: 
    {
      id: { type: Number },
      name: { type: String },
      level: { type: Number },
      type: { type: String },
      description: { type: String },
      subClass: { type: String },
    },
  ability: 
    {
      id: { type: Number },
      class: { type: String },
      name: { type: String },
      description: { type: String },
    },
  feat:
    {
      id: { type: Number },
      name: { type: String },
      description: { type: String },
    },
});

const Actions = mongoose.model("Actions", actionSchema);

const Users = mongoose.model("Users", userSchema);

module.exports = {
  Actions: Actions,
  Users: Users,
};
