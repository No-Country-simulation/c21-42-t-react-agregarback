// feedback.model.js
import { z } from 'zod';

// Definir el esquema de validación para el feedback
const Feedback = z.object({
    id: z.string().uuid(),
    userId: z.string().uuid(),
    message: z.string().min(1, "El mensaje no puede estar vacío"),
    rating: z.number().int().min(1).max(5),
    createdAt: z.date()
});

// Exportar el esquema
export default Feedback;