import '../styles/vision.css'

const values = [
  {
    title: 'Building Trust',
    text: 'Trust is the cornerstone of our relationships. We earn and maintain it through transparent communication, reliable support, and consistently delivering on our promises.',
  },
  {
    title: 'Inspiring Growth',
    text: 'We inspire transformation inside businesses by unlocking their full potential through technology and helping teams exceed goals with confidence.',
  },
]

const reasons = [
  {
    title: 'Trustworthiness',
    text: 'Uni-Code & Zaintrix WT provide reliable, extendable, and cost-effective services backed by quick, responsive support.',
  },
  {
    title: 'Professionalism',
    text: 'Our communication and service execution reflect a high professional standard, with tailored solutions for modern business needs.',
  },
  {
    title: 'Simplicity and Accessibility',
    text: 'No steep learning curve and no unnecessary complexity, just intuitive systems that work for novice users and experts alike.',
  },
]

function Vision() {
  return (
    <section id="vision" className="section vision fade-in">
      <div className="container vision__grid">
        <div className="vision__content">
          <p className="vision__eyebrow">Vision</p>
          <h2>Mission, Values, and Why Uni-Code &amp; Zaintrix WT</h2>

          <div className="vision__block">
            <h3>Mission</h3>
            <p>
              At Uni-Code &amp; Zaintrix WT, our mission is to illuminate the path to digital
              excellence by delivering easy-to-use, innovative, reliable, and efficient
              solutions that empower business growth and success.
            </p>
            <p>
              We provide quick, responsive, and efficient support after deployment, ensuring
              every client can operate with confidence and continuity.
            </p>
            <p>
              Our philosophy is simple: remove complexity, create clarity, and build systems
              that help organizations observe, optimize, and scale operations from every angle.
            </p>
            <p>
              Over the years, we have achieved key milestones, from flagship ERP and CRM
              platforms to expanded hardware offerings, driven by continuous innovation and
              a relentless pursuit of excellence.
            </p>
          </div>
        </div>

        <aside className="vision__panel">
          <div className="vision__card">
            <h3>Values</h3>
            <ul>
              {values.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="vision__card">
            <h3>Why Uni-Code &amp; Zaintrix WT?</h3>
            <ul>
              {reasons.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Vision
