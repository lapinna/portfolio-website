import "@splidejs/react-splide/css";
import "./projectsSlider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProjectCard from "../ProjectCard/ProjectCard";
import useProjectsHook from "../../customHooks/useProjectsHook";
import { LOOP } from "@splidejs/splide";

const ProjectsSlider = () => {
  const projectState = useProjectsHook();
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="slider-container">
        <Splide
          options={{
            type: LOOP,
            perPage: 3,
            arrows: true,
            rewind: true,
            pagination: false,
            gap: "0.7rem",
            breakpoints: {
              767: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {projectState.map((project, index) => {
            return (
              <SplideSlide className="slide-card">
                <ProjectCard
                  key={index}
                  imgsrc={project.imgsrc}
                  title={project.title}
                  view={project.view}
                  source={project.source}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default ProjectsSlider;
