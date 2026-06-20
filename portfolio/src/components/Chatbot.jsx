import { Bot, X, Send } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getChatResponse, suggestedQuestions } from '../utils/chatbotEngine';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! I'm Sunil's portfolio assistant. Ask me anything about his skills, projects, experience, or education!",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback((text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');

    requestAnimationFrame(() => {
      const reply = getChatResponse(trimmed);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-avatar bot-avatar">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="chatbot-title">Resume Assistant</h3>
                <p>Ask about Sunil's profile</p>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="chat-suggestions">
                {suggestedQuestions.map((q) => (
                  <button key={q} type="button" className="chat-suggestion" onClick={() => sendMessage(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form className="chatbot-input-area" onSubmit={handleSubmit}>
              <input
                className="chatbot-input"
                placeholder="Ask about skills, projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Chat message"
              />
              <button type="submit" className="chatbot-send" aria-label="Send">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={`chatbot-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
      >
        {open ? <X size={22} /> : <Bot size={26} strokeWidth={2} />}
        {!open && <span className="chatbot-pulse" aria-hidden="true" />}
      </button>
    </>
  );
}
