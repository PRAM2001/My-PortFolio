import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}