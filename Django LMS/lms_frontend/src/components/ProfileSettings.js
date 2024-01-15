import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

function ProfileSettings() {

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
    return (
        <div className="col-md-12 bg-transparent" style={{overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
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
        </div>
    )
}

export default ProfileSettings