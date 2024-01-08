import { useParams } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function CourseDetails() {
    let {course_id} = useParams()
    return (
        <div className="main_container">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <img className="img-thumbnail" src="/jira-icon-512x512.png" alt="..."/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-start">Jira</h3>
                        <p className="text-start">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                        <p className="text-start"><span className="fw-bold">Duration:</span> 9 Min</p>
                        <p className="text-start"><span className="fw-bold">Last updated:</span> 23rd September, 2023</p>
                        <p className="text-start"><span className="fw-bold">Chapters:</span> 11</p>
                        <p className="text-start"><span className="fw-bold">Progress:</span> Not Started</p>
                        <div className="d-flex stretch align-items-center justify-content-start">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Start course <FontAwesomeIcon icon="arrow-right" /></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header bg-dark text-secondary">
                        <h2>Chapters</h2>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center">
                            <div className="col-10">
                                <p className="text-start m-0">Dapibus ac facilisis in</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-secondary d-flex align-items-center">
                            <div className="col-10">
                                <p className="text-start m-0">This is a secondary list group item</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="file-lines" />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="pen-to-square" />
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <div className="col-10">
                                <p className="text-start m-0">Dapibus ac facilisis in</p>
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon={faYoutube} />
                                <FontAwesomeIcon style={{padding: "0% 1% 0% 1%"}} icon="file-lines" />
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-secondary d-flex align-items-center">
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
  