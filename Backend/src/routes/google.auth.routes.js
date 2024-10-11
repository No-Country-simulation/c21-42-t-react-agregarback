import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Ruta para iniciar el flujo de autenticación con Google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback de Google
router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/profile' // Redirige a la página del perfil después de iniciar sesión exitosamente
}));

export default router;