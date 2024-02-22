import { useParams } from "react-router-dom";
import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faPlay, faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import '../css/CourseDetails.css'
import CommonTasks from '../js/CommonTasks'

function CourseInfo() {
    const commonTasks = new CommonTasks()
    const [CourseDetails, setCourseDetails] = useState();

    const downloadFile = (url) => {
        // Disable the <a> tag
        //const aTag = document.getElementById("dfile" + id);
        /* if (aTag) {
            aTag.disabled = true;
        } else {
            console.error("Error: Unable to find <a> element.");
            return;
        } */
        console.log("Hiiiii")
    
        axios.get(url, { responseType: 'blob' })
            .then(response => {
                // Handle the blob response
                const blob = response.data;
                const blobURL = window.URL.createObjectURL(blob);
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                if (aTag) {
                    aTag.href = blobURL;
                    aTag.setAttribute("download", fileName);
                    document.body.appendChild(aTag);
                    aTag.click();
                    aTag.remove();
                } else {
                    console.error("Error: Unable to create <a> element.");
                }
            })
            .catch(error => {
                console.error("Error downloading file:", error);
            });


    };
    
    
    
    

    useEffect (() => {
        const userID = localStorage.getItem('userID');
        const getCourseDetails = async () => {
            try {
                const courseMaterialUrl = await commonTasks.getData("course-material-url")
                
                /* console.log("employee is ", users)
                console.log("employee is ", employee)
                Object.assign(employee, users) */
                setCourseDetails(courseMaterialUrl)
                console.log(courseMaterialUrl)
            }
            catch (error) {
                console.log(error)
            }
        }

        getCourseDetails()

    }, [])

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
                            <a class="nav-link" id="materials-tab" data-bs-toggle="tab" href="#materials" role="tab" aria-controls="materials" aria-selected="false"><b>Materials</b></a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="card border-0 rounded-0 p-0 bg-transparent" style={{minWidth: "100%"}}>
                                    
                                    <div className="card-body bg-transparent d-flex align-items-center justify-content-center p-0" style={{minWidth: "100%"}}>
                                        <div className="card bg-transparent border-0 rounded-0" style={{minWidth: "100%"}}>
                                            <div className="card-body bg-transparent text-white" style={{textAlign: "start"}}>
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
                                <div className="card border-0 rounded-0 p-2 bg-transparent">
                                        
                                    <div className="card-body d-flex align-items-center justify-content-center bg-transparent">

                                            <div className="mx-2" style={{minWidth: "100%"}}>
                                                <table id="basic-datatables" class="m-0 display table table-striped table-hover dataTable" role="grid" aria-describedby="basic-datatables_info">
                                                    <tbody>
                                                        <tr role="row" class="odd d-flex">
                                                            <a href="" className='text-white bg-transparent p-0' style={{textDecoration: 'none', width: '100%'}}>
                                                                <div className="card rounded-0 text-white border-0 bg-transparent">
                                                                    <div className="card-body d-flex p-1 bg-transparent">
                                                                        <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                            <FontAwesomeIcon icon={faPlay}/>
                                                                        </div>
                                                                        <div className="col-sm-9" style={{paddingRight: "2%"}}>
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
                                                        </tr>
                                                        <tr role="row" class="even d-flex">
                                                            <a href="" className='text-white bg-transparent p-0' style={{textDecoration: 'none', width: '100%'}}>
                                                                <div className="card rounded-0 text-white border-0 bg-transparent">
                                                                    <div className="card-body d-flex p-1 bg-transparent">
                                                                        <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                            <FontAwesomeIcon icon={faPlay}/>
                                                                        </div>
                                                                        <div className="col-sm-9" style={{paddingRight: "2%"}}>
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
                                                        </tr>
                                                        <tr role="row" class="odd d-flex">
                                                            <a href="" className='text-white bg-transparent p-0' style={{textDecoration: 'none', width: '100%'}}>
                                                                <div className="card rounded-0 text-white border-0  bg-transparent">
                                                                    <div className="card-body d-flex p-1 bg-transparent">
                                                                        <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                            <FontAwesomeIcon icon={faPlay}/>
                                                                        </div>
                                                                        <div className="col-sm-9" style={{paddingRight: "2%"}}>
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
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="materials" role="tabpanel" aria-labelledby="materials-tab">
                                <div className="card border-0 rounded-0 p-0 bg-transparent" style={{minWidth: "100%"}}>
                                    <div className="card-body bg-transparent d-flex align-items-center justify-content-center p-0" style={{minWidth: "100%"}}>
                                        <div className="card bg-transparent border-0 rounded-0" style={{minWidth: "100%"}}>
                                            <div className="card-body bg-transparent text-white" style={{textAlign: "start"}}>
                                                {/* <p className="m-0 mt-1 d-flex align-items-center justify-content-start"><b>1. </b><a  className="px-2 d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faDownload}/> <p className="m-0 px-1">file.xlsx</p></a></p>
                                                <p className="m-0 mt-1 d-flex align-items-center justify-content-start"><b>2. </b><a  className="px-2 d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faDownload}/> <p className="m-0 px-1">Test file.docx</p></a></p>
                                                <p className="m-0 d-flex align-items-center justify-content-start"><b>3. </b><a  className="px-2 d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faDownload}/> <p className="m-0 px-1">file.zip</p></a></p> */}
                                                {CourseDetails ? (
                                                    CourseDetails.map((image_name, index) => (
                                                        <div className="m-0 d-flex align-items-center justify-content-start download-file-div" key={index}>
                                                            <b>{index + 1}. </b>{/* <span>{image_name.material_url}</span><button onClick={() => downloadFile(`http://127.0.0.1:8000/api/download/${image_name.material_url}`)} className="btn btn-primary"><FontAwesomeIcon icon={faDownload}/> Download</button> */}
                                                            <a onClick={() => downloadFile(`http://127.0.0.1:8000/api/download/${image_name.material_url}`)} id={`dfile${index}`} className="px-2 d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faDownload}/> <p className="m-0 px-1">{image_name.material_url}</p>
                                                            </a>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="div">Hi</div>
                                                )}
                                                
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
  