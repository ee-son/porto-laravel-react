import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import '../scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './pages/Hero'
import Project from './pages/Project';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
     <>
        <Navbar />
        <Hero />
        <Project />
        <About />
        <Contacts />
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