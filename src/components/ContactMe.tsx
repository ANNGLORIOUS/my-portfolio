'use client';

import type { CSSProperties, FormEvent } from 'react';
import planesky from '../assets/assetlogo/planesky.jpg';

type FormFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  rows?: number;
};

type ContactFormElements = HTMLFormControlsCollection & {
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
  'first-name': HTMLInputElement;
  'last-name': HTMLInputElement;
  'phone-number': HTMLInputElement;
};

type ContactForm = HTMLFormElement & {
  readonly elements: ContactFormElements;
};

const formBackground: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(245, 252, 255, 0.72), rgba(245, 252, 255, 0.72)), url(${planesky.src})`,
};

export default function ContactMe() {
  const handleSubmit = (event: FormEvent<ContactForm>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const firstName = form.elements['first-name'].value.trim();
    const lastName = form.elements['last-name'].value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements['phone-number'].value.trim();
    const message = form.elements.message.value.trim();

    const fullName = `${firstName} ${lastName}`.trim();
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${fullName}.\n\n${message}\n\nContact details:\nEmail: ${email}\nPhone: ${phone}`,
    );

    window.location.href = `mailto:mueniannglorious@gmail.com?subject=Contact Inquiry&body=${encodedMessage}`;
  };

  return (
    <section id="contactSection" className="contact--section">
      <div className="contact--content">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>

        <form className="contact--form--container" onSubmit={handleSubmit} style={formBackground}>
          <FormField label="First Name" type="text" id="first-name" />
          <FormField label="Last Name" type="text" id="last-name" />
          <FormField label="Email" type="email" id="email" />
          <FormField label="Phone Number" type="tel" id="phone-number" />
          <FormField label="Message" type="textarea" id="message" rows={8} />

          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ id, label, type, rows }: FormFieldProps) {
  return (
    <label htmlFor={id} className="contact--label">
      <span className="text-md">{label}</span>
      {type === 'textarea' ? (
        <textarea
          className="contact--input text-md"
          id={id}
          name={id}
          rows={rows}
          placeholder={`Type your ${label.toLowerCase()}...`}
          required
        />
      ) : (
        <input className="contact--input text-md" type={type} id={id} name={id} required />
      )}
    </label>
  );
}
