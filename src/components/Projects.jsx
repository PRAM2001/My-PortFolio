const projects = [
  {
    title: "Weather App",
    desc: "A modern weather dashboard using React & API.",
    live: "https://weather-dashboard-six-mocha.vercel.app/",
    code: "https://github.com/PRAM2001/Weather-Dashboard",
  },
  {
    title: "Todo App",
    desc: "Full CRUD todo app with local storage.",
    live: "https://todo-app-three-tan-32.vercel.app/",
    code: "https://github.com/PRAM2001/To-do-app",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio created with React.",
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#1e293b",
              padding: "1.5rem",
              borderRadius: "12px",
              border: "1px solid #334155",
            }}
          >
            <h3>{p.title}</h3>
            <p style={{ margin: "0.5rem 0 1rem" }}>{p.desc}</p>

            <a href={p.live} target="_blank">
              <button>Live</button>
            </a>

            <a href={p.code} target="_blank" style={{ marginLeft: "1rem" }}>
              <button>Code</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
