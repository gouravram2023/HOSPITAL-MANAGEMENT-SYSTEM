//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import{ useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
//STEP 1 for binding data
import { useState } from 'react';


//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Adminlogin() {
    //STEP 2 create variable
    const [adminid, setAdminid] =useState("");
    const [adminpass, setAdminPass] =useState("");
    const [msg, setMsg] =useState();
    const navigate =useNavigate("")
    
    

    
    //STEP 5
    const executeSubmit = (evt) => {
        evt.preventDefault();

        console.log(`ADMIN USER ID: ${adminid}`);
        console.log(`PASS: ${adminpass}`);

        if(adminid === 'admin' && adminpass === 'pass')
        {
            console.log('VALID')
            sessionStorage.setItem("utype","Admin")
            localStorage.setItem("utype","Admin")
            navigate('/adminafterlogin')
        }
        else
        {
            setMsg('INVALID UID OR PASS')
            setAdminid('')
            setAdminPass('')
        }

    }

    return (
        <div>
                        <Navbar />
            <h3 style={{color: 'blue'}}>ADMIN LOGIN</h3>
            <h4 style={{color: 'red'}}> {msg}</h4>
            
            
            
            <form onSubmit={executeSubmit}>
                <input type='text' value={adminid} onChange={(e) => setAdminid (e.target.value)}placeholder="Enter USER ID"></input>
                <br/><br/>
                <input type='password' value={adminpass} onChange={(e) => setAdminPass (e.target.value)} placeholder="Enter PASSWORD"></input>
                <br/><br/>
                <input type='submit'  className="btn btn-dark"/>
            </form>
        </div>
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Adminlogin