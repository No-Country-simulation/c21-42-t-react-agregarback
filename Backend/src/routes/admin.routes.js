import { Router } from 'express';
import { manageUsers, manageBookings, reviewFeedback } from '../controllers/admin.controller.js';

const router = Router();

// Gestión de usuarios (habilitar/deshabilitar cuidadores, dueños)
router.get('/users', manageUsers);

// Gestión de todas las reservas (ver todas las reservas en la plataforma)
router.get('/bookings', manageBookings);

// Revisar el feedback de los servicios
router.get('/feedback', reviewFeedback);

export default router;
