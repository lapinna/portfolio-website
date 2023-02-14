import "./Hero1.css";
import IntroImg from "../../assets/img/hero1.jpg";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="mask">
        <img
          className="intro-img"
          src={IntroImg}
          alt="Intro background image"
        />
      </div>
      <div className="content">
        <p>HI, I'M an aspiring</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
