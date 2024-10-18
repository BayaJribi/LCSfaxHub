import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth to check authentication
import '../css/register.css'; // Ensure you have this CSS file for styling

const Register = () => {
  const { currentUser } = useAuth(); // Get current user from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to the home page
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const sanitizedEmail = email.replace(/\./g, ',');

      // Check if email is allowed in Firestore
      const emailDoc = doc(db, 'allowedEmails', sanitizedEmail);
      const emailSnap = await getDoc(emailDoc);

      if (!emailSnap.exists()) {
        setError('Email not allowed for registration.');
        return;
      }

      // Check if the email is already registered in Firebase Authentication
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        setError('This email is already registered. Please use another one.');
        return;
      }

      // Proceed to create user
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('User registered successfully!');

      // Reset form fields
      setEmail('');
      setPassword('');

      // Redirect to Home.js
      navigate('/'); // Adjust the path based on your routing setup

    } catch (error) {
      // Handle specific Firebase error for email already in use
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please use another one.');
      } else {
        setError('Error registering: ' + error.message);
      }
      console.error('Error registering:', error);
    }
  };

  if (currentUser) {
    // Redirect to home page if the user is already logged in
    return null;
  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">Please enter your details to register!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                      />
                      <label className="form-label" hidden htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <label className="form-label" hidden htmlFor="password">Password</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                  </form>
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account? 
                    <Link to="/login" className="text-white-50 fw-bold"> Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
