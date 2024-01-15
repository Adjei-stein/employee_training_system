import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';

import BookmarkedCourses from './BookmarkedCourses.js'
import ProfileSettings from './ProfileSettings.js';
import ChangePassword from './ChangePassword.js';
import EnrolledCourses from './EnrolledCourses.js';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
                                    <nav className="nav nav-pills flex-column flex-sm-column m-3" style={{height: "100%" }}>
                                        <div>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'profile-settings' ? 'active' : ''}`} onClick={() => showTabContent('profile-settings')} id="list-profile-settings"><b>Profile Settings</b></a>    
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'enrolled-courses' ? 'active' : ''}`} onClick={() => showTabContent('enrolled-courses')} id="list-enrolled-courses"><b>Enrolled Courses</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'bookmarked-courses' ? 'active' : ''}`} onClick={() => showTabContent('bookmarked-courses')} id="list-bookmarked-courses"><b>Bookmarked Courses</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'badges' ? 'active' : ''}`} onClick={() => showTabContent('badges')} id="list-badges"><b>Badges</b></a>
                                            <a class={`flex-sm-fill text-sm-center nav-link ${activeTab === 'change-password' ? 'active' : ''}`} onClick={() => showTabContent('change-password')} id="list-change-password"><b>Change Password</b></a>
                                        </div>
                                    </nav>
                            </div>
                        
                        
                    </div>
                    <div className='col-md-9' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                        {/* Profile Settings Tab */}
                        {activeTab === 'profile-settings' && (<ProfileSettings/>)}

                        {/* Bookmarked Courses Tab */}
                        {activeTab === 'bookmarked-courses' && (<BookmarkedCourses/>)}

                        {/* Badges */}
                        {activeTab === 'badges' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-badges" role="tabpanel" aria-labelledby="list-badges">
                            <h2 className='text-dark'>Badges</h2>
                        </div>)}



                        {/* Change Password */}
                        {activeTab === 'change-password' && (<ChangePassword/>)}





                        {/* Enrolled Courses */}
                        {activeTab === 'enrolled-courses' && (<EnrolledCourses/>)}
                    </div>
                    

                </div>
            </div>
        </div>
    );
  }
  
  export default UserProfile;
  