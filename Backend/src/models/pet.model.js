import mongoose, { Schema, model } from 'mongoose';

const PetSchema = new Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required'], 
        trim: true 
    },
    gender: { 
        type: String, 
        enum: ['male', 'female'], 
        required: [true, 'Gender is required'] 
    },
    age: { 
        type: Number, 
        required: [true, 'Age is required'], 
        min: [0, 'Age must be a positive number'] 
    },
    breed: { 
        type: String, 
        trim: true 
    },
    healthStatus: {
        vaccines: [{ 
            type: String, 
            trim: true 
        }],
        otherDetails: { 
            type: String, 
            trim: true 
        }
    },
    history: { 
        type: String, 
        trim: true 
    },
    firstImg: { 
        type: String, 
        trim: true 
    },
    secondImg: { 
        type: String, 
        trim: true 
    },
    thirdImg: { 
        type: String, 
        trim: true 
    },
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Owner is required'] 
    },
    adoptionStatus: { 
        type: String, 
        enum: ['available', 'adopted'], 
        default: 'available' 
    }
}, { 
    timestamps: true 
});

// Añadir índices para mejorar el rendimiento de las consultas
PetSchema.index({ name: 1 });
PetSchema.index({ owner: 1 });
PetSchema.index({ adoptionStatus: 1 });

export default model('Pet', PetSchema);