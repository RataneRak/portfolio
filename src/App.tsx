import { Header, Footer } from './components/layout';
import { Hero, About, Skills, Projects, Contact } from './components/sections';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
