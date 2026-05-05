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

function Contact() {
  return (
    <section id="contact" className="section contact fade-in">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="contact__eyebrow">Contact</p>
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

        <form className="contact__form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
          />

          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
