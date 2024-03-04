import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import CommonTasks from '../js/CommonTasks'

function ProfileSettings() {
    const commonTasks = new CommonTasks()
    const [getUserDetails, setUserDetails] = useState();
    const [gender, setGender] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [citizenship, setCitizenship] = useState();
    const [region, setRegion] = useState();
    const [city, setCity] = useState();
    const [educationalLevel, setEducationalLevel] = useState(0);

    //List of educational levels
    const educationalLevels = [
        { id: 1, name: "No formal education" },
        { id: 2, name: "Primary education" },
        { id: 3, name: "Secondary education" },
        { id: 4, name: "High school diploma or equivalent" },
        { id: 5, name: "Vocational qualification" },
        { id: 6, name: "Associate degree" },
        { id: 7, name: "Bachelor's degree" },
        { id: 8, name: "Master's degree" },
        { id: 9, name: "Doctorate or higher" }
    ];
    
    //List of genders
    const genders = [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
    ];

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

    const handleCityChange = (e) => {
        console.log(e.target.value)
        setCity(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCitizenshipChange = (e) => {
        setCitizenship(e.target.value);
    };

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    };

    const handleEducationalLevelChange = (e) => {
        setEducationalLevel(e.target.value);
    };


    ////////////////////////////////////////////

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

        const test_employee_list_update = async () => {
            try {
                let data = {
                        "id": 1,
                        "user": 3,
                        "gender": "F",
                        "date_of_birth": "2024-02-14",
                        "phone_number": "0500067545",
                        "citizenship": "Ghanaian",
                        "region": "Greater Accra",
                        "city": "Kasoa",
                        "educational_level": "BSc. Computer Science",
                        "profile_image": "joker-in-cop-car.jpg"
                    }
                const post_data = await commonTasks.putData("employee/3", data)
                console.log("post_data isssss ", post_data)
            }
            catch (error){

            }
        }


        const userID = localStorage.getItem('userID');
        const getUserDetails = async () => {
            try {
                const employee = await commonTasks.getData("employee/" + userID)
                const users = await commonTasks.getData("users/" + userID)
                
                console.log("employee is ", users)
                console.log("employee is ", employee)
                Object.assign(employee, users)
                setUserDetails(employee)
                setGender(employee.gender)
                setDateOfBirth(employee.date_of_birth)
                setPhoneNumber(employee.phone_number)
                setCitizenship(employee.citizenship)
                setRegion(employee.region)
                setCity(employee.city)
                //setEducationalLevel(employee.educational_level)
            }
            catch (error) {
                console.log(error)
            }
        }

        getUserDetails()
        //test_employee_list_update()
    }, [])

    return (
        <div className="col-md-12 bg-transparent" style={{overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-profile-settings" role="tabpanel" aria-labelledby="list-profile-settings">
            <div className="col-md-12">
                <div className="card mx-2 bg-transparent border-0 my-4">
                    <div>
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
                                                <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="First Name" id="firstname" value={getUserDetails ? getUserDetails.first_name : "null"}/>
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
                                                <input type="text" className="form-control px-3 bg-dark text-white border-secondary" placeholder="Last Name" id="lastname" value={getUserDetails ? getUserDetails.last_name : "null"}/>
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
                                                    {genders.map(gen => (
                                                        <option key={gen.id} value={gen.id}>{gen.name}</option>
                                                    ))}
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
                                                <input type="tel" className="form-control bg-dark text-white border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" value={phoneNumber ? phoneNumber : ""} onChange={handlePhoneNumberChange }/>
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
                                                <input type="text" className="form-control bg-dark text-white border-secondary" id="inputCity" placeholder="Town/Village/City" value={city ? city : ""} onChange={handleCityChange}/>
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
                                                    <option selected disabled hidden>Choose Educational Level</option>
                                                    {educationalLevels.map(level => (
                                                        <option key={level.id} value={level.id}>{level.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        <button type="submit" className="btn btn-success">Submit <FontAwesomeIcon icon={faTelegram}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings