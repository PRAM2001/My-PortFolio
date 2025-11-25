import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || form.message.length < 5) {
      setMsg("Please fill all fields correctly.");
      return;
    }

    setMsg("Message sent successfully!");
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "1rem" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "1rem" }}
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ width: "100%", padding: "10px", height: "120px" }}
        />

        <button style={{ marginTop: "1rem" }}>Send</button>

        <p style={{ marginTop: "1rem", color: "var(--accent)" }}>{msg}</p>
      </form>
    </section>
  );
}
