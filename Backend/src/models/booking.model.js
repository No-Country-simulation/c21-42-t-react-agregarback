import mongoose, { Schema, model } from 'mongoose';

const BookingSchema = new Schema({
    bookingType: { 
        type: String, 
        enum: ['walking', 'daycare', 'grooming'], 
        required: [true, 'Booking type is required'] 
    },
    pet: { 
        type: Schema.Types.ObjectId, 
        ref: 'Pet', 
        required: [true, 'Pet is required'] 
    },
    caregiver: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Owner is required'] 
    },
    date: { 
        type: Date, 
        required: [true, 'Date is required'] 
    },
    status: { 
        type: String, 
        enum: ['pending', 'completed', 'canceled'], 
        default: 'pending' 
    }
}, { 
    timestamps: true 
});

// Añadir índices para mejorar el rendimiento de las consultas
BookingSchema.index({ bookingType: 1 });
BookingSchema.index({ pet: 1 });
BookingSchema.index({ caregiver: 1 });
BookingSchema.index({ owner: 1 });
BookingSchema.index({ date: 1 });
BookingSchema.index({ status: 1 });

export default model('Booking', BookingSchema);