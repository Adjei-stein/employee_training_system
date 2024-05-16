import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommonTasks from '../js/CommonTasks'

function EnrolledCourses(){
    const commonTasks = new CommonTasks()
    const [allEnrolledCourses, setAllEnrolledCourses] = useState([]);

    useEffect(() => {
        const userID = localStorage.getItem('userID');

        const getAllCoursesAndInfo = async () => {
            try {
                const all_courses = await commonTasks.getData("courses")
                console.log("all_courses is ", all_courses)
                const enrolled = await getListOfEnrolled()
                console.log(enrolled)
                let all_enrolled_courses = []
                for (let i = 0; i < enrolled.length; i++) {
                    console.log("Here")
                    for (let j = 0; j < all_courses.length; j++) {
                        console.log(all_courses[j].id)
                        if (all_courses[j].id === enrolled[i]){
                            console.log("Win at ", enrolled[i])
                            all_enrolled_courses.push(all_courses[j])
                        }
                    }
                }
                console.log(all_enrolled_courses)
                setAllEnrolledCourses(all_enrolled_courses)
            }
            catch (error) {
                console.log(error)
            }
        }

        const getListOfEnrolled = async () => {
            try {
                const enrolled_courses = await commonTasks.getData("courses/enrolled/" + userID)
                console.log("enrolled_courses is ", enrolled_courses)
                let enrolled_arr = []
                for (let i = 0; i < enrolled_courses.length; i++){
                    enrolled_arr.push(enrolled_courses[i].course_id)
                }
                return enrolled_arr
            }
            catch (error) {
                console.log(error)
            }
        }
        
        
        getAllCoursesAndInfo()
    }, []);

    return (
        <div className="col-md-12" id="list-enrolled-courses" role="tabpanel" aria-labelledby="list-enrolled-courses">
            <div className="card bg-transparent border-0 first-card">
                <div className="row py-2 px-3">

                    {allEnrolledCourses ? (allEnrolledCourses.map((allEnrolledCourse, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card my-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title mb-0 me-auto text-white">{allEnrolledCourse.title}</h5>
                                    </div>
                                    <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-2">
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
                    ))) : (
                        <div className="d-none"></div>
                    )
                }





                
                </div>
            </div>
        </div>
    )
}

export default EnrolledCourses