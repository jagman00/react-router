import { Link } from "react-router-dom";

const Nav = () => {
  // Link
  return (
    <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
    </nav>
  );
};

export default Nav;
