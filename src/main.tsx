import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DetailsPage from './DetailsPage'; // Make sure this is correctly imported
import './index.css';  // Make sure your styles are linked

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:accountType" element={<DetailsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
