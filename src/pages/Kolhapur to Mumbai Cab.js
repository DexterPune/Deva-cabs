
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Kolhapurtomumbaicabs() {



    const cardData =
    {
        keyword: ' Kolhapur to Mumbai Cab    ',
        heading: 'Deva Cabs: Kolhapur to Mumbai Cab    ',
        headingDescription: 'Deva Cabs provides reliable and comfortable cab services from Kolhapur to Mumbai, ideal for long-distance travel, leisure trips, and business commutes. Covering a distance of approximately 375 km, our well-maintained vehicles—including Sedans, SUVs, and Innova Crysta—ensure a smooth and scenic ride through Maharashtra’s plains and highways. With experienced chauffeurs, fixed-fare packages, and flexible door-to-door pickup, you enjoy convenience and peace of mind. Available 24/7 with transparent pricing and dedicated support, Deva Cabs makes your Kolhapur to Mumbai cab journey efficient, safe, and stress-free.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

"topPlaces": [
  {
    "title": "Elephanta Caves",
    "location": "Elephanta Island, Mumbai Harbour",
    "description": "A UNESCO World Heritage site reachable by an hour-long ferry ride from the Gateway. These rock-cut caves dating from the 5th–8th centuries feature grand sculptures, including the iconic Trimurti of Shiva. The island’s lush hillscape and views of the bay create a serene journey back in time."
  },
    {
    "title": "Marine Drive",
    "location": "South Mumbai, Maharashtra",
    "description": "Known as the ‘Queen’s Necklace’, this 3.6 km C-shaped promenade along the Arabian Sea is lined with art-deco buildings and palm trees. Perfect for sunset strolls or evening breezes, it lights up like a string of pearls at night. Whether it’s a quiet morning jog or enjoying street-side chai, Marine Drive encapsulates Mumbai’s coastal charm and historical elegance."
  },
  {
    "title": "Gateway of India",
    "location": "Colaba, South Mumbai, Maharashtra",
    "description": "Erected in 1924 to commemorate the visit of King George V and Queen Mary, this majestic basalt arch stands majestically by the sea, with the iconic Taj Mahal Palace Hotel beside it. A starting point for ferry trips to Elephanta Caves, it buzzes with street performers, photographers, and tourists soaking in its colonial history."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "location": "Mumbai, Maharashtra",
    "description": "This UNESCO-listed masterpiece from 1887 fuses Victorian Gothic with Indian architectural elements. A living monument, CSMT is one of India’s busiest railway stations, featuring stunning stonework, arched windows, turrets, and intricate carvings that echo Mumbai’s colonial past."
  },
  {
    "title": "Juhu Beach",
    "location": "Juhu, Mumbai, Maharashtra",
    "description": "A bustling sandy stretch known for its vibrant street-snack culture—vada pav, bhel puri, pav bhaji—sunset seekers, and Bollywood celebrity neighborhood. Joggers, kite-flyers, and families mingle here as foamy waves lap the shore, making it a quintessential slice of Mumbai life."
  },
  {
    "title": "Siddhivinayak Temple",
    "location": "Prabhadevi, Mumbai, Maharashtra",
    "description": "Renowned for its black stone idol of Lord Ganesha with a trunk curving to the right, this temple sees millions of devotees, especially on Tuesdays. The atmosphere is charged with faith, and the temple’s ornate gold-plated sanctum adds to its spiritual grandeur."
  },
  {
    "title": "Haji Ali Dargah",
    "location": "Worli, Mumbai, Maharashtra",
    "description": "A white-domed Sufi shrine built on a sea-locked islet and accessible via a narrow causeway at low tide. Known for its sense of peace amidst the waves, the Dargah draws visitors of all faiths seeking blessings and views of the open sea."
  },
  {
    "title": "Girgaon Chowpatty",
    "location": "Girgaon, South Mumbai, Maharashtra",
    "description": "At the northern end of Marine Drive, this busy beach is a hub for Ganesh Visarjan celebrations every year. Known for its lively street‑food scene—pani puri, kulfi, corn—it’s a place to soak in Mumbai's festive spirit and beach culture."
  },
  {
    "title": "Colaba Causeway & Kala Ghoda",
    "location": "Colaba & Fort, South Mumbai, Maharashtra",
    "description": "A vibrant cultural corridor known for its bohemian charm—flea markets, street art, galleries, colonial facades, chic cafés, and heritage museums. Strolling here offers tastes of fashion, art, history, and street-life all in one eclectic walk."
  },
  {
    "title": "Sanjay Gandhi National Park & Kanheri Caves",
    "location": "Borivali, Mumbai, Maharashtra",
    "description": "A verdant break from city bustle, this rare urban jungle spans over 100 km² and houses wildlife like leopards, deer, and monkeys. Within it lies the ancient Kanheri Caves—Buddhist-carved sanctuaries and temples set among forest trails and streams."
  }
],



  "services": [
    {
      "name": "Kolhapur to Mumbai Cab",
      "description": "Deva Cabs provides reliable and comfortable cab services from Kolhapur to Mumbai, ideal for business travel, leisure trips, or family visits. With a fleet of well-maintained vehicles and experienced chauffeurs, we ensure a smooth journey across the scenic Western Maharashtra route. Choose from multiple cab types like sedans, SUVs, or premium cars for a personalized travel experience. Our service includes door-to-door pickup, flexible departure times, and transparent pricing."
    },
    {
      "name": "One-way taxi Kolhapur to Mumbai",
      "description": "Looking for a one-way cab from Kolhapur to Mumbai? Deva Cabs offers economical one-way taxi rides with no return fare burden. Ideal for single trips to the airport, events, or family functions, our one-way service includes AC cars, professional drivers, and on-time pickups. Book instantly online or through a quick call for a stress-free journey."
    },
    {
      "name": "Book cab Kolhapur to Mumbai",
      "description": "Booking a cab from Kolhapur to Mumbai is easy with Deva Cabs. Our user-friendly booking platform allows you to reserve your cab in minutes. Whether you need a ride immediately or are planning a future trip, we offer real-time availability, instant confirmation, and round-the-clock customer support. Enjoy a hassle-free booking experience with clear fares and reliable service."
    },
    {
      "name": "SUV cab hire Kolhapur to Mumbai",
      "description": "Travel in style and comfort with our spacious SUV cabs for your journey from Kolhapur to Mumbai. Deva Cabs offers vehicles like Ertiga, Innova, and similar models that are perfect for families or groups. These SUVs offer ample luggage space, plush interiors, and a smooth ride over long distances. Ideal for hilly terrain and highway travel."
    },
    {
      "name": "Round trip cab Kolhapur to Mumbai",
      "description": "Planning a return journey from Kolhapur to Mumbai? Deva Cabs offers cost-effective round trip cab packages. Get the same vehicle and driver for both legs of your trip, saving time and money. Perfect for weddings, corporate events, or medical visits, this service ensures flexible timing and peace of mind with 100% reliability."
    },
    {
      "name": "Chauffeur cab Kolhapur to Mumbai",
      "description": "Choose our chauffeur-driven cabs from Kolhapur to Mumbai for a professional and relaxing travel experience. All our drivers are well-trained, courteous, and familiar with the route. Enjoy personalized service, on-road assistance, and a comfortable ride while you sit back and relax throughout the journey."
    },
    {
      "name": "AC cab Kolhapur to Mumbai",
      "description": "Beat the heat with our fully air-conditioned cabs from Kolhapur to Mumbai. Our AC cabs offer a refreshing and comfortable environment, especially suited for long journeys. From compact cars to luxury sedans, all vehicles are climate-controlled and maintained to deliver a premium travel experience."
    },
    {
      "name": "Affordable cab Kolhapur to Mumbai",
      "description": "Get the best rates on your Kolhapur to Mumbai taxi with Deva Cabs. Our competitive pricing includes fuel, tolls, and driver charges—no hidden costs. We offer affordable options across vehicle types, ensuring value for money without compromising on safety, punctuality, or comfort."
    }
  ],
  "tableData": [
    ["Kolhapur to Mumbai Cab", "-One-way taxi Kolhapur to Mumbai"],
    ["Book cab Kolhapur to Mumbai", "-SUV cab hire Kolhapur to Mumbai"],
    ["Round trip cab Kolhapur to Mumbai", "-Chauffeur cab Kolhapur to Mumbai"],
    ["AC cab Kolhapur to Mumbai", "-Affordable cab Kolhapur to Mumbai"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Dependable Kolhapur to Mumbai Cab Service",
    "WhyChoosedescription": "Travel comfortably from Kolhapur to Mumbai with our reliable cab service. Whether it’s a business trip, family visit, or leisure travel, we ensure a smooth and stress-free journey across the approximately 375 km route, allowing you to relax and enjoy the ride."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for Every Traveler",
    "WhyChoosedescription": "Our fleet consists of air-conditioned sedans, SUVs, and tempo travellers designed for comfort and ample luggage space. Whether you’re traveling solo, with family, or in a group, our vehicles offer ergonomic seating and modern amenities to keep you comfortable throughout the journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with the Route",
    "WhyChoosedescription": "Our professional drivers are well-versed with the Kolhapur to Mumbai highway, skilled in navigating the road conditions and traffic patterns. They prioritize your safety and punctuality, ensuring a timely arrival while making the journey enjoyable and hassle-free."
  },
  {
    "WhyChooseheading": "Flexible Travel Packages to Suit Your Needs",
    "WhyChoosedescription": "Choose from a variety of rental options including one-way trips, round trips, and hourly rentals. Whether you need a quick transfer or a multi-day travel plan with sightseeing stops, we tailor packages to match your specific itinerary and budget."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our all-inclusive pricing covers tolls, fuel, parking, and driver allowances, so you won’t face any unexpected costs. This transparent approach lets you budget confidently for your Kolhapur to Mumbai cab ride."
  },
  {
    "WhyChooseheading": "Round-the-Clock Availability for Your Convenience",
    "WhyChoosedescription": "Our cabs are available 24/7, accommodating early morning departures, late-night arrivals, and everything in between. We’re here to provide flexible and dependable service whenever you need to travel."
  },
  {
    "WhyChooseheading": "Simple and Quick Booking with Instant Confirmation",
    "WhyChoosedescription": "Easily book your Kolhapur to Mumbai cab online or via our friendly customer support team. Receive instant confirmation with all necessary trip details and driver contact information for a seamless experience."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "Your safety is our priority. All vehicles undergo regular maintenance and sanitization and are equipped with GPS tracking, seat belts, and emergency kits. Travel with peace of mind knowing you’re in safe hands throughout the journey."
  }
]















    }




const faqData = [
  {
    question: "Can I book a cab from Kolhapur to Mumbai with Deva Cabs?",
    answer: "Yes, Deva Cabs provides reliable and comfortable cab services from Kolhapur to Mumbai for one-way and round-trip travel."
  },
  {
    question: "How long does it take to travel from Kolhapur to Mumbai by cab?",
    answer: "The journey usually takes around 7 to 9 hours, depending on traffic and road conditions."
  },
  {
    question: "What vehicle options are available for Kolhapur to Mumbai cab service?",
    answer: "We offer a variety of vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to match your group size and preferences."
  },
  {
    question: "Is one-way cab booking available from Kolhapur to Mumbai?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip options for travel between Kolhapur and Mumbai."
  },
  {
    question: "Are toll charges and driver allowance included in the fare?",
    answer: "Tolls, parking charges, and driver allowance are generally additional and will be shared transparently during booking."
  },
  {
    question: "Can I book a cab for early morning or late-night travel from Kolhapur to Mumbai?",
    answer: "Yes, our services are available 24/7, so you can book your cab as per your preferred time slot."
  },
  {
    question: "Is it safe to travel long distances like Kolhapur to Mumbai by cab?",
    answer: "Absolutely. Our drivers are experienced and verified, and all our vehicles are regularly maintained for safe and smooth travel."
  },
  {
    question: "Can I request a stop at places like Satara or Pune during the trip?",
    answer: "Yes, you can request detours or breaks along the route. Just inform us during the booking process for a personalized itinerary."
  },
  {
    question: "Is the cab service suitable for families and elderly travelers?",
    answer: "Yes, our vehicles are comfortable and spacious, making them ideal for families, senior citizens, and group travel."
  },
  {
    question: "Why choose Deva Cabs for Kolhapur to Mumbai cab service?",
    answer: "Deva Cabs offers well-maintained vehicles, professional drivers, transparent pricing, and 24/7 customer support for a worry-free experience."
  }
];

const testimonialData = [
  {
    id: 87,
    name: 'Mr. Shrikant Pawar',
    role: 'Business Traveler',
    review: 'Had a great experience traveling from Kolhapur to Mumbai with Deva Cabs. Clean car, polite driver, and on-time service.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 88,
    name: 'Ms. Anuja Gokhale',
    role: 'Family Traveler',
    review: 'We booked a cab from Kolhapur to Mumbai for a family trip. The journey was smooth and the driver was very courteous. Highly recommended!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  }
];






















































    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 8108807171",
            "+91 9764227171",



        ],
        email: "booking@devacab.com"
    };


    const Images = [
        {
            place: "./images/keyword/1.jpg",
            text: "Cab Service in Mumbai",
            link: "/Cab-Service-in-Mumbai"
        },
        {
            place: "./images/keyword/2.jpg",
            text: "Cab Service in Navi Mumbai",
            link: "/Cab-Service-in-Navi-Mumbai"
        },
        {
            place: "./images/keyword/3.jpg",
            text: "Cab Service in Thane",
            link: "/Cab-Service-in-Thane"
        },
        {
            place: "./images/keyword/4.jpg",
            text: "Cab Service Near Me Mumbai",
            link: "/Cab-Service-Near-Me-Mumbai"
        },
        {
            place: "./images/keyword/5.jpg",
            text: "Car Rental in Mumbai",
            link: "/Car-Rental-in-Mumbai"
        },
        {
            place: "./images/keyword/6.jpg",
            text: "Corporate Cab Services in Mumbai",
            link: "/Corporate-Cab-Services-in-Mumbai"
        },
        {
            place: "./images/keyword/7.jpg",
            text: "Online Taxi Booking Mumbai",
            link: "/Online-Taxi-Booking-Mumbai"
        },
        {
            place: "./images/keyword/8.jpg",
            text: "Wedding Car Rental Mumbai",
            link: "/Wedding-Car-Rental-Mumbai"
        },
        {
            place: "./images/keyword/9.jpg",
            text: "Tempo Traveller on Rent in Mumbai",
            link: "/Tempo-Traveller-on-Rent-in-Mumbai"
        },
        {
            place: "./images/keyword/10.jpg",
            text: "Innova Crysta on Rent in Mumbai",
            link: "/Innova-Crysta-on-Rent-in-Mumbai"
        },
        {
            place: "./images/keyword/11.jpg",
            text: "Ertiga on Rent in Mumbai",
            link: "/Ertiga-on-Rent-in-Mumbai"
        },
        {
            place: "./images/keyword/12.jpg",
            text: "Mini Bus on Rent in Mumbai",
            link: "/Mini-Bus-on-Rent-in-Mumbai"
        },
        {
            place: "./images/keyword/13.jpg",
            text: "Mumbai Airport Cab Booking",
            link: "/Mumbai-Airport-Cab-Booking"
        },
        {
            place: "./images/keyword/14.jpg",
            text: "Navi Mumbai Car Rental Service",
            link: "/Navi-Mumbai-Car-Rental-Service"
        },
        {
            place: "./images/keyword/15.jpg",
            text: "Mumbai Airport to Pune Cab",
            link: "/Mumbai-Airport-to-Pune-Cab"
        },
        {
            place: "./images/keyword/16.jpg",
            text: "Mumbai Airport to Shirdi Taxi",
            link: "/Mumbai-Airport-to-Shirdi-Taxi"
        },
        {
            place: "./images/keyword/17.jpg",
            text: "Pune to Mumbai Airport Cab",
            link: "/Pune-to-Mumbai-Airport-Cab"
        },
        {
            place: "./images/keyword/18.jpg",
            text: "Pune Airport to Mumbai Cab",
            link: "/Pune-Airport-to-Mumbai-Cab"
        },
        {
            place: "./images/keyword/19.jpg",
            text: "Surat to Mumbai Airport Taxi",
            link: "/Surat-to-Mumbai-Airport-Taxi"
        },
        {
            place: "./images/keyword/20.jpg",
            text: "Nashik to Mumbai Airport Cab",
            link: "/Nashik-to-Mumbai-Airport-Cab"
        },
        {
            place: "./images/keyword/21.jpg",
            text: "Mumbai to Nashik Cab",
            link: "/Mumbai-to-Nashik-Cab"
        },
        {
            place: "./images/keyword/22.jpg",
            text: "Mumbai to Shirdi Cab",
            link: "/Mumbai-to-Shirdi-Cab"
        },
        {
            place: "./images/keyword/23.jpg",
            text: "Mumbai to Lonavala Cab",
            link: "/Mumbai-to-Lonavala-Cab"
        },
        {
            place: "./images/keyword/24.jpg",
            text: "Mumbai to Khandala Cab",
            link: "/Mumbai-to-Khandala-Cab"
        },
        {
            place: "./images/keyword/25.jpg",
            text: "Mumbai to Lavasa Cab",
            link: "/Mumbai-to-Lavasa-Cab"
        },
        {
            place: "./images/keyword/26.jpg",
            text: "Mumbai to Matheran Cab",
            link: "/Mumbai-to-Matheran-Cab"
        }
    ];



    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },

    ];



const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kolhapur to Mumbai Cab",
  "image": "https://devacab.com/assets/images/kolhapur-to-mumbai-cab.jpg", // Replace with actual image URL
  "description": "Book affordable Kolhapur to Mumbai cab service with chauffeur-driven SUVs and AC cabs. One-way and round trip taxi options available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/kolhapur-to-mumbai-cab" // Replace with actual URL
  }
};





    return (
        <div>

<Helmet>
  <title>Kolhapur to Mumbai Cab | Book Taxi Kolhapur to Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Affordable Kolhapur to Mumbai cab service with chauffeur-driven SUVs and AC cabs. Book your one-way or round trip taxi online with Deva Cabs."
  />
  <meta
    name="keywords"
    content="Kolhapur to Mumbai Cab, One-way taxi Kolhapur to Mumbai, Book cab Kolhapur to Mumbai, SUV cab hire Kolhapur to Mumbai, Round trip cab Kolhapur to Mumbai, Chauffeur cab Kolhapur to Mumbai, AC cab Kolhapur to Mumbai, Affordable cab Kolhapur to Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

            <div className="breadcumb-wrapper" >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{cardData.keyword}</h1>
                    </div>
                </div>
            </div>



            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 ">
                            <img src='./images/keyword/56.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#F8911B', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolor'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                // padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolor">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    // padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolor">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className=''>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Deva Cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">


                                                <FAQ faqData={faqData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <TestimonialKeyword testimonialData={testimonialData} />


                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1" key={e.text}>
                                        <a
                                            href={e.link} // Use the separate link for each item
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt={e.text} />
                                            </div>
                                            <div className="b2">
                                                <a href={e.link} className="px-3 colorr">{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #562018',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#562018' }}>
                                            <h4 className=" lead fw-semibold whitt text-white bg-ora">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+91 8108807171" className="d-block  text-white">+91 8108807171</a>
                                                <a href="tel:+91 9764227171" className="d-block  text-white">+91 9764227171</a>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#562018' }}>
                                                <h4 className=" fw-semibold lead whitt text-white bg-ora">Email</h4>
                                                <a href="mailto:booking@devacab.com" className=" text-white d-block">
                                                    booking@devacab.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#562018' }}>
                                                <h4 className=" fw-semibold lead whitt text-white bg-ora">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Deva Cabs<br />
                                                        SS-2 404 Sector -17 Behind Mother India School Koparkhairne Navi Mumbai 400709
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Kolhapurtomumbaicabs;