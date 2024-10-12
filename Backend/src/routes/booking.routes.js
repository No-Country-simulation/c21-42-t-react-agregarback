import { Router } from 'express';
import { createBooking, getBookings, getBooking, updateBooking, cancelBooking, getCaregiverBookings, completeBooking } from '../controllers/booking.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBookingSchema, updateBookingSchema, deleteBookingSchema, getBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

// Crear una nueva reserva
/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingType:
 *                 type: string
 *                 enum: [walking, daycare, grooming]
 *                 description: Tipo de servicio de la reserva
 *                 example: walking
 *               pet:
 *                 type: string
 *                 description: ID de la mascota
 *                 example: 60d0fe4f5311236168a109ca
 *               caregiver:
 *                 type: string
 *                 description: ID del cuidador
 *                 example: 60d0fe4f5311236168a109cb
 *               owner:
 *                 type: string
 *                 description: ID del dueño de la mascota
 *                 example: 60d0fe4f5311236168a109cc
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la reserva
 *                 example: 2024-10-08T10:30:00Z
 *               status:
 *                 type: string
 *                 enum: [pending, completed, canceled]
 *                 description: Estado de la reserva
 *                 example: pending
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Solicitud inválida (falta información o formato incorrecto)
 */
router.post('/', authRequired, validateSchema(createBookingSchema), createBooking);

// Obtener todas las reservas del usuario
/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Obtener todas las reservas del usuario autenticado
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida exitosamente
 *       401:
 *         description: Usuario no autenticado o token inválido
 */
router.get('/', authRequired, getBookings);

// Obtener una reserva específica
/**
 * @swagger
 * /api/bookings/{bookingId}:
 *   get:
 *     summary: Obtener una reserva específica
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID de la reserva a obtener
 *     responses:
 *       200:
 *         description: Reserva obtenida exitosamente
 *       400:
 *         description: Solicitud inválida
 */
router.get('/:bookingId', authRequired, validateSchema(getBookingSchema), getBooking);

// Actualizar una reserva (por ejemplo, cambiar la fecha)
/**
 * @swagger
 * /api/bookings/{bookingId}:
 *   put:
 *     summary: Actualizar una reserva
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
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
 *             bookingType:
 *               type: string
 *               enum: [walking, daycare, grooming]
 *             pet:
 *               type: string
 *               format: ObjectId
 *             caregiver:
 *               type: string
 *               format: ObjectId
 *             owner:
 *               type: string
 *               format: ObjectId
 *             date:
 *               type: string
 *               format: date-time
 *             status:
 *               type: string
 *               enum: [pending, completed, canceled]
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       400:
 *         description: Solicitud inválida
 */
router.put('/:bookingId', authRequired, validateSchema(updateBookingSchema), updateBooking);

// Cancelar una reserva
/**
 * @swagger
 * /api/bookings/{bookingId}:
 *   delete:
 *     summary: Cancelar una reserva
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID de la reserva a cancelar
 *     responses:
 *       200:
 *         description: Reserva cancelada exitosamente
 *       400:
 *         description: Solicitud inválida
 */
router.delete('/:bookingId', authRequired, validateSchema(deleteBookingSchema), cancelBooking);

// Obtener todas las reservas del cuidador
/**
 * @swagger
 * /api/bookings/caregiver:
 *   get:
 *     summary: Obtener todas las reservas del cuidador autenticado
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida exitosamente
 *       401:
 *         description: Usuario no autenticado o token inválido
 */
router.get('/caregiver', authRequired, getCaregiverBookings);

// Completar una reserva
/**
 * @swagger
 * /api/bookings/{bookingId}/complete:
 *   put:
 *     summary: Completar una reserva
 *     tags:
 *       - Reservas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         schema:
 *           type: string
 *           format: ObjectId
 *         required: true
 *         description: ID de la reserva a completar
 *     responses:
 *       200:
 *         description: Reserva completada exitosamente
 *       400:
 *         description: Solicitud inválida
 */
router.put('/:bookingId/complete', authRequired, validateSchema(getBookingSchema), completeBooking);

export default router;
