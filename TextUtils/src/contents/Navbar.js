import React from 'react';
//import About from './About'

export default function Navbar(props) {
  //const [Text,setText]= useState("Dark Mode");
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link " href='{window.location.href: About}'>{props.about}</a>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
