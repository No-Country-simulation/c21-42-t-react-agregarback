import User from '../models/user.model.js';
import Booking from '../models/booking.model.js';
import Feedback from '../models/feedback.model.js';

// Gestionar usuarios
export const manageUsers = async (req, res) => {
    try {
        const users = await User.find(); // O filtrar por tipo de usuario
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al gestionar usuarios', error });
    }
};

// Gestionar reservas
export const manageBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error al gestionar reservas', error });
    }
};

// Revisar feedback
export const reviewFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error al revisar feedback', error });
    }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
};

// Actualizar reserva
export const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar reserva', error });
    }
};

// Responder feedback
export const respondFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findById(id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        feedback.response = req.body.response;
        await feedback.save();
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error al responder feedback', error });
    }
};

