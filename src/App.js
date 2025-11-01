import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import OurTeam from './Components/OurTeam/OurTeam';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import ChatbotTest from './Components/ChatBot/ChatBot';
import HealthCheckup from './Components/Health Assessment/HealthAssessment';
import PeriodTracker from './Components/PeriodTracker/PeriodTracker';
import Login from './Components/Signup/Login/login';
import Signup from './Components/Signup/Login/signup';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/home" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
          <Route path="/team" element={<ProtectedRoute><OurTeam /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><ChatbotTest /></ProtectedRoute>} />
          <Route path="/health-assessment" element={<ProtectedRoute><HealthCheckup /></ProtectedRoute>} />
          <Route path="/period-tracker" element={<ProtectedRoute><PeriodTracker /></ProtectedRoute>} />
        </Routes>
      </Router>
    </LanguageProvider>

  );
}
