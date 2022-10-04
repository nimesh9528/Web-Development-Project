import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  //const [Text,setText]= useState("Dark Mode");
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Features</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link " to='/about'>{props.about}</Link>
          </li>
        </ul>
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
        </div> */}
       <botton className="btn btn-warning mx-2" onClick={props.changeModeWarning}></botton>
       <botton className="btn btn-danger mx-2" onClick={props.changeModeRed}></botton> 
       <botton className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={props.changeMode}></botton>
  
      </div>
    </div>
  </nav>
  )
}
