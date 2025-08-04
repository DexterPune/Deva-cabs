import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Pune to Mumbai Cab | Deva Cabs</title>
        <meta
          name="description"
          content="Book your reliable Pune to Mumbai taxi service with Deva Cabs. We offer one-way, round trip, luxury taxis, and shared cabs for a comfortable and safe journey."
        />
        <meta
          name="keywords"
          content="Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai cab booking, Pune to Mumbai one-way taxi, Deva Cabs Pune to Mumbai, Pune to Mumbai travel"
        />
        <meta property="og:title" content="Pune to Mumbai Taxi | Deva Cabs" />
        <meta
          property="og:description"
          content="Book safe and affordable Pune to Mumbai taxi service with Deva Cabs. Choose from one-way, round trip, and luxury rides."
        />
        <meta property="og:url" content="https://devacabs.com/pune-to-mumbai-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devacabs.com/img/pune-to-mumbai-taxi.jpg" />
      </Helmet>

      <div className="breadcumb-wrapper" >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Privacy Policy</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <section id="about" className="jarallax text-light">
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className='text-white'>Privacy Policy</h1>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title">Privacy Policy</h3>

              <p>
                At Deva Cabs, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines the data we collect, how we use it, and how we protect it.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  We collect details like your name, phone number, email, and payment information to deliver reliable cab services.
                </p>

                <p className="highlight darkcolor">2. Usage Data:</p>
                <p>
                  We may collect IP address, device info, and browsing patterns to enhance website performance and experience.
                </p>

                <p className="highlight darkcolor">3. Location Data:</p>
                <p>
                  With your permission, we collect location data to offer accurate pickup/drop-off and better service.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. Booking & Ride Management:</p>
                <p>
                  We use your information for booking rides, sending confirmations, tracking drivers, and processing payments.
                </p>

                <p className="highlight darkcolor">2. Improved Services:</p>
                <p>
                  Collected data helps us refine our platform and enhance your travel experience.
                </p>

                <p className="highlight darkcolor">3. Communication:</p>
                <p>
                  We may contact you via SMS, email, or phone for ride updates, service alerts, and customer support.
                </p>

                <p className="highlight darkcolor">4. Promotional Updates:</p>
                <p>
                  With your consent, we may send offers, deals, and updates about Deva Cabs services.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing:</p>
                <p className="highlight darkcolor">1. Third-Party Services:</p>
                <p>
                  We may share limited data with trusted partners for operations like payments and tech support.
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  Data may be disclosed when required by law or for protection of Deva Cabs' rights and users' safety.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We use security measures to protect your data, but no online service can guarantee 100% protection.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You may request access to, update, or deletion of your personal data. Marketing opt-outs are always available.
                </p>

                <p className="highlight darkcolor">Policy Updates:</p>
                <p>
                  Our privacy policy may be updated. Please review this page periodically for the latest information.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For any privacy-related concerns, feel free to reach out:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+918108807171">+91 8108807171</a></li>
              <li><b>Email:</b> <a href="mailto:booking@devacab.com">booking@devacab.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
