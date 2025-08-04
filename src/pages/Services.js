import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  const destinations = [
  {
    id: 1,
    image: "/images/keyword/1.jpg",
    title: "Cab Service in Mumbai",
    listings: "Deva Cabs provides reliable and affordable cab service within Mumbai, ensuring smooth local travel with professional drivers and well-maintained vehicles.",
  },
  {
    id: 2,
    image: "/images/keyword/47.jpg",
    title: "Mumbai to Ganpatipule Cab",
    listings: "Travel comfortably with Deva Cabs from Mumbai to Ganpatipule. We ensure timely pickups, safe rides, and hassle-free intercity travel at competitive rates.",
  },
  {
    id: 3,
    image: "/images/keyword/22.jpg",
    title: "Mumbai to Shirdi Cab",
    listings: "Book a spiritual journey from Mumbai to Shirdi with Deva Cabs. Enjoy a peaceful ride in our clean, AC cabs driven by experienced chauffeurs.",
  },
  {
    id: 4,
    image: "/images/keyword/23.jpg",
    title: "Mumbai to Lonavala Cab",
    listings: "Escape to the hills with Deva Cabs. Our Mumbai to Lonavala taxi service offers a scenic and comfortable ride perfect for weekend getaways.",
  },
  {
    id: 5,
    image: "/images/keyword/26.jpg",
    title: "Mumbai to Matheran Cab",
    listings: "Enjoy a nature retreat with Deva Cabs. Travel from Mumbai to Matheran in clean, well-maintained vehicles with courteous drivers and on-time service.",
  },
  {
    id: 6,
    image: "/images/keyword/28.jpg",
    title: "Mumbai to Mahabaleshwar Cab",
    listings: "Plan your hill station escape from Mumbai to Mahabaleshwar with Deva Cabs. Sit back, relax, and let us drive you safely through the scenic route.",
  },
  {
    id: 7,
    image: "/images/keyword/29.jpg",
    title: "Mumbai to Panchgani Cab",
    listings: "Book a stress-free Mumbai to Panchgani cab with Deva Cabs. Enjoy smooth rides, affordable pricing, and the highest level of comfort.",
  },
  {
    id: 8,
    image: "/images/keyword/34.jpg",
    title: "Mumbai to Goa Cab",
    listings: "Hit the road from Mumbai to Goa with Deva Cabs. We offer long-distance taxi services with trained drivers, ensuring your coastal journey is safe and enjoyable.",
  },
  {
    id: 9,
    image: "/images/keyword/35.jpg",
    title: "Mumbai to Alibaug Cab",
    listings: "Experience a peaceful drive to Alibaug from Mumbai with Deva Cabs. Our rides are perfect for families, groups, or solo travelers seeking convenience.",
  },
];


  return (


<>

<div className="breadcumb-wrapper" >
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Services </h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Services </li>
        </ul>
      </div>
    </div>
  </div>

    <section className="position-relative overflow-hidden space" id="destination-sec">
      <div className="container">
        <div className="row gy-4 gx-4">
          {destinations.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destination.image} alt="destination" />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href={destination.link} className='darkcolor'>{destination.title}</a>
                  </h3>
                  <p className="destination-text">{destination.listings}</p>
                  {/* <a href="contact.html" className="th-btn style4 th-icon">Book Now</a> */}
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

export default Services;
