import logo from "./logo.png"
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import PenPortrait from './Components/PenPortrait/PenPortait';
import Calculator from './Components/Calculator/Calculator';
import Visitor from "./Components/FavouriteNumber/Visitor";
import PreviousProjects from "./Components/PreviousProjects/PreviousProjects";
import JALAL from "./Components/PreviousProjects/JALAL";
import MAGYC from "./Components/PreviousProjects/MAGYC";
import CommaChameleon from "./Components/PreviousProjects/CommaChameleon";
import LSquared from "./Components/PreviousProjects/LSquared";
import LP from "./Components/PreviousProjects/LP";
import FavouriteMusic from "./Components/Music/FavouriteMusic";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#DFF7DE', color: '#fff', minHeight: '100vh' }}>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFFFFF' }}>
  
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img src={logo} alt="Your Logo" width="75" height="75" style={{marginRight: "10px"}} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/' style={{ color: '#A555E2' }}><b>About Me</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/penportrait' style={{ color: '#A555E2' }}><b>Pen Portrait</b></Link>
              </li>

             
              <NavDropdown title={<span style={{ color: '#A555E2', fontWeight: 'bold' }}>Previous Projects</span>} id="basic-nav-dropdown">
  <Link className="dropdown-item" to='/jalal'>JALAL</Link>
  <Link className="dropdown-item" to='/magyc'>MAGYC</Link>
  <Link className="dropdown-item" to='commachameleon'>Comma Chameleon</Link>
  <Link className="dropdown-item" to='/lsquared'>L Squared</Link>
  <Link className="dropdown-item" to='/lp'>LP</Link>
</NavDropdown>

              <li className="nav-item">
                <Link className="nav-link" to='/calculator' style={{ color: '#A555E2' }}><b>Calculator</b></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/favouritemusic' style={{ color: '#A555E2' }}><b>Rainbow of Music</b></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/visitor' style={{ color: '#A555E2' }}><b>Visitor Check-In</b></Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/penportrait' element={<PenPortrait />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/visitor' element={<Visitor />} />
          <Route path= '/previousprojects' element={<PreviousProjects/>} />
          <Route path= '/jalal' element={<JALAL/>} />
          <Route path= '/magyc' element={<MAGYC/>} />
          <Route path= '/commachameleon' element={<CommaChameleon/>} />
          <Route path= '/lsquared' element={<LSquared/>} />
          <Route path= '/lp' element={<LP/>} />
          <Route path= '/favouritemusic' element={<FavouriteMusic/>} />
        </Routes>
      </BrowserRouter>
  </div>

  );
}

export default App;
