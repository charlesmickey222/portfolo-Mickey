import { useState} from "react";
import { useLocation } from "react-router-dom";
const ProjectDetails = (props) => {
  const location = useLocation()
  const [project] = useState(location.state.project)
  
  return ( 
    <>
    <h1>{project.name}</h1>
    <img src={`${project.picSource}`} alt={`${project.name}`}/>
    <article className="description">{project.description}</article>
    </>
  );
}

export default ProjectDetails;