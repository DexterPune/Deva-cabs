import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Sameer Joshi',
    role: 'Deva Cabs Passenger',
    review:
      '“Deva Cabs made my airport transfer completely stress-free. The driver was punctual, polite, and the ride was incredibly smooth. I’ll definitely book again!”',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mrs. Kavita Rao',
    role: 'Deva Cabs Passenger',
    review:
      '“Reliable, clean, and comfortable – that’s what I love about Deva Cabs. I’ve used their service multiple times and have always had a great experience.”',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 3,
    name: 'Mr. Arjun Mehta',
    role: 'Corporate Client',
    review:
      '“Our company regularly books Deva Cabs for official travel. Their professional drivers and on-time service make them the best choice for business needs.”',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 4,
    name: 'Mr. Ramesh Pawar',
    role: 'Deva Cabs Driver',
    review:
      '“I’ve been working with Deva Cabs for 3 years and I truly enjoy being part of a team that values customer satisfaction and safe driving.”',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 5,
    name: 'Miss. Sneha Kulkarni',
    role: 'Frequent Traveller',
    review:
      '“From city rides to outstation trips, Deva Cabs is my go-to. Their drivers are respectful and the rides are always comfortable and reasonably priced.”',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
];




const TestimonialAbout = () => {
  return (
    <section className="testi-area overflow-hidden space-bottom" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Clients Say About Us</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 2, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
            className="th-slider testiSlider1 has-shadow"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                     
                      <div className="media-body">
                        <h3 className="box-title">{testimonial.name}</h3>
                        <span className="testi-card_desig">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">{testimonial.review}</p>
                  {/* <div className="testi-card-quote">
                    <img src={testimonial.quoteIcon} alt="quote" />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAbout;
