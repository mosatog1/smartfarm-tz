// app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WeatherPage from './pages/WeatherPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}