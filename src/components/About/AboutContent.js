import { Link } from "react-router-dom";
import "./aboutContent.css";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>WEB Developer</p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <p>MAYBE CAROUSEL OF Languages?</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
