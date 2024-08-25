//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import {Navigate} from "react-router-dom";


//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Adminlogout() {
    sessionStorage.removeItem('utype')
    sessionStorage.clear()
    //LocalStorage.removeItem('utype)
    return (<Navigate to="/" />)
    
}

//STEP 3 -- EXPORT TO USE IT
export default Adminlogout