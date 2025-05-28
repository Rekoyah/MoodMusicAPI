import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HappyPage from "./HappyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HappyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
