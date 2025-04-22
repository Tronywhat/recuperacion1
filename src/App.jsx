import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home'; // Componente que contendrá News, Services, Advantages
import Login from './Components/login';
import Register from './Components/register';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/company" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/advantages" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;