import { Router } from 'express';
import { registerCaregiver, updateCaregiverProfile } from '../controllers/caregiver.controller.js';

const router = Router();

// Registro de un cuidador
router.post('/register', registerCaregiver);

// Actualizar perfil de cuidador
router.put('/profile', updateCaregiverProfile);

export default router;
