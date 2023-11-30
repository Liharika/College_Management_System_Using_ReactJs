// RegistrationFormFaculty.js

import React, { useState } from 'react';
import axios from 'axios';

function RegistrationFormFaculty() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    experience: '',
    facultyId: '',
    salary: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend
    axios.post('http://localhost:8081/registerFaculty', formData)
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error during faculty registration:', error);
      });
  };

  return (
    <div>
      <h2>Faculty Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: '200px' }}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: '200px' }}
          />
          <label htmlFor="facultyId">Faculty ID:</label>
          <input
            type="text"
            id="facultyId"
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            style={{ width: '200px' }}
          />

          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            style={{ width: '200px' }}
          />

          

          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            style={{ width: '200px' }}
          />

          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{ width: '200px' }}
          />
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            style={{ width: '200px' }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationFormFaculty;
