import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import ProjectDetails from './components/projects/ProjectDetails';
import Projects from './components/projects/Projects';
import About from './pages/About';
import HomePage from './pages/Home-Page';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='' element={<HomePage/>} />
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about-me' element={<About />} />
        <Route path='/projects/:id' element={<ProjectDetails />}/>
      </Routes>
    </>
  );
}

export default App;
