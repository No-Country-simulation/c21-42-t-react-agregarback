import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User } from '../models/User.js'; // Modelo de usuario en tu base de datos

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name', 'photos'] // Campos solicitados
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Verifica si el usuario ya existe en tu base de datos
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
            // Si no existe, crea un nuevo usuario
            user = new User({
                facebookId: profile.id,
                email: profile.emails[0].value,
                name: `${profile.name.givenName} ${profile.name.familyName}`,
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