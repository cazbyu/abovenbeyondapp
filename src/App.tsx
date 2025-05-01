import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SolomonChat from './pages/SolomonChat';
import ReferralAnalysis from './pages/ReferralAnalysis';
import Scorecard from './pages/Scorecard';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/referral-analysis" element={<ReferralAnalysis />} />
          <Route path="/scorecard" element={<Scorecard />} />
        </Route>
        <Route path="/solomon" element={<SolomonChat />} />
      </Routes>
    </Router>
  );
}

export default App;