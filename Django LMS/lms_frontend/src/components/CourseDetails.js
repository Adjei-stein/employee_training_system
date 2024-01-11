import { useParams } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function CourseDetails() {
    let {course_id} = useParams()
    return (
        <div className="main_container">
            <div className="container mt-4">
                
                    <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="row">
                            <div className="col-6 d-flex align-items-center mx-2" style={{maxWidth: "45%"}}>
                                <img className="img-thumbnail bg-transparent border-0" src="/Jira-Logo-Dark.jpg" alt="..."/>
                            </div>
                            <div className="col-6" style={{opacity: "0.7"}}>
                                <h3 className="text-start">Jira</h3>
                                <p className="text-start mb-1">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                                <p className="text-start mb-0"><span className="fw-bold">Duration:</span> 9 Min</p>
                                <p className="text-start mb-0"><span className="fw-bold">Last updated:</span> 23rd September, 2023</p>
                                <p className="text-start mb-0"><span className="fw-bold">Chapters:</span> 11</p>
                                <p className="text-start mb-0"><span className="fw-bold">Progress:</span> Not Started</p>
                                <div className="d-flex stretch align-items-center justify-content-start mt-1">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-light">Start course <FontAwesomeIcon icon="arrow-right" /></button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                        
                
                <div className="card mt-4 border-0" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="card-header text-white" style={{background: 'rgba(0, 0, 0, 0.5)'}}>
                        <h3 className="text-start fw-bold">Chapters</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center text-white border-0" style={{ background: 'rgba(108, 117, 125, 0.5)' }}>
                            <div className="col-10">
                                <p className="text-start m-0">Dapibus ac facilisis in</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                            </div>
                        </li>
                        <li class="list-group-item text-white border-0 d-flex align-items-center" style={{ background: 'rgba(108, 117, 125, 0.7)' }}>
                            <div className="col-10">
                                <p className="text-start m-0">This is a secondary list group item</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="file-lines" />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="pen-to-square" />
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center text-white border-0" style={{ background: 'rgba(108, 117, 125, 0.5)' }}>
                            <div className="col-10">
                                <p className="text-start m-0">Dapibus ac facilisis in</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="file-lines" />
                            </div>
                        </li>
                        <li class="list-group-item text-white border-0 d-flex align-items-center" style={{ background: 'rgba(108, 117, 125, 0.7)' }}>
                            <div className="col-10">
                                <p className="text-start m-0">This is a secondary list group item</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="pen-to-square" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
  