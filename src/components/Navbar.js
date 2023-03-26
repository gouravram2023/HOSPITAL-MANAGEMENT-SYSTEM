//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Navbar() {
    let usertype = sessionStorage.getItem("utype")
    //let usertype = localStorage.getItem('utype')
    let username = sessionStorage.getItem("username")

    if (usertype === 'Admin') {
        return (
            <>
            <div className="container">
             <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
            <Link to ="/Adminafterlogin">ADMIN HOME  </Link>  
            <Link to ="/AdminAddDoctor"> ADD DOCTOR  </Link>
            <Link to ="/AdminDeleteDoctor"> DELETE DOCTOR  </Link>
            <Link to="/adminviewall">VIEW PATIENTS  </Link>
            <Link to="/adminviewallappointment">VIEW APPOINTMENTS  </Link>
            <Link to="/admindeleteuser">DELETE USER </Link>
            <Link to="/adminmanageuser">MANAGE USER </Link>
            <Link to ="/Adminlogout">LOGOUT</Link>
            </nav>
            <br/>
            </div>
            <hr className="horizontal-rule"/>
            </>
           
        )

    }
    else if (usertype==='USER'){
        return(
            <>
            <div className="container">
            <div className="userContainer">
            <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
            <Link to ="/Userafterlogin">USER HOME  </Link>
            <Link to ="/userappointmentbooking">APPOINTMENT BOOKING  </Link>
            <Link to ="/userlogout">LOGOUT  </Link>
            </nav>
            </div>
            </div>
            <br/>
            <h3 style={{ color: 'green' }}>WELCOME {username}</h3>
            <hr  className="horizontal-rule"/>
            </>
       
        )
    }
    else{
        return (
            <>
            
            <div className="container">
            <nav class="navbar navbar-dark justify-content-between"  style={{ backgroundColor:"#DBE2EF"}}>
                <Link to ="/"> HOME </Link> 
                <Link to ="/aboutus"> ABOUT US  </Link>   
                <Link to ="/userlogin">PATIENT LOGIN   </Link>
                <Link to ="/userreg"> PATIENT REGISTRATION  </Link>
                <Link to ="/AdminviewallDoctors"> OUR DOCTORS </Link>
                <Link to ="/Adminsearchdoctor">SEARCH DOCTOR </Link>
                <Link to ="/contactus">CONTACT US  </Link>
                <Link to ="/billing">BILLING </Link>
                <Link to ="/adminlogin">ADMIN LOGIN </Link>
               
            </nav>
            </div>
            <br></br>
            </>
        )
        
        
    }
}




    


//STEP 3 -- EXPORT TO USE IT
export default Navbar