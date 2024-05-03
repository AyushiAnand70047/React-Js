import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Validation passed
      setSubmittedData(formData);
    } else {
      // Validation failed
      setSubmittedData(null);
      setErrors(errors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Email is incorrect';
    }
    if (!data.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!data.lastName) {
      errors.lastName = 'Last Name is required';
    }
    return errors;
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Welcome, {submittedData.firstName}!</h3>
          <p>Email: {submittedData.email}</p>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
