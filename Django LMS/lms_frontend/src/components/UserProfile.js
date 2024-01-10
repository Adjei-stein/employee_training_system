import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'

function UserProfile() {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="card first-card">
                    <nav class="nav nav-pills flex-column flex-sm-row py-1">
                        <a class="flex-sm-fill text-sm-center nav-link active" href="#"><b>Enrolled Courses</b></a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>My Wishlist</b></a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Badges</b></a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Change Password</b></a>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mt-4">
                        <a href="/details/1"><img className="card-img-top" src="Jira-Logo.png" alt="..."/></a>
                        <div className="card-body border-top">
                            <h5 className="card-title">Jira</h5>
                            <p className="card-text">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                            <div class="d-flex justify-content-between align-items-center m-2">
                                <div class="btn-group">
                                <a href="/details/1"><button type="button" class="btn btn-sm btn-outline-secondary">Go to course  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mt-4">
                        <img className="card-img-top" src="Github-Logo.png" alt="..."/>
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
                        <img className="card-img-top" src="vs-code-logo.png" alt="..."/>
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
  
  export default UserProfile;
  