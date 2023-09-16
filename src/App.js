import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import About from './components/about';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
