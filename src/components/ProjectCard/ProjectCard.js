import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
          <a href={props.view} className="btn">
            View
          </a>
          <a href="https://github.com/lapinna/treasure-hunt" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
