// app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WeatherPage from './pages/WeatherPage';
import ChatSystemPage from './pages/ChatSystemPage';
import MarketplacePage from './pages/MarketplacePage';
import AcademyPage from './pages/AcademyPage';
import DiseaseDiagnosisPage from './pages/DiseaseDiagnosisPage';

export default function App() {
  return (
    <Router basename="/smartfarm-tz">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/chat" element={<ChatSystemPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/crop-health" element={<DiseaseDiagnosisPage />} />
      </Routes>
    </Router>
  );
}