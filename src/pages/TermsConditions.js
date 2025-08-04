import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/TermsConditions.css';

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Mumbai to Pune Cab On Rent | Deva Cabs</title>
        <meta
          name="description"
          content="Book your reliable Pune to Mumbai taxi service with Deva Cabs. We offer one-way, round trip, luxury taxis, and shared cabs for your comfortable journey."
        />
        <meta
          name="keywords"
          content="Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai taxi booking, Pune to Mumbai one-way taxi, Pune to Mumbai round trip, Pune to Mumbai luxury taxi, Pune to Mumbai airport taxi"
        />
        <meta property="og:title" content="Pune to Mumbai Taxi | Deva Cabs" />
        <meta
          property="og:description"
          content="Book affordable and reliable Pune to Mumbai taxi service with Deva Cabs. Choose from one-way, round trip, and luxury taxis for a comfortable ride."
        />
        <meta property="og:url" content="https://devacabs.com/pune-to-mumbai-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devacabs.com/img/pune-to-mumbai-taxi.jpg" />
      </Helmet>

      <div className="breadcumb-wrapper" >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Terms & Conditions</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="terms-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="terms-content">
                <p><b className="highlight">1. Booking Confirmation:</b> All bookings with Deva Cabs are subject to availability and confirmed only upon full payment and issuance of a booking reference number.</p>

                <p><b className="highlight">2. Payment:</b> All payments must be made through our secure portal or authorized payment methods at the time of booking.</p>

                <p><b className="highlight">3. Cancellation and Rescheduling:</b> All booking changes or cancellations are governed by our cancellation policy, including applicable fees based on notice period.</p>

                <p><b className="highlight">4. Passenger Responsibility:</b> Passengers must present valid ID and booking confirmation. Deva Cabs reserves the right to deny service if these are not provided.</p>

                <p><b className="highlight">5. Baggage Policy:</b> A limited baggage allowance is included. Excess baggage may incur extra charges.</p>

                <p><b className="highlight">6. Travel Insurance:</b> While we ensure safety, we encourage customers to obtain travel insurance for unforeseen circumstances.</p>

                <p><b className="highlight">7. Safety Regulations:</b> All passengers are required to follow safety guidelines and cooperate with the driver during the journey.</p>

                <p><b className="highlight">8. Changes to Itinerary:</b> Deva Cabs may alter routes or schedules due to weather, traffic, or operational needs.</p>

                <p><b className="highlight">9. Refusal of Service:</b> Service may be refused in cases of abusive behavior, safety concerns, or violation of terms.</p>

                <p><b className="highlight">10. Jurisdiction:</b> These terms are governed by Indian law, and disputes are subject to Pune jurisdiction.</p>

                <h3>General Policy</h3>
                <p><b className="highlight">Booking Procedure:</b> Book through our website or 24/7 customer care for a quick and reliable experience.</p>
                <p><b className="highlight">Customer Support:</b> We’re here to help you anytime—just call or email us.</p>

                <h3>Refund Policy</h3>
                <p><b className="highlight">Cancellation Fees:</b> Depending on the timing of cancellation, applicable charges may apply.</p>
                <p><b className="highlight">Refund Process:</b> Refunds are processed within 7–10 business days via the original payment method.</p>
                <p><b className="highlight">No-Show Policy:</b> If a customer does not show up without notice, no refund will be issued.</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions about our terms and policies, please contact us:</p>
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

export default TermsConditions;
