import { NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
  return ( 
  <nav className="Nav-Bar">
    <ol className="Nav-List">
      <li><NavLink to='/' className='Nav-Link'> Home </NavLink></li>
      <li><NavLink to='/projects' className='Nav-Link'> Projects</NavLink></li>
      <li><NavLink to='/about-me' className='Nav-Link'> About Me </NavLink></li>
    </ol>
  </nav> 
  );
}

export default Nav;