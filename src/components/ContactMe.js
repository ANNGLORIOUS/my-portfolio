import React from 'react';
import planesky from '../assets/assetlogo/planesky.jpg';

export default function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.elements["first-name"].value;
    const lastName = event.target.elements["last-name"].value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements["phone-number"].value;
    const message = event.target.elements.message.value;

    const fullName = `${firstName} ${lastName}`;
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${fullName}.\n\n${message}\n\nContact details:\nEmail: ${email}\nPhone: ${phone}`
    );

    window.location.href = `mailto:mueniannglorious@gmail.com?subject=Contact Inquiry&body=${encodedMessage}`;
  };

  return (
    <section id="contactSection" className="contact--section">
      <div className="contact--content">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>

        <form 
          className="contact--form--container" 
          onSubmit={handleSubmit}
          style={{ backgroundImage: `url(${planesky})` }}
        >
          {/* Form Fields */}
          <FormField label="First Name" type="text" id="first-name" />
          <FormField label="Last Name" type="text" id="last-name" />
          <FormField label="Email" type="email" id="email" />
          <FormField label="Phone Number" type="tel" id="phone-number" />
          <FormField label="Message" type="textarea" id="message" rows="8" />
          
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

// Form Field Component
function FormField({ label, type, id, rows }) {
  return (
    <label htmlFor={id} className="contact--label">
      <span className="text-md">{label}</span>
      {type === "textarea" ? (
        <textarea className="contact--input text-md" id={id} rows={rows} placeholder={`Type your ${label.toLowerCase()}...`} required />
      ) : (
        <input type={type} className="contact--input text-md" id={id} required />
      )}
    </label>
  );
}
