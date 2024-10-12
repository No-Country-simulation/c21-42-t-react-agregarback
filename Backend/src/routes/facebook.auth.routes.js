import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Ruta para iniciar el flujo de autenticación con Facebook
/**
 * @swagger
 * /api/auth/facebook:
 *   get:
 *     summary: Iniciar sesión con Facebook
 *     tags:
 *       - Autenticación
 *     description: Redirige al usuario a la página de autenticación de Facebook.
 *     responses:
 *       302:
 *         description: Redirección a la página de autenticación de Facebook
 *       500:
 *         description: Error interno del servidor
 */
router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));

// Callback de Facebook
/**
 * @swagger
 * /api/auth/facebook/callback:
 *   get:
 *     summary: Callback de autenticación de Facebook
 *     tags:
 *       - Autenticación
 *     description: Recibe la respuesta de Facebook después de la autenticación y realiza el login.
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         description: Código de autorización devuelto por Facebook
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *       400:
 *         description: Error en la autenticación
 *       500:
 *         description: Error interno del servidor
 */
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/profile'
}));

export default router;