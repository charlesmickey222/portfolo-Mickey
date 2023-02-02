import { Link } from "react-router-dom";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return ( <main>
  <h1>Charlie Mickey</h1>
    <img style={{border:'2px solid black', borderRadius:'50%'}} src="https://imgur.com/nAJZDd9.jpg" alt="the one and only Charlie Mickey"/>
  <ul>
    <li><Link to='/projects'>projects</Link></li>
    <li><Link to='/about-me'>about me</Link></li>
  </ul>
  <Contact />
  </main> );
}

export default HomePage;