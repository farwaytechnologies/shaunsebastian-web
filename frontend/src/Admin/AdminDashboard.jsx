import React, { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import '../Styles/AdminStyle/AdminDashboard.css';

function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/admin/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) throw new Error('Unauthorized or session expired');

        const data = await response.json();
        setAdmin(data.admin || { name: 'Admin', email: 'admin@example.com' });
      } catch (err) {
        console.error('Error fetching admin data:', err);
        setError(err.message);
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <aside className="admin-dashboard-sidebar">
        <div className="admin-dashboard-header">
          <h2>Admin Panel</h2>
        </div>

        <div className="admin-dashboard-profile">
          <div className="admin-dashboard-avatar">
            <span>{admin?.name?.charAt(0) || 'A'}</span>
          </div>
          <div className="admin-dashboard-info">
            <h3>{admin?.name}</h3>
            <p>{admin?.email}</p>
            <span className="admin-dashboard-role">Administrator</span>
          </div>
        </div>

        <nav className="admin-dashboard-nav">
          <Link to="/admin/dashboard" className="admin-dashboard-nav-link">📊 Dashboard</Link>
          <Link to="/admin/manage-about" className="admin-dashboard-nav-link">ℹ️ Manage About</Link>
          <Link to="/admin/manage-services" className="admin-dashboard-nav-link">⚙️ Manage Services</Link>
          <Link to="/admin/messages" className="admin-dashboard-nav-link">💬 Messages</Link>
          <Link to="/admin/manage-blogs" className="admin-dashboard-nav-link">📝 Manage Blogs</Link>
          <Link to="/admin/manage-books" className="admin-dashboard-nav-link">📚 Manage Books</Link>
          <Link to="/admin/manage-topics" className="admin-dashboard-nav-link">📄 Manage Topics</Link>
          <Link to="/admin/manage-projects" className="admin-dashboard-nav-link">💻 Manage Projects</Link> {/* NEW */}
        </nav>

        <div className="admin-dashboard-footer">
          <button onClick={handleLogout} className="admin-dashboard-logout-btn">
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-dashboard-main">
        <header className="admin-dashboard-top-header">
          <div className="admin-dashboard-header-left">
            <h1>Dashboard</h1>
            <p>Welcome back, {admin?.name}!</p>
          </div>
          <div className="admin-dashboard-header-right">
            <div className="admin-dashboard-user-info">
              <div className="admin-dashboard-user-avatar">
                {admin?.name?.charAt(0)}
              </div>
              <div className="admin-dashboard-user-details">
                <span className="admin-dashboard-user-name">{admin?.name}</span>
                <span className="admin-dashboard-user-email">{admin?.email}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-dashboard-content">
        
          <div className="admin-dashboard-cards">
            <div className="admin-dashboard-card">
              <h3>Manage About</h3>
              <p>Edit and update your about page content and company information.</p>
              <Link to="/admin/manage-about" className="admin-dashboard-card-link">Manage Content</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Services Management</h3>
              <p>Add, edit, or remove services and update descriptions.</p>
              <Link to="/admin/manage-services" className="admin-dashboard-card-link">Manage Services</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Contact Messages</h3>
              <p>View and respond to customer inquiries and feedback.</p>
              <Link to="/admin/messages" className="admin-dashboard-card-link">View Messages</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Manage Blogs</h3>
              <p>Create, edit, and delete blog posts.</p>
              <Link to="/admin/manage-blogs" className="admin-dashboard-card-link">Manage Blogs</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Manage Books</h3>
              <p>Add, edit, and delete books and their information.</p>
              <Link to="/admin/manage-books" className="admin-dashboard-card-link">Manage Books</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Manage Topics</h3>
              <p>Create, edit, and delete topics list.</p>
              <Link to="/admin/manage-topics" className="admin-dashboard-card-link">Manage Topics</Link>
            </div>

            <div className="admin-dashboard-card">
              <h3>Manage Projects</h3>
              <p>Add, edit, and delete frontend development projects.</p>
              <Link to="/admin/manage-projects" className="admin-dashboard-card-link">Manage Projects</Link>
            </div>
          </div>

          {error && (
            <div className="admin-dashboard-error">
              <p>{error}</p>
            </div>
          )}
        </section>

        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
