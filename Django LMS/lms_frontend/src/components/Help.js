import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CommonTasks from '../js/CommonTasks'

function Help() {
    const commonTasks = new CommonTasks()
    const [faqsArray, getFaqsArray] = useState(null)
    const [isCollapsedArray, setIsCollapsedArray] = useState([]);
    const handleToggle2 = (index) => {
        setIsCollapsedArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = !newArray[index];
            //console.log(newArray)
            return newArray;
        });
    };

    useEffect(() =>{
        const getAllFAQs = async () => {
            try {
                const faqs = await commonTasks.getData("faqs")
                getFaqsArray(faqs)
                setIsCollapsedArray(Array(faqs.length).fill(false));
                console.log("faqs is ", faqs)
            }
            catch (error) {
                console.log(error)
            }
        }
        getAllFAQs()
    }, [])

    return (
            <div className="container">
                <div className="row mt-4 pt-1 d-flex align-items-center justify-content-center">
                    <div className="fixed-height col-md-12 d-flex" style={{maxHeight: "70vh", minHeight: "70vh", overflowY: "hidden"}}>
                        <div className="col-md-4 d-flex justify-content-center" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                            <div className="card shadow-lg border-0 rounded-0" style={{minWidth: "100%",maxWidth: "100%", background: 'rgba(0, 0, 0, 0.8)'}}>
                                <div className="card-header py-3 border-top-0 border-left-0 border-right-0 border-secondary">
                                    <h1 className='m-0 text-body'>Support Form</h1>
                                </div>
                                <div className="card-body">
                                    <div className="col-sm-12 mb-2 text-white justify-content-center">
                                        <div className="col-md-12 d-flex align-items-center">
                                            <label htmlFor="exampleFormControlInput1">Title/Subject</label>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-2 text-white justify-content-center">
                                        <div className="col-md-12 d-flex align-items-center">
                                            <label htmlFor="exampleFormControlInput1">Description</label>
                                        </div>
                                        <div className="input-group">
                                        <textarea id="description" className='form-control bg-dark text-white border-secondary' name="description" rows="4" cols="50"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer pb-5">
                                    <button type="submit" className="btn btn-success">Send</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8' style={{background: 'rgba(0, 0, 0, 0.5)', overflowY: "hidden", overflowX: "hidden", minHeight: "100%",maxHeight: "100%" }}>
                            <div className="card shadow-lg border-0 rounded-0" style={{ background: 'rgba(0, 0, 0, 0.5)', minWidth: "100%", maxWidth: "100%", minHeight: "100%",maxHeight: "100%"}}>
                                <div className="card-header py-3 border-0 border-secondary">
                                    <h1 className='m-0 text-white'>Frequesntly Asked Questions</h1>
                                </div>
                                <div className="card-body" style={{overflowY: "auto", overflowX: "hidden", minHeight: "100%",maxHeight: "100%"}}>

                                    {faqsArray ? (faqsArray.map((faq, index) => (
                                        <div key={index} href="" className='text-white' style={{textDecoration: 'none'}}>
                                            <div className="card rounded-0 text-white border-0 border-bottom border-dark" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
                                                    <div className="card-header bg-transparent col-md-12 d-flex align-items-center" id="headingOne" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={isCollapsedArray[index] ? 'false' : 'true'} aria-controls="collapseOne" role="button" onClick={() => handleToggle2(index)}>
                                                    
                                                        <div className="col-md-11 d-flex align-items-center justify-content-start">
                                                            <b>{faq.question}</b>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <span className=''>
                                                            <FontAwesomeIcon icon={isCollapsedArray[index] ? faMinus : faPlus}/>
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne" style={{background: 'rgba(95, 102, 108, 0.3)'}}>
                                                        <div className="card-body p-2 d-flex align-items-center justify-content-start">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        ))):(
                                            <p>Nothing wai</p>
                                        )
                                    }

                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Help;