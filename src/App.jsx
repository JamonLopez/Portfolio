import Header from "./components/Header";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;