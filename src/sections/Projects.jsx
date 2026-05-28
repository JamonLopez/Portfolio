const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio built with React and Vite. Showcases my skills, projects and experience.",
        tags: ["React", "JavaScript", "Vite", "CSS"],
        github: "https://github.com/JamonLopez/portfolio",
        demo: null,
        status: "In Progress"
    },
    {
        id: 2,
        title: "Coming Soon",
        description: "This section is under construction. Stay tuned for upcoming projects!",
        tags: [],
        github: null,
        demo: null,
        status: "Coming Soon"
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "This section is under construction. Stay tuned for upcoming projects!",
        tags: [],
        github: null,
        demo: null,
        status: "Coming Soon"
    },
]

function Projects() {
    return (
        <section className="projects" id="proyectos">
            <div className="projects-container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                         <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                             <span className={`project-status ${project.status === "in progress" ? "status-active" : "status-soon"}`}>
                                {project.status}
                             </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                             {project.tags.map((tag) => (
                                <span key={tag} className="project-tag">{tag}</span>
                             ))}
                            </div>
                            <div className="project-links">
                             {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                 GitHub
                                </a>
                                )}
                                {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                 Live Demo
                                </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;