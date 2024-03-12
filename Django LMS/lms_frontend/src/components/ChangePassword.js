import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import CommonTasks from '../js/CommonTasks'

function ChangePassword (){
    const commonTasks = new CommonTasks()
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const [inputOldPassword, setInputOldPassword] = useState('');
    const [inputNewPassword, setInputNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const togglePasswordVisibility3 = () => {
        setShowPassword3(!showPassword3);
    };

    const takeInputOldPassword = (e) => {
        setInputOldPassword(e.target.value)
    };

    const takeInputNewPassword = (e) => {
        setInputNewPassword(e.target.value)
    };

    const takeConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value)
    };

    const updatePassword = async() => {
        const containsNumber = /\d/
        const containsAlphabet = /[a-zA-Z]/
        const containsCapital = /[A-Z]/
        const containsSymbol = /[!@#$%^&*()\-_=+{};:,<.>]/
        
            if (inputNewPassword.length === 0) {
                setErrorMsg("Provide a very strong Password you'll be able to remember")
            }
            else if (inputNewPassword.length < 8) {
                setErrorMsg("Password length must be more than 7 characters")
            }
            else if (!containsNumber.test(inputNewPassword)) {
                setErrorMsg("Password must contain a number")
            }
            else if (!containsAlphabet.test(inputNewPassword)) {
                setErrorMsg("Password must contain an alphabet")
            }
            else if (!containsCapital.test(inputNewPassword)) {
                setErrorMsg("Password must contain a capital letter")
            }
            else if (!containsSymbol.test(inputNewPassword)) {
                setErrorMsg("Password must contain a symbol")
            }
            else {
                    setErrorMsg(null)
                    let payload = {
                        "old_password": inputOldPassword,
                        "new_password1": inputNewPassword,
                        "new_password2": confirmNewPassword
                    }
                    const response = await commonTasks.postData("password-change", payload)
                    console.log(response)
                    if (response.response){
                        if (response.response.data.error){
                            console.log(response.response.data.error)
                            setErrorMsg(response.response.data.error)
                        }
                        else {
                            console.log("here wai")
                            
                        }
                    }
                    else {
                        console.log(response.data.message)
                        alert(response.data.message)
                        
                    }
                    
                    /* console.log(response)
                    console.log(response.status) */
            }

        
    }

    return (
        <div className="col-md-12 d-flex align-items-center justify-content-center" style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }} id="list-change-password" role="tabpanel" aria-labelledby="list-change-password">
            <div className="card bg-transparent border-0" style={{Width: "70%", minWidth: "70%", maxWidth: "70%"}}>
                <div className="card-body" style={{Width: "100%", minWidth: "100%", maxWidth: "100%"}}>
                    <div className="error-message" display={errorMsg ? "block" : "none"} style={{background: 'rgba(238, 43, 36, 0.384)', color: 'white', maxWidth: "100%"}}>
                        <p>{errorMsg}</p>
                    </div>
                    <div className="col-sm-12 mb-2 text-white justify-content-center">
                        <div className="col-md-12 d-flex align-items-center">
                            <label for="exampleFormControlInput1">Enter Current Password</label>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group">
                                <input type={showPassword ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter Current Password" id="lastname" value={inputOldPassword} onChange={ takeInputOldPassword}/>
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
                                <input type={showPassword2 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter New Password" id="lastname" value={inputNewPassword} onChange={ takeInputNewPassword}/>
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
                                <input type={showPassword3 ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter New Password" id="lastname" value={confirmNewPassword} onChange={ takeConfirmNewPassword}/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility3} style={{height: "100%"}}><FontAwesomeIcon icon={showPassword3 ? "eye" : "eye-slash"} className="icon-eye"/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-success" onClick={updatePassword}>Submit <FontAwesomeIcon icon={faTelegram}/></button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword