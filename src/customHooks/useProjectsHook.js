import { useState, useEffect } from "react";
import axios from "axios";

const useProjectsHook = () => {
  const [projectsState, setProjects] = useState([]);
  const url = "http://localhost:3001/projects/";

  useEffect(() => {
    const getProjects = async () => {
      
      try {
        const projectsData = await axios.get(url);
        const projects = projectsData.data;
        setProjects(projects);
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
    
  }, []);
  return projectsState;
  
};

export default useProjectsHook;
