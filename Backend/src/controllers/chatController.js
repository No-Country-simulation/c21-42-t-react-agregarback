import User from '../models/user.model.js';
import { HfInference } from '@huggingface/inference';

// Configuración del cliente de Hugging Face
const client = new HfInference("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");
const model_name = "meta-llama/Llama-3.2-1B-Instruct";

// Controlador para generar respuestas del chatbot
export const generateResponse = async (req, res) => {
    const { message } = req.body;

    try {
        // Recuperar o crear el usuario en la base de datos
        const user = await User.findById(req.user._id);
        if (!user) {
            throw new Error("El usuario no existe.");
        }

        // Agregar el mensaje del usuario al historial
        user.conversationHistory.push({ role: 'user', content: message });

        // Obtener el historial de conversación
        const conversation = user.conversationHistory.map(msg => ({
            role: msg.role,
            content: msg.content,
        }));

        // Llamada a la API de Hugging Face para obtener respuesta
        const response = await client.textGeneration({
            model: model_name,
            inputs: conversation,
            max_length: 250, // Cambiar esto si se necesita más tokens
        });

        // Obtener el mensaje del asistente
        const assistantMessage = response[0].generated_text; // Ajusta según la respuesta de la API

        // Agregar la respuesta del modelo al historial
        user.conversationHistory.push({ role: 'assistant', content: assistantMessage });

        // Guardar el historial actualizado en la base de datos
        await user.save();

        // Retornar la respuesta al usuario
        res.json({ response: assistantMessage });
    } catch (error) {
        console.error("Error en la llamada a la API:", error);
        res.status(500).json({ error: "Error en la generación de la respuesta." });
    }
};
