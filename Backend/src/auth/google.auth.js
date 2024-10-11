import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User.js'; // Modelo de usuario en tu base de datos

// Configura el Passport con Google OAuth2
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
    // Verifica si el usuario ya existe en tu base de datos
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      // Si no existe, creas un nuevo usuario
        user = new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            picture: profile.photos[0].value
        });
        await user.save();
    }
    return done(null, user);
    } catch (err) {
        console.error('Error during authentication:', err); // Log de error
        return done(err, null);
    }
}));

// Serializar y deserializar usuario para sesión
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
