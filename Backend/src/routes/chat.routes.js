import express from 'express';
import { generateResponse } from '../controllers/chatController.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = express.Router();

// Definir la ruta para generar respuestas del chatbot
router.post("/generate_stream", generateResponse);

export default router;