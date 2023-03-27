import React from 'react'
import './UserInfo.css'
import  data from './data.json'
const UserInfo = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-3">
                        <div class="row ">
                            <div class="col-lg-12 left-section">
                                <div class="top">
                                    <h1>EMS</h1>
                                    <div class="arrows">
                                        <div class="left-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                            </svg>
                                        </div>
                                        <div class="right-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="pr-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png" alt="" />
                                    </div>
                                    <div class="info">
                                        <h5> Name : Harkirat Singh</h5>
                                        <h5> Id : 65845 </h5>
                                        <h5> Phone no : 6239572909 </h5>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="bottom_info">
                                        <h5> Day : Monday </h5>
                                        <h5> Date : 13/02/2023</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9">
                        <div class="row ring">
                            <div class="circle">

                            </div>
                        </div>
                        <div class="row">
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page">Admin</li>
                                        <li class="breadcrumb-item active" aria-current="page">Employees</li>
                                        <li class="breadcrumb-item active" aria-current="page">Tech Inject</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="row outer-box">
                            <div class="col-lg-11">
                                <div class="row inner-box">
                                    <div class="col-lg-8 box">
                                        <h4 class="text-center mt-3 text-danger">Timeline</h4>
                                        <div className='row'>
                                            <div className='timeline col-lg-8 offset-lg-2 timelineBox'>
                                                {/* vertex */}
                                                <div className="vertex">
                                                    
                                                    <span className='date'> 9:15 AM </span>
                                                    <div className='dot dot-color-in'>  </div>
                                                    <div className='data'> Punch - In <div className='edit-btn'>Edit</div>  </div>
                                                    <div ></div>
                                                </div>
                                                {/* edge */}

                                                <div className="edge">
                                                    <div className="line"></div>
                                                </div>


                                                <div className="vertex">
                                                    
                                                    <span className='date'> 9:15 AM </span>
                                                    <div className='dot dot-color-out'>  </div>
                                                    <div className='data'> Punch - In <div className='edit-btn'>Edit</div>  </div>
                                                    <div ></div>
                                                </div>
                                                <div className="edge">
                                                    <div className="line2"></div>
                                                </div>
                                                <div className="vertex">
                                                    
                                                    <span className='date'> 9:15 AM </span>
                                                    <div className='dot dot-color-out'>  </div>
                                                    <div className='data'> Punch - In <div className='edit-btn'>Edit</div>  </div>
                                                    <div ></div>
                                                </div>
                                                <div className="edge">
                                                    <div className="line2"></div>
                                                </div>
                                                <div className="vertex">
                                                    
                                                    <span className='date'> 9:15 AM </span>
                                                    <div className='dot dot-color-out'>  </div>
                                                    <div className='data'> Punch - In <div className='edit-btn'>Edit</div>  </div>
                                                    <div ></div>
                                                </div>
                                                <div className="edge">
                                                    <div className="line3"></div>
                                                </div>
                                                <div className="vertex">
                                                    
                                                    <span className='date'> 9:15 AM </span>
                                                    <div className='dot dot-color-in'>  </div>
                                                    <div className='data'> Punch - In <div className='edit-btn'>Edit</div>  </div>
                                                    <div ></div>
                                                </div>
                                                <div className="edge">
                                                    <div className="line4"></div>
                                                </div>
                                                
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-3 box2">
                                        <div class="day-box">
                                            <h4 class="text-center mt-3 text-danger">Day Details</h4>
                                            <h5>Total Present Time: 8:30</h5>
                                            <h5>Total Absent Time: 8:30</h5>
                                            <h5>Total Exemption : 8:30</h5>
                                            <h5>Total Deduction: 8:30</h5>
                                        </div>

                                    </div>
                                    <div class="status">
                                        <h5>Status : Inconclusive</h5>
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

export default UserInfo

