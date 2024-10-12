import {Router} from 'express';
import {register, login, logout,verifyToken, profile, message} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema, contactSchema } from '../schemas/auth.schema.js';

const router = Router();

/**
 * @swagger
 * /api/register:
 * post:
 *     summary: Registro de un nuevo usuario
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Nombre completo del usuario
 *                 example: John Doe
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento del usuario
 *                 example: 1990-01-01
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *                 example: johndoe@-example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: password123
 *               userType:
 *                 type: string
 *                 enum: [petOwner, caregiver, admin]
 *                 description: Tipo de usuario
 *                 example: petOwner
 *               authMethod:
 *                 type: string
 *                 enum: [google, apple, meta, email]
 *                 description: Método de autenticación utilizado
 *                 example: google
 *               phoneNumber:
 *                 type: string
 *                 description: Número de teléfono opcional del usuario
 *                 example: +123456789
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Solicitud inválida (falta información o formato incorrecto)
 */
router.post('/register',validateSchema(registerSchema), register);
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Inicio de sesión de un usuario
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *                 example: johndoe@-example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: password123
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales incorrectas
 *       400:
 *         description: Solicitud inválida
 */
router.post('/login', validateSchema(loginSchema),login);
/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Cierre de sesión
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 *       400:
 *         description: Solicitud inválida
 */
router.post('/logout', logout);
/**
 * @swagger
 * /api/verify:
 *   get:
 *     summary: Verificar token de acceso
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Token válido
 *       401:
 *         description: Token inválido
 */
router.get('/verify', verifyToken);
/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Obtener perfil de usuario
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Perfil de usuario
 *       401:
 *         description: Token inválido
 */
router.get('/profile', authRequired, profile);
/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Enviar mensaje de contacto
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del remitente
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *                 example:
 *              message:
 *                type: string
 *               description: Mensaje de contacto
 *              example: Hola, me gustaría saber más información sobre...
 *    responses:
 *     200:
 *      description: Mensaje enviado correctamente
 *    400:
 *     description: Solicitud inválida
 */
router.post('/contact',authRequired, validateSchema(contactSchema), message);
export default router;