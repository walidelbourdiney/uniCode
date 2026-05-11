import { useState } from "react";
import "../styles/contact.css";

const contactItems = [
  { label: "Website", value: "unicodeagency.net" },
  { label: "Phone (Egypt)", value: "+20 102 104 9353" },
  { label: "Phone (UAE)", value: "+971 50 929 5938" },
  {
    label: "Egypt Office",
    value:
      "Carrefour CityLight Towers, 5B Entrance, Floor 8, Alexandria, Egypt",
  },
  {
    label: "UAE Office",
    value: "Office M14-03, Hour el Ainz, Dubai, United Arab Emirates",
  },
];

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required.";
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      // TODO: replace with the real endpoint provided by the backend engineer
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact fade-in">
      <div className="container contact__grid">
        <div className="contact__info">
          {/* <p className="contact__eyebrow">Contact</p> */}
          <h2>Contact Us</h2>
          <p>
            Let&apos;s discuss how Uni-Code &amp; Zaintrix WT can help you
            launch or scale your next software initiative.
          </p>
          <ul>
            {contactItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="contact__form-error" role="alert">
              {errors.name}
            </span>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="contact__form-error" role="alert">
              {errors.email}
            </span>
          )}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span
              id="message-error"
              className="contact__form-error"
              role="alert"
            >
              {errors.message}
            </span>
          )}

          {status === "success" && (
            <p className="contact__form-success" role="status">
              Message sent successfully. We&apos;ll be in touch soon!
            </p>
          )}
          {status === "error" && (
            <p className="contact__form-error" role="alert">
              Something went wrong. Please try again later.
            </p>
          )}

          <button
            type="submit"
            className="btn btn--primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
