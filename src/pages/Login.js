import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase'; // Import your Firebase config
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth for accessing authentication state
import '../css/register.css'; // Custom CSS for additional styling

const Login = () => {
    const { currentUser } = useAuth(); // Get current user from AuthContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // If user is already logged in, redirect to the home page
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess("Login successful!");
            // Redirect to Home.js
            navigate('/'); // Adjust the path based on your routing setup
            setEmail(''); // Reset form fields
            setPassword('');
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Login failed. Please check your email and password.");
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
                                <div className="mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <label className="form-label" hidden htmlFor="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <label className="form-label" hidden htmlFor="typePasswordX">Password</label>
                                        </div>

                                        <p className="small mb-2 pb-lg-2">
                                            <a className="text-white-50" href="#!">Forgot password?</a>
                                        </p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                        {success && <p style={{ color: 'green' }}>{success}</p>}
                                    </form>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        Don't have an account?
                                        <Link to="/register" className="text-white-50 fw-bold"> Sign Up</Link>
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

export default Login;
