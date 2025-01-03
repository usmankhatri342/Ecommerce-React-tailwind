// src/Contact.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Contact = (props) => {
  // Define state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Log the form data (In real-world, you would send this data to a backend API)
   // console.log('Form Submitted:', { name, email, message });

    // Clear form after submission
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };
  //const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className= {` ${darkMode ? "bg-slate-800" : " "} contact-container  relative bottom-10 pt-10` }>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
