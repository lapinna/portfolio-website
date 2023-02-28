import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/img/logodemo.PNG"

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
        <img src={logo} alt="Logo image" className="logo" />
      </Link>
      <ul className={clickHamb ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/project" activeclassname="active">Project</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
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
