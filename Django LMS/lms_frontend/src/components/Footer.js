import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="text-muted mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="float-start">
                            <p className="float-left">This is a sample footer ©</p>
                            <p className="float-left">New to Portal? <a href="#">getting started guide</a>.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="float-right">
                        <a href="#">Back to top</a>
                        </p>
                    </div> 
                </div> 
            </div>
        </footer>
    );
  }
  
  export default Footer;
  