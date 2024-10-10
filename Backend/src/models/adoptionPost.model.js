import mongoose, { Schema, model } from 'mongoose';

const AdoptionPostSchema = new Schema({
    pet: { 
        type: Schema.Types.ObjectId, 
        ref: 'Pet', 
        required: [true, 'Pet is required'] 
    },
    postedBy: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Posted by is required'] 
    },
    description: { 
        type: String, 
        required: [true, 'Description is required'], 
        trim: true 
    },
    contactInfo: { 
        type: String, 
        required: [true, 'Contact info is required'], 
        trim: true 
    },
    status: { 
        type: String, 
        enum: ['open', 'closed'], 
        default: 'open' 
    }
}, { 
    timestamps: true 
});

// Añadir índices para mejorar el rendimiento de las consultas
AdoptionPostSchema.index({ pet: 1 });
AdoptionPostSchema.index({ postedBy: 1 });
AdoptionPostSchema.index({ status: 1 });

export default model('AdoptionPost', AdoptionPostSchema);