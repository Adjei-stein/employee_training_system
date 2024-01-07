import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="text-muted mt-4 border-top py-4 bg-dark">
            <div className="container text-secondary">
                <div className="row">
                    <div className="col-md-8">
                        <div className="float-start">
                            <div className="d-flex">
                                <p className="float-left mb-0">This is a sample footer ©</p>
                            </div>
                            <div className="d-flex">
                                <p className="float-left mb-0">New to Portal? <a href="#">getting started guide</a>.</p>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Back to top  <FontAwesomeIcon icon="arrow-up" /></button>
                        </div>
                    </div> 
                </div> 
            </div>
        </footer>
    );
  }
  
  export default Footer;
  