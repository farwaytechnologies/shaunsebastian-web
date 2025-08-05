import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

import AdminAuth from '../Admin/AdminAuth';
import AdminDashboard from '../Admin/AdminDashboard';
import AdminManageAbout from '../Admin/ AdminManageAbout'
import Blog from '../Pages/Blog';
import BlogDetail from '../Pages/BlogDetail';
import ManageBlogs from '../Admin/AdminManageBlogs';


function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminAuth/>} />
      <Route path="/admin/manage-about" element={<AdminManageAbout/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/admin/manage-blogs" element={<ManageBlogs />} /> {/* Admin Route */}
    </Routes>
  );
}

export default PagesRoute;
