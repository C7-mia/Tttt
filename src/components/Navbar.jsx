import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "10px",
      background: "#333",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/movies" style={{ color: "white", textDecoration: "none" }}>Movies</Link>
      <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>Favorites</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
    </nav>
  );
}

export default Navbar;
