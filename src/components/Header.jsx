export default function Header() {
  return (
    <header style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"1rem 2rem",
      position:"sticky",
      top:0,
      background:"#0f172ad0",
      backdropFilter:"blur(6px)",
      zIndex:10
    }}>
      <h2>MyPortFolio</h2>

      <nav style={{display:"flex", gap:"1.5rem"}}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}