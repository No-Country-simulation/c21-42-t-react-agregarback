import mongoose, { Schema, model } from 'mongoose';

const CaregiverSchema = new Schema({
    name: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'], 
        trim: true 
    },
    services: [{ 
        type: String, 
        required: [true, 'Debe proporcionar al menos un servicio'] 
    }],
    bio: { 
        type: String, 
        required: [true, 'La biografía es obligatoria'], 
        trim: true 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'El ID de usuario es obligatorio'] 
    }
}, { 
    timestamps: true 
});

// Añadir índices para mejorar el rendimiento de las consultas
CaregiverSchema.index({ userId: 1 });

export default model('Caregiver', CaregiverSchema);