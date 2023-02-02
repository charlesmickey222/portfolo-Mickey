import { Link } from "react-router-dom";
import './contact.css'
const Contact = () => {
  return ( <div className="Contact-Card">
    <h2>contact me:</h2>
    <h4>cell: 847-347-4431</h4>
    <h4>email: charlesmickey222@gmail.com</h4>
    <Link to='https://www.linkedin.com/in/charlesfmickey/'> linkedIn </Link>
    <Link to='https://github.com/charlesmickey222'> github </Link>
  </div> );
}

export default Contact;