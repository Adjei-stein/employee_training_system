import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="row pt-1 d-flex align-items-center justify-content-center">

                <div className="card shadow-lg border-0 my-5" style={{maxWidth: "22rem", background: 'rgba(0, 0, 0, 0.8)'}}>
                    <div className="card-header py-3 border-top-0 border-left-0 border-right-0 border-secondary">
                        <h1 className='text-primary'>Sign in</h1>
                        <small class="text-white">Stay updated with new advancements</small>
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
                                <label for="exampleFormControlInput1">Password</label>
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
                        <button type="submit" class="btn btn-primary">Log in</button>
                        <div className="d-flex align-items-center justify-content-end mt-2 mx-4" style={{maxWidth: "18rem"}}>
                            <p className="text-end mb-0"><a href="#">Forgot password?</a></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="mb-3 text-white">New to Training Portal? <a href="/register">Sign Up</a> :)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;