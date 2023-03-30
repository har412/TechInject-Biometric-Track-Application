
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Timeline from './Components/Timeline';
import User from './Components/User';
import {useSelector} from 'react-redux';

function App() {
  const userCount= useSelector(state=> state)
  const [allUsers,setallUsers ] = useState([])
  console.log(userCount,"I am user count")
  useEffect(() => {
    async function fetchData(){
      axios({
        url:'https://biometric.onrender.com/test/timeline',
        method:'get',
        'headers': {
          'content-type':'application/json',
        }
        }).then((res)=>{
          setallUsers(res.data)
        })
    }
    fetchData();
  },[])
  
  console.log(allUsers)

  return (
    <div className="App">
      <div class="container-fluid">
                <div class="row">
                  <User user={allUsers[userCount]} count={userCount} totalCount={allUsers.length} ></User>
                  <Timeline user={allUsers[userCount]} ></Timeline>
                </div>
            </div>
    </div>
  );
}

export default App;
