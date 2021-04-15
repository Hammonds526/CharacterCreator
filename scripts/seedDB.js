const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users"
);

const userSeed = [
    {
      user: {
      id: 1,
      username: "curtisH",
      password: "qwertyuiop",
      characters: 
        {
          name: "klepto",
          level: 1,
          race: "elf",
          class: "rogue",
          subClass: null,
          abilities: [{}],
          feats: [{}],
          // spells: [{
          //     name: null,
          //     level: null,
          //     type: null,
          //     description: {
          //       desc: null,
          //       higherLevel: null,
          //       school: null,
          //       range: null,
          //       areaOfEffect: {
          //         type: null,
          //         size: null
          //       },
          //       dc: {
          //         type: null,
          //         onSuccess: null
          //       },
          //       castingTime: null,
          //       duration: null,
          //       concentration: null,
          //       ritual: null

          //     },
          //     damage: {
          //       type: null,
          //       damageAtSlotLevel: null
          //     }
          //   }],
        },
    },
  },
  {
    user: {
    id: 2,
    username: "garth",
    password: "qwertyuiop",
    characters: 
      {
        name: "rectum",
        level: 1,
        race: "elf",
        class: "rogue",
        subClass: null,
        abilities: [{}],
        feats: [{}],
        // spells: [{
        //     name: null,
        //     level: null,
        //     type: null,
        //     description: {
        //       desc: null,
        //       higherLevel: null,
        //       school: null,
        //       range: null,
        //       areaOfEffect: {
        //         type: null,
        //         size: null
        //       },
        //       dc: {
        //         type: null,
        //         onSuccess: null
        //       },
        //       castingTime: null,
        //       duration: null,
        //       concentration: null,
        //       ritual: null

        //     },
        //     damage: {
        //       type: null,
        //       damageAtSlotLevel: null
        //     }
        //   }],
      },
    },
  },
  {
    user: {
    id: 3,
    username: "c.t.",
    password: "qwertyuiop",
    characters: 
      {
        name: "setum",
        level: 1,
        race: "elf",
        class: "rogue",
        subClass: null,
        abilities: [{}],
        feats: [{}],
        // spells: [{
        //     name: null,
        //     level: null,
        //     type: null,
        //     description: {
        //       desc: null,
        //       higherLevel: null,
        //       school: null,
        //       range: null,
        //       areaOfEffect: {
        //         type: null,
        //         size: null
        //       },
        //       dc: {
        //         type: null,
        //         onSuccess: null
        //       },
        //       castingTime: null,
        //       duration: null,
        //       concentration: null,
        //       ritual: null

        //     },
        //     damage: {
        //       type: null,
        //       damageAtSlotLevel: null
        //     }
        //   }],
      },
    },
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });