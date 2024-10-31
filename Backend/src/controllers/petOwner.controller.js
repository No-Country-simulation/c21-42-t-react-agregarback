import Pet from '../models/pet.model.js';
import Booking from '../models/booking.model.js';
import { createPetSchema, updatePetSchema, getPetSchema, deletePetSchema } from '../schemas/pet.schema.js';
import { createBookingSchema } from '../schemas/booking.schema.js';

// Obtener todas las mascotas
export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener mascotas', error });
    }
};

// Obtener mascotas del dueño
export const getCaregiverPets = async (req, res) => {
    try {
        const pets = await Pet.find({ owner: req.userId });
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener mascotas', error });
    }
};


// Obtener una mascota específica del dueño
export const getPet = async (req, res) => {
    try {
        getPetSchema.parse(req.params);

        const { petId } = req.params;
        const pet = await Pet.findOne({ _id: petId});
        if (!pet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.json(pet);
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al obtener la mascota', error });
    }
};

// Añadir una mascota
export const addPet = async (req, res) => {
    try {
        createPetSchema.parse(req.body);

        const { name, type, age, firstImg, secondImg, thirdImg } = req.body;
        const newPet = new Pet({ name, type, age, owner: req.userId, firstImg, secondImg, thirdImg });
        await newPet.save();
        res.status(201).json({ message: 'Mascota añadida exitosamente', pet: newPet });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al añadir mascota', error });
    }
};

// Actualizar mascota
export const updatePet = async (req, res) => {
    try {
        updatePetSchema.parse({ id: req.params.petId, body: req.body });

        const { petId } = req.params;
        const { name, type, age, firstImg, secondImg, thirdImg } = req.body;
        const updatedPet = await Pet.findOneAndUpdate(
            { _id: petId, owner: req.userId },
            { name, type, age, firstImg, secondImg, thirdImg },
            { new: true }
        );
        if (!updatedPet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.json(updatedPet);
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al actualizar la mascota', error });
    }
};

// Eliminar mascota
export const deletePet = async (req, res) => {
    try {
        deletePetSchema.parse(req.params);

        const { petId } = req.params;
        const deletedPet = await Pet.findOneAndDelete({ _id: petId, owner: req.userId });
        if (!deletedPet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.json({ message: 'Mascota eliminada' });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al eliminar la mascota', error });
    }
};

// Reservar un servicio
export const bookService = async (req, res) => {
    try {
        createBookingSchema.parse(req.body);

        const { service, date, caregiverId } = req.body;
        const booking = new Booking({ service, date, owner: req.userId, caregiver: caregiverId });
        await booking.save();
        res.status(201).json({ message: 'Servicio reservado exitosamente', booking });
    } catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Datos de entrada inválidos', errors: error.errors });
        }
        res.status(500).json({ message: 'Error al reservar el servicio', error });
    }
};

// Ver reservas del dueño
export const viewBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ owner: req.userId });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener reservas', error });
    }
};