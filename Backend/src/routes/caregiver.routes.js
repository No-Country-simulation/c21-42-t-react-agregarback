import { Router } from 'express';
import { registerCaregiver, updateCaregiverProfile } from '../controllers/caregiver.controller.js';

const router = Router();

// Registro de un cuidador
/**
 * @swagger
 * /api/caregivers/register:
 *   post:
 *     summary: Registrar un nuevo cuidador
 *     tags:
 *       - Cuidadores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del cuidador
 *                 example: Juan Pérez
 *               services:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Servicios que ofrece el cuidador
 *                 example: [walking, daycare]
 *               bio:
 *                 type: string
 *                 description: Biografía del cuidador
 *                 example: "Cuidador con más de 5 años de experiencia en el cuidado de mascotas."
 *     responses:
 *       201:
 *         description: Cuidador registrado exitosamente
 *       400:
 *         description: Solicitud inválida (falta información o formato incorrecto)
 */
router.post('/register', registerCaregiver);

// Actualizar perfil de cuidador
/**
 * @swagger
 * /api/caregivers/profile:
 *   put:
 *     summary: Actualizar el perfil de un cuidador
 *     tags:
 *       - Cuidadores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del cuidador (opcional)
 *                 example: Juan Pérez
 *               services:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Servicios que ofrece el cuidador (opcional)
 *                 example: [walking, daycare]
 *               bio:
 *                 type: string
 *                 description: Biografía del cuidador (opcional)
 *                 example: "Cuidador con más de 5 años de experiencia en el cuidado de mascotas."
 *     responses:
 *       200:
 *         description: Perfil actualizado exitosamente
 *       400:
 *         description: Solicitud inválida (falta información o formato incorrecto)
 */
router.put('/profile', updateCaregiverProfile);

export default router;
