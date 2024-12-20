import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2 my-2" onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2 my-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2 my-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2 my-2" onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'dark'}`} type="submit">Search</button>
          </form>
          <div className="form-check form-switch ms-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="darkModeSwitch" 
              onChange={()=>props.toggleMode(null)} 
              checked={props.mode === 'dark'}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};


// Navbar.defaultProps = {
//   title: 'My App',
//   aboutTitle: 'About Uss'
// }
