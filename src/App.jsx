import About from './components/About';
import Background from './components/Background';
import Contact from './components/Contact';
import Credentials from './components/Credentials';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useTheme } from './hooks';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Background />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
