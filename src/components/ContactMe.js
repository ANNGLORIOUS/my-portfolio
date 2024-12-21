import React from 'react';

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className="contact--form--container">
        <FormField label="First Name" type="text" id="first-name" />
        <FormField label="Last Name" type="text" id="last-name" />
        <FormField label="Email" type="email" id="email" />
        <FormField label="Phone Number" type="number" id="phone-number" />
        <FormField label="Message" type="textarea" id="message" rows="8" />
        <button className="btn btn-primary contact--form--btn">Submit</button>
      </form>
    </section>
  );
}

function FormField({ label, type, id, rows }) {
  return (
    <label htmlFor={id} className="contact--label">
      <span className="text-md">{label}</span>
      {type === "textarea" ? (
        <textarea className="contact--input text-md" id={id} rows={rows} placeholder={`Type your ${label.toLowerCase()}...`} />
      ) : (
        <input type={type} className="contact--input text-md" id={id} required />
      )}
    </label>
  );
}
