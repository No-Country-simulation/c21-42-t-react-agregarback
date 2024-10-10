import { z } from 'zod';

// Esquema para registrar un cuidador
export const registerCaregiverSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio').trim(),
    services: z.array(z.string()).min(1, 'Debe proporcionar al menos un servicio'),
    bio: z.string().min(1, 'La biografía es obligatoria').trim()
});

// Esquema para actualizar el perfil de un cuidador
export const updateCaregiverProfileSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio').trim().optional(),
    services: z.array(z.string()).min(1, 'Debe proporcionar al menos un servicio').optional(),
    bio: z.string().min(1, 'La biografía es obligatoria').trim().optional()
});