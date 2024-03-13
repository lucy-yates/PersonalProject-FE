import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import PenPortrait from './Components/PenPortrait/PenPortait';
import Calculator from './Components/Calculator/Calculator';
import FavouriteNumber from './Components/FavouriteNumber/FavouriteNumber';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#DFF7DE', color: '#fff', minHeight: '100vh' }}>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* <Link className="navbar-brand" to='/'>
            <img src={logo} alt="Your Logo" width="150" height="150" className="d-inline-block align-left" />
          </Link> */}
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
              <li className="nav-item">
                <Link className="nav-link" to='/calculator' style={{ color: '#A555E2' }}><b>Calculator</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/favouritenumber' style={{ color: '#A555E2' }}><b>Favourite Number</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/penportrait' element={<PenPortrait />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/favouritenumber' element={<FavouriteNumber />} />
        </Routes>
      </BrowserRouter>
  </div>

  );
}

export default App;
