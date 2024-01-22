import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from  'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/"><FontAwesomeIcon icon="house" /> Home</Link>
                        <Link className="nav-item nav-link" to="/courses"><FontAwesomeIcon icon="book-open" /> Courses</Link>
                        <Link className="nav-item nav-link" to="/help"><FontAwesomeIcon icon="circle-question" /> Help</Link>
                    </div>
                </div>
                <div className="nav-item ms-auto">

                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/logo512.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                            <h5 className="text-light mb-0"><span className="d-none d-sm-inline mx-1"><b>User</b></span></h5>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            
                            <li><a className="dropdown-item" href="/user-profile"><FontAwesomeIcon icon="user" /> My Profile</a></li>
                            <li><a className="dropdown-item" href="/"><FontAwesomeIcon icon="screwdriver-wrench" /> Preferences</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="/login"><FontAwesomeIcon icon="power-off" /> Sign Out</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  