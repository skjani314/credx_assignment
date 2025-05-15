import React, { useState, useContext } from 'react';
import { FaComments, FaTimes, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import Context from '../../context/Context';

const ChatWidget = () => {
  const { darkMode } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [feedback, setFeedback] = useState([]); // [{index, value: 'up'|'down'}]

  const chatContainerRef = React.useRef(null);
  const textareaRef = React.useRef(null);

  // Focus trap and Escape to close
  React.useEffect(() => {
    if (open) {
      // Focus textarea on open
      setTimeout(() => textareaRef.current && textareaRef.current.focus(), 0);
      // Trap focus inside chat widget
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setOpen(false);
        }
        if (e.key === 'Tab' && chatContainerRef.current) {
          const focusable = chatContainerRef.current.querySelectorAll(
            'button, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          } else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open]);

  // Scroll to bottom on new message
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat, loading]);

  const callGemini = async (query) => {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDU1Wf6kwfYMx6DxmpevBummzXXLYdqClU',
      {
        contents: [
          {
            parts: [
              {
                text:"imagine you are a software license expert. Please provide a detailed response to the user's query = "+query +"make sure response is in a friendly tone and easy to understand. Do not include any disclaimers or unnecessary information. Just answer the question directly in consise way with in max linit 4-5 lines.",
              },
            ],
          },
        ],
      }
    );
    console.log(response.data);
    return response.data.candidates[0].content.parts[0].text;
  };

  // Utility to clean Gemini output: remove markdown, extra asterisks, and fix line breaks
  const cleanGeminiResponse = (text) => {
    if (!text) return '';
    // Remove markdown bold/italic, excessive asterisks, and trim
    let cleaned = text.replace(/\*\*|\*/g, '').replace(/\n{2,}/g, '\n').trim();
    // Remove leading/trailing newlines and spaces
    cleaned = cleaned.replace(/^\s+|\s+$/g, '');
    // Replace multiple line breaks with a single one
    cleaned = cleaned.replace(/\n{2,}/g, '\n');
    return cleaned;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat([...chat, { sender: 'user', text: msg }]);
    setLoading(true);
    setMsg('');
    try {
      const aiRaw = await callGemini(msg);
      const aiText = cleanGeminiResponse(aiRaw);
      setChat([...chat, { sender: 'user', text: msg }, { sender: 'bot', text: aiText }]);
    } catch (err) {
      setChat([...chat, { sender: 'user', text: msg }, { sender: 'bot', text: 'Sorry, there was an error connecting to the chat service.' }]);
    }
    setLoading(false);
  };

  const handleFeedback = (idx, value) => {
    setFeedback([...feedback, { index: idx, value }]);
  };

  return (
    <>
      <button
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-colors duration-300 focus:outline-none ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        onClick={() => setOpen(true)}
        aria-label="Open chat widget"
      >
        <FaComments size={24} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30" role="dialog" aria-modal="true" aria-label="AI Chat Assistant">
          <div
            ref={chatContainerRef}
            className={`w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 relative transition-colors duration-300 mx-2 mb-10 sm:mb-0 flex flex-col`}
            tabIndex={-1}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setOpen(false)}
              aria-label="Close chat widget"
            >
              <FaTimes size={20} />
            </button>
            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>AI Chat Assistant</h3>
            <div
              className={`flex-1 overflow-y-auto mb-4 space-y-2 pr-1 ${darkMode ? 'text-gray-200' : 'text-blue-900'}`}
              style={{ maxHeight: 320 }}
              aria-live="polite"
              aria-atomic="false"
              id="chat-messages"
            >
              {chat.map((m, i) => (
                <div
                  key={i}
                  className={`text-left px-2 py-1 rounded-lg ${m.sender === 'user' ? (darkMode ? 'bg-blue-700 text-white self-end ml-8' : 'bg-blue-100 text-blue-900 self-end ml-8') : (darkMode ? 'bg-gray-800 text-blue-200 self-start mr-8' : 'bg-blue-50 text-blue-700 self-start mr-8')}`}
                  role="status"
                  aria-label={m.sender === 'bot' ? 'AI response' : 'Your message'}
                >
                  {m.text}
                  {/* Show feedback only for bot messages except the initial greeting */}
                  {m.sender === 'bot' && i !== 0 && !feedback.find(f => f.index === i) && (
                    <div className="flex gap-2 mt-1" role="group" aria-label="Rate this answer">
                      <button
                        aria-label="Rate answer as helpful"
                        aria-pressed="false"
                        className="text-green-500 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                        onClick={() => handleFeedback(i, 'up')}
                        tabIndex={0}
                      >
                        <span role="img" aria-label="Thumbs up">👍</span>
                      </button>
                      <button
                        aria-label="Rate answer as not helpful"
                        aria-pressed="false"
                        className="text-red-500 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded"
                        onClick={() => handleFeedback(i, 'down')}
                        tabIndex={0}
                      >
                        <span role="img" aria-label="Thumbs down">👎</span>
                      </button>
                    </div>
                  )}
                  {/* Show thank you after feedback */}
                  {m.sender === 'bot' && i !== 0 && feedback.find(f => f.index === i) && (
                    <div className="text-xs mt-1 text-blue-400" aria-live="polite">Thank you for your feedback!</div>
                  )}
                </div>
              ))}
              {loading && <div className="flex items-center gap-2 text-blue-500"><FaSpinner className="animate-spin" /> Thinking...</div>}
            </div>
            <form onSubmit={handleSend} className="flex gap-2 mt-2" aria-label="Send a message to the AI assistant">
              <textarea
                ref={textareaRef}
                className={`w-full p-2 rounded border transition-colors duration-300 resize-none ${darkMode ? 'bg-gray-800 text-white border-gray-700 placeholder-gray-400' : 'bg-blue-50 text-blue-900 border-blue-200 placeholder-blue-400'}`}
                rows={2}
                placeholder="Type your message..."
                value={msg}
                onChange={e => setMsg(e.target.value)}
                required
                disabled={loading}
                aria-label="Type your message"
                aria-describedby="chat-messages"
              />
              <button
                type="submit"
                disabled={loading || !msg.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-60"
                aria-label="Send message"
              >Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
