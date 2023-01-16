import "./projectCard.css";

const ProjectCard = ({ index, imgsrc, title, text, view, source }) => {
  return (
    <div className="project-card" key={index}>
      <img src={imgsrc} alt="Project image" />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p>{text}</p>
        <div className="project-btns">
          <a href={view} target="_blank" className="btn">
            View
          </a>
          <a href={source} target="_blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
