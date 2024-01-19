import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
            <div className="container">
                <div className="row mt-4 pt-1 d-flex align-items-center justify-content-center">

                    <div className="card shadow-lg border-0" style={{maxWidth: "22rem", background: 'rgba(0, 0, 0, 0.8)'}}>
                        <div className="card-header py-3 border-top-0 border-left-0 border-right-0 border-secondary">
                            <h1 className='m-0 text-primary'>Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label for="exampleFormControlInput1">Username</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label for="exampleFormControlInput1">Email</label>
                                </div>
                                <div className="input-group">
                                <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label for="exampleFormControlInput1">Enter Password</label>
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
                                    <label for="exampleFormControlInput1">Confirm Password</label>
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
                            <div class="form-check mx-3" style={{maxWidth: "18rem"}}>
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <p className="text-start text-white">I agree to the <a href="#">Terms & Conditions</a></p>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
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