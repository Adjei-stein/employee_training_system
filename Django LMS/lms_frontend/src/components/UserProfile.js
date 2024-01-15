import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/UserProfile.css'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
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

    const fileInputRef = useRef(null);

    const handleEditButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        // Handle file change logic here
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const togglePasswordVisibility3 = () => {
        setShowPassword3(!showPassword3);
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
                        {activeTab === 'profile-settings' && (<div className="col-md-12 bg-transparent" style={{overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
                            <div className="col-md-12">
                                <div className="card mx-2 bg-transparent border-0 my-4">
                                    <form>
                                            <div className="row mb-2">
                                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                                    <div class="input-file input-file-image">
                                                    <img class="img-upload-preview img-circle" width="100" height="100" src="logo512.png" alt="preview"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                        <div className="btn btn-dark" onClick={handleEditButtonClick}>
                                                        Edit Profile Image
                                                        <input type="file" className="d-none" id="uploadImg" name="uploadImg" accept="image/*" ref={fileInputRef} onChange={handleFileChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">@</span>
                                                            </div>
                                                            <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Username" id="username" value="User"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Firstname</span>
                                                            </div>
                                                            <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="First Name" id="firstname" value="Hello"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Lastname</span>
                                                            </div>
                                                            <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="Last Name" id="lastname" value="World"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Email</span>
                                                            </div>
                                                            <input type="email" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" placeholder="Enter email" value="helloworld@gmail.com"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    
                                                        <div className="col-sm-3" style={{paddingRight: "0.25rem"}}>
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
                                                        <div className="col-sm-2">
                                                            <div className="form-group">
                                                                <input type="date" id="datepicker" value={selectedDate} onChange={handleDateChange} min={maxDateFormatted} max={todayFormatted} className='form-control bg-dark text-white border-secondary'/>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5">
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
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}><FontAwesomeIcon icon={faPhone}/></span>
                                                            </div>
                                                            <input type="tel" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" value="+233545454545"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5">
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
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
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
                                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                                    <div className="col-sm-5 mx-2">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Town/Village/City</span>
                                                            </div>
                                                            <input type="text" className="form-control bg-dark text-white border-secondary" id="inputCity" placeholder="Town/Village/City" value="Accra"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        <button type="submit" className="btn btn-success">Submit <FontAwesomeIcon icon={faTelegram}/></button>
                                    </form>
                                </div>
                            </div>
                        </div>)}

                        {/* Bookmarked Courses Tab */}
                        {activeTab === 'bookmarked-courses' && (<div className="col-md-12" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
                            <div className="card bg-transparent border-0 first-card">
                                <div className="row py-2 px-3">
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
                        </div>)}



                        {/* Badges */}
                        {activeTab === 'badges' && (<div className="col-md-12" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-badges" role="tabpanel" aria-labelledby="list-badges">
                            <h2 className='text-dark'>Badges</h2>
                        </div>)}



                        {/* Change Password */}
                        {activeTab === 'change-password' && (<div className="col-md-12 d-flex align-items-center justify-content-center" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-change-password" role="tabpanel" aria-labelledby="list-change-password">
                            <div className="card bg-transparent border-0">
                                <div className="card-body">
                                    <div className="col-sm-12 mb-2 text-white justify-content-center">
                                        <div className="col-md-12 d-flex align-items-center">
                                            <label for="exampleFormControlInput1">Enter Current Password</label>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <input type={showPassword ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter Current Password" id="lastname" value=""/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-sm-12 mb-2 text-white">
                                        <div className="col-md-12 d-flex align-items-center">
                                            <label for="exampleFormControlInput1">Enter New Password</label>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <input type={showPassword2 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter New Password" id="lastname" value=""/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility2} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword2 ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-12 mb-2 text-white">
                                        <div className="col-md-12 d-flex align-items-center">
                                            <label for="exampleFormControlInput1">Confirm New Password</label>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <input type={showPassword3 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter New Password" id="lastname" value=""/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility3} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword3 ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-success">Submit <FontAwesomeIcon icon={faTelegram}/></button>
                                </div>
                            </div>
                        </div>)}





                        {/* Enrolled Courses */}
                        {activeTab === 'enrolled-courses' && (<div className="col-md-12" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
                            <div className="card bg-transparent border-0 first-card">
                            <div className="row py-2 px-3">
                                {/*<div className="col-md-12 mb-3">
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
                                </div>*/}

                                <div className="col-md-6">
                                    <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                            </div>
                                            <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <div className="me-auto text-white">75% complete</div>
                                                </div>
                                                <div className="btn-group ms-auto">
                                                    <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                            </div>
                                            <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <div className="me-auto text-white">75% complete</div>
                                                </div>
                                                <div className="btn-group ms-auto">
                                                    <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                            </div>
                                            <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <div className="me-auto text-white">75% complete</div>
                                                </div>
                                                <div className="btn-group ms-auto">
                                                    <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                            </div>
                                            <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <div className="me-auto text-white">75% complete</div>
                                                </div>
                                                <div className="btn-group ms-auto">
                                                    <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
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
  