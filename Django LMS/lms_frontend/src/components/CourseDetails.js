import { useParams } from "react-router-dom";
import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faPlay, faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import '../css/Course.css'
import CommonTasks from '../js/CommonTasks'

function CourseDetails() {
    const commonTasks = new CommonTasks()
    const [CourseDetails, setCourseDetails] = useState();
    const [CourseMaterials, setCourseMaterials] = useState();
    const [courseChapters, showChapterContent] = useState(null)
    const [courseTitle, getCourseTitle] = useState('')
    const [chapterURL, getChapterURL] = useState('')
    const [mediaType, getMediaType] = useState(null)
    const [test, setTest] = useState();

    const goToCourse = (course_id) => {
        localStorage.setItem('course_selected', course_id);
        window.location.href = '/course/' + course_id;
    }

    const convertDuration = (duration) => {
        const [hours, minutes, seconds] = duration.split(':').map(Number);
    
        let result = '';
        if (hours > 0) {
            result += hours + ' hrs ';
        }
        if (minutes > 0 || hours > 0) {
            result += minutes + ' mins';
        }
    
        if (result === '') {
            result = seconds + ' secs';
        }
    
        return result;
    }

    const downloadFile = (url) => {
        console.log("Downloading file")
    
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
            const course_id = await localStorage.getItem('course_selected');
                const main_course_details = await commonTasks.getData("course/" + course_id)
                const courseMaterialUrl = await commonTasks.getData("course-material-url")
                
                console.log(courseMaterialUrl)
                setCourseDetails(main_course_details)
                setCourseMaterials(courseMaterialUrl)
        }

        getCourseDetails()

        const getCourseChapters = async () => {
            const course_id = await localStorage.getItem('course_selected');
            console.log(`course/chapter/${course_id}`)
            try {
                const course_chapters = await commonTasks.getData(`course/chapter/${course_id}`)
                const course = await commonTasks.getData(`course/${course_id}`)
                console.log("course_chapters is ", course_chapters)
                console.log("course chapter 1 is ", course_chapters[0].chapter_url)
                if (course_chapters && course_chapters[0].media_type && course_chapters[0].chapter_url) {
                    getChapterURL(course_chapters[0].chapter_url)
                    getMediaType(course_chapters[0].media_type)
                }
                
                console.log("course is ", course)
                console.log("course title is ", course.title)
                showChapterContent(course_chapters)
                getCourseTitle(course.title)
            }
            catch (error) {
                console.log(error)
            }
        }

        getCourseChapters()

    }, [])

    let {course_id} = useParams()
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="card border-0 rounded-0 text-white p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="card-header d-flex align-items-stretch justify-content-center">
                        <div className="col-md-8 d-flex align-items-stretch justify-content-center mx-2">
                            <img className="img-thumbnail bg-transparent border-0" src={CourseDetails ? `http://127.0.0.1:8000/static/${CourseDetails.course_image_url}` : ''} alt="..." style={{width: "100%"}}/>
                        </div>
                        <div className="col-md-4 d-flex flex-column justify-content-between mx-2 py-2">
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Course Title:</span> {CourseDetails ? CourseDetails.title : 'None'}</p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Course Instructor:</span> {CourseDetails ? CourseDetails.course_instructor : 'None'}</p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Prerequisites:</span> None</p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Total Quizes:</span> 9 </p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Duration:</span> 9 Days</p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Language:</span> English</p>
                            </div>
                            <div className="border-bottom border-light">
                                <p className="text-start mb-0"><span className="fw-bold">Course Enrollment:</span> {CourseDetails ? (CourseDetails.mandatory ? 'Mandatory' : 'Optional') : 'None'}</p>
                            </div>
                            <div className="d-flex stretch align-items-center justify-content-start mt-1">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-light" onClick={()=>goToCourse(CourseDetails.id)}>Start course <FontAwesomeIcon icon="arrow-right" /></button>
                                </div>
                            </div>
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
                                                <p>{CourseDetails ? CourseDetails.description : 'None'}</p>
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
                                                    {courseChapters ? (courseChapters.map((chapter, index) => (
                                                        <tr key={index} role="row" class="odd d-flex">
                                                            <a href="" className='text-white bg-transparent p-0' style={{textDecoration: 'none', width: '100%'}}>
                                                                <div className="card rounded-0 text-white border-0 bg-transparent">
                                                                    <div className="card-body d-flex p-1 bg-transparent">
                                                                        <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                                            <FontAwesomeIcon icon={faPlay}/>
                                                                        </div>
                                                                        <div className="col-sm-9" style={{paddingRight: "2%"}}>
                                                                            <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                                <span><b>{chapter.chapter_title}</b></span>
                                                                            </div>
                                                                            <div className="col-sm-12 d-flex align-items-start justify-content-start">
                                                                            <small>{chapter ? (chapter.media_type === 1 ? 'Video - ' : chapter.media_type === 2 ? 'PDF - ' : 'Image - ') : ''}</small>
                                                                                &nbsp;
                                                                                <small className="text-white">{convertDuration(chapter.estimated_completion_time)}</small>
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
                                                    ))) : (
                                                        <a className="flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1">
                                                            <div className="col-sm-12" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                                <div className="col-sm-12">
                                                                    <span><b>No chapters available</b></span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    )}
                                                        {/* <tr role="row" class="odd d-flex">
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
                                                        </tr> */}
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
                                                {CourseMaterials ? (
                                                    CourseMaterials.map((image_name, index) => (
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
    );
}

export default CourseDetails;
  