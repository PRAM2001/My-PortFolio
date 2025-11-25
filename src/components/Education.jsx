export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) – Electrical & Electronics",
      college: "Sharnbasva University",
      year: "2019 – 2023",
      details: "CGPA: 8.3/10 "
    },
    {
      degree: "Pre-University(12th)",
      college: "Doddappa Appa Residential Independent P.U. College",
      year: "2019",
      details: "Percentage: 73%"
    },
    {
      degree: "S.S.L.C (10th)",
      college: "Millennium Kannada Medium School",
      year: "2017",
      details: "Percentage: 80%"
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>

      <div style={{marginTop:"2rem"}}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            style={{
              background:"#1e293b",
              padding:"1.5rem",
              borderRadius:"12px",
              border:"1px solid #334155",
              marginBottom:"1.5rem"
            }}
          >
            <h3>{edu.degree}</h3>
            <p style={{marginTop:"0.2rem", color:"var(--accent)"}}>
              {edu.college}
            </p>
            <p style={{marginTop:"0.5rem", color:"var(--muted)"}}>
              {edu.year}
            </p>
            <p style={{marginTop:"0.5rem"}}>
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}