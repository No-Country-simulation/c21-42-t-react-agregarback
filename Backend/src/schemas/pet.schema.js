import { z } from 'zod';

// Esquema para crear una nueva mascota
export const createPetSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio').trim(),
    type: z.enum(['dog', 'cat', 'bird', 'other']),
    breed: z.string().optional().transform(value => value.trim()),
    age: z.number().int().nonnegative('La edad debe ser un número positivo'),
    owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de propietario inválido')
});

// Esquema para actualizar una mascota existente
export const updatePetSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de mascota inválido'),
    body: z.object({
        name: z.string().min(1, 'El nombre es obligatorio').trim().optional(),
        type: z.enum(['dog', 'cat', 'bird', 'other']).optional(),
        breed: z.string().optional().transform(value => value.trim()),
        age: z.number().int().nonnegative('La edad debe ser un número positivo').optional(),
        owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID de propietario inválido').optional()
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