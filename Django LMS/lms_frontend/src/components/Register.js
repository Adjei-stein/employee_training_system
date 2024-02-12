import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommonTasks from '../js/CommonTasks'


function Register() {
    const commonTasks = new CommonTasks()
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const takeUsername = (e) => {
        setUsername(e.target.value)
        console.log(username)
    };

    const takeEmail = (e) => {
        setEmail(e.target.value)
    };

    const takeInputPassword = (e) => {
        setInputPassword(e.target.value)
    };

    const takeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    };

    const createUser = async() => {
        const regex = /[^a-zA-Z0-9]/;
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        const emailRegexTwo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const containsNumber = /\d/
        const containsAlphabet = /[a-zA-Z]/
        const containsCapital = /[A-Z]/
        const containsSymbol = /[!@#$%^&*()\-_=+{};:,<.>]/
        
        if (username.length < 3) {
            setErrorMsg("Username should be more than 2 letters long")
        }
        else if (regex.test(username)) {
            setErrorMsg("Username cannot contain symbols")
        }
        else if (email.length === 0) {
            setErrorMsg("No email provided")
        }
        else if (emailRegex.test(email) === false) {
            setErrorMsg("Invalid email")
        }
        else {
            if (inputPassword.length === 0) {
                setErrorMsg("Provide a very strong Password you'll be able to remember")
            }
            else if (inputPassword.length < 8) {
                setErrorMsg("Password length must be more than 7 characters")
            }
            else if (!containsNumber.test(inputPassword)) {
                setErrorMsg("Password must contain a number")
            }
            else if (!containsAlphabet.test(inputPassword)) {
                setErrorMsg("Password must contain an alphabet")
            }
            else if (!containsCapital.test(inputPassword)) {
                setErrorMsg("Password must contain a capital letter")
            }
            else if (!containsSymbol.test(inputPassword)) {
                setErrorMsg("Password must contain a symbol")
            }
            else {
                
                if (confirmPassword.length === 0 || confirmPassword === null) {
                    setErrorMsg("Kindly provide confirmation password")
                }
                else if (inputPassword !== confirmPassword) {
                    setErrorMsg("Passwords do not match")
                }
                else {
                    setErrorMsg(null)
                    let payload = {
                        "username": username,
                        "password": inputPassword,
                        "email": email
                    }
                    const response = await commonTasks.postData("employees", payload)
                    console.log(response.data)
                    console.log(response.status)
                }
            }
        }

        
    }

    return (
            <div className="container">
                <div className="row mt-4 pt-1 d-flex align-items-center justify-content-center">

                    <div className="card shadow-lg border-0" style={{maxWidth: "22rem", background: 'rgba(0, 0, 0, 0.8)'}}>
                        <div className="card-header py-3 border-top-0 border-left-0 border-right-0 border-secondary">
                            <h1 className='m-0 text-primary'>Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="error-message" display={errorMsg ? "block" : "none"} style={{background: 'rgba(238, 43, 36, 0.384)', color: 'white'}}>
                                <p>{errorMsg}</p>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="exampleFormControlInput1">Username</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control bg-dark text-white border-secondary username" value={username} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={ takeUsername}/>
                                </div>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="exampleFormControlInput1">Email</label>
                                </div>
                                <div className="input-group">
                                <input type="email" className="form-control bg-dark text-white border-secondary email" value={email} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"  onChange={ takeEmail}/>
                                </div>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="exampleFormControlInput1">Enter Password</label>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary input-password" placeholder="Enter Current Password" value={inputPassword} onChange={ takeInputPassword}/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-sm-12 mb-2 text-white">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="exampleFormControlInput1">Confirm Password</label>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <input type={showPassword2 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary confirm-password" placeholder="Enter New Password" value={confirmPassword} onChange={ takeConfirmPassword}/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility2} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword2 ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check mx-3" style={{maxWidth: "18rem"}}>
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <p className="text-start text-white">I agree to the <a href="#">Terms & Conditions</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={createUser}>Sign Up</button>
                            <div className="d-flex align-items-center justify-content-center">
                                <p className="my-3 text-white">Already have an account? <a href="/login">Log In</a></p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Register;