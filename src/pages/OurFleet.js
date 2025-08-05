import React from 'react';
import { Helmet } from 'react-helmet';

const OurFleet = () => {
  const destinations = [
  {
    id: 2,
    image: "./images/ourfleet/3.jpg",
    title: "Swift Desire",
    listings: "Swift Dzire combines sleek design with everyday practicality. Ideal for couples or solo travelers looking for comfort, mileage, and smooth city or highway rides.",
  },
  {
    id: 3,
    image: "./images/ourfleet/5.jpg",
    title: "Ertiga",
    listings: "The Maruti Ertiga is the go-to option for small families and business groups. With flexible seating and modern interiors, it ensures a stress-free ride across any distance.",
  },
  {
    id: 6,
    image: "./images/ourfleet/7.jpg",
    title: "Innova Crysta",
    listings: "For those who prefer luxury on the go, the Innova Crysta offers plush interiors, top-notch safety, and strong performance—perfect for premium outstation and corporate trips.",
  },
  {
    id: 7,
    image: "./images/ourfleet/4.jpg",
    title: "Kia Carens",
    listings: "Kia Carens stands out with its elegant design and comfort-first approach. It's a family-friendly ride that adds a touch of class to your weekend outings or vacation plans.",
  },
  {
    id: 8,
    image: "./images/ourfleet/8.jpg",
    title: "Innova Cab",
    listings: "Built for reliability, the Innova Cab is ideal for daily rentals, airport transfers, or tourist travel. Spacious, dependable, and suited for both business and leisure needs.",
  },
  {
    id: 9,
    image: "./images/ourfleet/10.jpg",
    title: "Tempo Traveller",
    listings: "Designed for larger groups, the Tempo Traveller offers comfort and space for up to 17 passengers. Perfect for pilgrimages, corporate outings, or school trips across cities.",
  },
  
];


  return (


<>



<div className="breadcumb-wrapper" >
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Our Fleet </h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Our Fleet  </li>
        </ul>
      </div>
    </div>
  </div>

    <section className="position-relative overflow-hidden bg-green" id="destination-sec">
      <div className="container">
        <div className="row gy-4 gx-4">
          {destinations.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="destination-item th-ani ">
                <div className="destination-item_img global-img">
                  <img src={destination.image} alt="destination" />
                </div>
                <div className="destination-content ">
                  <h3 className="box-title">
                    <a href="" className='darkcolor'>{destination.title}</a>
                  </h3>
                  <p className="destination-text">{destination.listings}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shape-mockup shape1 d-none d-xxl-block" data-bottom="17%" data-right="-9%">
          <img src="/img/shape/shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup shape2 d-none d-xl-block" data-bottom="8%" data-right="-8%">
          <img src="/img/shape/shape_2.png" alt="shape" />
        </div>
        <div className="shape-mockup shape3 d-none d-xxl-block" data-bottom="15%" data-right="-4%">
          <img src="/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    
</>
  );
};

export default OurFleet;
