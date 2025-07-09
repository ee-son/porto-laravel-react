import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './pages/Hero'

function App() {
  return (
     <>
        <Navbar />
        <Hero />
        <Footer />
     </>
  );
}

// Render to #root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}