import React, { useEffect, useState } from 'react'
import './UserInfo.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

function User(props) {
    
    const [currentUser,setCurrentUser]=useState([]);
    const dispatch = useDispatch()
 
    if (!props.count ) {
        var count= props.count;
        console.log(count)
      }
       
      function getToday() {
        // Get the current date
        const today = new Date();
        // Get the day of the week in the full name format
        const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
        // Get the date in the format "02/10/2000"
        const dateStr = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        // Return both the day name and date as a tuple
        return [dayName, dateStr];
      }
  

    useEffect(() => {
        async function fetchData() {
            if (props.user && props.user.id) {
                axios({
                    url:`http://localhost:8000/test/user/${props.user.id}`,
                    method:'get',
                    headers: {
                        'content-type': 'application/json',
                    }
                }).then((res) => {
                    console.log(res.data[0])
                    setCurrentUser(res.data[0])
                })
            }
        }
    
        fetchData();
       
    }, [props.user])
    const [dayName, dateStr] = getToday();
   
  return (
    
        <div class="col-lg-3">
                        <div class="row ">
                            <div class="col-lg-12 left-section">
                                <div class="top">
                                    <h1>EMS</h1>
                                    <div class="arrows">
                                        <div class={`left-arrow ${props.count == 0 ?"disable":""}`} >
                                            <svg onClick={()=>{dispatch({type:"DEC_USER"})}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                                class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                            </svg>
                                        </div>
                                        <div class={`right-arrow ${props.count+1 == props.totalCount ?"disable":""}`}>
                                            <svg onClick={()=>{dispatch({type:"INC_USER"})}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
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
                                        <h5>Name : {currentUser.name} </h5>
                                        <h5>Id:  {currentUser.user_id} </h5>
                                        <h5>Phone :  {currentUser.phone} </h5>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="bottom_info">
                                        <h5> Day : {dayName} </h5>
                                        <h5> Date : {dateStr}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
   
  )
}

export default User
