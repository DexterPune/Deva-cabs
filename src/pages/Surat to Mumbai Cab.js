
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Surattomumbaicab() {



    const cardData =
    {
        keyword: ' Surat to Mumbai Cab ',
        heading: 'Deva Cabs: Surat to Mumbai Cab ',
        headingDescription: 'Deva Cabs offers dependable and comfortable cab services from Surat to Mumbai, perfect for long-distance travel, business trips, and family journeys. Covering a distance of approximately 280 km, our well-maintained vehicles—including Sedans, SUVs, and Innova Crysta—ensure a smooth and scenic ride along the coastal and highway routes. Travel with confidence thanks to our experienced chauffeurs, fixed-fare packages, and convenient door-to-door pickup and drop-off. With 24/7 availability, transparent pricing, and dedicated customer support, Deva Cabs makes your Surat to Mumbai cab journey efficient, safe, and thoroughly enjoyable.',

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
      "name": "Surat to Mumbai Cab",
      "description": "Experience reliable and comfortable travel from Surat to Mumbai with our premium cab services. Whether for business, leisure, or family visits, our fleet offers a range of vehicles to suit your needs. Enjoy hassle-free booking, professional drivers, and door-to-door service for a smooth journey between these two major cities."
    },
    {
      "name": "One-way cab Surat to Mumbai",
      "description": "Book a convenient and cost-effective one-way cab from Surat to Mumbai with ease. Ideal for quick trips, airport transfers, or one-time visits, our one-way cabs ensure you reach your destination safely and on time, without paying for a return journey."
    },
    {
      "name": "Book cab Surat to Mumbai",
      "description": "Reserve your cab from Surat to Mumbai instantly with our easy online booking platform. Choose from a variety of vehicles, get transparent pricing, and enjoy 24/7 customer support. Your comfortable and timely ride is just a few clicks away."
    },
    {
      "name": "Round trip cab Surat to Mumbai",
      "description": "Planning a round trip between Surat and Mumbai? Our round trip cab service offers the convenience of having the same vehicle and driver for your entire journey, providing flexibility, comfort, and savings on your travel."
    },
    {
      "name": "AC taxi Surat to Mumbai",
      "description": "Travel in comfort with our air-conditioned taxis from Surat to Mumbai. Perfect for summer travel or long distances, our AC cabs ensure a cool and pleasant journey with professional drivers and clean vehicles."
    },
    {
      "name": "SUV cab Surat to Mumbai",
      "description": "Need extra space? Our SUV cabs from Surat to Mumbai are ideal for families, groups, or travelers with ample luggage. Enjoy spacious seating, smooth rides, and enhanced comfort for your long-distance trip."
    },
    {
      "name": "Chauffeur-driven taxi Surat to Mumbai",
      "description": "Relax and enjoy a stress-free ride with our chauffeur-driven taxis from Surat to Mumbai. Our experienced and courteous drivers ensure a safe, professional, and comfortable travel experience tailored to your schedule."
    },
    {
      "name": "Affordable Surat to Mumbai cab",
      "description": "Get the best rates for Surat to Mumbai cab services without compromising on quality. Our affordable cabs offer reliable, safe, and punctual transport options suited to budget-conscious travelers."
    }
  ],
  "tableData": [
    ["Surat to Mumbai Cab", "-One-way cab Surat to Mumbai"],
    ["Book cab Surat to Mumbai", "-Round trip cab Surat to Mumbai"],
    ["AC taxi Surat to Mumbai", "-SUV cab Surat to Mumbai"],
    ["Chauffeur-driven taxi Surat to Mumbai", "-Affordable Surat to Mumbai cab"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Surat to Mumbai Cab Service",
    "WhyChoosedescription": "Travel comfortably from Surat to Mumbai with our dependable cab service. Whether you're on a business trip, visiting family, or exploring the vibrant city of Mumbai, our well-maintained vehicles and professional drivers ensure a smooth and timely journey across the approximately 280 km route."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for All Travelers",
    "WhyChoosedescription": "Our fleet features air-conditioned sedans, SUVs, and tempo travellers, designed to accommodate solo travelers, families, and groups. Each vehicle offers ergonomic seating, ample legroom, and generous luggage space to make your long-distance travel relaxing and convenient."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Route Expertise",
    "WhyChoosedescription": "Our professional drivers have in-depth knowledge of the Surat–Mumbai highway, familiar with traffic conditions and shortcuts to ensure a safe and efficient journey. They prioritize your safety and punctuality for a stress-free travel experience."
  },
  {
    "WhyChooseheading": "Flexible Packages to Suit Your Travel Needs",
    "WhyChoosedescription": "Choose from one-way, round-trip, or hourly rental packages based on your itinerary. Whether you require a straightforward transfer or a multi-stop trip, our customizable options provide convenience and affordability."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our pricing is all-inclusive, covering tolls, fuel, parking, and driver allowances, with no hidden fees. This transparent approach helps you plan your travel budget with confidence and enjoy excellent value for your money."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability for Your Convenience",
    "WhyChoosedescription": "Our services operate round the clock, offering flexibility for early morning departures, late-night arrivals, and everything in between. Book your Surat to Mumbai cab at any time with ease and confidence."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Book your cab effortlessly online or through our dedicated customer support. Receive instant confirmation along with driver and vehicle details to ensure a smooth and hassle-free travel experience."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "Your safety is our priority. All vehicles undergo regular maintenance and sanitization and are equipped with GPS tracking, seat belts, and emergency kits to guarantee a secure and comfortable journey from Surat to Mumbai."
  }
]
















    }




const faqData = [
  {
    question: "Can I book a cab from Surat to Mumbai with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Surat to Mumbai for one-way and round-trip travel."
  },
  {
    question: "How long does it take to travel from Surat to Mumbai by cab?",
    answer: "The journey typically takes around 4 to 6 hours, depending on traffic and road conditions."
  },
  {
    question: "What types of vehicles are available for Surat to Mumbai trips?",
    answer: "We offer sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to accommodate different group sizes and preferences."
  },
  {
    question: "Is one-way cab booking available from Surat to Mumbai?",
    answer: "Yes, Deva Cabs provides both one-way and round-trip cab services between Surat and Mumbai."
  },
  {
    question: "Are tolls, parking fees, and driver allowances included in the fare?",
    answer: "Toll charges, parking fees, and driver allowances are typically extra and will be clearly communicated during booking."
  },
  {
    question: "Can I book a cab from Surat to Mumbai at any time?",
    answer: "Yes, our cab services are available 24/7, allowing you to book rides at your convenience."
  },
  {
    question: "Is the trip safe for families and senior citizens?",
    answer: "Absolutely. Our vehicles are well-maintained, and drivers are professional and experienced to ensure a safe journey."
  },
  {
    question: "Can I request stops or sightseeing during the Surat to Mumbai trip?",
    answer: "Yes, you can customize your trip with stops or sightseeing. Please inform us at the time of booking."
  },
  {
    question: "Is Deva Cabs suitable for business travelers from Surat to Mumbai?",
    answer: "Yes, we cater to business travelers with punctual service, clean vehicles, and professional drivers."
  },
  {
    question: "Why choose Deva Cabs for Surat to Mumbai cab service?",
    answer: "Deva Cabs offers transparent pricing, well-maintained cars, professional drivers, and 24/7 customer support for a hassle-free experience."
  }
];

const testimonialData = [
  {
    id: 91,
    name: 'Mr. Kiran Shah',
    role: 'Business Traveler',
    review: 'Deva Cabs provided an excellent Surat to Mumbai cab service. The driver was punctual and the car was comfortable.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 92,
    name: 'Ms. Meera Joshi',
    role: 'Family Traveler',
    review: 'We had a wonderful experience traveling from Surat to Mumbai with Deva Cabs. Highly recommended for their professionalism.',
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
  "name": "Surat to Mumbai Cab",
  "image": "https://devacab.com/assets/images/surat-to-mumbai-cab.jpg", // Replace with actual image URL
  "description": "Book affordable Surat to Mumbai cab service with AC taxis and SUV cabs. One-way and round trip chauffeur-driven taxi options available.",
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
    "price": "1800",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/surat-to-mumbai-cab" // Replace with actual URL
  }
};





    return (
        <div>

<Helmet>
  <title>Surat to Mumbai Cab | Taxi Service Surat to Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Affordable Surat to Mumbai cab service offering AC taxis and SUVs with chauffeur. Book your one-way or round trip cab online with Deva Cabs."
  />
  <meta
    name="keywords"
    content="Surat to Mumbai Cab, One-way cab Surat to Mumbai, Book cab Surat to Mumbai, Round trip cab Surat to Mumbai, AC taxi Surat to Mumbai, SUV cab Surat to Mumbai, Chauffeur-driven taxi Surat to Mumbai, Affordable Surat to Mumbai cab"
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
                            <img src='./images/keyword/58.jpg' alt='img' />
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

export default Surattomumbaicab;