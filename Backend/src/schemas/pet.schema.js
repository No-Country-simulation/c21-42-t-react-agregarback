import { z } from 'zod';

// Esquema para crear una nueva mascota
/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePet:
 *       type: object
 *       required:
 *         - name
 *         - type
 *         - age
 *         - owner
 *         - gender
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la mascota
 *         type:
 *           type: string
 *           enum: [dog, cat, bird, other]
 *           description: Tipo de mascota
 *         breed:
 *           type: string
 *           description: Raza de la mascota
 *         age:
 *           type: integer
 *           description: Edad de la mascota
 *         owner:
 *           type: string
 *           description: ID del dueño
 *         gender:
 *           type: string
 *           enum: [male, female]
 *           description: Género de la mascota
 *         healthStatus:
 *           type: object
 *           properties:
 *             vaccines:
 *               type: array
 *               items:
 *                 type: string
 *               description: Vacunas aplicadas
 *             otherDetails:
 *               type: string
 *               description: Otros detalles de salud
 *         history:
 *           type: string
 *           description: Historia de la mascota
 *         firstImg:
 *           type: string
 *           description: URL de la primera imagen
 *         secondImg:
 *           type: string
 *           description: URL de la segunda imagen
 *         thirdImg:
 *           type: string
 *           description: URL de la tercera imagen
 *     UpdatePet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la mascota
 *         type:
 *           type: string
 *           enum: [dog, cat, bird, other]
 *           description: Tipo de mascota
 *         breed:
 *           type: string
 *           description: Raza de la mascota
 *         age:
 *           type: integer
 *           description: Edad de la mascota
 *         owner:
 *           type: string
 *           description: ID del dueño
 *         gender:
 *           type: string
 *           enum: [male, female]
 *           description: Género de la mascota
 *         healthStatus:
 *           type: object
 *           properties:
 *             vaccines:
 *               type: array
 *               items:
 *                 type: string
 *               description: Vacunas aplicadas
 *             otherDetails:
 *               type: string
 *               description: Otros detalles de salud
 *         history:
 *           type: string
 *           description: Historia de la mascota
 *         firstImg:
 *           type: string
 *           description: URL de la primera imagen
 *         secondImg:
 *           type: string
 *           description: URL de la segunda imagen
 *         thirdImg:
 *           type: string
 *           description: URL de la tercera imagen
 *     CreateBooking:
 *       type: object
 *       required:
 *         - bookingType
 *         - pet
 *         - date
 *         - owner
 *       properties:
 *         bookingType:
 *           type: string
 *           enum: [walking, daycare, grooming]
 *           description: Tipo de servicio reservado
 *         pet:
 *           type: string
 *           description: ID de la mascota
 *         caregiver:
 *           type: string
 *           description: ID del cuidador (opcional)
 *         owner:
 *           type: string
 *           description: ID del dueño
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha de la reserva
 *         status:
 *           type: string
 *           enum: [pending, completed, canceled]
 *           description: Estado de la reserva
 */

export const createPetSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio').trim(),
    type: z.enum(['dog', 'cat', 'bird', 'other']),
    breed: z.string().optional().transform(value => value.trim()),
    age: z.number().int().nonnegative('La edad debe ser un número positivo'),
    owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de propietario inválido'),
    gender: z.enum(['male', 'female']),
    healthStatus: z.object({
        vaccines: z.array(z.string().trim()).optional(),
        otherDetails: z.string().optional().transform(value => value.trim())
    }).optional(),
    history: z.string().optional().transform(value => value.trim()),
    firstImg: z.string().optional().url('Debe ser una URL válida'),
    secondImg: z.string().optional().url('Debe ser una URL válida'),
    thirdImg: z.string().optional().url('Debe ser una URL válida')
});

// Esquema para actualizar una mascota existente
export const updatePetSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de mascota inválido'),
    body: z.object({
        name: z.string().min(1, 'El nombre es obligatorio').trim().optional(),
        type: z.enum(['dog', 'cat', 'bird', 'other']).optional(),
        breed: z.string().optional().transform(value => value.trim()),
        age: z.number().int().nonnegative('La edad debe ser un número positivo').optional(),
        owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de propietario inválido').optional(),
        gender: z.enum(['male', 'female']).optional(),
        healthStatus: z.object({
            vaccines: z.array(z.string().trim()).optional(),
            otherDetails: z.string().optional().transform(value => value.trim())
        }).optional(),
        history: z.string().optional().transform(value => value.trim()),
        firstImg: z.string().optional().url('Debe ser una URL válida'),
        secondImg: z.string().optional().url('Debe ser una URL válida'),
        thirdImg: z.string().optional().url('Debe ser una URL válida')
    })
});

// Esquema para eliminar una mascota
export const deletePetSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de mascota inválido')
});

// Esquema para obtener una mascota por ID
export const getPetSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de mascota inválido')
});