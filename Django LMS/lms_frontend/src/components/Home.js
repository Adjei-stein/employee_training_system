import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <img className="card-img-top" src="Jira-Logo.png" alt="Card image cap"/>
                    <div className="card-body border-top">
                        <h5 className="card-title">Jira</h5>
                        <p className="card-text">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                        <div class="d-flex justify-content-between align-items-center m-2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course  <FontAwesomeIcon icon="arrow-right" /></button>
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
                        <h5 className="card-title">GitHub Copilot</h5>
                        <p className="card-text">Anartificial intelligence tool developed to assist users of Visual Studio Code, etc, by autocompleting code.</p>
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
                        <h5 className="card-title">Visual Studio Code</h5>
                        <p className="card-text">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
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
