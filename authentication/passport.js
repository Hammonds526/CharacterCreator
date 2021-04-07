const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//const db will go here

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
    },
    (username, password, done) => {
      db.User.findOne({
        where: {
          username: username,
        },
      }).then((dbUser) => {
        if (!dbUser || !dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect username or password.",
          });
        }
        return done(null, dbUser);
      });
    }
  )
);

// in order to help keep authentication state across HTTP requests,
// sequelize needs to serialize and deserialize the user (we are going to be using mongo)
// just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  bc(null, obj);
});

//exporting our configured passport
module.expoerts = passport;
