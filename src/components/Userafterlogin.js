//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Userafterlogin() {
    return (
        <div>
            <Navbar />
            <h1> THIS IS USER AFTER LOGIN COMPONENT</h1>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Userafterlogin