import User from '../models/user.model.js';
import { HfInference } from '@huggingface/inference';

// Configuración del cliente de Hugging Face
const client = new HfInference("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");
const model_name = "meta-llama/Llama-3.2-1B-Instruct";

// Controlador para generar respuestas del chatbot
export const generateResponse = async (req, res) => {
    const { message, conversation: tempConversation } = req.body;

    if (!message) {
        return res.status(400).json({ error: "El campo 'message' es requerido." });
    }

    try {
        let conversation = [];

        // Si el usuario está autenticado
        if (req.user && req.user._id) {
            const user = await User.findById(req.user._id);
            if (!user) {
                throw new Error("El usuario no existe.");
            }

            // Agregar el mensaje del usuario al historial en la base de datos
            user.conversationHistory.push({ role: 'user', content: message });

            // Obtener el historial completo de la base de datos
            conversation = user.conversationHistory.map(msg => ({
                role: msg.role,
                content: msg.content,
            }));
        } else {
            // Si el usuario no está autenticado, usar el historial temporal del frontend
            if (!tempConversation || !Array.isArray(tempConversation)) {
                return res.status(400).json({ error: "Se requiere un historial temporal válido." });
            }

            // Añadir el mensaje del usuario al historial temporal
            conversation = [...tempConversation, { role: 'user', content: message }];
        }

        // Llamada a la API de Hugging Face para obtener respuesta
        const response = await client.chatCompletion({
            model: model_name,
            messages: conversation,
            max_tokens: 250,
        });

        // Obtener el mensaje del asistente
        const assistantMessage = response.choices[0].message.content; // Asegúrate de que esta línea se adapte al formato de respuesta

        // Si el usuario está autenticado, guardar la respuesta en la base de datos
        if (req.user && req.user._id) {
            const user = await User.findById(req.user._id);
            user.conversationHistory.push({ role: 'assistant', content: assistantMessage });
            await user.save();
        }

        // Retornar la respuesta al usuario
        res.json({
            response: assistantMessage,
            conversation: [...conversation, { role: 'assistant', content: assistantMessage }]
        });
    } catch (error) {
        console.error("Error en la llamada a la API:", error);
        res.status(500).json({ error: "Error en la generación de la respuesta.", message: error.message });
    }
};
