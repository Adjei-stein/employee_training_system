import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'

function UserProfile() {
    const [activeTab, setActiveTab] = useState('enrolled-courses');

    const showTabContent = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="fixed-height col-md-12 d-flex" style={{maxHeight: "70vh", minHeight: "70vh", overflowY: "hidden"}}>
                    <div className="col-md-3 d-flex justify-content-center" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                        
                            <div className="card bg-transparent border-0 first-card">
                                    <nav class="nav nav-pills flex-column flex-sm-column m-3" style={{height: "100%" }}>
                                        <div>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'profile-settings' ? 'active' : ''}`} onClick={() => showTabContent('profile-settings')} id="list-profile-settings" href="#list-profile-settings"><b>Profile Settings</b></a>    
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'enrolled-courses' ? 'active' : ''}`} onClick={() => showTabContent('enrolled-courses')} id="list-enrolled-courses" href="#list-enrolled-courses"><b>Enrolled Courses</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'bookmarked-courses' ? 'active' : ''}`} onClick={() => showTabContent('bookmarked-courses')} id="list-bookmarked-courses" href="#list-bookmarked-courses"><b>Bookmarked Courses</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'badges' ? 'active' : ''}`} onClick={() => showTabContent('badges')} id="list-badges" href="#list-badges"><b>Badges</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'change-password' ? 'active' : ''}`} onClick={() => showTabContent('change-password')} id="list-change-password" href="#list-change-password"><b>Change Password</b></a>
                                        </div>
                                    </nav>
                            </div>
                        
                        
                    </div>
                    <div className='col-md-9' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                        {activeTab === 'profile-settings' && (<div className="col-md-12 fade" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
                            <h2 className='text-dark'>Profile settings</h2>
                        </div>)}

                        {activeTab === 'bookmarked-courses' && (<div className="col-md-12 fade" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-bookmarked-courses" role="tabpanel" aria-labelledby="list-bookmarked-courses">
                            <h2 className='text-dark'>Bookmarked Courses</h2>
                        </div>)}

                        {activeTab === 'bookmarked-courses' && (<div className="col-md-12 fade" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-badges" role="tabpanel" aria-labelledby="list-badges">
                            <h2 className='text-dark'>Badges</h2>
                        </div>)}

                        {activeTab === 'change-password' && (<div className="col-md-12 fade" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-change-password" role="tabpanel" aria-labelledby="list-change-password">
                            <h2 className='text-dark'>CHange Password</h2>
                        </div>)}
                        {activeTab === 'enrolled-courses' && (<div className="col-md-12 fade show active" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
                            <div className="card bg-transparent border-0 first-card">
                            <div className="row py-2 px-3">
                                <div className="col-md-12 mb-3">
                                    <div class="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
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
                                    <div class="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
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
                                    <div class="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
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
                                <div className="col-md-12 mb-3">
                                    <div class="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
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
                        </div>)}
                    </div>
                    

                </div>
            </div>
        </div>
    );
  }
  
  export default UserProfile;
  