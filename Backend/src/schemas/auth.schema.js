import {z} from 'zod';
export const registerSchema = z.object({
    username: z.string({
        string_error: 'Username must be a string',
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be at least 6 characters'
    })
});
export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be at least 6 characters'
    })
});

export const contactSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    message: z.string({
        required_error: 'Message is required'
    })
});