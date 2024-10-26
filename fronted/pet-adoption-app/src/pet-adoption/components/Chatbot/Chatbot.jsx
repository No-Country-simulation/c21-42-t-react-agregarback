import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BsChatDots } from 'react-icons/bs';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controlar si el chat está abierto
  const [message, setMessage] = useState(''); // Mensaje actual del usuario
  const [conversation, setConversation] = useState([]); // Historial de la conversación
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga
  const messageEndRef = useRef(null); // Referencia al último mensaje para hacer scroll

  // Cargar el historial desde localStorage cuando el componente se monte
  useEffect(() => {
    try {
      const storedConversation = localStorage.getItem('conversation');
      if (storedConversation) {
        setConversation(JSON.parse(storedConversation));
      }
    } catch (error) {
      console.error("Error al cargar el historial:", error);
    }
  }, []);

  // Desplaza el chat hacia la última respuesta
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Usa el efecto para hacer scroll al final cada vez que el estado de conversación cambia
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  // Guardar el historial en localStorage siempre que la conversación cambie
  useEffect(() => {
    try {
      localStorage.setItem('conversation', JSON.stringify(conversation));
    } catch (error) {
      console.error("Error al guardar el historial:", error);
    }
  }, [conversation]);

  // Alternar la visibilidad del chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const suggestedMessages = [
    "¿Cómo elegir mascota?",
    "¿Cómo puedo cuidar a mi perro?",
    "¿Cómo puedo cuidar a mi gato?"
  ];

  // Maneja el clic en un mensaje sugerido
  const handleSuggestedMessageClick = (text) => {
    setMessage(text); // Configura el mensaje
    handleSubmit(text); // Envía el mensaje
  };

  // Manejar la respuesta del asistente
  const handleAssistantResponse = async (newConversation) => {
    setIsLoading(true); // Inicia el estado de carga
    try {
      const response = await axios.post(
        'https://citric-alliance-437622-k1.uk.r.appspot.com/api/chat/generate_stream',
        { message: newConversation[newConversation.length - 1].content, conversation: newConversation }
      );

      const assistantMessage = response.data.response;
      setConversation([
        ...newConversation,
        { role: 'assistant', content: assistantMessage }
      ]);
    } catch (error) {
      console.error("Error al generar la respuesta:", error);
      setConversation([
        ...newConversation,
        { role: 'assistant', content: 'Error al generar la respuesta. Inténtalo de nuevo.' }
      ]);
    }
    setIsLoading(false); // Termina el estado de carga
  };

  // Manejar el envío del mensaje
  const handleSubmit = async (eOrText) => {
    const isEvent = eOrText && eOrText.preventDefault;
    if (isEvent) eOrText.preventDefault();

    const text = isEvent ? message : eOrText; // Usa el mensaje del input o el mensaje sugerido
    if (!text.trim()) return;

    const newConversation = [...conversation, { role: 'user', content: text }];
    setConversation(newConversation);
    setMessage(''); // Limpiar el campo de entrada

    await handleAssistantResponse(newConversation); // Llama a la API con el historial actualizado
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className="floating-button"
        aria-label="Abrir chat"
      >
        <BsChatDots size={24} />
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chat-window">
          {/* Mensajes sugeridos */}
          <div className="suggested-messages">
            {suggestedMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedMessageClick(msg)}
                className="suggested-message-button"
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Contenedor de mensajes */}
          <div className="message-container">
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.role === 'user' ? 'message-user' : 'message-bot'}`}>
                <span
                  className={`${
                    msg.role === 'user' ? 'message-content-user' : 'message-content-bot'
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {/* Animación de carga mientras se espera respuesta */}
            {isLoading && (
              <div className="message message-bot">
                <span className="loading-indicator">Escribiendo...</span>
              </div>
            )}

            {/* Referencia para el scroll automático */}
            <div ref={messageEndRef} />
          </div>

          {/* Formulario para enviar mensajes */}
          <form onSubmit={handleSubmit} className="message-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="message-input"
              aria-label="Escribe tu mensaje"
            />
            <button
              type="submit"
              className="submit-button"
              aria-label="Enviar mensaje"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
