import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import EmergencyMap from './EmergencyMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<EmergencyMap />} />
      </Routes>
    </Router>
  );
}

export default App;
