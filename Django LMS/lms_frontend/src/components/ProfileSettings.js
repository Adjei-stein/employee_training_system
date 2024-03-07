import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import CommonTasks from '../js/CommonTasks'

function ProfileSettings() {
    const commonTasks = new CommonTasks()
    const [getUserID, setUserID] = useState();
    const [getEmployeeID, setEmployeeID] = useState();
    const [getUserDetails, setUserDetails] = useState();
    const [gender, setGender] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [citizenship, setCitizenship] = useState();
    const [region, setRegion] = useState();
    const [city, setCity] = useState();
    const [educationalLevel, setEducationalLevel] = useState(0);


    //List of countries
    const africanCountries = [
        { id: 1, name: 'Algeria' },
        { id: 2, name: 'Angola' },
        { id: 3, name: 'Benin' },
        { id: 4, name: 'Botswana' },
        { id: 5, name: 'Burkina Faso' },
        { id: 6, name: 'Burundi' },
        { id: 7, name: 'Cabo Verde' },
        { id: 8, name: 'Cameroon' },
        { id: 9, name: 'Central African Republic' },
        { id: 10, name: 'Chad' },
        { id: 11, name: 'Comoros' },
        { id: 12, name: 'Congo' },
        { id: 13, name: 'Democratic Republic of the Congo' },
        { id: 14, name: 'Djibouti' },
        { id: 15, name: 'Egypt' },
        { id: 16, name: 'Equatorial Guinea' },
        { id: 17, name: 'Eritrea' },
        { id: 18, name: 'Eswatini' },
        { id: 19, name: 'Ethiopia' },
        { id: 20, name: 'Gabon' },
        { id: 21, name: 'Gambia' },
        { id: 22, name: 'Ghana' },
        { id: 23, name: 'Guinea' },
        { id: 24, name: 'Guinea-Bissau' },
        { id: 25, name: 'Ivory Coast' },
        { id: 26, name: 'Kenya' },
        { id: 27, name: 'Lesotho' },
        { id: 28, name: 'Liberia' },
        { id: 29, name: 'Libya' },
        { id: 30, name: 'Madagascar' },
        { id: 31, name: 'Malawi' },
        { id: 32, name: 'Mali' },
        { id: 33, name: 'Mauritania' },
        { id: 34, name: 'Mauritius' },
        { id: 35, name: 'Morocco' },
        { id: 36, name: 'Mozambique' },
        { id: 37, name: 'Namibia' },
        { id: 38, name: 'Niger' },
        { id: 39, name: 'Nigeria' },
        { id: 40, name: 'Rwanda' },
        { id: 41, name: 'Sao Tome and Principe' },
        { id: 42, name: 'Senegal' },
        { id: 43, name: 'Seychelles' },
        { id: 44, name: 'Sierra Leone' },
        { id: 45, name: 'Somalia' },
        { id: 46, name: 'South Africa' },
        { id: 47, name: 'South Sudan' },
        { id: 48, name: 'Sudan' },
        { id: 49, name: 'Tanzania' },
        { id: 50, name: 'Togo' },
        { id: 51, name: 'Tunisia' },
        { id: 52, name: 'Uganda' },
        { id: 53, name: 'Zambia' },
        { id: 54, name: 'Zimbabwe' }
    ];

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
        setDateOfBirth(date.target.value);
    };

    const handleCityChange = (e) => {
        console.log(e.target.value)
        console.log("educationalLevel ^^^^^^^", educationalLevel)
        setCity(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleGenderChange = (id) => {
        setGender(Number(id));
    };

    const handleCitizenshipChange = (id) => {
        setCitizenship(Number(id));
    };

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    };

    const handleEducationalLevelChange = (id) => {
        console.log(id)
        setEducationalLevel(Number(id));
    };

    const updateUserDetails = () => {
        console.log(educationalLevel)
        console.log(citizenship)
        console.log(gender)
        let chosenCountry = ""
        let education = ""
        let chosenGender = ""
        for (let i = 0; i < africanCountries.length; i++) {
            if (africanCountries[i].id === citizenship) {
                chosenCountry = africanCountries[i].name
                break
            }
        }

        for (let i = 0; i < educationalLevels.length; i++) {
            if (educationalLevels[i].id === educationalLevel) {
                education = educationalLevels[i].name
                break
            }
        }

        for (let i = 0; i < genders.length; i++) {
            if (genders[i].id === gender) {
                chosenGender = genders[i].name.substring(0, 1)
                break
            }
        }
        console.log(chosenCountry)
        console.log(education)
        console.log(chosenGender)

        //return

        try {
            let data = {
                    "id": getEmployeeID,
                    "user": getUserID,
                    "gender": chosenGender,
                    "date_of_birth": dateOfBirth,
                    "phone_number": phoneNumber,
                    "citizenship": chosenCountry,
                    "region": region,
                    "city": city,
                    "educational_level": education,
                    "profile_image": "joker-in-cop-car.jpg"
                }
            const post_data = commonTasks.putData("employee/" + getUserID, data)
            console.log("post_data isssss ", post_data)
        }
        catch (error){

        }
    }


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

        const userID = localStorage.getItem('userID');
        if (userID){
            setUserID(userID)
        }
        
        const getUserDetails = async () => {
            try {
                const employee = await commonTasks.getData("employee/" + userID)
                const users = await commonTasks.getData("users/" + userID)
                
                console.log("employee is ", users)
                console.log("employee is ", employee)
                Object.assign(employee, users)
                setUserDetails(employee)
                if (employee.gender == "F") {
                    setGender(2)
                }
                else if (employee.gender == "M") {
                    setGender(1)
                }
                else {
                    setGender(0)
                }
                
                setEmployeeID(employee.id)
                setDateOfBirth(employee.date_of_birth)
                setPhoneNumber(employee.phone_number)

                for (let i = 0; i < africanCountries.length; i++) {
                    if (africanCountries[i].name === employee.citizenship) {
                        setCitizenship(africanCountries[i].id)
                    }
                }
                //setCitizenship(employee.citizenship)
                setRegion(employee.region)
                setCity(employee.city)

                
                for (let i = 0; i < educationalLevels.length; i++) {
                    if (educationalLevels[i].name === employee.educational_level) {
                        setEducationalLevel(educationalLevels[i].id)
                    }
                }
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
                                    <div className="input-file input-file-image">
                                    <img className="img-upload-preview img-circle" width="100" height="100" src="avatar-profile-picture.png" alt="preview" style={{borderRadius: "50%"}}/>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Firstname</strong></h5></label>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Lastname</strong></h5></label>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Email</strong></h5></label>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Gender</strong></h5></label>
                                        </div>
                                        <div className="col-md-11 mx-2">
                                            <div className="input-group">
                                                <select id="region" value={gender} className="form-control bg-dark text-white border-secondary" onChange={(e)=>(handleGenderChange(e.target.value))}>
                                                    <option key={0} value={0} disabled defaultValue hidden>Select Gender</option>
                                                    {genders.map(gen => (
                                                        <option key={gen.id} value={gen.id}>{gen.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <div className="col-md-10 d-flex align-items-center mx-2">
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Date Of Birth</strong></h5></label>
                                        </div>
                                        <div className="col-md-10 mx-2">
                                            <div className="form-group">
                                                <input type="date" id="datepicker" value={dateOfBirth ? dateOfBirth : ""} onChange={handleDateChange} min={maxDateFormatted} max={todayFormatted} className='form-control bg-dark text-white border-secondary'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Telephone</strong></h5></label>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Country</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                <select id="citizenships" className="form-control bg-dark text-white border-secondary" value={citizenship} onChange={(e) => (handleCitizenshipChange(e.target.value))}>
                                                    <option key={0} value={0} disabled defaultValue hidden>Select Country</option>
                                                    {africanCountries .map(country => (
                                                        <option key={country.id} value={country.id}>{country.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>State/Province</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1">Region</span>
                                                </div> */}
                                                <input type="text" className="form-control bg-dark text-white border-secondary" id="inputCity" placeholder="State/Province" value={region ? region : ""} onChange={handleRegionChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="col-md-11 d-flex align-items-center mx-2">
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>City</strong></h5></label>
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
                                            <label htmlFor="exampleFormControlInput1"><h5 className='text-white m-0'><strong>Educational Level</strong></h5></label>
                                        </div>
                                        <div className="col-sm-11 mx-2">
                                            <div className="input-group">
                                                {/* <div className="input-group-prepend">
                                                    <span className="input-group-text rounded-end-0 bg-secondary border-secondary" id="basic-addon1" style={{height: "100%"}}>Educational level</span>
                                                </div> */}
                                                <select id="region" className="form-control bg-dark text-white border-secondary" value={educationalLevel} onChange={(e) => handleEducationalLevelChange(e.target.value)}>
                                                    <option defaultValue disabled hidden>Choose Educational Level</option>
                                                    {educationalLevels.map(level => (
                                                        <option key={level.id} value={level.id}>{level.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        <button type="submit" className="btn btn-success" onClick={updateUserDetails}>Submit <FontAwesomeIcon icon={faTelegram}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings