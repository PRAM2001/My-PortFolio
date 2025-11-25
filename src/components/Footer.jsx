export default function Footer() {
  return (
    <footer style={{
      textAlign:"center",
      padding:"2rem",
      marginTop:"3rem",
      borderTop:"1px solid #1e293b"
    }}>
      © {new Date().getFullYear()} Your Name — All Rights Reserved.
    </footer>
  );
}