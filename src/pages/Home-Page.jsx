import { Link } from "react-router-dom";

const HomePage = () => {
  return ( <main>
  <h1>Charlie Mickey</h1>
  <img src="" alt="the one and only Charlie Mickey"/>
  <ul>
    <li><Link to='/projects'>projects</Link></li>
    <li><Link to='/about-me'>about me</Link></li>
  </ul>
  </main> );
}

export default HomePage;