function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <p className="hero-saludo">Hola, mi nombre es</p>
                <h1 className="hero-nombre">Javier Lopez</h1>
                <h2 className="hero-titulo">Ingeniero en Sistemas</h2>
                <p className="hero-descripcion">
                    Desarrollador Frontend con experiencia en React.
                    Apasionado por construir soluciones funcionales
                    y resolver problemas técnicos
                </p>
                <div className="hero-boton">
                    <a href="#proyectos" className="primary-btn">Ver Proyectos</a>
                    <a href="#contacto" className="secondary-btn">Contacto</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;