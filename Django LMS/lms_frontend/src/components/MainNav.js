import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from  'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/"><FontAwesomeIcon icon="house" /> Home</Link>
                        <Link className="nav-item nav-link" to="/courses"><FontAwesomeIcon icon="book-open" /> Courses</Link>
                        <Link className="nav-item nav-link" to="/"><FontAwesomeIcon icon="square-poll-vertical" /> Polls</Link>
                        <Link className="nav-item nav-link" to="/"><FontAwesomeIcon icon="circle-question" /> Help</Link>
                    </div>
                </div>
                <div className="nav-item ms-auto">
                    <h5 className="text-light">Welcome,<span> <b>User</b></span></h5>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  