import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Ruta para iniciar el flujo de autenticación con Google
/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Iniciar sesión con Google
 *     tags:
 *       - Autenticación
 *     description: Redirige al usuario a la página de autenticación de Google.
 *     responses:
 *       302:
 *         description: Redirección a la página de autenticación de Google
 *       500:
 *         description: Error interno del servidor
 */
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback de Google
/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Callback de autenticación de Google
 *     tags:
 *       - Autenticación
 *     description: Recibe la respuesta de Google después de la autenticación y realiza el login.
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         description: Código de autorización devuelto por Google
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
router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/profile' // Redirige a la página del perfil después de iniciar sesión exitosamente
}));

export default router;