import ProjectCard from "../ProjectCard/ProjectCard";
import useProjectsHook from "../../customHooks/useProjectsHook";

const Projects = () => {
  const projectState = useProjectsHook();
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectState.map((project, index) => {
          return <ProjectCard
          key={index}
          imgsrc={project.imgsrc}
          title={project.title}
          text={project.text}
          view={project.view}
          source={project.source} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
