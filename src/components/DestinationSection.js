


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const DestinationSection = () => {
  const destinations = [
    { name: 'Mumbai', image: './images/mumbai.webp' },
    { name: 'Lonavala', image: './images/lonavala.jpg' },
    { name: 'Bhimashankar', image: './images/bhimashankar.jpg' },
    { name: 'Mahabaleshwar', image: './images/maha.jpeg' },
    { name: 'Shirdi', image: './images/shirdi.webp' },
    { name: 'Trimbakeshwar', image: './images/trimb.jpg' },
    { name: 'Konkan', image: './images/konkan.jpg' },
    { name: 'Kohlapur', image: './images/kohlapurr.jpg' },
    { name: 'Goa', image: './images/goa.jpg' },
  ];

  return (
    <div className="destination-area position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Top Destination</span>
          <h2 className="section-title">Top Place in City</h2>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="th-slider destination-slider slider-drag-wrap"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className="destination-box gsap-cursor">
                <div className="destination-img">
                  <img src={destination.image} alt={destination.name} />
                  <div className="destination-content">
                    <div className="media-left">
                      <h4 className="box-title">
                        <a href="#">{destination.name}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationSection;
