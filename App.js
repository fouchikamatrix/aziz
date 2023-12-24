
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SecondPage from './SecondPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="center">
          <Link to="/second-page">
            <button>page 1</button>
          </Link>
        </div>

        <Routes>
  <Route path="/second-page" element={<SecondPage />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
