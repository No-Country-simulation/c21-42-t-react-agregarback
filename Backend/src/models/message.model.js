import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim:true,
        required:true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Message', messageSchema);