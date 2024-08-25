//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT

function Home() {
    return (
//Carousel Section
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
        <h4 style={{color: 'black'}}>Affordable World Class Care For All</h4>
        
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
      {/* //////////////////////////////////////////////////////////CARAOUSEL END//////////////////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////////// NORMAL FEATURE CARDS ////////////////////////////////////// */}
      <br/>

     
                          {/* ////////////////////////////////// NORMAL CARD ENDING/////////////////////////////////////// */}



                            {/* /////////////////////////// PRICING CARD//////////////////////////////////////// */}
      <br/>
<hr class="horizontal-rule"></hr>
<div class="cards">
<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Pricing</h1>
      <p class="fs-5 text-body-secondary">Members availing of the services of the hospital are entitled to a concessional tariff in OPD consultation, Indoor treatment and other diagnostic services. Benefits to members and dependents are :</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Silver</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Rs. 499<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>24x7 Medical Emergency Alert Service through smart watch</li>
              <li>5% discount on OPD diagnostics</li>
              <li>5% discount on Bed Charges</li>
              <li>Annual free Basic health Check Up for member</li>
            </ul>
      
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Gold</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Rs. 699<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>24x7 Medical Emergency Alert Service through smart watch</li>
              <li>10% discount on OPD diagnostics</li>
              <li>10% discount on Bed Charges</li>
              <li>Annual free Executive health Check Up for member</li>
            </ul>
        
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Platinum</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Rs. 999<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>24x7 Medical Emergency Alert Service through smart watch</li>
              <li>20% discount on OPD diagnostics</li>
              <li>10% discount on Bed Charges</li>
              <li>No Initial Deposit up to 24 hours for Emergency Admissions</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    <hr class="horizontal-rule"></hr>
    </div>
    </div>
                                  /////////////////PRICING CARD END////////////////////////////
       
    )
}

//STEP 3 -- EXPORT TO USE IT
export default Home