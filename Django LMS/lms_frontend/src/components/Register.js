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
        <div className="App">
            <div className="container">
                <div className="row mt-4 pt-1 d-flex align-items-center justify-content-center">

                    <div className="card shadow-lg border-0" style={{maxWidth: "22rem"}}>
                        <div className="card-header border-0 my-3 mx-1">
                            <h1 className=''>Register</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group" style={{maxWidth: "18rem"}}>
                                <input type="text" className="form-control mx-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group" style={{maxWidth: "18rem"}}>
                                <input type="email" className="form-control mx-3 mt-3" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group d-flex align-items-center justify-content-center mx-3 my-3" style={{ maxWidth: "16rem" }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder="Create Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                />
                                <div className="input-group-append px-1" onClick={togglePasswordVisibility}>
                                    
                                    <FontAwesomeIcon
                                        icon={showPassword ? "eye" : "eye-slash"}
                                        
                                        className="icon-eye"
                                    />
                                    
                                </div>
                            </div>

                            <div className="input-group d-flex align-items-center justify-content-center mx-3 my-3" style={{ maxWidth: "16rem" }}>
                                <input
                                    type={showPassword2 ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                />
                                <div className="input-group-append px-1" onClick={togglePasswordVisibility2}>
                                    
                                    <FontAwesomeIcon
                                        icon={showPassword2 ? "eye" : "eye-slash"}
                                        
                                        className="icon-eye"
                                    />
                                    
                                </div>
                            </div>
                            <div class="form-check mx-3" style={{maxWidth: "18rem"}}>
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <p className="text-start">I agree to the <a href="#">Terms & Conditions</a></p>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                            <div className="d-flex align-items-center justify-content-center">
                                <p className="my-3">Already have an account? <a href="/login">Log In</a></p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Register;