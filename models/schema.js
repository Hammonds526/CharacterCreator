const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    id: { type: Number },
    username: { type: String },
    password: { type: String },
    characters: [
      {
        name: { type: String },
        level: { type: Number },
        race: { type: String },
        class: { type: String },
        subClass: { type: String },
        abilities: [{}],
        feats: [{ type: Schema.Types.ObjectId, ref: "Actions" }],
        spells: [
          {
            name: {},
            level: {},
            type: {},
            description: {
              desc: {},
              higherLevel: {},
              school: {},
              range: { type: Number },
              areaOfEffect: {
                type: {},
                size: {},
              },
              dc: {
                type: {},
                onSuccess: {},
              },
              castingTime: { type: Number },
              duration: { type: Number },
              concentration: { type: Boolean },
              ritual: { type: Boolean },
            },
            damage: {
              type: {},
              damageAtSlotLevel: {},
            },
          },
        ],
      },
    ],
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
