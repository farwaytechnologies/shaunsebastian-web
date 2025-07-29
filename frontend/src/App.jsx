import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PagesRoute from './Routes/PagesRoute';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <PagesRoute />
      <Footer />
    </Router>
  );
}

export default App;
