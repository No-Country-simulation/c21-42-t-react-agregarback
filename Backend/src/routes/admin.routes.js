import { Router } from 'express';
import { manageUsers, manageBookings, reviewFeedback, deleteUser, updateBooking, respondFeedback } from '../controllers/admin.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { manageUsersSchema, manageBookingsSchema, reviewFeedbackSchema, deleteUserSchema, updateBookingSchema, respondFeedbackSchema } from '../schemas/admin.schema.js';

const router = Router();

// Gestión de usuarios (habilitar/deshabilitar cuidadores, dueños)
/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Gestionar usuarios
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: userType
 *         schema:
 *           type: string
 *           enum: [petOwner, caregiver, admin]
 *         description: Filtrar por tipo de usuario
 *     responses:
 *       200:
 *         description: Lista de usuarios gestionada correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.get('/users', authRequired, validateSchema(manageUsersSchema), manageUsers);

// Gestión de todas las reservas (ver todas las reservas en la plataforma)
/**
 * @swagger
 * /api/admin/bookings:
 *   get:
 *     summary: Gestionar reservas
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, completed, canceled]
 *         description: Filtrar por estado de la reserva
 *     responses:
 *       200:
 *         description: Lista de reservas gestionada correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.get('/bookings', authRequired, validateSchema(manageBookingsSchema), manageBookings);

// Revisar el feedback de los servicios
/**
 * @swagger
 * /api/admin/feedback:
 *   get:
 *     summary: Revisar feedback
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: feedbackType
 *         schema:
 *           type: string
 *           enum: [positive, negative, neutral]
 *         description: Filtrar por tipo de feedback
 *     responses:
 *       200:
 *         description: Lista de feedback gestionada correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.get('/feedback', authRequired, validateSchema(reviewFeedbackSchema), reviewFeedback);

// Eliminar usuario
/**
 * @swagger
 * /api/admin/users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.delete('/users/:id', authRequired, validateSchema(deleteUserSchema), deleteUser);

// Actualizar reserva
/**
 * @swagger
 * /api/admin/bookings/{id}:
 *   put:
 *     summary: Actualizar reserva
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID de la reserva a actualizar
 *       - in: body
 *         name: body
 *         required: true
 *         description: Datos a actualizar en la reserva
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               enum: [pending, completed, canceled]
 *             date:
 *               type: string
 *               format: date
 *             caregiver:
 *               type: string
 *               format: ObjectId
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.put('/bookings/:id', authRequired, validateSchema(updateBookingSchema), updateBooking);

// Responder feedback
/**
 * @swagger
 * /api/admin/feedback/{id}/respond:
 *   post:
 *     summary: Responder feedback
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID del feedback a responder
 *       - in: body
 *         name: body
 *         required: true
 *         description: Respuesta al feedback
 *         schema:
 *           type: object
 *           properties:
 *             response:
 *               type: string
 *     responses:
 *       200:
 *         description: Feedback respondido correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.post('/feedback/:id/respond', authRequired, validateSchema(respondFeedbackSchema), respondFeedback);

export default router;
