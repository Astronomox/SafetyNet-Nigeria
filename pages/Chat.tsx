import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Chat: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello. I am Guardian. How can I assist you with safety or emergency needs today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showLanguages, setShowLanguages] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Prepare history for Gemini
    const history = messages.map(m => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const aiResponseText = await getGeminiResponse(history, userMsg.text);
    
    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: aiResponseText || "I'm having trouble responding right now. Please check local emergency broadcasts.",
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const toggleLanguage = () => setShowLanguages(!showLanguages);

  return (
    <div className="bg-brand-light dark:bg-brand-dark h-screen flex flex-col overflow-hidden font-display">
        {/* Header */}
        <header className="flex-none bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/5 px-4 pt-4 pb-3 z-20 shadow-sm relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-1 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div className="relative">
                        <div className="size-10 rounded-full bg-cover bg-center border-2 border-white/10 bg-slate-700 shadow-inner" style={{backgroundImage: 'url(https://picsum.photos/100)'}}></div>
                        <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-surface-dark"></div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold leading-tight text-slate-900 dark:text-white">Guardian AI</h1>
                        <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                            Online <span className="size-1 bg-green-500 rounded-full"></span> {language}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center justify-center size-9 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-white/20 transition-all">
                        <span className="material-symbols-outlined text-[20px]">translate</span>
                    </button>
                    <button className="flex items-center justify-center size-9 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse">
                        <span className="text-[10px] font-black tracking-widest">SOS</span>
                    </button>
                </div>
            </div>
            
            {/* Language Dropdown */}
            {showLanguages && (
                <div className="absolute top-16 right-4 w-40 bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-200 dark:border-white/10 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {['English', 'Pidgin', 'Yoruba', 'Hausa', 'Igbo'].map(lang => (
                        <button 
                            key={lang}
                            onClick={() => { setLanguage(lang); setShowLanguages(false); }}
                            className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 ${language === lang ? 'text-primary-blue' : 'text-slate-700 dark:text-gray-300'}`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            )}
        </header>

        {/* Chat Area */}
        <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 bg-brand-light dark:bg-brand-dark">
             {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {msg.sender === 'ai' && (
                        <div className="size-8 rounded-full bg-slate-700 bg-cover bg-center shrink-0 shadow-sm" style={{backgroundImage: 'url(https://picsum.photos/100)'}}></div>
                    )}
                    <div className={`flex flex-col gap-1 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                        <div className={`p-4 rounded-2xl shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-primary-blue text-white rounded-br-none' 
                            : 'bg-white dark:bg-[#252b36] text-slate-900 dark:text-gray-100 border border-gray-200 dark:border-white/5 rounded-bl-none'
                        }`}>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        </div>
                         <span className="text-[10px] text-gray-400 dark:text-white/30 mx-1 font-medium">
                            {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                    </div>
                </div>
            ))}
            {isLoading && (
                 <div className="flex items-end gap-3">
                    <div className="size-8 rounded-full bg-slate-700 bg-cover bg-center shrink-0 shadow-sm" style={{backgroundImage: 'url(https://picsum.photos/100)'}}></div>
                    <div className="bg-white dark:bg-[#252b36] px-4 py-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-white/5 flex items-center gap-1.5 shadow-sm">
                        <div className="size-2 bg-gray-400 dark:bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="size-2 bg-gray-400 dark:bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="size-2 bg-gray-400 dark:bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>
            )}
            <div ref={bottomRef} />
        </main>

        {/* Input Area */}
        <div className="flex-none bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-white/5 p-4 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                <button onClick={() => setInputText("Report Emergency")} className="shrink-0 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap hover:bg-red-500/20 transition-colors">Report Emergency</button>
                <button onClick={() => setInputText("Check Flood Risk")} className="shrink-0 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">Check Flood Risk</button>
                <button onClick={() => setInputText("Find Shelter")} className="shrink-0 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">Find Shelter</button>
            </div>
            <div className="flex items-end gap-2">
                <button className="flex items-center justify-center size-12 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-primary-blue hover:bg-primary-blue/10 transition-all shrink-0">
                    <span className="material-symbols-outlined">add_a_photo</span>
                </button>
                <div className="flex-1 bg-gray-100 dark:bg-[#101622] rounded-3xl flex items-center px-4 py-3 border border-transparent focus-within:border-primary-blue/50 focus-within:bg-white dark:focus-within:bg-[#101622] transition-all">
                    <input 
                        className="w-full bg-transparent border-none p-0 text-sm text-slate-900 dark:text-white focus:ring-0 placeholder-gray-500" 
                        placeholder="Type or speak..." 
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                     <div className="flex items-center gap-2 border-l border-gray-300 dark:border-white/10 pl-2 ml-2">
                        <button className="text-gray-500 dark:text-gray-400 hover:text-primary-blue transition-colors"><span className="material-symbols-outlined text-xl">mic</span></button>
                    </div>
                </div>
                <button 
                    onClick={handleSend}
                    disabled={!inputText.trim()}
                    className="flex items-center justify-center size-12 rounded-full bg-primary-blue text-white shadow-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0 active:scale-95">
                    <span className="material-symbols-outlined filled">send</span>
                </button>
            </div>
        </div>
    </div>
  );
};