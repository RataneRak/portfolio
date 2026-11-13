import { Header, Footer } from "./components/layout";
import { useSmoothScroll } from "./hooks";
import { Hero, About, Experience, Skills, Projects, Contact } from "./components/sections";

function App() {
  useSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
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
