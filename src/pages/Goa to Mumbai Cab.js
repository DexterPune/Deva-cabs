
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Goatomumbaicabs() {



    const cardData =
    {
        keyword: ' Goa to Mumbai Cab    ',
        heading: 'Deva Cabs: Goa to Mumbai Cab    ',
        headingDescription: 'Deva Cabs provides dependable and comfortable cab services from Goa to Mumbai, ideal for beach return trips, family travels, and business travel. Covering a distance of approximately 590 km, our well-maintained vehicles—Sedans, SUVs, and Innova Crysta—ensure a smooth and scenic journey along the Konkan coast and Western Ghats. With professional chauffeurs, fixed-fare packages, and convenient door-to-door pickup from your hotel or residence, you can sit back and enjoy the ride. Available 24/7 with transparent pricing and dedicated support, Deva Cabs makes your Goa to Mumbai cab journey relaxing, safe, and memorable.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

"topPlaces": [
  {
    "title": "Gateway of India",
    "location": "Colaba, South Mumbai, Maharashtra",
    "description": "Erected in 1924 to commemorate the visit of King George V and Queen Mary, this majestic basalt arch stands majestically by the sea, with the iconic Taj Mahal Palace Hotel beside it. A starting point for ferry trips to Elephanta Caves, it buzzes with street performers, photographers, and tourists soaking in its colonial history."
  },
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
      "name": "Goa to Mumbai Cab",
      "description": "Experience a comfortable and hassle-free journey from the scenic beaches of Goa to the bustling city of Mumbai with our reliable cab services. Enjoy professional drivers, clean vehicles, and timely pickups."
    },
    {
      "name": "One-way cab Goa to Mumbai",
      "description": "Book a convenient one-way cab from Goa to Mumbai for a smooth, direct trip. Perfect for travelers seeking a hassle-free, point-to-point service."
    },
    {
      "name": "Book cab Goa to Mumbai online",
      "description": "Reserve your Goa to Mumbai cab easily through our online booking platform. Choose your preferred vehicle and enjoy seamless service from booking to drop-off."
    },
    {
      "name": "Round trip taxi Goa to Mumbai",
      "description": "Plan your return journey with our round trip cab service from Goa to Mumbai. Enjoy the comfort of the same vehicle and driver throughout your travel."
    },
    {
      "name": "AC cab hire Goa to Mumbai",
      "description": "Stay cool and relaxed on your long journey from Goa to Mumbai with our air-conditioned cab options, ensuring a pleasant and comfortable ride."
    },
    {
      "name": "SUV cab Goa to Mumbai",
      "description": "Travel spaciously and comfortably with our SUV cabs from Goa to Mumbai, ideal for families, groups, or those with extra luggage."
    },
    {
      "name": "Chauffeur-driven cab Goa to Mumbai",
      "description": "Enjoy the luxury and convenience of a chauffeur-driven cab from Goa to Mumbai. Our professional drivers ensure safe and timely travel."
    },
    {
      "name": "Affordable Goa to Mumbai cab",
      "description": "Get the best value for your money with our affordable cab services from Goa to Mumbai, without compromising on quality or comfort."
    }
  ],
  "tableData": [
    ["Goa to Mumbai Cab", "-One-way cab Goa to Mumbai"],
    ["Book cab Goa to Mumbai online", "-Round trip taxi Goa to Mumbai"],
    ["AC cab hire Goa to Mumbai", "-SUV cab Goa to Mumbai"],
    ["Chauffeur-driven cab Goa to Mumbai", "-Affordable Goa to Mumbai cab"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Goa to Mumbai Cab Service",
    "WhyChoosedescription": "Experience a smooth and comfortable journey from the vibrant beaches of Goa to the bustling city of Mumbai with our trusted cab service. Whether you’re returning from a holiday or traveling for business, our well-maintained vehicles and experienced drivers ensure a safe and timely trip covering approximately 590 km."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for Every Traveler",
    "WhyChoosedescription": "Our fleet includes air-conditioned sedans, SUVs, and tempo travellers designed to accommodate solo travelers, families, and groups. Enjoy ergonomic seating, ample legroom, and generous luggage space to make your long-distance travel relaxing and convenient."
  },
  {
    "WhyChooseheading": "Professional Drivers Familiar with Route and Conditions",
    "WhyChoosedescription": "Our experienced drivers have extensive knowledge of the highways and traffic patterns between Goa and Mumbai. They prioritize your safety, punctuality, and comfort, ensuring a stress-free and enjoyable journey."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages Tailored to Your Needs",
    "WhyChoosedescription": "Choose from one-way, round-trip, or hourly rental options that suit your itinerary. Whether you need a quick transfer or a multi-day trip with sightseeing stops, we provide customizable packages designed for your convenience and budget."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our all-inclusive pricing covers tolls, fuel, parking, and driver allowances with no hidden charges. This transparency helps you plan your Goa to Mumbai cab journey with confidence and peace of mind."
  },
  {
    "WhyChooseheading": "24/7 Availability for Your Convenience",
    "WhyChoosedescription": "Our cab service operates round the clock, allowing you to travel at any time that suits you—early morning departures, late-night arrivals, or weekend trips."
  },
  {
    "WhyChooseheading": "Simple and Quick Booking with Instant Confirmation",
    "WhyChoosedescription": "Book your cab easily through our website or customer support. Receive instant confirmation with driver and vehicle details to ensure a seamless and hassle-free travel experience."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "We prioritize your safety with regular vehicle maintenance and sanitization. Our fleet is equipped with GPS tracking, seat belts, and emergency kits to guarantee a secure and comfortable journey from Goa to Mumbai."
  }
]



















    }




const faqData = [
  {
    question: "Can I book a cab from Goa to Mumbai with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Goa to Mumbai for both one-way and round-trip travel."
  },
  {
    question: "How long does it take to travel from Goa to Mumbai by cab?",
    answer: "The journey typically takes around 10 to 12 hours depending on traffic and road conditions."
  },
  {
    question: "What types of vehicles are available for Goa to Mumbai trips?",
    answer: "We provide a range of vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit your travel preferences."
  },
  {
    question: "Is one-way cab booking available from Goa to Mumbai?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip cab services from Goa to Mumbai."
  },
  {
    question: "Are toll charges, parking fees, and driver allowances included in the fare?",
    answer: "Tolls, parking fees, and driver allowances are generally extra and will be transparently communicated during booking."
  },
  {
    question: "Can I book a cab from Goa to Mumbai at any time?",
    answer: "Yes, our cab services operate 24/7, allowing you to book rides at your convenience."
  },
  {
    question: "Is the Goa to Mumbai cab service safe and comfortable?",
    answer: "Absolutely. Our vehicles are well-maintained and our drivers are experienced, ensuring a safe and comfortable journey."
  },
  {
    question: "Can I request stops or sightseeing during the Goa to Mumbai trip?",
    answer: "Yes, you can customize your trip with stops or sightseeing. Please inform us while booking."
  },
  {
    question: "Is this service suitable for families and business travelers?",
    answer: "Yes, we cater to families, groups, and business travelers with comfortable and clean vehicles."
  },
  {
    question: "Why choose Deva Cabs for Goa to Mumbai cab service?",
    answer: "Deva Cabs offers professional drivers, transparent pricing, clean vehicles, and excellent customer support for a hassle-free experience."
  }
];

const testimonialData = [
  {
    id: 97,
    name: 'Mr. Rohan Fernandes',
    role: 'Tourist',
    review: 'Traveling from Goa to Mumbai with Deva Cabs was a great experience. The vehicle was comfortable and the driver was very professional.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 98,
    name: 'Ms. Sneha Kulkarni',
    role: 'Family Traveler',
    review: 'Deva Cabs made our Goa to Mumbai journey smooth and hassle-free. Highly recommend their services.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
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
  "name": "Goa to Mumbai Cab",
  "image": "https://devacab.com/assets/images/goa-to-mumbai-cab.jpg", // Update with actual image URL
  "description": "Affordable Goa to Mumbai cab service with AC and SUV options. Chauffeur-driven one-way and round trip taxi services available. Book online now.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "95",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/goa-to-mumbai-cab" // Replace with actual URL
  }
};




    return (
        <div>



<Helmet>
  <title>Goa to Mumbai Cab | Taxi Service Goa to Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Book affordable Goa to Mumbai cab services with AC and SUV taxis. Chauffeur-driven one-way and round trip cabs available. Reserve your cab online with Deva Cabs."
  />
  <meta
    name="keywords"
    content="Goa to Mumbai Cab, One-way cab Goa to Mumbai, Book cab Goa to Mumbai online, Round trip taxi Goa to Mumbai, AC cab hire Goa to Mumbai, SUV cab Goa to Mumbai, Chauffeur-driven cab Goa to Mumbai, Affordable Goa to Mumbai cab"
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
                            <img src='./images/keyword/61.jpg' alt='img' />
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

export default Goatomumbaicabs;