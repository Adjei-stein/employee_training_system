import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from  'react-router-dom'
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faPlus, faMinus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import  * as baseFunctions from '../js/base';
import CommonTasks from '../js/CommonTasks'

function Courses() {
    const commonTasks = new CommonTasks()
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [categories, setCategories] = useState(null)
    const [mandatoryCourses, setMandatoryCourses] = useState(null)

    useEffect(() => {

        const getAllCategories = async () => {
            try {
                const categories = await commonTasks.getData("courses/category")
                console.log("categories is ", categories)
                setCategories(categories)
                
            }
            catch (error) {
                console.log(error)
            }
        }

        const getAllCoursesAndInfo = async () => {
            try {
                const mandatory_courses = await commonTasks.getData("courses/mandatory")
                setMandatoryCourses(mandatory_courses)
                console.log("mandatory_courses is ", mandatory_courses)
            }
            catch (error) {
                console.log(error)
            }
        }
        
        getAllCategories()
        getAllCoursesAndInfo()
    }, []);

  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-12 mb-2">
                <div className="row">
                    <div className="card border-0 rounded-0 text-white p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="card-body p-0 d-flex justify-content-start border-dark">
                            <form className='d-flex align-items-center justify-content-start'>
                                <div className="form-group d-flex align-items-center justify-content-start">
                                    <label htmlFor="CourseTitle">Course Title</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control rounded-end-0" id="CourseTitle" placeholder="Course Title"/>
                                        <div className="input-group-prepend" style={{minHeight: "100%"}}>
                                            <button className="input-group-text rounded-start-0 bg-primary border-primary" id="basic-addon1" style={{minHeight: "100%"}}><FontAwesomeIcon icon={faSearch}/></button>
                                        </div>
                                    </div>
                                </div>
                                {categories ? (<div className="form-group d-flex align-items-center justify-content-start">
                                    <label htmlFor="CategoryFilter">Select Category</label>
                                    
                                        <select className="form-control" id="CategoryFilter">
                                            <option key={-1}>All</option>
                                            {categories.map((categories, index) =>(
                                                    <option key={index}>{categories.title}</option>
                                            ))}
                                        {/* <option>All</option>
                                        <option>Programming</option>
                                        <option>Cloud Computing</option>
                                        <option>Cybersecurity</option> */}
                                        </select>
                                </div>) : (
                                    <select className="form-control" id="CategoryFilter">
                                        <option>All</option>
                                    </select>
                                )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {mandatoryCourses ? (<div className="col-md-12 mb-2">
                            <div className="row">
                                <div className="card border-0 rounded-0 text-white pb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                    <div className="card-header p-0 d-flex justify-content-start border-dark" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={isCollapsed ? 'false' : 'true'} aria-controls="collapseOne" role="button" onClick={handleToggle}>
                                        <div className="col-md-11 d-flex align-items-center justify-content-start">
                                            <h2 className='m-2'>Mandatory Courses</h2>
                                        </div>
                                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                                            <h2 className='m-2'><FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus}/></h2>
                                        </div>
                                    </div>
                                    
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                        <div className="card-body p-0 d-flex align-items-center justify-content-start">
                                            


                                            {mandatoryCourses.map((mandatoryCourse, index) =>(
                                                <div className="col-md-4 p-2" key={index}>
                                                    <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                                        <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                                        <div className="card-body border-top">
                                                            <div className="d-flex justify-content-start align-items-center">
                                                                <h5 className="card-title mb-0 me-auto text-white">{mandatoryCourse.title}</h5>
                                                            </div>
                                                            <div className='d-flex justify-content-start align-items-center mb-3'>
                                                                <h5 className='m-0'><span className="badge bg-warning"><FontAwesomeIcon icon={faClock}/>{mandatoryCourse.mandatory_completion_date}</span></h5>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="btn-group">
                                                                    <a href="/course-info/1" style={{textDecoration: "none"}}><button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>) : (
                            <div className="d-none"></div>
                        )

            }

            
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
                        
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
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
