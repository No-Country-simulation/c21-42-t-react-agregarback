import User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { secretToken } from '../config.js';
import Message from '../models/message.model.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

export const register = async (req, res) => {
    const { fullName, birthDate, email, password, userType, authMethod, phoneNumber } = req.body;
    try {
        // Validar datos de entrada
        registerSchema.parse(req.body);

        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json(["The email already exists"]);
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName,
            birthDate,
            email,
            password: passwordHash,
            userType,
            authMethod: authMethod || 'email',
            phoneNumber,
            conversationHistory: [],
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            fullName: userSaved.fullName,
            birthDate: userSaved.birthDate,
            email: userSaved.email,
            userType: userSaved.userType,
            authMethod: userSaved.authMethod,
            phoneNumber: userSaved.phoneNumber,
            ConversationHistory: userSaved.conversationHistory,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Validar datos de entrada
        loginSchema.parse(req.body);

        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "User not found" });
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            fullName: userFound.fullName,
            birthDate: userFound.birthDate,
            email: userFound.email,
            userType: userFound.userType,
            authMethod: userFound.authMethod,
            phoneNumber: userFound.phoneNumber,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("token", "", {
            expires: new Date(0),
        });
        res.json({ message: "Logged out" });
        return res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    jwt.verify(token, secretToken, async (error, user) => {
        if (error) return res.status(401).json({ message: "Unauthorized" });
        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({ message: "Unauthorized" });
        return res.json({
            id: userFound._id,
            fullName: userFound.fullName,
            birthDate: userFound.birthDate,
            email: userFound.email,
            userType: userFound.userType,
            authMethod: userFound.authMethod,
            phoneNumber: userFound.phoneNumber,
        });
    });
};

export const profile = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);
    jwt.verify(token, secretToken, async (error, user) => {
        if (error) return res.sendStatus(401);
        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);
        return res.json({
            id: userFound._id,
            fullName: userFound.fullName,
            birthDate: userFound.birthDate,
            email: userFound.email,
            userType: userFound.userType,
            authMethod: userFound.authMethod,
            phoneNumber: userFound.phoneNumber,
        });
    });
};

export const message = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = new Message({
            name,
            email,
            message,
        });
        const messageSaved = await newMessage.save();
        res.json(messageSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};