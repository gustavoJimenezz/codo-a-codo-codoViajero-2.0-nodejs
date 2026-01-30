const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../database/models');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Buscar usuario existente por email
      let user = await User.findOne({
        where: { email: profile.emails[0].value }
      });

      if (!user) {
        // Crear nuevo usuario con datos de Google
        user = await User.create({
          name: profile.name.givenName || profile.displayName,
          lastname: profile.name.familyName || '',
          email: profile.emails[0].value,
          role_id: 2 // Rol usuario por defecto
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

// Serialización para sesiones
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
