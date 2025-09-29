import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_URL
  },
  (accessToken, refreshToken, profile, done) => {
    console.log({ accessToken, refreshToken, profile });
    done(null, profile);
  }
));

