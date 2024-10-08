import { Router } from 'express';
import { getPets, addPet, updatePet, deletePet, bookService } from '../controllers/petOwner.controller.js';

const router = Router();

// Obtener las mascotas del dueño
router.get('/pets', getPets);

// Añadir una nueva mascota
router.post('/pets', addPet);

// Actualizar los datos de una mascota
router.put('/pets/:petId', updatePet);

// Eliminar una mascota
router.delete('/pets/:petId', deletePet);

// Reservar un servicio para una mascota
router.post('/book', bookService);

export default router;
