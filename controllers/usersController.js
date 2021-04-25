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
    console.log(req.user);
    if(req.user) 
    {
      return res.json({characters: req.user.characters});
    }
    else{
      return res.json(
        {characters: []})
    }
    // User.findById(req.params.id)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
  logout: function(req, res){
    req.session.destroy(function (err) {
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
  login: function (req, res) {
    const { username, password } = req.body;
    // console.log(username, password);
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
              req.login(user, function(err) {
                if (err) { return next(err); }
                // return res.redirect('/users/' + req.user.username);
                res.json(user);
              });
            }
          }
        })(req, res);
      }
    }
  },
};
