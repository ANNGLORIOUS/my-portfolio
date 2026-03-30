'use client';

import type { ChangeEvent, CSSProperties, FocusEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import planesky from '../assets/assetlogo/planesky.jpg';

type FormFieldProps = {
  error?: string;
  id: string;
  label: string;
  name: FormFieldName;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  value: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  rows?: number;
};

type FormFieldName = 'firstName' | 'lastName' | 'email' | 'phone' | 'message';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type TouchedFields = Record<FormFieldName, boolean>;

type ValidationErrors = Partial<Record<FormFieldName, string>>;

type SubmitState = 'idle' | 'sending' | 'success';

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const initialFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const formBackground: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(37, 42, 74, 0.92)), url(${planesky.src})`,
};

export default function ContactMe() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [touched, setTouched] = useState<TouchedFields>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitError, setSubmitError] = useState('');

  const errors = useMemo(() => validateForm(formData), [formData]);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    });

    if (!isFormValid) {
      return;
    }

    setSubmitState('sending');

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: fullName,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Form submission failed.');
        }
      } else {
        const encodedMessage = encodeURIComponent(
          `Hello, my name is ${fullName}.\n\n${formData.message}\n\nContact details:\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
        );
        const mailtoUrl = `mailto:mueniannglorious@gmail.com?subject=Contact Inquiry&body=${encodedMessage}`;

        await new Promise((resolve) => window.setTimeout(resolve, 900));
        window.location.href = mailtoUrl;
      }

      setSubmitState('success');
    } catch (error) {
      setSubmitState('idle');
      setSubmitError(
        formspreeEndpoint
          ? 'Something went wrong while sending your message. Please try again.'
          : 'Your email app did not open automatically. Please try again or email me directly.',
      );
    }
  };

  return (
    <section id="contactSection" className="contact--section">
      <motion.div
        className="contact--content"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="contact--intro">
          Tell me what you&apos;re building, what role you need filled, or where you think we could collaborate.
        </p>

        {submitState === 'success' ? (
          <motion.div
            className="contact--form--container contact--success"
            style={formBackground}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="contact--success-badge">Message received</p>
            <h3>Thanks for reaching out, {formData.firstName || 'there'}!</h3>
            <p>
              I&apos;ve received your message and will get back to you within 24 hours. If your email app did not
              open automatically, feel free to email me directly at
              {' '}
              <a href="mailto:mueniannglorious@gmail.com">mueniannglorious@gmail.com</a>.
            </p>
          </motion.div>
        ) : (
          <form className="contact--form--container" onSubmit={handleSubmit} style={formBackground} noValidate>
            <div className="contact--grid contact--grid-two">
              <FormField
                id="first-name"
                name="firstName"
                label="First Name"
                type="text"
                placeholder="e.g. John"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName ? errors.firstName : undefined}
              />
              <FormField
                id="last-name"
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="e.g. Doe"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName ? errors.lastName : undefined}
              />
            </div>

            <div className="contact--grid">
              <FormField
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : undefined}
              />
            </div>

            <div className="contact--grid">
              <FormField
                id="phone-number"
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+254 700 123 456"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone ? errors.phone : undefined}
              />
            </div>

            <div className="contact--grid">
              <FormField
                id="message"
                name="message"
                label="Project Details"
                type="textarea"
                rows={7}
                placeholder="Tell me about your project, your timeline, and the kind of help you need..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message ? errors.message : undefined}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact--form--btn"
              disabled={!isFormValid || submitState === 'sending'}
            >
              {submitState === 'sending' ? 'Sending...' : 'Submit'}
            </button>
           
          </form>
        )}
      </motion.div>
    </section>
  );
}

function FormField({ error, id, label, name, onBlur, onChange, placeholder, rows, type, value }: FormFieldProps) {
  const fieldClassName = `contact--input text-md${error ? ' contact--input-error' : ''}`;

  return (
    <label htmlFor={id} className="contact--label">
      <span className="text-md">{label}</span>
      {type === 'textarea' ? (
        <textarea
          className={fieldClassName}
          id={id}
          name={name}
          value={value}
          rows={rows}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      ) : (
        <input
          className={fieldClassName}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      )}
      <span className={`contact--error ${error ? 'visible' : ''}`}>{error ?? '\u00A0'}</span>
    </label>
  );
}

function validateForm(formData: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!formData.email.includes('@')) {
    errors.email = 'Please enter a valid email.';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required.';
  }

  if (!formData.message.trim()) {
    errors.message = 'Please share a few project details.';
  } else if (formData.message.trim().length < 20) {
    errors.message = 'A little more detail helps. Try at least 20 characters.';
  }

  return errors;
}
