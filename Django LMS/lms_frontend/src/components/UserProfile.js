import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'
import { faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function UserProfile() {
    const [activeTab, setActiveTab] = useState('enrolled-courses');

    const showTabContent = (tab) => {
        setActiveTab(tab);
    };

    // Get today's date
    const today = new Date();
    
    // Calculate the date for 100 years from today
    const maxDate = new Date(today);
    maxDate.setFullYear(today.getFullYear() - 100);

    // Format the dates as 'YYYY-MM-DD'
    const todayFormatted = today.toISOString().split('T')[0];
    const maxDateFormatted = maxDate.toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState("2022-09-29");

    const handleDateChange = (date) => {
        console.log(date.target.value)
        setSelectedDate(date.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="fixed-height col-md-12 d-flex" style={{maxHeight: "70vh", minHeight: "70vh", overflowY: "hidden"}}>
                    <div className="col-md-3 d-flex justify-content-center" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                        
                            <div className="card bg-transparent border-0 first-card">
                                    <nav className="nav nav-pills flex-column flex-sm-column m-3" style={{height: "100%" }}>
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
                        {activeTab === 'profile-settings' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
                            <div className="col-md-12">
                                <div className="card mx-2 bg-transparent border-0">

                                    <form>
                                        
                                            <div className="row mb-2">
                                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                                    <div class="input-file input-file-image">
                                                    <img class="img-upload-preview img-circle" width="100" height="100" src="logo512.png" alt="preview"/>
                                                    {/*<input type="file" class="form-control form-control-file" id="uploadImg" name="uploadImg" accept="image/*" required=""/>
    <label for="uploadImg" class=" label-input-file btn btn-primary">Upload a Image</label>*/}
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <button type="button" className="btn btn-dark">Edit Profile Image</button>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    {/*<div className="col-sm-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Username" id="username" value="User"/>
                                                        </div>
                                                        </div>*/}
                                                    <div className="col-sm-4 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">@</span>
                                                            </div>
                                                            <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Username" id="username" value="User"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Firstname</span>
                                                            </div>
                                                            <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="First Name" id="firstname" value="Hello"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Lastname</span>
                                                            </div>
                                                            <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="Last Name" id="lastname" value="World"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Email</span>
                                                            </div>
                                                            <input type="email" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" placeholder="Enter email" value="helloworld@gmail.com"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Gender</span>
                                                            </div>
                                                            <select id="region" className="form-control bg-dark text-white border-secondary">
                                                                <option selected>Select Gender</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex align-items-center mb-2">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <input type="date" id="datepicker" value={selectedDate} onChange={handleDateChange} min={maxDateFormatted} max={todayFormatted} className='form-control bg-dark text-white border-secondary'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Citizenship</span>
                                                            </div>
                                                            <select id="region" className="form-control bg-dark text-white border-secondary">
                                                                <option selected>Select ...</option>
                                                                <option>Ghanaian</option>
                                                                <option>Togolese</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}><FontAwesomeIcon icon={faPhone}/></span>
                                                            </div>
                                                            <input type="tel" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" value="+233545454545"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center mb-2">
                                                    <div className="col-sm-12">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}>Educational level</span>
                                                            </div>
                                                            <select id="region" className="form-control bg-dark text-white border-secondary">
                                                                <option selected>Choose Educational Level</option>
                                                                <option>...</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Region</span>
                                                            </div>
                                                            <select id="region" className="form-control bg-dark text-white border-secondary">
                                                                <option selected>Choose Region</option>
                                                                <option>...</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-12 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Town/Village/City</span>
                                                            </div>
                                                            <input type="text" className="form-control bg-dark text-white border-secondary" id="inputCity" placeholder="Town/Village/City"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>


                                            
                                            
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </form>


                                    
                                </div>
                                
                            </div>
                        </div>)}

                        {activeTab === 'bookmarked-courses' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-bookmarked-courses" role="tabpanel" aria-labelledby="list-bookmarked-courses">
                            <h2 className='text-dark'>Bookmarked Courses</h2>
                        </div>)}

                        {activeTab === 'bookmarked-courses' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-badges" role="tabpanel" aria-labelledby="list-badges">
                            <h2 className='text-dark'>Badges</h2>
                        </div>)}

                        {activeTab === 'change-password' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-change-password" role="tabpanel" aria-labelledby="list-change-password">
                            <h2 className='text-dark'>CHange Password</h2>
                        </div>)}
                        {activeTab === 'enrolled-courses' && (<div className="col-md-12" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
                            <div className="card bg-transparent border-0 first-card">
                            <div className="row py-2 px-3">
                                <div className="col-md-12 mb-3">
                                    <div className="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
                                        <div className="row no-gutters d-flex">
                                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                                <img src="Jira-Logo-Dark.jpg" style={{maxHeight: "7rem", maxWidth: "10rem"}} className="card-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center justify-content-center">
                                                <div className="card-body">
                                                <div className="d-flex align-items-center mb-2">
                                                <h4 className="card-title me-auto"><b>Jira</b></h4>
                                                    <div className="btn-group ms-auto">
                                                        <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                    </div>
                                                </div>
                                                <div className="progress mt-2 mb-2">
                                                    <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                                        <div className="btn-group">
                                                            <div className="me-auto">15% complete</div>
                                                        </div>
                                                        <small className="ms-auto">2 hr 15 mins</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <div className="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
                                        <div className="row no-gutters d-flex">
                                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <img src="Github-Logo-Dark.jpg" style={{maxHeight: "7rem", maxWidth: "10rem"}} className="card-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center justify-content-center">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <h4 className="card-title me-auto"><b>GitHub Copilot</b></h4>
                                                        <div className="btn-group ms-auto">
                                                            <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-2 mb-2">
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                                        <div className="btn-group">
                                                            <div className="me-auto">75% complete</div>
                                                        </div>
                                                        <small className="ms-auto">1 hr 2 mins</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <div className="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
                                        <div className="row no-gutters d-flex">
                                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <img src="vs-code-logo.png" style={{maxHeight: "9rem", maxWidth: "10rem"}} className="card-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center justify-content-center">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <h4 className="card-title me-auto"><b>Visual Studio Code</b></h4>
                                                        <div className="btn-group ms-auto">
                                                            <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-2 mb-2">
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                                        <div className="btn-group">
                                                            <div className="me-auto">75% complete</div>
                                                        </div>
                                                        <small className="ms-auto">1 hr 2 mins</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="card border-0 text-white" style={{ background: 'rgba(108, 117, 125)'}}>
                                        <div className="row no-gutters d-flex">
                                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                            <img src="vs-code-logo.png" style={{maxHeight: "9rem", maxWidth: "10rem"}} className="card-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 d-flex align-items-center justify-content-center">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <h4 className="card-title me-auto"><b>Visual Studio Code</b></h4>
                                                        <div className="btn-group ms-auto">
                                                            <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-2 mb-2">
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                                        <div className="btn-group">
                                                            <div className="me-auto">75% complete</div>
                                                        </div>
                                                        <small className="ms-auto">1 hr 2 mins</small>
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
  