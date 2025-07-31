import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AdminStyle/AdminLogin.css';

function AdminAuth() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (isSignup && password !== confirmPass) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const endpoint = isSignup
      ? 'http://localhost:8000/api/admin/signup'
      : 'http://localhost:8000/api/admin/login';

    const payload = { email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Something went wrong');

      if (isSignup) {
        setSuccessMessage('Signup successful! Please login now.');
        setIsSignup(false);
        setEmail('');
        setPassword('');
        setConfirmPass('');
      } else {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
        )}

        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>

        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            style={{ color: '#4a7abe', cursor: 'pointer' }}
            onClick={() => {
              setIsSignup(!isSignup);
              setSuccessMessage('');
              setErrorMessage('');
            }}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
}

export default AdminAuth;
