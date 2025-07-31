import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/AdminStyle/AdminDashboard.css';

function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem('adminToken');

      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/admin/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error('Unauthorized or session expired');

        const data = await response.json();
        setAdmin(data);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    };

    fetchAdminData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/manage-users">Manage Users</Link></li>
            <li><Link to="/admin/manage-services">Manage Services</Link></li>
            <li><Link to="/admin/messages">Messages</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-info">
            {admin && (
              <>
                <span>{admin.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </header>

        <section className="admin-dashboard-content">
          <h1>Welcome, Admin!</h1>
          {admin ? (
            <div className="admin-card">
              <p><strong>Email:</strong> {admin.email}</p>
              <p><strong>ID:</strong> {admin._id}</p>
            </div>
          ) : (
            !error && <p>Loading admin info...</p>
          )}
          {error && <p className="error">{error}</p>}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
