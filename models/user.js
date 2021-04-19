const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:
    {
      id: { type: Number },
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
          feats: [{ type: Schema.Types.ObjectId, ref: "Actions"}],
          spells: [{
              name: {type: String},
              level: {type: Number},
              type: {type: String},
              description: {
                desc: {type: String},
                higherLevel: {type: String},
                school: {type: String},
                range: {type: Number},
                areaOfEffect: {
                  type: {type: String},
                  size: {type: Number}
                },
                dc: {
                  type: {type: String},
                  onSuccess: {type: String}
                },
                castingTime: {type: Number},
                duration: {type: Number},
                concentration: {type: Boolean},
                ritual: {type: Boolean}

              },
              damage: {
                type: {type: String},
                damageAtSlotLevel: {type: String}
              }
            }],
        },
      ],
    },
});


const User = mongoose.model("User", userSchema);

module.exports = User
