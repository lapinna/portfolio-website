import "./projectCard.css";
import { useState } from "react";

const ProjectCard = ({ index, imgsrc, title, text, view, source }) => {
  const [cardHover, setcardHover] = useState(false);
  const handleHover = () => setcardHover(!cardHover);
  const handleLeave = () => setcardHover("");
  return (
    <div
      className="project-card"
      key={index}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="card-img">
        <img src={imgsrc} alt="Project image" />
      </div>
      <div className={cardHover ? "card-info active" : "card-info"}>
        <h2 className="project-title">{title}</h2>
        <div className="project-details">
          <p>{text}</p>
          <div className="project-btns">
            <a href={view} target="_blank" className={view == "" || view == 0 ? "emptyBtn" : "btn"} >
              Demo
            </a>
            <a href={source} target="_blank" className="btn">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
