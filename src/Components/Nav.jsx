import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="navbar">
      <Link style={{ padding: "0 8px" }} to="/">Home</Link>
      <Link style={{ padding: "0 8px" }} to="/Red">Red</Link>
      <Link style={{ padding: "0 8px" }} to="/Blue">Blue</Link>
    </nav>
  );
};

export default Nav;
