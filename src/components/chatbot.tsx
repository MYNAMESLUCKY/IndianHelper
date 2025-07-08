'use client';

import React, { useState, useRef, useEffect } from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to BharatAI Sahayak! This is a test for Tailwind CSS.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'This is a placeholder response.' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-2xl h-[80vh] flex flex-col rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 rounded-t-2xl">
          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-xl shadow">
            <span>🇮🇳</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">BharatAI Sahayak</h2>
            <p className="text-xs text-blue-100">Enterprise AI Assistant for Government Schemes</p>
          </div>
        </div>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 bg-gray-50 dark:bg-gray-950">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-base shadow-sm ${msg.from === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-800 dark:text-white rounded-bl-none'}`}>{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-2xl text-base bg-gray-200 dark:bg-gray-800 dark:text-white animate-pulse max-w-[70%]">BharatAI is typing...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        {/* Input Area */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-b-2xl flex items-center gap-3">
          {/* Future: Voice, file upload, etc. */}
          <input
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition disabled:opacity-50"
            onClick={sendMessage}
            disabled={!input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 