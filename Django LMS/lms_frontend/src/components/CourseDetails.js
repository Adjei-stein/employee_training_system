import React, {useState, useRef } from 'react'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import '../css/CourseDetails.css'

function CourseDetails() {
    let {course_id} = useParams()
    return (
        <div className="container">
            <div className="row">
                <div className="fixed-height col-md-12 d-flex" style={{height: "70vh", minHeight: "70vh", overflowY: "none"}}>
                    <div className='col-md-7 d-flex align-items-center justify-content-center' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                        <div class="ratio ratio-16x9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>  
                    </div>
                    <div className="col-md-5" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                        <div className="col-md-12" style={{minHeight: "10%", width: "100%"}}>
                            <h2 className='text-white'>Chapter Title Field</h2>
                        </div>
                        <div className="col-md-12" style={{overflowY: "auto", overflowX: "hidden", maxHeight: "90%"}}>
                            <div className="card bg-transparent border-0 first-card">
                                <nav className="nav nav-pills flex-column flex-sm-column m-3" style={{maxHeight: "100%" }}>
                                    <div>
                                        <a class='flex-sm-fill text-sm-center nav-link active d-flex align-items-center justify-content-center my-1'>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>Getting Started</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>Video</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small class="text-white">00:50</small>
                                            </div>
                                        </a>
                                        <a class='flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1'>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>Introduction to IDE</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>Video</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small class="text-white">01:23</small>
                                            </div>
                                        </a>
                                        <a class='flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1'>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>Setup and Walkthrough on Features: Part 1</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>Video</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small class="text-white">03:45</small>
                                            </div>
                                        </a>
                                        <a class='flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1'>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>Setup and Walkthrough on Features: Part 2</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>Video</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small class="text-white">05:50</small>
                                            </div>
                                        </a>
                                        <a class='flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1'>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>Shortcut Keys</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>Video</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small class="text-white">50:00</small>
                                            </div>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
                    
                    

                </div>
            </div>
        </div>
    )
}

export default CourseDetails