import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Ruta para iniciar el flujo de autenticación con Facebook
router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));

// Callback de Facebook
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/profile'
}));

export default router;