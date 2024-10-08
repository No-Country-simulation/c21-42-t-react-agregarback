import { Router } from 'express';
import { createBooking, getBookings, updateBooking, cancelBooking } from '../controllers/booking.controller.js';

const router = Router();

// Crear una nueva reserva
router.post('/', createBooking);

// Obtener todas las reservas (filtro por usuario o cuidador)
router.get('/', getBookings);

// Actualizar una reserva (por ejemplo, cambiar la fecha)
router.put('/:bookingId', updateBooking);

// Cancelar una reserva
router.delete('/:bookingId', cancelBooking);

export default router;
