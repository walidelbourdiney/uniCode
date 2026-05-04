import '../styles/services.css'

const services = [
  {
    title: 'Custom Software Development',
    text: 'We build tailored software solutions for unique business requirements that off-the-shelf tools cannot fully address, aligned directly with strategic goals.',
  },
  {
    title: 'Mobile App Development',
    text: 'We develop intuitive iOS and Android apps, including native and cross-platform solutions, with strong UX design and seamless backend/API integrations.',
  },
  {
    title: 'Website Development',
    text: 'We create high-performance, user-friendly websites with custom design, CMS integration, and e-commerce capabilities including secure payments and inventory handling.',
  },
  {
    title: 'UNI-ERP',
    text: 'Our ERP platform integrates finance, inventory, procurement, HR, and more with real-time visibility, automation, customizable dashboards, and external system integration.',
  },
  {
    title: 'UNI-CRM',
    text: 'Our CRM centralizes customer data, supports lead management, and connects communication channels to improve engagement, conversion, and long-term revenue growth.',
  },
  {
    title: 'Outsourcing Services',
    text: 'We help companies reduce costs, access global expertise, and accelerate delivery timelines while maintaining high software quality standards.',
  },
  {
    title: 'Recruitment Services',
    text: 'We support software companies in hiring top developers, engineers, and IT professionals through focused talent acquisition strategies.',
  },
]

function Services() {
  return (
    <section id="services" className="section services fade-in">
      <div className="container">
        <div className="section__heading services__heading">
          <p className="services__eyebrow">Services</p>
          <h2>Comprehensive Solutions for Modern Businesses</h2>
          <p>
            Uni-Code &amp; Zaintrix WT build practical, scalable software ecosystems that
            streamline operations and unlock measurable growth.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="services__card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
