import React from 'react';
import Visionn from './Visionn';
import TestimonialAbout from './TestimonialAbout';

const About = () => {
  return (

<>





     <div
      className="breadcumb-wrapper"
      data-bg-src="/img/bg/breadcumb-bg.jpg">
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">About Us</h1>
          
        </div>
      </div>
    </div>
    <div className="about-area position-relative overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-xl-6">
            <div className="img-box3">
              <div className="img1">
                <img src="./images/about.jpg" alt="About" />
              </div>
             
              <div className="img1 pt-4">
                <img src="./images/about2.jpg" alt="About" />
              </div>
              
              
            </div>
            
          </div>

          {/* Text Content Section */}
          <div className="col-xl-6">
            <div className="ps-xl-6">
              <div className="title-area mb-20">
                <span className="sub-title style1">About Us</span>
                {/* <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  We are world reputeted travel agency
                </h2> */}
              </div>
              <p className="pe-xl-5">
               Deva Cabs is committed to delivering smooth, dependable, and comfortable travel experiences, making every trip as memorable as the destination itself. With a fleet of well-maintained vehicles and skilled, courteous drivers, Deva Cabs ensures a safe and hassle-free ride—whether you're heading out for business, leisure, or a spiritual journey. At Deva Cabs, customer satisfaction is our top priority, offering timely service, clear pricing, and personalized travel solutions designed to meet your unique needs.
              </p>
            

             {/* Features Section for Deva Cabs */}
<div className="about-item-wrap">
  <div className="about-item style2">
    <div className="about-item_img">
      <img src="./img/icon/about_1_1.svg" alt="Comfortable Rides" />
    </div>
    <div className="about-item_centent">
      <h5 className="box-title">Comfortable Rides</h5>
      <p className="about-item_text">
        Enjoy well-maintained, clean, and air-conditioned vehicles for a smooth and relaxing journey.
      </p>
    </div>
  </div>

  <div className="about-item style2">
    <div className="about-item_img">
      <img src="./img/icon/about_1_2.svg" alt="Safe & Reliable" />
    </div>
    <div className="about-item_centent">
      <h5 className="box-title">Safe & Reliable</h5>
      <p className="about-item_text">
        Our experienced drivers and real-time tracking ensure your safety and peace of mind on every trip.
      </p>
    </div>
  </div>

  <div className="about-item style2">
    <div className="about-item_img">
      <img src="./img/icon/about_1_3.svg" alt="24/7 Availability" />
    </div>
    <div className="about-item_centent">
      <h5 className="box-title">24/7 Availability</h5>
      <p className="about-item_text">
        Whether it’s early morning or late night, Deva Cabs is always ready to get you where you need to go.
      </p>
    </div>
  </div>
</div>


            </div>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="shape-mockup movingX d-none d-xxl-block" data-top="0%" data-left="-18%">
          <img src="/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div className="shape-mockup jump d-none d-xxl-block" data-top="28%" data-right="-15%">
          <img src="/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div className="shape-mockup spin d-none d-xxl-block" data-bottom="18%" data-left="-112%">
          <img src="/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div className="shape-mockup movixgX d-none d-xxl-block" data-bottom="18%" data-right="-12%">
          <img src="/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </div>
<Visionn/>
<TestimonialAbout/>
</>
  );
};

export default About;
