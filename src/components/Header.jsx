function Header() {
    return (
        <header className="header">
            <div className="header-nombre">
                <h1>Javier Lopez</h1>
                <p>Ingeniero en Sistemas | Desarrollado Web</p>
            </div>
            <nav className="header-nav">
                <a href="#sobre-mi">Sobre mi</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    )
}

export default Header;