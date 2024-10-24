import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the form from trying to POST to any endpoint

    // Use EmailJS to send the email
    emailjs.send(
      'service_portfolio',        // Replace with your EmailJS service ID
      'template_my_portfolioId',  // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'd-kFKNbAe9uR43Oam'         // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
