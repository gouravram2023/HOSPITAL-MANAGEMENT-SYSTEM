//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState } from "react";
import Navbar from './Navbar'
import axios from 'axios';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function UserAppointmentBooking() {
  const [uname, setUserName] = useState("");
  const [dname, setDoctorName] = useState("");
  const [uappointment, setUserappointment] = useState("");
  const [msg, setMessage] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
      //CREATE JSON AND STORE ALL USER INPUT
      const Userobj = {
        username: uname,
        doctorname: dname,
      userappointment:uappointment
    }
    //COMMUNICATE WITH BACKEND USING REST API
    axios.post('http://localhost:5000/user/userappointment', Userobj)
    .then(res => {
        console.log(res.data)
        setMessage('REGISTRATION SUCCESSFUL')

        //TO CLEAR DATA
       setUserName('')
       setDoctorName('')
       setUserappointment('')
    });
}

    return (
        <div> 
            <Navbar />
            <h3 style={{ color: "blue",fontWeight:"bold" }}>PATIENT APPOINMENT BOOKING FORM</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
        
          <input type="text" value={uname}
                    onChange={(e) => setUserName(e.target.value)} placeholder="Enter patient Name"              
                    required />
                <br /><br />
                <input type="text" value={dname}
                    onChange={(e) => setDoctorName(e.target.value)} placeholder="Enter Doctor Name"              
                    required />
                <br /><br />
               
                <input type="date" value={uappointment}
                    onChange={(e) => setUserappointment(e.target.value)} placeholder="Enter Appointment date"              
                    required />
                <br /><br />
          
                <input type="submit"  className="btn btn-primary" value="REGISTER" />
          </form>
     
    </div>
     
    )
    
}

//STEP 3 -- EXPORT TO USE IT
export default UserAppointmentBooking