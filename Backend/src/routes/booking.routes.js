import { Router } from 'express';
import { createBooking, getBookings, getBooking, updateBooking, cancelBooking, getCaregiverBookings, completeBooking } from '../controllers/booking.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBookingSchema, updateBookingSchema, deleteBookingSchema, getBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

// Crear una nueva reserva
router.post('/', authRequired, validateSchema(createBookingSchema), createBooking);

// Obtener todas las reservas del usuario
router.get('/', authRequired, getBookings);

// Obtener una reserva específica
router.get('/:bookingId', authRequired, validateSchema(getBookingSchema), getBooking);

// Actualizar una reserva (por ejemplo, cambiar la fecha)
router.put('/:bookingId', authRequired, validateSchema(updateBookingSchema), updateBooking);

// Cancelar una reserva
router.delete('/:bookingId', authRequired, validateSchema(deleteBookingSchema), cancelBooking);

// Obtener todas las reservas del cuidador
router.get('/caregiver', authRequired, getCaregiverBookings);

// Completar una reserva
router.put('/:bookingId/complete', authRequired, validateSchema(getBookingSchema), completeBooking);

export default router;
