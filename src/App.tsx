import { Header, Footer } from "./components/layout";
import { useSmoothScroll, useSpotlight } from "./hooks";
import { Hero, TechMarquee, About, Experience, Skills, Projects, Contact } from "./components/sections";

function App() {
  useSmoothScroll();
  useSpotlight();

  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
