import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import CommonTasks from '../js/CommonTasks'

function ProfileSettings() {
    const commonTasks = new CommonTasks()
    const [getUserDetails, setUserDetails] = useState();

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

    useEffect (() => {
        const getUserDetails = async () => {
            try {
                const employee = await commonTasks.getData("employee/1")
                console.log("employee is ", employee)
                setUserDetails(employee)
            }
            catch (error) {
                console.log(error)
            }
        }

        getUserDetails()

    }, [])

    return (
        <div className="col-md-12 bg-transparent" style={{overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
            <div className="col-md-12">
                <div className="card mx-2 bg-transparent border-0 my-4">
                    <form>
                            <div className="row mb-2">
                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                    <div class="input-file input-file-image">
                                    <img class="img-upload-preview img-circle" width="100" height="100" src="avatar-profile-picture.png" alt="preview" style={{borderRadius: "50%"}}/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                        <div className="btn btn-dark" onClick={handleEditButtonClick}>
                                        Edit Profile Image
                                        <input type="file" className="d-none" id="uploadImg" name="uploadImg" accept="image/*" ref={fileInputRef} onChange={handleFileChange}/>
                                    </div>
                                </div> */}
                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-2">
                                    <div className="col-sm-3 mx-2">
                                        <div className="input-group bg-transparent">
                                            <input type="text" className="form-control bg-dark text-white border-0" placeholder="Username" id="username" value={getUserDetails ? getUserDetails.username : "null"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Firstname</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Firstname</span>
                                                </div> */}
                                                <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="First Name" id="firstname" value={getUserDetails ? getUserDetails.firstname : "null"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Lastname</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Lastname</span>
                                                </div> */}
                                                <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="Last Name" id="lastname" value={getUserDetails ? getUserDetails.lastname : "null"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Email</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Email</span>
                                                </div> */}
                                                <input type="email" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" placeholder="Enter email" value={getUserDetails ? getUserDetails.email : "null"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Gender</strong></h5></label>
                                        </div>
                                        <div className="col-md-11 mx-2">
                                            <div className="input-group">
                                                <select id="region" className="form-control bg-dark text-white border-secondary">
                                                    <option disabled selected hidden>Select Gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="col-md-10 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Date Of Birth</strong></h5></label>
                                        </div>
                                        <div className="col-md-10 mx-2">
                                            <div className="form-group">
                                                <input type="date" id="datepicker" value={getUserDetails ? getUserDetails.lastname : selectedDate} onChange={handleDateChange} min={maxDateFormatted} max={todayFormatted} className='form-control bg-dark text-white border-secondary'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Telephone</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}><FontAwesomeIcon icon={faPhone}/></span>
                                                </div> */}
                                                <input type="tel" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" value={getUserDetails ? getUserDetails.phone_number : "null"}/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Telephone</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                <select id="region" className="form-control bg-dark text-white border-secondary">
                                                    <option disabled selected hidden>Select citizenship</option>
                                                    <option>Ghanaian</option>
                                                    <option>Togolese</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Region</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Region</span>
                                                </div> */}
                                                <select id="region" className="form-control bg-dark text-white border-secondary">
                                                    <option selected>Choose Region</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>City</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">City</span>
                                                </div> */}
                                                <input type="text" className="form-control bg-dark text-white border-secondary" id="inputCity" placeholder="Town/Village/City" value={getUserDetails ? getUserDetails.city : "null"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label for="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Educational Level</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}>Educational level</span>
                                                </div> */}
                                                <select id="region" className="form-control bg-dark text-white border-secondary">
                                                    <option selected>Choose Educational Level</option>
                                                    <option>Bachelor's Degree</option>
                                                </select>
                                            </div>
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