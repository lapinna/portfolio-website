import "@splidejs/react-splide/css";
import "./projectsSlider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCardData from "../../assets/ProjectCardData";
import { LOOP } from "@splidejs/splide";

const ProjectsSlider = () => {
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
          {ProjectCardData.map((value, index) => {
            return (
              <SplideSlide className="slide-card">
                <ProjectCard
                  key={index}
                  imgsrc={value.imgsrc}
                  title={value.title}
                  text={value.text}
                  view={value.view}
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
