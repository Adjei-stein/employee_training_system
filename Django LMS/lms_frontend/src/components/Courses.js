import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from  'react-router-dom'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

function Courses() {
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
                        <div className="card-header p-0 d-flex justify-content-start border-dark">
                            <h2 className='m-2'>Mandatory Courses</h2>
                        </div>
                        <div className="card-body p-0 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 p-2">
                                <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                    <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                    <div className="card-body border-top">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                        </div>
                                        <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                        <div class="d-flex justify-content-between align-items-center m-2">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                            </div>
                                            <small class="text-secondary">9 mins</small>
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
                                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                        </div>
                                        <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                        <div class="d-flex justify-content-between align-items-center m-2">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                            </div>
                                            <small class="text-secondary">9 mins</small>
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
                                            <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                        </div>
                                        <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                        <div class="d-flex justify-content-between align-items-center m-2">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                            </div>
                                            <small class="text-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-2 p-0">
                
                <div className="row  d-flex" style={{flexWrap: "nowrap", overflowX: "auto", width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                    
                        <div className="col-md-4 p-2">
                            <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                <div className="card-body border-top">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                        <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                    </div>
                                    <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                        </div>
                                        <small class="text-secondary">9 mins</small>
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
                                        <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                    </div>
                                    <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                        </div>
                                        <small class="text-secondary">9 mins</small>
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
                                        <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                    </div>
                                    <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                        </div>
                                        <small class="text-secondary">9 mins</small>
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
                                        <button type="button" class="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                    </div>
                                    <p className="card-text text-start text-secondary">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                        </div>
                                        <small class="text-secondary">9 mins</small>
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
