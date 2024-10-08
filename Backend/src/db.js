import mongoose from 'mongoose';
require('dotenv').config(); // Importar dotenv

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Conectar a la base de datos
        console.log('Database connected!'); // Mensaje de éxito
    } catch (error) {
        console.log(error); // Mensaje de error
    }
};
