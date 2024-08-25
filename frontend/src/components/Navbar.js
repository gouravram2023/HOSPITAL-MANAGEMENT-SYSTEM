//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
//import { Link } from "react-router-dom";
import "./navbar.css";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Navbar() {
    let usertype = sessionStorage.getItem("utype")
    //let usertype = localStorage.getItem('utype')
    let username = sessionStorage.getItem("username")

    if (usertype === 'Admin') {
        return (
            <>
             {/* <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
            <Link to ="/Adminafterlogin">ADMIN HOME  </Link>  
            <Link to ="/AdminAddDoctor"> ADD DOCTOR  </Link>
            <Link to ="/AdminDeleteDoctor"> DELETE DOCTOR  </Link>
            <Link to="/adminviewall">VIEW PATIENTS  </Link>
            <Link to="/adminviewallappointment">VIEW APPOINTMENTS  </Link>
            <Link to="/admindeleteuser">DELETE USER </Link>
            <Link to="/adminmanageuser">MANAGE USER </Link>
            <Link to ="/Adminlogout">LOGOUT</Link>
            </nav> */}
            <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Adminafterlogin">ADMIN HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/AdminAddDoctor">ADD DOCTOR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/AdminDeleteDoctor">DELETE DOCTOR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/adminviewall">VIEW PATIENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/adminviewallappointment">VIEW APPOINTMENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/admindeleteuser">DELETE USER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/adminmanageuser">MANAGE USER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Adminlogout">LOGOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
            <br/>
            <hr className="horizontal-rule"/>
            </>
        )

    }
    else if (usertype==='USER'){
        return(
            <>
          
            {/* <div className="userContainer">
            <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
            <Link to ="/Userafterlogin">USER HOME  </Link>
            <Link to ="/userappointmentbooking">APPOINTMENT BOOKING  </Link>
            <Link to ="/userlogout">LOGOUT  </Link>
            </nav>
            </div> */}
          <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Userafterlogin">USER HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="userappointmentbooking">APPOINTMENT BOOKING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="userlogout">LOGOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    
            <br/>
            <h3 style={{ color: 'green' }}>WELCOME {username}</h3>
            <hr  className="horizontal-rule"/>
            </>
       
        )
    }
    else{
        return (
            <>
            
            {/* <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
                <Link to ="/"> HOME </Link> 
                <Link to ="/aboutus"> ABOUT US  </Link>   
                <Link to ="/userlogin">PATIENT LOGIN   </Link>
                <Link to ="/userreg"> PATIENT REGISTRATION  </Link>
                <Link to ="/AdminviewallDoctors"> OUR DOCTORS </Link>
                <Link to ="/Adminsearchdoctor">SEARCH DOCTOR </Link>
                <Link to ="/contactus">CONTACT US  </Link>
                <Link to ="/billing">BILLING </Link>
                <Link to ="/adminlogin">ADMIN LOGIN </Link>
            </nav> */}

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/userlogin">USER LOGIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/userreg">USER REG</a>
        </li>
            <li class="nav-item">
          <a class="nav-link active" href="/AdminviewallDoctors">OUR DOCTORS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/contactus">CONTACT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/billing">BILLING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/adminlogin">ADMIN LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </>
        )
        
        
    }
}




    


//STEP 3 -- EXPORT TO USE IT
export default Navbar