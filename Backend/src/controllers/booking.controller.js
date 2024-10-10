import Booking from '../models/booking.model.js';
import { createBookingSchema, updateBookingSchema, deleteBookingSchema, getBookingSchema } from '../schemas/booking.schema.js';

// Crear nueva reserva
export const createBooking = async (req, res) => {
    try {
        // Validar datos de entrada
        createBookingSchema.parse(req.body);

        const { bookingType, date, pet, caregiver } = req.body;
        const booking = new Booking({ bookingType, date, pet, owner: req.userId, caregiver });
        await booking.save();
        res.status(201).json({ message: 'Reserva creada exitosamente', booking });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al crear la reserva', error });
    }
};

// Obtener todas las reservas del usuario
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ owner: req.userId });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas', error });
    }
};

// Obtener una reserva específica
export const getBooking = async (req, res) => {
    try {
        // Validar datos de entrada
        getBookingSchema.parse(req.params);

        const { bookingId } = req.params;
        const booking = await Booking.findOne({ _id: bookingId, owner: req.userId });
        if (!booking) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.json(booking);
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al obtener la reserva', error });
    }
};

// Actualizar reserva
export const updateBooking = async (req, res) => {
    try {
        // Validar datos de entrada
        updateBookingSchema.parse({ id: req.params.bookingId, body: req.body });

        const { bookingId } = req.params;
        const updatedBooking = await Booking.findOneAndUpdate({ _id: bookingId, owner: req.userId }, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.json(updatedBooking);
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al actualizar la reserva', error });
    }
};

// Cancelar reserva
export const cancelBooking = async (req, res) => {
    try {
        // Validar datos de entrada
        deleteBookingSchema.parse(req.params);

        const { bookingId } = req.params;
        const canceledBooking = await Booking.findOneAndDelete({ _id: bookingId, owner: req.userId });
        if (!canceledBooking) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.json({ message: 'Reserva cancelada' });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al cancelar la reserva', error });
    }
};

// Obtener todas las reservas de un cuidador
export const getCaregiverBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ caregiver: req.userId });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas del cuidador', error });
    }
};

// Completar una reserva
export const completeBooking = async (req, res) => {
    try {
        // Validar datos de entrada
        getBookingSchema.parse(req.params);

        const { bookingId } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { status: 'completed' }, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.json({ message: 'Reserva completada', updatedBooking });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al completar la reserva', error });
    }
};