import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from '../../assets/images/champedia-logo.png'

const Login = () => {
    const admin = {
        email: "champedia_admin@gmail.com",
        password: "admin12345"
    };

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        }); 
    };

    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if(!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        if(!formData.password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 10) {
            newErrors.password = "Password must be at least 10 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (formData.email === admin.email && formData.password === admin.password) {
                setIsLoggedIn(true);
            } else {
                alert("Invalid email or password");
            }
        }
    };

    if (isLoggedIn) {
        window.location.href = "/AdminPage";
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Champedia Logo" className="login-logo" />
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Type your email..." required />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Type your password..." required />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;