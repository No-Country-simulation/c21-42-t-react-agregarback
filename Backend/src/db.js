import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Configurar dotenv

// Conectar a la base de datos

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Conectar a la base de datos
        console.log('Database connected!'); // Mensaje de éxito
    } catch (error) {
        console.log(error); // Mensaje de error
    }
};
