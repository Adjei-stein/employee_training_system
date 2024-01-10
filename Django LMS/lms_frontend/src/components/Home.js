import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from  'react-router-dom'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

function Home() {
  return (
    <div className="container">
        <div className="row mt-3">
            <div className="d-flex align-items-start">
                <h3 className="mb-0">Latest Courses</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mt-4">
                    <Link to="/details/1"><img className="card-img-top" src="Jira-Logo.png" alt="Card image cap"/></Link>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                                <h5 className="card-title mb-0 me-auto">Jira</h5>
                                <button type="button" class="btn btn-light ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button>
                                    
                        </div>
                        
                        <p className="card-text text-start">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                            <Link to="/details/1"><button type="button" class="btn btn-sm btn-outline-secondary">Go to course  <FontAwesomeIcon icon="arrow-right" /></button></Link>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-4">
                    <img className="card-img-top" src="Github-Logo.png" alt="Card image cap"/>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title mb-0 me-auto">GitHub Copilot</h5>
                            <button type="button" class="btn btn-light ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                        </div>
                        <p className="card-text text-start">Anartificial intelligence tool developed to assist users of Visual Studio Code, etc, by autocompleting code.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-4">
                    <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title mb-0 me-auto">Visual Studio Code</h5>
                            <button type="button" class="btn btn-light ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                        </div>
                        <p className="card-text text-start">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Home;
