import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
      <div className="App">
        <div className="container">
            <div className="row mt-4 pt-1 d-flex align-items-center justify-content-center">

                <div className="card shadow-lg border-0 my-5" style={{maxWidth: "22rem"}}>
                    <div className="card-header border-0 my-3 mx-1">
                        <h1 className=''>Login</h1>
                    </div>
                    <div className="card-body">
                        <div className="input-group" style={{maxWidth: "18rem"}}>
                            <input type="text" className="form-control mx-3 mb-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group d-flex align-items-center justify-content-center mx-3 my-2" style={{ maxWidth: "16rem" }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                placeholder="Password"
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
                        <button type="submit" class="btn btn-primary">Log in</button>
                        <div className="d-flex align-items-center justify-content-end mt-2 mx-4" style={{maxWidth: "18rem"}}>
                            <p className="text-end mb-0"><a href="#">Forgot password?</a></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="mb-3">New to Training Portal? <a href="/register">Sign Up</a> :)</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;