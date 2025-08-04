import React from 'react';
import Carousel from './Carousel';
import AboutSection from '../pages/AboutSection';
import CategorySection from '../pages/CategorySection';
import DestinationSection from './DestinationSection';
import TourGuideSection from '../pages/TourGuideSection';
import Counter from '../pages/Counter';
import TestimonialSection from '../pages/TestimonialSection';
import BlogSection from '../pages/BlogSection';
import WhyChooseUs from '../pages/WhyChooseUs';
import BookingForm from './BookingForm';



const HeroSection = () => {

  return (


    <div className="th-hero-wrapper hero-1" id="hero">

<Carousel/>
<BookingForm/>
<AboutSection/>
<CategorySection/>
<WhyChooseUs/>
<DestinationSection/>
<TourGuideSection/>
<Counter/>

<TestimonialSection/>
<BlogSection/>
    </div>
  );
};

export default HeroSection;
