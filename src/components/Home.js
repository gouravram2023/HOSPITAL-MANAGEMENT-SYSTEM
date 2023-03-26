//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Home() {
    return (
        <div> 
            <Navbar />
            <div  id="imageslider" class="carousel slide carousel-dark slide" data-bs-ride="carousel" data-bs-pause="hover" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#imageslider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#imageslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#imageslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner" data-bs-interval="1000">
    <div class="carousel-item active" >
    <img title="Affordable World Class Health Care For All" alt="Affordable World Class Health Care For All" width="680" src="https://img.etimg.com/thumb/msid-95137107,width-680,height-490,imgsize-348725,resizemode-4/opd-expenses-not-covered-under-insurance.jpg" fetchpriority="high"></img>
      <div class="carousel-caption d-none d-md-block">
        <h4 style={{color: 'black'}}>Affordable World Class Health Care For All</h4>
        
      </div>
    </div>
    <div class="carousel-item">
    <img title="We care for your healthy well being" alt="We care for your healthy well being" width="680" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"fetchpriority="high"></img>

      <div class="carousel-caption d-none d-md-block">
        <h3 style={{color: 'black'}}>We care for your healthy well being</h3>
      </div>
    </div>
    <div class="carousel-item">
    <img title="Trusted by millions of patients" alt="Trusted by millions of patients" width="680" src="image4.jpg"fetchpriority="high"></img>
      {/*<img src="image4.jpg" class="d-block w-70" alt="Trusted by millions of patients"/>*/} 
      <div class="carousel-caption d-none d-md-block">
        <h4 style={{color: 'black'}}>Trusted by millions of patients</h4>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#imageslider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#imageslider" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  </div>
</div>
    </div>
  
       
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Home