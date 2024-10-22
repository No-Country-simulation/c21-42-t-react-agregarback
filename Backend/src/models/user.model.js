import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    fullName: { 
        type: String, 
        required: [true, 'Full name is required'], 
        trim: true 
    },
    birthDate: { 
        type: Date, 
        required: [true, 'Birth date is required'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true, 
        trim: true, 
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] 
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
        minlength: [6, 'Password must be at least 6 characters'] 
    },
    userType: { 
        type: String, 
        enum: ['petOwner', 'caregiver', 'admin'], 
        required: [true, 'User type is required'] 
    },
    authMethod: { 
        type: String, 
        enum: ['google', 'apple', 'meta', 'email'], 
        default: 'email' 
    },
    phoneNumber: { 
        type: String, 
        trim: true, 
        match: [/^\+?[1-9]\d{1,14}$/, 'Please fill a valid phone number'] 
    },
    pets: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Pet' 
    }],
    servicesOffered: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Service' 
    }],
    conversationHistory: [
        {
            role: { type: String, required: true },
            content: { type: String, required: true }
        }
    ]
}, { 
    timestamps: true 
});

// Añadir índices para mejorar el rendimiento de las consultas
UserSchema.index({ email: 1 });
UserSchema.index({ userType: 1 });

export default model('User', UserSchema);