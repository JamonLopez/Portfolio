function AboutMe() {
    return (
        <section className="about" id="sibre-me">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a Systems Engineer graduated from Instituto Tecnologico 
                            Superior de Guasave, with experience in frontend development
                            using React and a strong interest in building functional and
                            clean web applications.
                        </p>
                        <p>
                            I worked as a Frontend Software Engineer at DoyenX, where I
                            developed reusable components, improved UX/UI, fixed bugs in
                            production environments and collaborated with agile teams.
                        </p>
                        <p>
                            Outside of web development, I also work as a freelance computer
                            technician - diagnosing hardware and software issues, wich has 
                            strengthened my analytical thinking and problem-solving skills.
                        </p>
                    </div>
                    <div className="about-info">
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">Guasave, Sinaloa, Mexico</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Degree</span>
                            <span className="info-value">Systems Engineer</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Experience</span>
                            <span className="info-value">Frontend Developer at DoyenX</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Skills</span>
                            <span className="info-value">React, JavaScript, HTML, CSS, Git</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Languages</span>
                            <span className="info-value">Spanish (Native), English (Basic)</span>
                        </div>
                        <a
                            href="mailto:Jav11002@hotmail.com"
                            className="btn-primario"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;