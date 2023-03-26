//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from "./Navbar";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Billing() {
    return (
        
        <div>
            
                         <Navbar />
                         
            <ul class="list-group">
            
  <li class="list-group-item"><b>Bed charge=1000</b></li>
  <li class="list-group-item"><b>ICU=1000</b></li>
  <li class="list-group-item"><b>Ambulance=per km 10 rupee</b></li>
  <li class="list-group-item"><b>oxygen=560(per cylinder)</b></li>
  <li class="list-group-item"><b>medicine equipment=To be calcualted in hospital</b></li>
  <li class="list-group-item"><b>AC CABIN=500 per day</b></li>
  <li class="list-group-item"><b>NON-AC CABIN=300 per day</b></li>
</ul>
<h1 style={{color: 'maroon'}}>ALL PAYMENTS WILL BE IN DONE IN OFFLINE MODE IN OUR HOSPITAL</h1>
        </div>
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Billing