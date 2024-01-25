import React, {useState, useEffect} from 'react'
import DashboardCarousel from './DashboardCarousel';
import DashboardBarGraph from './DashboardBarGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import  * as baseFunctions from '../js/base';

//const baseURL = "http://127.0.0.1:8000"
function Home() {
    const [employee, getEmployee] = useState(null)

    useEffect(() => {
        baseFunctions.getData("courses")
    }, []);
  return (
    <div className='container'>
        <div className="row mt-3">
            <div className="col-md-12 mb-2">
                <div className="row">
                    <div className="card bg-transparent border-0 rounded-0" style={{height: "100%", maxWidth: "100%", padding: "0% 0% 0% 0%"}}>
                        <DashboardCarousel/>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-2 checkie">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center" style={{padding: "2% 1% 2% 0%"}}>
                        <div className="card border-0 rounded-0" style={{width: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                            <div className="card-body m-2">
                                <DashboardBarGraph/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{padding: "2% 0% 1% 1%"}}s>
                        <div className="col-md-12" style={{height: "49%"}}>
                            <div className="card border-0 rounded-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                    </div>
                                    <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div className="btn-group">
                                            <div className="me-auto text-white">75% complete</div>
                                        </div>
                                        <div className="btn-group ms-auto">
                                            <a href="/course-details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" style={{height: "2%"}}>
                        </div>
                        <div className="col-md-12" style={{height: "49%"}}>
                            <div className="card border-0 rounded-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                    </div>
                                    <div className="progress mt-2 mb-2" style={{height: "0.5em"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center m-2">
                                        <div className="btn-group">
                                            <div className="me-auto text-white">75% complete</div>
                                        </div>
                                        <div className="btn-group ms-auto">
                                            <a href="/course-details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-2 p-0 d-flex align-items-center justify-content-center">
                <div className="row" style={{minWidth: "100%", maxWidth: "100%"}}>
                    <div className="card border-0 rounded-0 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="card-header p-0 d-flex justify-content-start border-dark">
                            <h2 className='m-2'>Mandatory Courses</h2>
                        </div>
                        <div className="card-body p-0 d-flex align-items-center justify-content-center">
                            <div className="row d-flex" style={{flexWrap: "nowrap", overflowX: "auto", minWidth: "100%", maxWidth: "100%"}}>
                                
                                    <div className="col-md-4 p-2">
                                        <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                            <div className="card-body border-top">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center mb-3'>
                                                    <h5 className='m-0'><span className="badge bg-warning"><FontAwesomeIcon icon={faClock}/> 06-09-2023</span></h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href="/course-info/1" style={{textDecoration: "none"}}><button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                            <div className="card-body border-top">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center mb-3'>
                                                    <h5 className='m-0'><span className="badge bg-danger"><FontAwesomeIcon icon={faTriangleExclamation}/> 06-03-2023 - Overdue</span></h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href="/course-info/1" style={{textDecoration: "none"}}><button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                            <div className="card-body border-top">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center mb-3'>
                                                    <h5 className='m-0'><span className="badge bg-warning"><FontAwesomeIcon icon={faClock}/> 06-09-2023</span></h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href="/course-info/1" style={{textDecoration: "none"}}><button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <div className="card mt-4 border-0" style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
                                            <img className="card-img-top" src="vs-code-logo.png" alt="Card image cap"/>
                                            <div className="card-body border-top">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <h5 className="card-title mb-0 me-auto text-white">Visual Studio Code</h5>
                                                </div>
                                                <div className='d-flex justify-content-start align-items-center mb-3'>
                                                    <h5 className='m-0'><span className="badge bg-warning"><FontAwesomeIcon icon={faClock}/> 06-09-2023</span></h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href="/course-info/1" style={{textDecoration: "none"}}><button type="button" className="btn btn-sm btn-outline-secondary">Go to course <FontAwesomeIcon icon="arrow-right" /></button></a>
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
    </div>
  )
}

export default Home;
