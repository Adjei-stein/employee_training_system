import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#"><FontAwesomeIcon icon="house" /> Home</a>
                        <a className="nav-item nav-link" href="#"><FontAwesomeIcon icon="book-open" /> Courses</a>
                        <a className="nav-item nav-link" href="#"><FontAwesomeIcon icon="square-poll-vertical" /> Polls</a>
                        <a className="nav-item nav-link" href="#"><FontAwesomeIcon icon="circle-question" /> Help</a>
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
  