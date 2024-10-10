import { Router } from 'express';
import { getPets, addPet, updatePet, deletePet, bookService, viewBookings } from '../controllers/petOwner.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createPetSchema, updatePetSchema, getPetSchema, deletePetSchema } from '../schemas/pet.schema.js';
import { createBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

// Obtener las mascotas del dueño
router.get('/pets', authRequired, getPets);

// Añadir una nueva mascota
router.post('/pets', authRequired, validateSchema(createPetSchema), addPet);

// Actualizar los datos de una mascota
router.put('/pets/:petId', authRequired, validateSchema(updatePetSchema), updatePet);

// Eliminar una mascota
router.delete('/pets/:petId', authRequired, validateSchema(deletePetSchema), deletePet);

// Reservar un servicio para una mascota
router.post('/book', authRequired, validateSchema(createBookingSchema), bookService);

// Ver reservas del dueño
router.get('/bookings', authRequired, viewBookings);

export default router;