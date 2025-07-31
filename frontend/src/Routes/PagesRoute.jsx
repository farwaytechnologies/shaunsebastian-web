import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

import AdminAuth from '../Admin/AdminAuth';
import AdminDashboard from '../Admin/AdminDashboard';


function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminAuth/>} />
    </Routes>
  );
}

export default PagesRoute;
