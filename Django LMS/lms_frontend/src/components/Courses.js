import React, { useState, useEffect } from 'react'
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Link } from  'react-router-dom'
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faMinus, faSearch, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'
//import { Col, Container, Row } from 'react-bootstrap';
//import axios from 'axios';
//import  * as baseFunctions from '../js/base';
import CommonTasks from '../js/CommonTasks'
import '../css/Courses.css'

function Courses() {
    const commonTasks = new CommonTasks()
    const [allSortedCourses, setAllSortedCourses] = useState([]);
    const [allSortedCourses2, setAllSortedCourses2] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isCollapsedArray, setIsCollapsedArray] = useState([]);
    const [filteredOption, getFilteredOption] = useState(allSortedCourses);
    const [search, getSearch] = useState("")

    let sortedOutCourses = allSortedCourses2

    const goToSelectedCourse = (course_id) => {
        localStorage.setItem('course_selected', course_id);
        window.location.href = '/course-details/' + course_id;
    }

    const handleCategorySelect = (selected_ctegory_id) => {
        console.log(selected_ctegory_id)
        console.log("Here wai")
        if (selected_ctegory_id === "-1"){
            getFilteredOption(allSortedCourses);
        }
        else {
            for (let i = 0; i < allSortedCourses.length; i++) {
                console.log(allSortedCourses[i].course_category_id)
                if (String(allSortedCourses[i].course_category_id) === String(selected_ctegory_id)) {
                    console.log(allSortedCourses[i])
                    let newSortedCourses = [allSortedCourses[i]]
                    getFilteredOption(newSortedCourses);
                }
            }
        }
    }

    const capitalizeFirstLetters = (str) => {
        return str.toLowerCase().replace(/(^\w|\s\w)/g, match => match.toUpperCase());
    }

    const handleSearchInput = (input) => {
        let text = input.target.value
        let inputTaken = capitalizeFirstLetters(text)
        getSearch(text)
        let tempSearched = []
        let tempSortedCoursesHolder = JSON.parse(JSON.stringify(allSortedCourses))
        if (text.length < 1) {
            getFilteredOption(allSortedCourses)
            return
        }
        else {
            
            let i = 0
            while(i < tempSortedCoursesHolder.length) {
                let lens = inputTaken.length
                if (tempSortedCoursesHolder[i].courses_row.length == 1){
                    console.log(tempSortedCoursesHolder[i].courses_row)
                    if (String(inputTaken) != String(tempSortedCoursesHolder[i].courses_row[0].course_title.substring(0, lens))){
                        tempSortedCoursesHolder[i].courses_row = []
                    }
                }
                else {
                    for (let j = 0; j < tempSortedCoursesHolder[i].courses_row.length; j++) {
                        tempSortedCoursesHolder[i].courses_row = tempSortedCoursesHolder[i].courses_row.filter(course => String(inputTaken) == String(course.course_title.substring(0, lens)));
                    }
                }
                i++
            }

            let k = 0
            tempSearched = []
            while(k < tempSortedCoursesHolder.length) {
                if (tempSortedCoursesHolder[k].courses_row.length > 0){
                    tempSearched.push(tempSortedCoursesHolder[k])
                }
                k++
            }
        }
        getFilteredOption(tempSearched)
    }

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleToggle2 = (index) => {
        setIsCollapsedArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = !newArray[index];
            //console.log(newArray)
            return newArray;
        });
    };

    const bookmarkCourse = async (category_id, course_status, course, user) => {
        console.log("category_id: ", category_id, "course_status: ", course_status, "course: ", course, "user: ", user)
        try {
            let newFilteredOption = [...filteredOption]; // Creating a new array to avoid mutating the state directly
    
            if (course_status === false) {
                const api_response = await commonTasks.postBookmarkedCourse(course, user);
    
                if (String(api_response) === "201") {
                    for (let a = 0; a < newFilteredOption.length; a++) {
                        if (newFilteredOption[a].course_category_id === category_id) {
                            for (let b = 0; b < newFilteredOption[a].courses_row.length; b++) {
                                if (newFilteredOption[a].courses_row[b].course_id === course) {
                                    newFilteredOption[a].courses_row[b].bookmark_status = true;
                                }
                            }
                        }
                    }
                    getFilteredOption(newFilteredOption);
                }
            } else {
                // commonTasks.deleteBookmarkedCourse(course, user)
                const api_response = await commonTasks.deleteBookmarkedCourse(course, user);
                console.log("Here guy")
    
                if (String(api_response) === "204") {
                    console.log("Here now guy")
                    for (let a = 0; a < newFilteredOption.length; a++) {
                        if (newFilteredOption[a].course_category_id === category_id) {
                            for (let b = 0; b < newFilteredOption[a].courses_row.length; b++) {
                                if (newFilteredOption[a].courses_row[b].course_id === course) {
                                    console.log("Here oooo")
                                    newFilteredOption[a].courses_row[b].bookmark_status = false;
                                }
                            }
                        }
                    }
                    getFilteredOption(newFilteredOption);
                }
            }
    
            
            console.log("New filteredOption is ", filteredOption)
    
        } catch (error) {
            console.log(error);
        }
    };
    

    const [categories, setCategories] = useState(null)
    const [mandatoryCourses, setMandatoryCourses] = useState(null)

    useEffect(() => {
        /* const getAllCategories = async () => {
            try {
                const categories = await commonTasks.getData("courses/category")
                console.log("categories is ", categories)
                setCategories(categories)
                await getAllCourses()
            }
            catch (error) {
                console.log(error)
            }
        } */

        const getAllCourses = async () => {
            try {
                
                const all_categories = await commonTasks.getData("courses/category")
                setCategories(all_categories)
                const courses = await commonTasks.getData("courses")
                const bookmarks = await getListOfBookmarked()
                console.log("courses is ", courses)
                const allCourses = courses

                let coursesArray = []
                for (let j = 0; j < all_categories.length; j++) {
                    //console.log("Here 1")
                    //console.log(all_categories)
                    for (let i = 0; i < allCourses.length; i++){
                        //console.log("Here 2")
                        if (allCourses[i].category === all_categories[j].id){
                            let bookmark_status = false;
                            for (let k = 0; k < bookmarks.length; k++) {
                                if (bookmarks[k] === allCourses[i].id){
                                    bookmark_status = true;
                                    break
                                }
                                else {
                                    bookmark_status = false;
                                }
                            }
                            //console.log("Here 3")
                            if (coursesArray.length > 0) {
                                const existingCourseCategory = coursesArray.find(
                                    (coursesArray) => coursesArray.course_category_id === allCourses[i].category
                                );
                                
                                

                                if (existingCourseCategory){
                                    console.log("existingCourseCategory exists wai")
                                    const duplicateCoursesRow = existingCourseCategory.courses_row.find(
                                    (courses_row) =>
                                        courses_row.course_id === allCourses[i].id &&
                                        courses_row.course_title === allCourses[i].title
                                    );
                        
                                    if (duplicateCoursesRow) {
                                        console.log('Duplicate Courses Row');
                                    }
                                    else {
                                        existingCourseCategory.courses_row.push({
                                            course_id: allCourses[i].id,
                                            course_title: allCourses[i].title,
                                            course_description: allCourses[i].description.substring(0, 150) + "...",
                                            mandatory: allCourses[i].mandatory,
                                            mandatory_date: allCourses[i].mandatory_completion_date,
                                            bookmark_status: bookmark_status,
                                            course_image_url: allCourses[i].course_image_url
                                        })
                                    }
                                }
                                else {
                                    coursesArray.push({
                                        course_category_id: all_categories[j].id,
                                        course_category_title: all_categories[j].title,
                                        courses_row: [{
                                            course_id: allCourses[i].id,
                                            course_title: allCourses[i].title,
                                            course_description: allCourses[i].description.substring(0, 150) + "...",
                                            mandatory: allCourses[i].mandatory,
                                            mandatory_date: allCourses[i].mandatory_completion_date,
                                            bookmark_status: bookmark_status,
                                            course_image_url: allCourses[i].course_image_url
                                        }]
                                    })
                                }
                                //console.log(coursesArray)
                            }
                            else {
                                coursesArray.push({
                                    course_category_id: all_categories[j].id,
                                    course_category_title: all_categories[j].title,
                                    courses_row: [{
                                        course_id: allCourses[i].id,
                                        course_title: allCourses[i].title,
                                        course_description: allCourses[i].description.substring(0, 150) + "...",
                                        mandatory: allCourses[i].mandatory,
                                        mandatory_date: allCourses[i].mandatory_completion_date,
                                        bookmark_status: bookmark_status,
                                        course_image_url: allCourses[i].course_image_url
                                    }]
                                })
                                //console.log(coursesArray)
                            }
                            
                        }
                    }
                }
                console.log(coursesArray)
                setIsCollapsedArray(Array(coursesArray.length).fill(false));
                setAllSortedCourses(coursesArray)
                sortedOutCourses = coursesArray
                setAllSortedCourses2(coursesArray)
                getFilteredOption(coursesArray)
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

        const getListOfBookmarked = async () => {
            try {
                const bookmarked_courses = await commonTasks.getData("courses/bookmarks")
                console.log("bookmarked_courses is ", bookmarked_courses)
                let bookmarked_arr = []
                for (let i = 0; i < bookmarked_courses.length; i++){
                    bookmarked_arr.push(bookmarked_courses[i].course_id)
                }
                console.log(bookmarked_arr)
                return bookmarked_arr
            }
            catch (error) {
                console.log(error)
            }
        }
        
        
    

        localStorage.removeItem('course_selected');
        
        getAllCourses()
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
                                        <input type="text" className="form-control rounded-end-0" id="CourseTitle" placeholder="Course Title" onChange={(e) => handleSearchInput(e)} value={search}/>
                                        <div className="input-group-prepend" style={{minHeight: "100%"}}>
                                            <button className="input-group-text rounded-start-0 bg-primary border-primary" id="basic-addon1" style={{minHeight: "100%"}}><FontAwesomeIcon icon={faSearch}/></button>
                                        </div>
                                    </div>
                                </div>
                                {categories ? (<div className="form-group d-flex align-items-center justify-content-start">
                                    <label htmlFor="CategoryFilter">Select Category</label>
                                    
                                        <select className="form-control" id="CategoryFilter" onChange={(e) => handleCategorySelect(e.target.value)}>
                                            <option key={-1} value="-1">All</option>
                                            {categories.map((categories, index) =>(
                                                    <option key={index} value={categories.id}>{categories.title}</option>
                                            ))}
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
                                    <div className="card-header p-0 d-flex border-dark" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={isCollapsed ? 'false' : 'true'} aria-controls="collapseOne" role="button" onClick={handleToggle}>
                                        <div className="col-md-12 d-flex align-items-center justify-content-center" style={{minWidth: '100%'}}>
                                            <div className="col-md-11 d-flex align-items-center justify-content-start" style={{minWidth: "90%"}}>
                                                <h2 className='m-2 text-start'>Mandatory Courses</h2>
                                            </div>
                                            <div className="col-md-1 d-flex align-items-center justify-content-center" style={{minWidth: "10%"}}>
                                                <h2 className='m-2'><FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus}/></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                        <div className="card-body p-0">
                                            {mandatoryCourses.map((mandatoryCourse, index) =>(
                                                <div className="col-md-4 p-2" key={index}>
                                                    <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                                        <img className="card-img-top" src={`http://127.0.0.1:8000/api/download/${mandatoryCourse.course_image_url}`} alt="Card image cap"/>
                                                        <div className="card-body border-top">
                                                            <div className="d-flex justify-content-start align-items-center">
                                                                <h5 className="card-title mb-0 me-auto text-white">{mandatoryCourse.title}</h5>
                                                            </div>
                                                            <div className='d-flex justify-content-start align-items-center mb-3'>
                                                                <h5 className='m-0'><span className="badge bg-warning"><FontAwesomeIcon icon={faClock}/>{mandatoryCourse.mandatory_completion_date}</span></h5>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => goToSelectedCourse(mandatoryCourse.id)}>Go to course <FontAwesomeIcon icon="arrow-right" /></button>
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

            {filteredOption ? (filteredOption.map((allSortedCourse, index) =>(<div className="col-md-12 mb-2" key={index}>
                    <div className="row">
                        <div className="card border-0 rounded-0 text-white pb-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <div className="card-header p-0 border-dark" id="headingOne" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={isCollapsedArray[index] ? 'false' : 'true'} aria-controls="collapseOne" role="button" onClick={() => handleToggle2(index)}>
                                <div className="col-md-12 d-flex align-items-center justify-content-center" style={{minWidth: '100%'}}>
                                    <div className="col-md-11 d-flex align-items-center justify-content-start" style={{minWidth: "90%"}}>
                                        <h2 className='m-2 text-start'>{allSortedCourse.course_category_title}</h2>
                                    </div>
                                    <div className="col-md-1 d-flex align-items-center justify-content-center" style={{minWidth: "10%"}}>
                                        <h2 className='m-2'><FontAwesomeIcon icon={isCollapsedArray[index] ? faMinus : faPlus}/></h2>
                                    </div>
                                </div>
                            </div>
                            
                            <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne">
                                <div className="card-body p-0">
                                    {allSortedCourse.courses_row.map((course, index) =>(
                                        <div className="col-md-4 p-2 h-100" key={index}>
                                            <div className="card mt-4 border-0 h-100" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                                <img className="card-img-top" src={`http://127.0.0.1:8000/api/download/${course.course_image_url}`} alt="Card image cap"/>
                                                <div className="card-body border-top">
                                                    <div className="d-flex align-items-center" style={{height: "3rem"}}>
                                                        <h5 className="card-title mb-0 me-auto text-white">{course.course_title}</h5>
                                                        <button type="button" className="btn btn-secondary ms-auto" onClick={() => bookmarkCourse(allSortedCourse.course_category_id, course.bookmark_status, course.course_id, 3)}><FontAwesomeIcon icon={course.bookmark_status ? fasBookmark : faBookmark} className="" /></button> 
                                                    </div>
                                                    <div className="d-flex p-2 justify-content-start">
                                                        <p className="card-text text-start text-secondary">{course.course_description}</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center m-2">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => goToSelectedCourse(course.course_id)}>Go to course <FontAwesomeIcon icon="arrow-right" /></button>
                                                        </div>
                                                        <small className="text-secondary">9 mins</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))) : (
                    <div className="d-none"></div>
                )
            }

        </div>
    </div>
  );
}

export default Courses;
