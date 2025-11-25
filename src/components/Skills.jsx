const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      {skills.map((skill) => (
        <div key={skill.name} style={{marginBottom:"1rem"}}>
          <p>{skill.name}</p>
          <div style={{
            height:"10px",
            background:"#334155",
            borderRadius:"6px"
          }}>
            <div style={{
              width:"$(skill.level%",
              height:"100%",
              background:"var(--accent)",
              borderRadius:"6px"
            }} /> 
          </div>
        </div>
      ))}
    </section>
  );
}