import { Router } from 'express';
import { manageUsers, manageBookings, reviewFeedback, deleteUser, updateBooking, respondFeedback } from '../controllers/admin.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { manageUsersSchema, manageBookingsSchema, reviewFeedbackSchema, deleteUserSchema, updateBookingSchema, respondFeedbackSchema } from '../schemas/admin.schema.js';

const router = Router();

// Gestión de usuarios (habilitar/deshabilitar cuidadores, dueños)
router.get('/users', authRequired, validateSchema(manageUsersSchema), manageUsers);

// Gestión de todas las reservas (ver todas las reservas en la plataforma)
router.get('/bookings', authRequired, validateSchema(manageBookingsSchema), manageBookings);

// Revisar el feedback de los servicios
router.get('/feedback', authRequired, validateSchema(reviewFeedbackSchema), reviewFeedback);

// Eliminar usuario
router.delete('/users/:id', authRequired, validateSchema(deleteUserSchema), deleteUser);

// Actualizar reserva
router.put('/bookings/:id', authRequired, validateSchema(updateBookingSchema), updateBooking);

// Responder feedback
router.post('/feedback/:id/respond', authRequired, validateSchema(respondFeedbackSchema), respondFeedback);

export default router;
