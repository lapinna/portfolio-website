import { Link } from "react-router-dom";
import "./navBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [clickHamb, setClickHamb] = useState(false);
  const handleClick = () => setClickHamb(!clickHamb);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Leafy.io</h1>
      </Link>
      <ul className={clickHamb ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamb" onClick={handleClick}>
        {clickHamb ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
