import { z } from 'zod';

export const registerSchema = z.object({
    fullName: z.string().min(1, 'Full name is required').trim(),
    birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid birth date'),
    email: z.string().email('Invalid email address').trim(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    userType: z.enum(['petOwner', 'caregiver', 'admin']),
    authMethod: z.enum(['google', 'apple', 'meta', 'email']).optional(),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number').optional()
});

export const loginSchema = z.object({
    email: z.string().email('Invalid email address').trim(),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

