import { z } from 'zod';

// Esquema para crear una nueva reserva
export const createBookingSchema = z.object({
    bookingType: z.enum(['walking', 'daycare', 'grooming']),
    pet: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid pet ID'),
    caregiver: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid caregiver ID').optional(),
    owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid owner ID'),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
    status: z.enum(['pending', 'completed', 'canceled']).optional()
});

// Esquema para actualizar una reserva existente
export const updateBookingSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid booking ID'),
    body: z.object({
        bookingType: z.enum(['walking', 'daycare', 'grooming']).optional(),
        pet: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid pet ID').optional(),
        caregiver: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid caregiver ID').optional(),
        owner: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid owner ID').optional(),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date').optional(),
        status: z.enum(['pending', 'completed', 'canceled']).optional()
    })
});

// Esquema para eliminar una reserva
export const deleteBookingSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid booking ID')
});

// Esquema para obtener una reserva por ID
export const getBookingSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid booking ID')
});