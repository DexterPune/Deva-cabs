import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-smoke overflow-hidden space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title style1">Why Choose Us</span>
              <h2 className="sec-title">Why Choose Deva Cabs for Your Next Journey?</h2>
            </div>

            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="/img/icon/choose_1_1.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Reliable & Safe Rides</h3>
                <p className="choose-about_text">
                  At Deva Cabs, safety and reliability are at the heart of every ride. Our trained drivers and well-maintained vehicles ensure peace of mind throughout your journey.
                </p>
              </div>
            </div>

            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="/img/icon/choose_1_2.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Affordable Travel Solutions</h3>
                <p className="choose-about_text">
                  Deva Cabs offers premium services at budget-friendly rates, making it easy to plan family trips, business travels, or weekend getaways without overspending.
                </p>
              </div>
            </div>

            <div className="choose-about wow fadeInUp">
              <div className="choose-about_icon">
                <img src="/img/icon/choose_1_3.svg" alt="image" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Wide Network Coverage</h3>
                <p className="choose-about_text">
                  Whether it's a city ride, outstation trip, or airport transfer—Deva Cabs has you covered with a vast service network across Maharashtra and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="choose-wrapp">
              <div className="img1 global-img"><img src="/images/why-img.png" alt="Choose" /></div>
              <div className="img1 global-img"><img src="/images/why-img2.png" alt="Choose" /></div>
              <div className="img1 global-img"><img src="/images/why-img3.png" alt="Choose" /></div>
              <div className="img1 global-img"><img src="/images/why-img4.png" alt="Choose" /></div>
            </div>
          </div>
        </div>

        <div className="shape-mockup d-none d-xxl-block" data-top="5%" data-right="-20%">
          <img src="/img/shape/shape_19.png" alt="" />
        </div>
        <div className="shape-mockup d-none d-xxl-block" data-bottom="-17%" data-left="-20%">
          <img src="/img/shape/shape_20.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
