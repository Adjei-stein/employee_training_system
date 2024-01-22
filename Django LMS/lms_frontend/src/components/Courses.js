import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from  'react-router-dom'
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

function Courses() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-12 mb-2">
                <div className="row">
                    <div className="card border-0 rounded-0 text-white pb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="card-header p-0 d-flex justify-content-start border-dark">
                            <h2 className='m-2'>Filer Area</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-md-12 mb-2">
                <div className="row">
                    <div className="card border-0 rounded-0 text-white pb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="card-header p-0 d-flex justify-content-start border-dark" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={isCollapsed ? 'false' : 'true'} aria-controls="collapseOne" role="button" onClick={handleToggle}>
                            <div className="col-md-11 d-flex align-items-center justify-content-start">
                                <h2 className='m-2'>Programming</h2>
                            </div>
                            <div className="col-md-1 d-flex align-items-center justify-content-center">
                                <h2 className='m-2'><FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus}/></h2>
                            </div>
                        </div>
                        
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
                            <div className="card-body p-0 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 p-2">
                                    <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body border-top">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                <button type="button" className="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                            </div>
                                            <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                            <div className="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                                </div>
                                                <small className="text-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-2">
                                    <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body border-top">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                <button type="button" className="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                            </div>
                                            <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                            <div className="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                                </div>
                                                <small className="text-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-2">
                                    <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                        <div className="card-body border-top">
                                            <div className="d-flex align-items-center">
                                                <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                <button type="button" className="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                            </div>
                                            <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                            <div className="d-flex justify-content-between align-items-center m-2">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                                </div>
                                                <small className="text-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Courses;
