import React from 'react';

const ContactInfo = () => {
  return (
   <>
   
   
   
    <div className="breadcumb-wrapper" >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
          </div>
        </div>
      </div>

    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>
        <div className="row gy-4 justify-content-center">
         

          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <img src="./img/icon/call.svg" alt="Phone Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Phone Number</h6>
                <p className="about-contact-details-text">
                  <a href="tel:918108807171">+91 8108807171</a>
                </p>
                <p className="about-contact-details-text">
                  <a href="tel:919764227171">+91 9764227171</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <img src="./img/icon/mail.svg" alt="Mail Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Email Address</h6>
                <p className="about-contact-details-text">
                  <a href="mailto: booking@devacab.com"> booking@devacab.com</a>
                </p>
                {/* <p className="about-contact-details-text">
                  <a href="mailto:support24@tourm.com">support24@tourm.com</a>
                </p> */}
              </div>
            </div>
          </div>

 <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid style2">
              <div className="about-contact-icon">
                <img src="./img/icon/location-dot2.svg" alt="Location Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Our Address</h6>
                <p className="about-contact-details-text">SS-2 404 SECTOR -17 BEHIND MOTHER INDIA SCHOOL KOPARKHAIRNE NAVI MUMBAI 400709</p>
              </div>
            </div>
          </div>


        </div>

        

      <iframe className='pt-3' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2979.778825552838!2d72.99910315!3d19.10186327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1d470c80bed%3A0x48f0b6e70d65c241!2sAtharvashirsh!5e1!3m2!1sen!2sin!4v1752753866890!5m2!1sen!2sin"  width="auto"
  height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   </>
  );
};

export default ContactInfo;
