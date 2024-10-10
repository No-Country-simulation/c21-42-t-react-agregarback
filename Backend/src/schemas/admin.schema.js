import { z } from 'zod';

// Esquema para gestionar usuarios
export const manageUsersSchema = z.object({
    // Por ejemplo, si necesitas filtrar por tipo de usuario:
    userType: z.enum(['petOwner', 'caregiver', 'admin']).optional()
});

// Esquema para gestionar reservas
export const manageBookingsSchema = z.object({
    status: z.enum(['pending', 'completed', 'canceled']).optional()
});

// Esquema para revisar feedback
export const reviewFeedbackSchema = z.object({
    feedbackType: z.enum(['positive', 'negative', 'neutral']).optional()
});

// Esquema para eliminar usuario
export const deleteUserSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid user ID')
});

// Esquema para actualizar reserva
export const updateBookingSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid booking ID'),
    body: z.object({
        // Añadir aquí las propiedades que se pueden actualizar en una reserva
        status: z.enum(['pending', 'completed', 'canceled']).optional(),
        // Otras propiedades de la reserva que se pueden actualizar
        date: z.string().optional(),
        caregiver: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid caregiver ID').optional()
    })
});

// Esquema para responder feedback
export const respondFeedbackSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid feedback ID'),
    body: z.object({
        response: z.string().min(1, 'Response is required')
    })
});