import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommonTasks from '../js/CommonTasks';

function Login() {
    const commonTasks = new CommonTasks()
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let res = await commonTasks.loginUser(username, password)
        setError(res);
    };

    return (
        <div className="container">
            <div className="row pt-1 d-flex align-items-center justify-content-center">

                <div className="card shadow-lg border-0 my-5" style={{maxWidth: "22rem", background: 'rgba(0, 0, 0, 0.8)'}}>
                    <div className="card-header py-3 border-top-0 border-left-0 border-right-0 border-secondary">
                        <h1 className='text-primary'>Sign in</h1>
                        <small className="text-white">Stay updated with new advancements</small>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Username" aria-label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-sm-12 mb-2 text-white justify-content-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'} className="form-control px-3 bg-dark border-end-0 text-white border-secondary" placeholder="Enter Current Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-start-0 rounded-start-0 bg-dark text-white border-secondary" id="basic-addon1" onClick={togglePasswordVisibility} style={{ height: "100%" }}><FontAwesomeIcon icon={showPassword ? "eye" : "eye-slash"} className="icon-eye" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </form>
                        {error && <p className="text-danger">{error}</p>}
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