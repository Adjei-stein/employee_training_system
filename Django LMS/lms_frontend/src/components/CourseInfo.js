import { useParams } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import '../css/CourseDetails.css'

function CourseInfo() {
    let {course_id} = useParams()
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="card border-0 rounded-0 text-white p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="card-header d-flex align-items-center justify-content-center">
                        <div className="col-md-12 d-flex align-items-center mx-2" style={{minWidth: "100%"}}>
                            <img className="img-thumbnail bg-transparent border-0" src="/Jira-Logo-White-3800x1200.jpg" alt="..." style={{minWidth: "100%"}}/>
                        </div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div className="col-md-12 mx-2">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><b>About</b></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="outline-tab" data-bs-toggle="tab" href="#outline" role="tab" aria-controls="outline" aria-selected="false"><b>Outline</b></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="questionsAndAnswers-tab" data-bs-toggle="tab" href="#questionsAndAnswers" role="tab" aria-controls="questionsAndAnswers" aria-selected="false"><b>Q&A</b></a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="card border-0 rounded-0 p-2 bg-white">
                                    
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <div className="card" style={{minWidth: "100%"}}>
                                            <div className="card-body" style={{textAlign: "start"}}>
                                                <h4><b>Description</b></h4>
                                                <p>Jira is a proprietary product developed by Atlassian that allows bug tracking, issue tracking and agile project management. 
                                                Jira is used by a large number of clients & users globally for project, time, requirements, task, bug, change, code, test, release, sprint management. 
                                                Jira allows you to break your work down into manageable chunks, assign it to the right person, and progress it through a customizable workflow until it's done</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="outline" role="tabpanel" aria-labelledby="outline-tab">
                                <div className="card border-0 rounded-0 p-2 bg-white">
                                        
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <div className="shadow p-4 bg-white" style={{minWidth: "100%"}}>
                                            <div className="mx-2">
                                                <a href="" className='text-white' style={{textDecoration: 'none'}}>
                                                    <div className="card rounded-0 text-white border-0 bg-dark">
                                                        <div className="card-body d-flex p-1">
                                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faPlay}/>
                                                            </div>
                                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <span><b>Getting Started</b></span>
                                                                </div>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <small>Video - </small>
                                                                    &nbsp;
                                                                    <small className="text-white">00:50 min</small>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                                <div class="form-check">
                                                                    <span class="badge bg-success">Completed</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="" className='text-white' style={{textDecoration: 'none'}}>
                                                    <div className="card rounded-0 text-white border-0 bg-secondary">
                                                        <div className="card-body d-flex p-1">
                                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faPlay}/>
                                                            </div>
                                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <span><b>The Agile Coach - Part 1</b></span>
                                                                </div>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <small>Slides - </small>
                                                                    &nbsp;
                                                                    <small className="text-white">4 pages</small>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                                <div class="form-check">
                                                                    <span class="badge bg-success">Completed</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="" className='text-white' style={{textDecoration: 'none'}}>
                                                    <div className="card rounded-0 text-white border-0 bg-dark">
                                                        <div className="card-body d-flex p-1">
                                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faPlay}/>
                                                            </div>
                                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <span><b>The Agile Coach - Part 2</b></span>
                                                                </div>
                                                                <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                    <small>Video</small>
                                                                    &nbsp;
                                                                    <small className="text-white">50:45 min</small>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                                <div class="form-check">
                                                                    <span class="badge bg-warning">Not Started</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="questionsAndAnswers" role="tabpanel" aria-labelledby="questionsAndAnswers-tab"><h2>Q&A</h2></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        /*<div className="main_container">
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
    </div>*/

    

    
    );
}

export default CourseInfo;
  