import { NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
  const onButtonClick = () => {
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}
  return ( 
  <nav className="Nav-Bar">
    <ol className="Nav-List">
      <li><NavLink to='/' className='Nav-Link'> Home </NavLink></li>
      <li><NavLink to='/projects' className='Nav-Link'> Projects</NavLink></li>
      <li><NavLink to='/about-me' className='Nav-Link'> About Me </NavLink></li>
      <button onClick={ onButtonClick } >download my resume</button>
    </ol>

  </nav> 
  );
}

export default Nav;