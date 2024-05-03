import React, { useState } from 'react';
import './DataForm.css'; // Import CSS file for styling

const DataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Data Form</h2>
      <form onSubmit={handleSubmit} className="data-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>City: {submittedData.city}</p>
        </div>
      )}
    </div>
  );
};

export default DataForm;
