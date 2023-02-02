import { Link } from 'react-router-dom';
import './projectPreview.css'

const ProjectPreview = (props) => {
  const {project} = props

  return ( 
    <div className='Project-Container'>
      <Link to={`${project.name.replaceAll(' ','_')}`} state={{project}} className='projectLink'>{project.name}</Link>
      <div className="frame">
        <img src={`${project.picSource}`}  alt={`screenshot of: ${project.name}`}/>
      </div>
    </div>
  );
}

export default ProjectPreview;