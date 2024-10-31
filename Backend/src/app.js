import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'; // Autenticación de usuarios
import petOwnerRoutes from './routes/petOwner.routes.js'; // Rutas específicas para dueños de mascotas
import caregiverRoutes from './routes/caregiver.routes.js'; // Rutas específicas para cuidadores
import bookingRoutes from './routes/booking.routes.js'; // Gestión de reservas
import adminRoutes from './routes/admin.routes.js'; // Administración de la plataforma
import chatRoutes from './routes/chat.routes.js'; // Rutas de chat
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// Configuración de CORS
app.use(cors({
    origin: '*', // Aquí se coloca el dominio de tu frontend
    credentials: true,
}));

// Middleware
app.use(morgan('dev')); // Para logging de solicitudes HTTP
app.use(express.json()); // Para interpretar JSON en las solicitudes
app.use(cookieParser()); // Para manejar cookies

// Rutas
app.use('/api/auth', authRoutes); // Autenticación y manejo de usuarios
app.use('/api/pet-owner', petOwnerRoutes); // Gestión de dueños de mascotas
app.use('/api/caregivers', caregiverRoutes); // Gestión de cuidadores de mascotas
app.use('/api/bookings', bookingRoutes); // Rutas de reservas de servicios
app.use('/api/admin', adminRoutes); // Rutas administrativas (solo accesibles para administradores)
app.use('/api/chat', chatRoutes); // Rutas de chat

export default app;
