function Skills() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS"] },
        { category: "Backend", items: ["Node.js", "SQL"] },
        { category: "Tools", items: ["Git", "GitHub", "Azure DevOps", "VS Code", "Figma"] },
        { category: "Methods", items: ["Agile", "Scrum", "Functional Testing", "UX/UI"] },
        { category: "Other", items: ["Hardware Maintenance", "OS Installation", "Technical Support", "Office"] },
    ]
    
    return (
        <section className="skills" id="habilidades">
            <div className="skills-container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((group) => (
                        <div key={group.category} className="skills-group">
                            <h3 className="skills-category">{group.category}</h3>
                            <div className="skills-items">
                                {group.items.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;