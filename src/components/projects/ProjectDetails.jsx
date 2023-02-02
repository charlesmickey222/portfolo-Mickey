import { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import './projectDetails.css'
const ProjectDetails = (props) => {
  const location = useLocation()
  const [project] = useState(location.state.project)
  
  return ( 
    <main>
    <h1>{project.name}</h1>
    <img src={`${project.picSource}`} alt={`${project.name}`}/>
    <article className="description">{project.description}</article>
    <Link to={`${project.repoLink}`} className='Link'> [Github Repo]  </Link>
    <Link to={`${project.deploymentLink}`} className='Link'> [Deployed App] </Link>
    </main>
  );
}

export default ProjectDetails;