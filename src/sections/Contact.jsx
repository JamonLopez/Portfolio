function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtitle">
          I'm currently open to new opportunities. Feel free to reach out.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:Jav11002@hotmail.com" className="contact-value">
                Jav11002@hotmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Guasave, Sinaloa, México</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/javier-osvaldo-lopez-lugo-95958b226"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                javier-osvaldo-lopez-lugo
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub</span>

              <a
                href="https://github.com/JamonLopez"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                JamonLopez
              </a>
            </div>
          </div>
          <div className="contact-cta">
            <p>Prefer a direct message?</p>
            <a href="mailto:Jav11002@hotmail.com" className="btn-primario">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
