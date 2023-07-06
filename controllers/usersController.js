const passport = require("passport");

const User = require("../models/user");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    User.find(req.query)
      .sort({ id: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    if (req.user) {
      return res.json({ characters: req.user.characters });
    }
    else {
      return res.json(
        { characters: [] })
    }
  },
  logout: function (req, res) {
    req.session.destroy(function (err) {
      res.clearCookie('connect.sid');
      res.redirect('/'); //Inside a callback… bulletproof!
    });
  },
  create: function (req, res) {
    const { email, username, password, characters } = req.body;
    const newUser = new User({
      email: email,
      username: username,
      characters: characters ? characters : [],
    });

    User.register(newUser, password, function (err, dbModel) {
      if (err) {
        res.status(422).json(err);
      } else {
        res.json(dbModel);
      }
    });
  },
  update: function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  characterList: function (req, res) {
    User.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel.user.characters))
      .catch((err) => res.status(422).json(err));
  },
  //Boiler plate trying to see if user exists...
  login: function (req, res) {
    const { username, password } = req.body;
    if (!username) {
      res.status(422).json({
        message: "Username was not given.",
      });
    } else {
      if (!password) {
        res.status(422).json({
          message: "Password was not given",
        });
      } else {
        passport.authenticate("local", function (err, user, info) {
          // console.log(user);
          if (err) {
            res.status(422).json(err);
          } else {
            if (!user) {
              res.status(422).json({
                message: "Username or password is incorrect.",
              });
            } else {
              // Do session stuff here\
              req.login(user, function (err) {
                if (err) { return next(err); }
                res.json(user);
              });
            }
          }
        })(req, res);
      }
    }
  },
  checkSession: (req, res) => {
    (req.session && req.user) ? res.json(req.user._id) : res.json();
  },
  //Find user based on Id. Pull character by id from list return new list
  updateUserCharacters: function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id },
      { $pull: { "characters": { _id: req.params.characterId } } },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
