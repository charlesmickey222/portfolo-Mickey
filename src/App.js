import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './pages/About';
import HomePage from './pages/Home-Page';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='' element={<HomePage/>} />
        <Route path='/about-me' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
