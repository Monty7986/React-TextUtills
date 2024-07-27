import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode === 'light'?'white':'black'} bg-${props.mode === 'light'?'white':'black'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:props.mode === 'light'?'black':'white'}}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={{color:props.mode === 'light'?'black':'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about" style={{color:props.mode === 'light'?'black':'white'}}>{props.about}</Link>
              </li>
            </ul>
            {/* <div className="d-flex">
            <div className="mode mt-1" style={{color:props.mode === 'light'?'black':'white'}}>Change Mode:</div>
         <div className="bg-primary rounded mx-2" onClick={()=>{ props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
         <div className="bg-success rounded mx-2" onClick={()=>{ props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
         <div className="bg-danger rounded mx-2" onClick={()=>{ props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
         <div className="bg-warning rounded mx-2" onClick={()=>{ props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
         <div className="bg-light rounded mx-2" onClick={()=>{ props.toggleMode('light') }} style={{border:'1px solid black',height: '30px', width: '30px', cursor: 'pointer' }}></div>
         <div className="bg-dark rounded mx-2" onClick={()=>{ props.toggleMode('dark') }} style={{ border:'1px solid white', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.myText}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
// This Will Set the Type Of Props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

// This Will Set Props ByDefault If Not Defined
Navbar.defaultProps = {
  title: 'Set Title Here',
  about: 'Set Text Here'
};
