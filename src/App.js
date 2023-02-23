import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
