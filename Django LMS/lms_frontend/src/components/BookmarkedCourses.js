import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBookmark } from '@fortawesome/free-solid-svg-icons';
import CommonTasks from '../js/CommonTasks'

function BookmarkedCourses (){
    const commonTasks = new CommonTasks()
    const [allBookmarkedCourses, setAllBookmarkedCourses] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isCollapsedArray, setIsCollapsedArray] = useState([]);




    const [categories, setCategories] = useState(null)
    const [mandatoryCourses, setMandatoryCourses] = useState(null)
    useEffect(() => {

        const getAllCoursesAndInfo = async () => {
            try {
                const all_courses = await commonTasks.getData("courses")
                console.log("all_courses is ", all_courses)
                const bookmarks = await getListOfBookmarked()
                console.log(bookmarks)
                let all_bookmarked_courses = []
                for (let i = 0; i < bookmarks.length; i++) {
                    console.log("Here")
                    for (let j = 0; j < all_courses.length; j++) {
                        console.log(all_courses[j].id)
                        if (all_courses[j].id === bookmarks[i]){
                            console.log("Win at ", bookmarks[i])
                            all_bookmarked_courses.push(all_courses[j])
                        }
                    }
                }
                console.log(all_bookmarked_courses)
                setAllBookmarkedCourses(all_bookmarked_courses)
            }
            catch (error) {
                console.log(error)
            }
        }

        const getListOfBookmarked = async () => {
            try {
                const bookmarked_courses = await commonTasks.getData("courses/bookmarks")
                console.log("bookmarked_courses is ", bookmarked_courses)
                let bookmarked_arr = []
                for (let i = 0; i < bookmarked_courses.length; i++){
                    bookmarked_arr.push(bookmarked_courses[i].course_id)
                }
                return bookmarked_arr
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
                                {allBookmarkedCourses ? (allBookmarkedCourses.map((BookmarkedCourse, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                            <div className="card-body border-top">
                                                <div className="d-flex align-items-center">
                                                    <h5 className="card-title mb-0 me-auto text-white">{BookmarkedCourse.title}</h5>
                                                    <button type="button" className="btn btn-secondary ms-auto"><FontAwesomeIcon icon={faBookmark} className="" /></button> 
                                                </div>
                                                <p className="card-text text-start text-secondary">{BookmarkedCourse.description}</p>
                                                <div className="d-flex justify-content-between align-items-center m-2">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                                    </div>
                                                    <small className="text-secondary">9 mins</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))):(
                                    <div className="d-none"></div>
                                )}
                                    
                                </div>
                            </div>
                        </div>
    )
}

export default BookmarkedCourses