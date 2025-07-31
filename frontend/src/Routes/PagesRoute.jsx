import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

import AdminAuth from '../Pages/AdminPages/AdminAuth';
import AdminDashboard from '../Pages/AdminPages/AdminDashboard';

function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminAuth />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default PagesRoute;
