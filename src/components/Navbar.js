import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "row" }}>
        <li style={{ marginRight: "10px" }}>
          <Link to="/customer" style={{ color: "white", textDecoration: "none" }}>Customer</Link>
        </li>
        <li style={{ marginRight: "10px" }}>
          <Link to="/business" style={{ color: "white", textDecoration: "none" }}>Business</Link>
        </li>
        <li style={{ marginRight: "10px" }}>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
