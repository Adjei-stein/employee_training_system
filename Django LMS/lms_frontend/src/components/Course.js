import React, {useState, useRef, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import {Document, Page} from 'react-pdf'
import '../css/Course.css'
import CommonTasks from '../js/CommonTasks'
//import pdfFile from '../pdf/boarding.pdf'
//import PdfViewer from './Pdf.js'

function Course() {
    const {course_id} = useParams()
    const commonTasks = new CommonTasks()
    const [activeTab, showContent] = useState(1)
    const [courseChapters, showChapterContent] = useState(null)
    const [courseTitle, getCourseTitle] = useState('')
    const [chapterURL, getChapterURL] = useState('')
    const [mediaType, getMediaType] = useState(null)

    const showTabContent = (activate, media_type, media) => {
        showContent(activate)
        getChapterURL(media)
        getMediaType(media_type)
    }

    const iframeRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true); // Initial loading state
    const [isError, setIsError] = useState(false);

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

    useEffect(() => {
        const iframe = iframeRef.current;
        const loadingIndicator = document.querySelector('.spinner-border');

        // Attach event listeners only if iframe is not null
        if (iframe) {
            iframe.onload = () => {
            setIsLoading(false);
            };
    
            iframe.onerror = () => {
            setIsError(true);
            };
        }

        

        const getCourseChapters = async () => {
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
    }, []);
    

    return (
        <div className="container">
            <div className="row">
                <div className="fixed-height col-md-12 d-flex" style={{height: "70vh", minHeight: "70vh", overflowY: "none"}}>
                    {/* <div className='col-md-7 d-flex align-items-center justify-content-center' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                        {activeTab === '1.1.1' && (
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                                
                            </div>
                        )}
                        {activeTab === '1.1.2' && (
                            <div className="d-flex align-items-center justify-content-center" style={{height: "100%", width: "100%"}}>
                            
                                <iframe src="https://drive.google.com/file/d/11WUByg11CErr_C1bexWZDz2WbJPC9UMG/preview" width="600" height="400"></iframe>
                                
                            </div>
                        )}
                        {activeTab === '1.1.3' && (
                            <h2>1.1.3</h2>
                        )}
                        {activeTab === '1.1.4' && (
                            <h2>1.1.4</h2>
                        )}
                        {activeTab === '1.1.5' && (
                            <h2>1.1.5</h2>
                        )}
                        
                    </div> */}

                    <div className='col-md-7 d-flex align-items-center justify-content-center' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                        <div className="ratio ratio-16x9">

                            {mediaType && chapterURL ? (mediaType === 1 ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${chapterURL}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : mediaType === 2 ? <iframe src={chapterURL} width="600" height="400"></iframe> : <img src={chapterURL}  alt="..." width="600" height="400"/>) : ('')}
                            
                        </div>
                        
                    </div>
                    <div className="col-md-5" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                        <div className="col-md-12 mb-1" style={{minHeight: "10%", width: "100%", backgroundColor: "black"}}>
                            <h3 className='text-white'>{courseTitle ? courseTitle : ''}</h3>
                        </div>
                        <div className="col-md-12" style={{overflowY: "auto", overflowX: "hidden", maxHeight: "90%"}}>
                            <div className="card bg-transparent border-0 first-card">
                                <nav className="nav nav-pills flex-column flex-sm-column m-3" style={{maxHeight: "100%" }}>
                                    <div>
                                    {courseChapters ? (courseChapters.map((chapter, index) => (
                                        <a key={index} className={`flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1 ${activeTab === chapter.chapter_number ? 'active' : 'bg-secondary'}`} onClick={() => showTabContent(chapter.chapter_number, chapter.media_type, chapter.chapter_url)}>
                                            <div className="col-sm-1 d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={faPlay}/>
                                            </div>
                                            <div className="col-sm-9" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>{chapter.chapter_title}</b></span>
                                                </div>
                                                <div className="col-sm-12">
                                                    <small>{chapter ? (chapter.media_type === 1 ? 'Video' : chapter.media_type === 2 ? 'PDF' : 'Image') : ''}</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center justify-content-center">
                                                <small className="text-white">{convertDuration(chapter.estimated_completion_time)}</small>
                                            </div>
                                        </a>
                                    ))) : (
                                        <a className="flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center my-1">
                                            <div className="col-sm-12" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                                                <div className="col-sm-12">
                                                    <span><b>No chapters available</b></span>
                                                </div>
                                            </div>
                                        </a>
                                    )}
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

export default Course