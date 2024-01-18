import React from 'react'
import DashboardCarousel from './DashboardCarousel';
import DashboardBarGraph from './DashboardBarGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard() {
  return (
    <div className='container'>
        <div className="row mt-3">
            <div className="col-md-12 mb-2">
                <div className="card bg-transparent border-0 rounded-0" style={{height: "100%", maxWidth: "100%"}}>
                    <DashboardCarousel/>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="card border-0 rounded-0" style={{width: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                    <div className="card-body m-2">
                        <DashboardBarGraph/>
                    </div>
                </div>
            </div>
            {/*<div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="card border-0 rounded-0" style={{width: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                    <div className="col-md-12 d-flex">
                        <div className="col-md-6">
                            <div className="card bg-dark">
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
                                            <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-dark">
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
                                            <a href="/details/1"><button type="button" className="btn btn-sm btn-outline-light">Resume  <FontAwesomeIcon icon="arrow-right" /></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    </div>
  )
}

export default Dashboard;
