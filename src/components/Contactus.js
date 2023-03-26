//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from "./Navbar";
//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Contactus() {
    return (
        <div >
              <Navbar/>
              {/* <ul class="list-group">
                
            
            <li class="list-group-item"><b>EMERGENCY AMBULANCE NUMBER-108</b></li>
            <li class="list-group-item"><b>EMERGENCY DOCTOR CONTACT NUMBER-12324567890</b></li>
            <li class="list-group-item"><b>EMERGENCY STAFF CONTACT NUMBER-1234567890</b></li>
            <li class="list-group-item"><b>EMERGENCY MEDICINE COUNTER NUMBER-123456789</b></li>
            </ul>
          */}
            <div class="grid text-center">
             <div class="g-col-4"><b>EMERGENCY AMBULANCE NUMBER-108</b></div>
             <div class="g-col-4"><b>EMERGENCY DOCTOR CONTACT NUMBER-12324567890</b></div>
            <div class="g-col-4"><b>EMERGENCY STAFF CONTACT NUMBER-1234567890</b></div>
             <div class="g-col-4"><b>EMERGENCY MEDICINE COUNTER NUMBER-123456789</b></div>
</div>
            
           
        
           
           
            <iframe width="600" height="350" src="https://www.youtube.com/embed/r5XTTeP039Q" title="Mayo Clinic Explains Hypertension" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <hr></hr>
             <iframe width="600" height="350" src="https://www.youtube.com/embed/YPd-XrDhzrQ" title="How to properly fit your mask" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <hr></hr>
             <iframe width="600" height="350" src="https://www.youtube.com/embed/Fk7Mu3zlLfc" title="Updated HIV clinical and service delivery recommendations - WHO Webinar of 17 March 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <hr></hr>
             <iframe width="600" height="350" src="https://www.youtube.com/embed/ihi55JzTCqU" title="WHO’s Science in 5 on COVID-19 : Vaccines explained - 12 February 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
         
        
    
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Contactus