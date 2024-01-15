import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'


function ChangePassword (){

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const togglePasswordVisibility3 = () => {
        setShowPassword3(!showPassword3);
    };

    return (
        <div className="col-md-12 d-flex align-items-center justify-content-center" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-change-password" role="tabpanel" aria-labelledby="list-change-password">
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <div className="col-sm-12 mb-2 text-white justify-content-center">
                        <div className="col-md-12 d-flex align-items-center">
                            <label for="exampleFormControlInput1">Enter Current Password</label>
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
                            <label for="exampleFormControlInput1">Enter New Password</label>
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
                    
                    <div className="col-sm-12 mb-2 text-white">
                        <div className="col-md-12 d-flex align-items-center">
                            <label for="exampleFormControlInput1">Confirm New Password</label>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group">
                                <input type={showPassword3 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter New Password" id="lastname" value=""/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility3} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword3 ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-success">Submit <FontAwesomeIcon icon={faTelegram}/></button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword