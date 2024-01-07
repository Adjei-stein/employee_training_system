import { useParams } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <div className="card text-white bg-secondary mb-3" style={{ Width: '100%' }}>
                            <div className="card-header">
                                <h3 className="card-title">Jira</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text text-start fw-bold">Duration: 9 Mins</p>
                                <p className="card-text text-start fw-bold">Progress: 10%</p>
                                <div class="btn-group pull-left">
                                    <button type="button" class="btn btn-sm btn-outline-dark">Resume course <FontAwesomeIcon icon="arrow-right" /></button>
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
  