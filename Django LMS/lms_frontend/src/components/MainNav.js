import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from  'react-router-dom'
import CommonTasks from '../js/CommonTasks';

function Navbar() {
    const commonTasks = new CommonTasks()
    const [employeeName, setEmployeeName] = useState(null)
    const [employeeImage, setEmployeeImage] = useState(null)
    const handleLogout = () => {
        commonTasks.logoutUser()
    };

    useEffect (() => {
        const userID = localStorage.getItem('userID');
        const getUserDetails = async () => {
            try {
                const employee = await commonTasks.getData("employee/" + userID)
                const users = await commonTasks.getData("users/" + userID)
                
                console.log("users is ", users)
                console.log("users first name is ", users.first_name)
                console.log("employee is ", employee)
                let user_name = ""
                if (users.first_name !== "" || users.first_name !== null) {
                    user_name = users.first_name
                    console.log("user_name is ", user_name)
                    if (users.last_name !== "" || users.last_name !== null){
                        user_name = user_name + " " + users.last_name
                        console.log("user_name is ", user_name)
                    }
                }
                
                if (user_name === ""){
                    setEmployeeName("User")
                }
                else {
                    setEmployeeName(user_name)
                }
                
                /* console.log("profile_image is", employee.profile_image)
                setEmployeeImage(employee.profile_image) */
                /* Object.assign(employee, users)
                setUserDetails(employee) */
            }
            catch (error) {
                console.log(error)
            }
        }

        const fetchProfileImage = async () => {
            try {
                const response = await commonTasks.getData('employee/profile-image/' + userID);
                console.log(response)
                if (response && response.user_profile_image) {
                    console.log(response)
                    // Split the URL by "/"
                    const parts = response.user_profile_image.split("/");

                    // Get the last three parts of the split URL
                    const image_path = parts.slice(-3).join("/");
                    setEmployeeImage(image_path);
                }
            } catch (error) {
                console.error('Error fetching profile image:', error);
            }
        };

        getUserDetails()
        fetchProfileImage()
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/home"><FontAwesomeIcon icon="house" /> Home</Link>
                        <Link className="nav-item nav-link" to="/courses"><FontAwesomeIcon icon="book-open" /> Courses</Link>
                        <Link className="nav-item nav-link" to="/help"><FontAwesomeIcon icon="circle-question" /> Help</Link>
                    </div>
                </div>
                <div className="nav-item ms-auto">

                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={employeeImage ? `http://127.0.0.1:8000/static/${employeeImage}` : '/logo512.png'} alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                            <h5 className="text-light mb-0"><span className="d-none d-sm-inline mx-1"><b>{employeeName ? employeeName : 'User'}</b></span></h5>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            
                            <li><a className="dropdown-item" href="/user-profile"><FontAwesomeIcon icon="user" /> My Profile</a></li>
                            <li><a className="dropdown-item" href="/"><FontAwesomeIcon icon="screwdriver-wrench" /> Preferences</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" onClick={handleLogout}><FontAwesomeIcon icon="power-off" /> Sign Out</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  