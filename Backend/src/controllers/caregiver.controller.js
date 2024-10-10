import Caregiver from '../models/caregiver.model.js';
import { registerCaregiverSchema, updateCaregiverProfileSchema } from '../schemas/caregiver.schema.js';

// Registro de cuidadores
export const registerCaregiver = async (req, res) => {
    try {
        // Validar datos de entrada
        registerCaregiverSchema.parse(req.body);

        const { name, services, bio } = req.body;
        const caregiver = new Caregiver({ name, services, bio, userId: req.userId });
        await caregiver.save();
        res.status(201).json({ message: 'Cuidador registrado exitosamente', caregiver });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al registrar cuidador', error });
    }
};

// Obtener perfil del cuidador
export const getCaregiverProfile = async (req, res) => {
    try {
        const caregiver = await Caregiver.findOne({ userId: req.userId });
        if (!caregiver) {
            return res.status(404).json({ message: 'Perfil de cuidador no encontrado' });
        }
        res.json(caregiver);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener perfil de cuidador', error });
    }
};

// Actualizar perfil de cuidador
export const updateCaregiverProfile = async (req, res) => {
    try {
        // Validar datos de entrada
        updateCaregiverProfileSchema.parse(req.body);

        const updatedCaregiver = await Caregiver.findOneAndUpdate({ userId: req.userId }, req.body, { new: true });
        if (!updatedCaregiver) {
            return res.status(404).json({ message: 'Perfil de cuidador no encontrado' });
        }
        res.json(updatedCaregiver);
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al actualizar perfil de cuidador', error });
    }
};

// Eliminar perfil de cuidador
export const deleteCaregiverProfile = async (req, res) => {
    try {
        const deletedCaregiver = await Caregiver.findOneAndDelete({ userId: req.userId });
        if (!deletedCaregiver) {
            return res.status(404).json({ message: 'Perfil de cuidador no encontrado' });
        }
        res.json({ message: 'Perfil de cuidador eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar perfil de cuidador', error });
    }
};