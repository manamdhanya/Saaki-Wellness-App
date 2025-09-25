import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import OurTeam from './Components/OurTeam/OurTeam';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
