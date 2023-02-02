import ProjectPreview from "./ProjectPreview";
import { useState } from "react";
import {projectsList} from '../../data/data.js'

const Projects = () => {
  const [projects] = useState(projectsList)

  return ( 
  <>
    <div  className="Projects-Container">
      {projects.length ? projects.map((project,idx)=>
        <ProjectPreview key={idx} project={project} className={idx.toString()}/>
        )
        :
        <h1>loading projects</h1>
      }
    </div>
  </> 
  );
}

export default Projects;