import React, { useState } from 'react';
import { User, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SolomonChat: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate Solomon's response
    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: 'Thank you for your message. I\'m analyzing your referral patterns and will provide personalized recommendations shortly.'
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#C1440E] text-white px-4 py-3 flex items-center shadow-md">
        <button
          onClick={() => navigate('/')}
          className="mr-4 hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <User size={24} className="text-[#C1440E]" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Solomon</h1>
            <p className="text-sm opacity-90">AI Referral Coach</p>
          </div>
        </div>
      </div>

      {/* Chat Thread */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-orange-700 text-white'
                    : 'bg-white text-gray-800 shadow-md'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t bg-white p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-700 text-white rounded-full p-2 hover:bg-orange-800 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SolomonChat;