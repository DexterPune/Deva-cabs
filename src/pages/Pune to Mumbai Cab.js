
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Punetomumbaicab() {



    const cardData =
    {
        keyword: ' Pune to Mumbai Cab  ',
        heading: 'Deva Cabs: Pune to Mumbai Cab  ',
        headingDescription: 'Deva Cabs offers efficient and comfortable cab services from Pune to Mumbai, ideal for business travelers, daily commuters, and family trips. Covering a distance of approximately 150 km, our well-maintained vehicles—Sedans, SUVs, and Innova Crysta—ensure a smooth and enjoyable ride. Enjoy the comfort of professional chauffeurs, fixed-fare packages, and door-to-door pickups with flexible timings. With 24/7 availability, transparent pricing, and reliable service, Deva Cabs makes your Pune to Mumbai cab journey seamless, safe, and stress-free',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

"topPlaces": [
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
    "title": "Elephanta Caves",
    "location": "Elephanta Island, Mumbai Harbour",
    "description": "A UNESCO World Heritage site reachable by an hour-long ferry ride from the Gateway. These rock-cut caves dating from the 5th–8th centuries feature grand sculptures, including the iconic Trimurti of Shiva. The island’s lush hillscape and views of the bay create a serene journey back in time."
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
      "name": "Pune to Mumbai Cab",
      "description": "Travel conveniently from Pune to Mumbai with Deva Cabs’ reliable intercity cab service. Whether you're heading to Mumbai for business, leisure, or an airport drop, our fleet offers a wide range of vehicles including sedans, SUVs, and premium cars. Enjoy well-maintained, air-conditioned cars driven by courteous chauffeurs who ensure your journey is smooth and stress-free. With flexible pickup times, on-time service, and no hidden charges, we make long-distance travel simple and affordable."
    },
    {
      "name": "One-way cab Pune to Mumbai",
      "description": "Need a quick and economical ride from Pune to Mumbai? Book Deva Cabs’ one-way service for a seamless, point-to-point journey. Ideal for travelers who don't need a return trip, this option is perfect for business visits, family travel, or catching a flight from Mumbai airport. Experience punctual pickups, clean vehicles, and fixed all-inclusive pricing."
    },
    {
      "name": "Pune to Mumbai taxi service",
      "description": "Our Pune to Mumbai taxi service is designed to cater to all travel needs—be it urgent travel, scheduled business appointments, or leisure trips. Choose from a wide range of AC and non-AC cars, driven by trained chauffeurs familiar with the expressway route. With 24x7 availability and roadside assistance, your travel experience is guaranteed to be safe and hassle-free."
    },
    {
      "name": "Round trip cab Pune to Mumbai",
      "description": "Planning a same-day visit or weekend getaway to Mumbai from Pune? Deva Cabs offers round trip cab services with wait time included, ensuring you travel to and from Mumbai in comfort and style. Ideal for weddings, medical visits, shopping, or business meetings, our round trip package is cost-effective and convenient."
    },
    {
      "name": "AC cab hire Pune to Mumbai",
      "description": "Beat the heat on the Pune-Mumbai route with Deva Cabs’ fully air-conditioned cab services. Our AC vehicles provide a relaxing and cool environment throughout the journey, making them perfect for both solo and group travelers. Stay comfortable while our experienced chauffeurs drive you safely through expressways and city roads."
    },
    {
      "name": "SUV cab Pune to Mumbai",
      "description": "Need more space and comfort? Choose our SUV cabs for your Pune to Mumbai trip. With ample legroom, luggage space, and plush interiors, our SUV options like Innova and Ertiga are great for families, groups, or travelers with lots of luggage. Enjoy a premium feel without breaking the bank."
    },
    {
      "name": "Chauffeur-driven Pune to Mumbai taxi",
      "description": "Relax while our professional chauffeurs take you from Pune to Mumbai with utmost safety and courtesy. Our drivers are well-versed with the route, polite, and undergo regular background checks. With Deva Cabs, your long-distance ride becomes a pleasant experience backed by reliable service."
    },
    {
      "name": "Affordable Pune to Mumbai cab booking",
      "description": "Looking for a budget-friendly yet reliable cab from Pune to Mumbai? Deva Cabs offers competitive pricing without compromising on comfort or safety. Get transparent fare breakdowns, zero hidden fees, and customized packages for one-way, round-trip, or airport drop cabs."
    },
    {
      "name": "Online cab from Pune to Mumbai",
      "description": "Book your Pune to Mumbai cab online with Deva Cabs in just a few clicks. Our user-friendly booking platform allows real-time confirmation, instant fare calculation, and multiple payment options. Choose your preferred car, set your pickup time, and enjoy a hassle-free booking experience."
    }
  ],
  "tableData": [
    ["Pune to Mumbai Cab", "-One-way cab Pune to Mumbai"],
    ["Pune to Mumbai taxi service", "-Round trip cab Pune to Mumbai"],
    ["AC cab hire Pune to Mumbai", "-SUV cab Pune to Mumbai"],
    ["Chauffeur-driven Pune to Mumbai taxi", "-Affordable Pune to Mumbai cab booking"],
    ["Online cab from Pune to Mumbai", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Pune to Mumbai Cab Service",
    "WhyChoosedescription": "Travel smoothly and comfortably between Pune and Mumbai with our dependable cab service. Whether you're commuting for business, visiting family, or embarking on a weekend getaway, our well-maintained vehicles and professional drivers ensure a stress-free journey along the busy Mumbai-Pune corridor."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for Every Group Size",
    "WhyChoosedescription": "Our fleet includes sedans, SUVs, and tempo travellers, offering ample legroom, comfortable seating, and sufficient luggage space for solo travelers, families, and groups. Each vehicle is equipped with air conditioning and ergonomic seats to make your 150 km trip enjoyable and relaxing."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Mumbai-Pune Routes",
    "WhyChoosedescription": "Our drivers are seasoned professionals who know the best routes, traffic patterns, and shortcuts between Pune and Mumbai. They prioritize your safety and punctuality, navigating through expressways and city traffic smoothly to get you to your destination on time."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Suit Your Travel Plans",
    "WhyChoosedescription": "Choose from hourly, one-way, or round-trip cab rentals based on your schedule. Whether you need a quick transfer or a day-long commute with multiple stops, our customizable packages offer convenience and affordability for all your travel needs."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "With clear, upfront pricing including tolls, fuel, and driver charges, there are no hidden costs or surprises. Our competitive rates ensure you get excellent value while enjoying a premium travel experience between Pune and Mumbai."
  },
  {
    "WhyChooseheading": "24/7 Availability for Your Convenience",
    "WhyChoosedescription": "No matter what time you plan to travel, our cab services operate round the clock. Early morning flights, late-night meetings, or weekend getaways—book your Pune to Mumbai cab anytime with ease and confidence."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Book your cab effortlessly through our website or customer support. Receive instant confirmation along with driver and vehicle details to ensure a seamless and hassle-free travel experience."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "Our vehicles undergo regular maintenance and sanitation, equipped with seat belts, GPS tracking, and emergency kits. Travel safely and comfortably between Pune and Mumbai, knowing your well-being is our priority."
  }
]













    }




const faqData = [
  {
    question: "Can I book a cab from Pune to Mumbai with Deva Cabs?",
    answer: "Yes, Deva Cabs offers convenient and reliable cab services from Pune to Mumbai for one-way and round-trip travel."
  },
  {
    question: "How long does it take to travel from Pune to Mumbai by cab?",
    answer: "The journey usually takes around 3 to 4 hours, depending on traffic and weather conditions."
  },
  {
    question: "What types of vehicles are available for the Pune to Mumbai route?",
    answer: "We offer a range of options including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit different travel needs."
  },
  {
    question: "Is one-way cab service available from Pune to Mumbai?",
    answer: "Yes, Deva Cabs provides both one-way and round-trip cab options from Pune to Mumbai."
  },
  {
    question: "Are tolls, parking, and driver allowance included in the fare?",
    answer: "These charges are usually extra and will be clearly communicated at the time of booking for transparency."
  },
  {
    question: "Can I schedule an early morning or late-night cab from Pune to Mumbai?",
    answer: "Yes, our services are available 24/7, so you can book a cab at any time that suits your schedule."
  },
  {
    question: "Is it safe to travel with Deva Cabs for long distances like Pune to Mumbai?",
    answer: "Absolutely. Our vehicles are well-maintained and our drivers are background-verified and trained for safe driving."
  },
  {
    question: "Can I stop en route for food or a break during the Pune to Mumbai trip?",
    answer: "Yes, you can request halts or short breaks during the journey. Just inform the driver or mention it while booking."
  },
  {
    question: "Is the service suitable for airport transfers from Pune to Mumbai?",
    answer: "Yes, we regularly provide airport pickup and drop services from Pune to Mumbai Airport with timely and punctual service."
  },
  {
    question: "Why choose Deva Cabs for Pune to Mumbai travel?",
    answer: "Deva Cabs ensures on-time pickup, professional drivers, clean cars, and competitive pricing for a stress-free journey."
  }
];

const testimonialData = [
  {
    id: 83,
    name: 'Mr. Rahul Shinde',
    role: 'Business Traveler',
    review: 'Deva Cabs got me to Mumbai Airport from Pune on time. Clean car, smooth ride, and very polite driver.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 84,
    name: 'Ms. Neha Kulkarni',
    role: 'Student',
    review: 'Booked a Pune to Mumbai cab with Deva Cabs. Very reliable service and good rates. Would definitely book again.',
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
            place: "/images/keyword/1.jpg",
            text: "Cab Service in Mumbai",
            link: "/Cab-Service-in-Mumbai"
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Cab Service in Navi Mumbai",
            link: "/Cab-Service-in-Navi-Mumbai"
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Cab Service in Thane",
            link: "/Cab-Service-in-Thane"
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Cab Service Near Me Mumbai",
            link: "/Cab-Service-Near-Me-Mumbai"
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Car Rental in Mumbai",
            link: "/Car-Rental-in-Mumbai"
        },
        {
            place: "/images/keyword/6.jpg",
            text: "Corporate Cab Services in Mumbai",
            link: "/Corporate-Cab-Services-in-Mumbai"
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Online Taxi Booking Mumbai",
            link: "/Online-Taxi-Booking-Mumbai"
        },
        {
            place: "/images/keyword/8.jpg",
            text: "Wedding Car Rental Mumbai",
            link: "/Wedding-Car-Rental-Mumbai"
        },
        {
            place: "/images/keyword/9.jpg",
            text: "Tempo Traveller on Rent in Mumbai",
            link: "/Tempo-Traveller-on-Rent-in-Mumbai"
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Innova Crysta on Rent in Mumbai",
            link: "/Innova-Crysta-on-Rent-in-Mumbai"
        },
        {
            place: "/images/keyword/11.jpg",
            text: "Ertiga on Rent in Mumbai",
            link: "/Ertiga-on-Rent-in-Mumbai"
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Mini Bus on Rent in Mumbai",
            link: "/Mini-Bus-on-Rent-in-Mumbai"
        },
        {
            place: "/images/keyword/13.jpg",
            text: "Mumbai Airport Cab Booking",
            link: "/Mumbai-Airport-Cab-Booking"
        },
        {
            place: "/images/keyword/14.jpg",
            text: "Navi Mumbai Car Rental Service",
            link: "/Navi-Mumbai-Car-Rental-Service"
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Mumbai Airport to Pune Cab",
            link: "/Mumbai-Airport-to-Pune-Cab"
        },
        {
            place: "/images/keyword/16.jpg",
            text: "Mumbai Airport to Shirdi Taxi",
            link: "/Mumbai-Airport-to-Shirdi-Taxi"
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Pune to Mumbai Airport Cab",
            link: "/Pune-to-Mumbai-Airport-Cab"
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Pune Airport to Mumbai Cab",
            link: "/Pune-Airport-to-Mumbai-Cab"
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Surat to Mumbai Airport Taxi",
            link: "/Surat-to-Mumbai-Airport-Taxi"
        },
        {
            place: "/images/keyword/20.jpg",
            text: "Nashik to Mumbai Airport Cab",
            link: "/Nashik-to-Mumbai-Airport-Cab"
        },
        {
            place: "/images/keyword/21.jpg",
            text: "Mumbai to Nashik Cab",
            link: "/Mumbai-to-Nashik-Cab"
        },
        {
            place: "/images/keyword/22.jpg",
            text: "Mumbai to Shirdi Cab",
            link: "/Mumbai-to-Shirdi-Cab"
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Mumbai to Lonavala Cab",
            link: "/Mumbai-to-Lonavala-Cab"
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Mumbai to Khandala Cab",
            link: "/Mumbai-to-Khandala-Cab"
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Mumbai to Lavasa Cab",
            link: "/Mumbai-to-Lavasa-Cab"
        },
        {
            place: "/images/keyword/26.jpg",
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
  "name": "Pune to Mumbai Cab",
  "image": "https://devacab.com/assets/images/pune-to-mumbai-cab.jpg", // Update with actual image URL
  "description": "Book affordable Pune to Mumbai cab online. Chauffeur-driven SUVs and AC cabs available for one-way and round trip journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "180",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1200",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/pune-to-mumbai-cab" // Update with actual URL
  }
};





    return (
        <div>

<Helmet>
  <title>Pune to Mumbai Cab | Book Taxi from Pune to Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Affordable Pune to Mumbai cab service with chauffeur-driven SUVs and AC cabs. Book one-way or round trip Pune to Mumbai taxi online."
  />
  <meta
    name="keywords"
    content="Pune to Mumbai Cab, One-way cab Pune to Mumbai, Pune to Mumbai taxi service, Round trip cab Pune to Mumbai, AC cab hire Pune to Mumbai, SUV cab Pune to Mumbai, Chauffeur-driven Pune to Mumbai taxi, Affordable Pune to Mumbai cab booking, Online cab from Pune to Mumbai"
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
                            <img src='/images/keyword/51.jpg' alt='img' />
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

export default Punetomumbaicab;