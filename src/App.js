import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import OurTeam from './Components/OurTeam/OurTeam';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import './App.css';
import ChatbotTest from './Components/ChatBot/ChatBot';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<ChatbotTest />} />
        </Routes>
      </Router>
    </LanguageProvider> 
  );
}
