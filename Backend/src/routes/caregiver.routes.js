import { Router } from 'express';
import { registerCaregiver, updateCaregiverProfile, viewBookings, completeBooking } from '../controllers/caregiver.controller.js';

const router = Router();

// Registro de un cuidador
router.post('/register', registerCaregiver);

// Actualizar perfil de cuidador
router.put('/profile', updateCaregiverProfile);

// Ver reservas asignadas al cuidador
router.get('/bookings', viewBookings);

// Completar una reserva
router.put('/bookings/:bookingId/complete', completeBooking);

export default router;
