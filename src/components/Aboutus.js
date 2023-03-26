//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from "./Navbar";
import "./navbar.css";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Aboutus() {
    return (
        <div>
                         <Navbar />
                         <div className="box">
                         <h1 className="heading"> We believe in service excellence, being a good community partner, engaging patients, 
                         leading by example for a healthy lifestyle, and providing innovative healthcare solutions. Simple and to the point, 
                         our Mission Statement is "Providing exceptional healthcare with compassion." This is a true calling for all the doctors, 
                         nurses, and staff who make up our proud family.</h1>
        </div>
        </div>
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Aboutus
