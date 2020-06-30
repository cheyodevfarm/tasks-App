const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "Not User Found" });
      } else {
        const match = await user.matchPassword(password);
        console.log("llego hasta aca", match);
        if (!match) {
          return done(null, false, {
            message: " Incorrect Password, forgot the password?",
          });
        } else {
          return done(null, user);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
