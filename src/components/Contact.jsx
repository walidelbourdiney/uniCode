import '../styles/contact.css'

const contactItems = [
  { label: 'Email', value: 'hello@unicode-zaintrix.com' },
  { label: 'Location', value: 'Cairo, Egypt (Placeholder)' },
  { label: 'Support', value: 'Fast response within business hours' },
]

function Contact() {
  return (
    <section id="contact" className="section contact fade-in">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="contact__eyebrow">Contact</p>
          <h2>Contact Us</h2>
          <p>
            Let&apos;s discuss how Uni-Code &amp; Zaintrix WT can help you launch or scale your
            next software initiative.
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
          <input id="email" type="email" name="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message" />

          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
