import '../styles/about.css'

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '3+', label: 'Countries Served' },
]

const services = [
  'Custom Software Development',
  'ERP & CRM Implementation',
  'Business Process Automation',
  'Web & Mobile Platforms',
]

function About() {
  return (
    <section id="about" className="section about fade-in">
      <div className="container about__grid">
        <div className="about__content">
          <p className="about__eyebrow">About Us</p>
          <h2>Where Clarity Meets Enterprise Innovation</h2>

          <article className="about__story-card">
            <p>
              Uni-Code was founded in 2019 in Egypt by Eng. Ahmed Abu-AlHassan, with a
              vision to simplify complex digital operations. In 2025, the journey expanded
              through Zaintrix Way Tech in Dubai (UAE), represented by our partner
              Professor Dr. Fady Emad Al-Din.
            </p>

            <p>
              We design reliable, customized, and accessible software systems that help
              organizations monitor and optimize every part of their operations in one
              connected view.
            </p>

            <p>
              From strategy to execution, our mission is to deliver efficient innovation,
              practical usability, and responsive support that gives businesses confidence
              to scale.
            </p>
          </article>

          <div className="about__services">
            <h3>Core Focus Areas</h3>
            <div className="about__service-list">
              {services.map((service) => (
                <span key={service} className="about__service-chip">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="about__panel">
          <div className="about__stats">
            {stats.map((stat) => (
              <article className="about__stat-card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <article className="about__highlight-card">
            <h3>Why Businesses Choose Us</h3>
            <p>
              We combine strategic thinking, strong engineering, and human-centered product
              design to build systems that are powerful under the hood and simple in daily use.
            </p>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default About