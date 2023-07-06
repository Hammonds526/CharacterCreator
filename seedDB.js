const mongoose = require("mongoose");
const db = require("./models");
const User = require("./controllers/usersController");
require('dotenv').config();
// This file empties the Users collection and inserts the users below


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}
).then(() => console.log('MongoDB Connected...'));

const userSeed = [{
  username: "curtisH",
  email: "sitruc@gmail.com",
  password: "qwertyuiop",
  characters: [
    {
      name: "klepto",
      level: 1,
      race: "elf",
      class: "rogue",
      subClass: null,
      abilities: [{}],
      feats: [],
      spells: [],
    }]
}, {
  username: "curtisHH",
  email: "curtisH@email.com",
  password: "qwertyuiop",
  characters: []
}];

db.User
  .deleteMany({})
  // .then(() => db.User.collection.insertMany(userSeed))
  // .then(data => {
  //   console.log(data.result.n + " records inserted!");
  //   process.exit(0);
  // })
  .then(() => {
    for (let i = 0; i < userSeed.length; i++) {
      const newUser = new db.User(userSeed[i]);
      db.User.register(newUser, userSeed[i].password, function (err, dbModel) {
        if (err) {
          // res.status(422).json(err);
          console.log(err => {
            console.error(err);
            process.exit(1);
          })
        } else {
          console.log(`${i + 1} records inserted!`);
          // process.exit(0)
          if ((i + 1) === userSeed.length) {
            process.exit(0);
          }
        }
      });
    }
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });