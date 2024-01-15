import React, {useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EnrolledCourses(){
    return (
        <div className="col-md-12" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
            <div className="card bg-transparent border-0 first-card">
                <div className="row py-2 px-3">
                    <div className="col-md-6">
                        <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                </div>
                                <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center m-2">
                                    <div className="btn-group">
                                        <div className="me-auto text-white">75% complete</div>
                                    </div>
                                    <div className="btn-group ms-auto">
                                        <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                </div>
                                <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center m-2">
                                    <div className="btn-group">
                                        <div className="me-auto text-white">75% complete</div>
                                    </div>
                                    <div className="btn-group ms-auto">
                                        <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                </div>
                                <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center m-2">
                                    <div className="btn-group">
                                        <div className="me-auto text-white">75% complete</div>
                                    </div>
                                    <div className="btn-group ms-auto">
                                        <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                </div>
                                <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center m-2">
                                    <div className="btn-group">
                                        <div className="me-auto text-white">75% complete</div>
                                    </div>
                                    <div className="btn-group ms-auto">
                                        <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrolledCourses