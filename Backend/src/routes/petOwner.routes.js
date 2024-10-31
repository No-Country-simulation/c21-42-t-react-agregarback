import { Router } from 'express';
import { getPets, addPet, updatePet, deletePet, bookService, viewBookings } from '../controllers/petOwner.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createPetSchema, updatePetSchema, getPetSchema, deletePetSchema } from '../schemas/pet.schema.js';
import { createBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

// Obtener las mascotas del dueño
/**
 * @swagger
 * /api/pet-owner/pets:
 *   get:
 *     summary: Obtener las mascotas del dueño
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 *                     enum: [dog, cat, bird, other]
 *                   age:
 *                     type: integer
 *                   gender:
 *                     type: string
 *                     enum: [male, female]
 *                   breed:
 *                     type: string
 *                   healthStatus:
 *                     type: object
 *                     properties:
 *                       vaccines:
 *                         type: array
 *                         items:
 *                           type: string
 *                       otherDetails:
 *                         type: string
 *                   history:
 *                     type: string
 *                   firstImg:
 *                     type: string
 *                   secondImg:
 *                     type: string
 *                   thirdImg:
 *                     type: string
 *                   adoptionStatus:
 *                     type: string
 *                     enum: [available, adopted]
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/pets', getPets);

// Añadir una nueva mascota
/**
 * @swagger
 * /api/pet-owner/pets:
 *   post:
 *     summary: Añadir una nueva mascota
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - age
 *               - gender
 *               - owner
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [dog, cat, bird, other]
 *               age:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *               breed:
 *                 type: string
 *               healthStatus:
 *                 type: object
 *                 properties:
 *                   vaccines:
 *                     type: array
 *                     items:
 *                       type: string
 *                   otherDetails:
 *                     type: string
 *               history:
 *                 type: string
 *               firstImg:
 *                 type: string
 *               secondImg:
 *                 type: string
 *               thirdImg:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mascota creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/pets', validateSchema(createPetSchema), addPet);

// Actualizar los datos de una mascota
/**
 * @swagger
 * /api/pet-owner/pets/{petId}:
 *   put:
 *     summary: Actualizar los datos de una mascota
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: petId
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [dog, cat, bird, other]
 *               age:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *               breed:
 *                 type: string
 *               healthStatus:
 *                 type: object
 *                 properties:
 *                   vaccines:
 *                     type: array
 *                     items:
 *                       type: string
 *                   otherDetails:
 *                     type: string
 *               history:
 *                 type: string
 *               firstImg:
 *                 type: string
 *               secondImg:
 *                 type: string
 *               thirdImg:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mascota actualizada exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Mascota no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/pets/:petId', authRequired, validateSchema(updatePetSchema), updatePet);

// Eliminar una mascota
/**
 * @swagger
 * /api/pet-owner/pets/{petId}:
 *   delete:
 *     summary: Eliminar una mascota
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: petId
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mascota eliminada exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Mascota no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/pets/:petId', authRequired, validateSchema(deletePetSchema), deletePet);

// Reservar un servicio para una mascota
/**
 * @swagger
 * /api/pet-owner/book:
 *   post:
 *     summary: Reservar un servicio para una mascota
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookingType
 *               - pet
 *               - date
 *             properties:
 *               bookingType:
 *                 type: string
 *                 enum: [walking, daycare, grooming]
 *               pet:
 *                 type: string
 *               caregiver:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [pending, completed, canceled]
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/book', authRequired, validateSchema(createBookingSchema), bookService);

// Ver reservas del dueño
/**
 * @swagger
 * /api/pet-owner/bookings:
 *   get:
 *     summary: Ver reservas del dueño
 *     tags: [Pet Owner]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   service:
 *                     type: string
 *                   date:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                   pet:
 *                     type: string
 *                   caregiver:
 *                     type: string
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/bookings', authRequired, viewBookings);

export default router;
