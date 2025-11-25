export default function Hero() {
  return (
    <section id="hero">
      <h1>Hello, I'm <span style={{color:"var(--accent)"}}>Pramod Jadhav</span></h1>
      <h2>React Developer | Frontend Engineer</h2>
      <p style={{maxWidth:"550px", marginTop:"1rem"}}>
        I build modern web applications with React, JavaScript, and clean UI/UX.
      </p>

      <div style={{marginTop:"2rem"}}>
        <a href="#projects">
          <button>View Projects</button>
        </a>
        <a href="./resume.pdf
        " download style={{marginLeft:"1rem"}}>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
}