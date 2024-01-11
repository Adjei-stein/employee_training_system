import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'

function UserProfile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                
                    <div className="card bg-transparent border-0">
                        <nav class ="navbar bg-dark">
                            <nav class="nav nav-pills flex-column flex-sm-column py-1 mx-2" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
                                <a class="flex-sm-fill text-sm-center nav-link active" href="#"><b>Enrolled Courses</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>My Wishlist</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Badges</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Change Password</b></a>
                            </nav>
                        </nav>
                        {/*<div className="card first-card">
                            <nav class="nav nav-pills flex-column flex-sm-column py-1" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
                                <a class="flex-sm-fill text-sm-center nav-link active" href="#"><b>Enrolled Courses</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>My Wishlist</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Badges</b></a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="#"><b>Change Password</b></a>
                            </nav>
                        </div>*/}
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="col-md-12 mb-3">
                        <div class="card border-0 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                            <div class="row no-gutters d-flex">
                                <div class="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src="Jira-Logo-Dark.jpg" style={{maxHeight: "7rem", maxWidth: "10rem"}} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8 d-flex align-items-center justify-content-center">
                                    <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                    <h4 className="card-title me-auto"><b>Jira</b></h4>
                                        <div class="btn-group ms-auto">
                                            <a href="/details/1"><button type="button" class="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                        </div>
                                    </div>
                                    <div class="progress mt-2 mb-2">
                                        <div class="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                        <div class="d-flex justify-content-between align-items-center mt-2">
                                            <div class="btn-group">
                                                <div className="me-auto">15% complete</div>
                                            </div>
                                            <small class="ms-auto">2 hr 15 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div class="card border-0 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                            <div class="row no-gutters d-flex">
                                <div class="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="Github-Logo-Dark.jpg" style={{maxHeight: "7rem", maxWidth: "10rem"}} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8 d-flex align-items-center justify-content-center">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2">
                                            <h4 className="card-title me-auto"><b>GitHub Copilot</b></h4>
                                            <div class="btn-group ms-auto">
                                                <a href="/details/1"><button type="button" class="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                            </div>
                                        </div>
                                        <div class="progress mt-2 mb-2">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mt-2">
                                            <div class="btn-group">
                                                <div className="me-auto">75% complete</div>
                                            </div>
                                            <small class="ms-auto">1 hr 2 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div class="card border-0 text-white" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                            <div class="row no-gutters d-flex">
                                <div class="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="vs-code-logo.png" style={{maxHeight: "9rem", maxWidth: "10rem"}} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8 d-flex align-items-center justify-content-center">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2">
                                            <h4 className="card-title me-auto"><b>Visual Studio Code</b></h4>
                                            <div class="btn-group ms-auto">
                                                <a href="/details/1"><button type="button" class="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                            </div>
                                        </div>
                                        <div class="progress mt-2 mb-2">
                                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center mt-2">
                                            <div class="btn-group">
                                                <div className="me-auto">75% complete</div>
                                            </div>
                                            <small class="ms-auto">1 hr 2 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    

                </div>
            </div>
        </div>
    );
  }
  
  export default UserProfile;
  