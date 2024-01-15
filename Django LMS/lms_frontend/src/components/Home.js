import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from  'react-router-dom'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

function Home() {
  return (
    <div className="container">
        <div className="row mt-3">
            <div className="jumbotron jumbotron-fluid d-flex align-items-start">
                <h3 className="mb-0 text-white">Latest Courses</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <Link to="/details/1"><img className="card-img-top" src="Jira-Logo-White.jpg" alt="..."/></Link>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                                <h5 className="card-title mb-0 me-auto text-white">Jira</h5>
                                <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button>    
                        </div>
                        
                        <p className="card-text text-start text-secondary">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                            <Link to="/details/1"><button type="button" class="btn btn-sm btn-outline-secondary">Go to course  <FontAwesomeIcon icon="arrow-right" /></button></Link>
                            </div>
                            <small class="text-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <img className="card-img-top" src="Github-Logo-Dark.jpg" alt="..."/>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title mb-0 me-auto text-white">GitHub Copilot</h5>
                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                        </div>
                        <p className="card-text text-start text-secondary">Anartificial intelligence tool developed to assist users of Visual Studio Code, etc, by autocompleting code.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                            <small class="text-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                        </div>
                        <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                            <small class="text-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                    <div className="card-body border-top">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                        </div>
                        <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                            <small class="text-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
