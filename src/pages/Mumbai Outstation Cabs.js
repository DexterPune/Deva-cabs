
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaioutstationcabs() {



    const cardData =
    {
        keyword: ' Mumbai Outstation Cabs',
        heading: 'Deva Cabs:  Mumbai Outstation Cabs',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free outstation cab services from Mumbai to destinations across Maharashtra and beyond. Whether you are heading to Pune, Nashik, Shirdi, Lonavala, Mahabaleshwar, Goa, or any other city, our well-maintained fleet and experienced drivers ensure a safe and relaxed journey. Ideal for family trips, pilgrimages, business travel, or weekend getaways, our outstation cabs offer flexible scheduling, one-way and round-trip options, and a variety of vehicle types. With transparent fares, door-to-door service, and 24/7 availability, Deva Cabs guarantees a smooth and convenient outstation travel experience from Mumba.',

        top: 'Top Places to Visit in Mumbai Outstation with Deva Cabs',

"topPlaces": [
  {
    "title": "Lonavala",
    "location": "Pune District, Maharashtra",
    "description": "Lonavala is a scenic hill station nestled in the Sahyadri range, just 85 km from Mumbai. Known for its misty mountains, waterfalls, and ancient caves like Bhaja and Karla, it offers a cool escape from city life. Key attractions include Tiger’s Leap, Bhushi Dam, Rajmachi Fort, and wax museums. It’s ideal for romantic getaways, monsoon treks, or family picnics, with ample resorts and cozy stays available."
  },
  {
    "title": "Mahabaleshwar",
    "location": "Satara District, Maharashtra",
    "description": "Situated about 260 km from Mumbai, Mahabaleshwar is a lush plateau filled with strawberry farms, valley viewpoints, and colonial charm. Popular sites include Venna Lake, Arthur’s Seat, Mapro Garden, and Pratapgad Fort. The cool climate and scenic drives make it a favorite outstation destination for nature lovers, honeymooners, and foodies alike. Don’t miss the fresh cream and berries!"
  },
  {
    "title": "Alibaug",
    "location": "Raigad District, Maharashtra",
    "description": "Alibaug is a coastal town about 95 km from Mumbai, famous for its clean beaches, seafood, and heritage forts. Accessible via ferry or road, it’s perfect for quick weekend trips. Popular beaches include Alibaug Beach, Nagaon, and Varsoli, while Kolaba Fort and Kankeshwar Temple add historical depth. Water sports, sea-view resorts, and beach camping make Alibaug a complete coastal retreat."
  },
  {
    "title": "Igatpuri",
    "location": "Nashik District, Maharashtra",
    "description": "Around 120 km from Mumbai, Igatpuri is a peaceful hill station surrounded by dense forests and waterfalls. It’s a top monsoon destination, with scenic treks like Kalsubai Peak and Bhatsa River Valley. Vipassana International Academy, a global meditation center, also attracts spiritual seekers. It’s great for nature walks, meditation retreats, and rain-soaked escapes."
  },
  {
    "title": "Matheran",
    "location": "Raigad District, Maharashtra",
    "description": "Matheran is India’s only automobile-free hill station, located 80 km from Mumbai. Known for its toy train, dense forests, and colonial-era charm, it features over 30 viewpoints including Panorama Point and Echo Point. Ideal for trekking, horseback rides, and heritage stays, it offers a peaceful retreat without traffic or noise. Accessible via a scenic drive or narrow-gauge rail."
  },
  {
    "title": "Shirdi",
    "location": "Ahmednagar District, Maharashtra",
    "description": "Shirdi, about 240 km from Mumbai, is a prominent pilgrimage town associated with Sai Baba. Devotees visit the Shirdi Sai Baba Samadhi Temple, Dwarkamai, and Chavadi in large numbers throughout the year. Well-connected by road and rail, Shirdi is ideal for religious travel, spiritual reflection, and weekend darshan trips from Mumbai with family."
  },
  {
    "title": "Panchgani",
    "location": "Satara District, Maharashtra",
    "description": "Located near Mahabaleshwar and 260 km from Mumbai, Panchgani is a hill town known for its boarding schools, colonial bungalows, and scenic beauty. The Table Land plateau, Sydney Point, and Parsi Point offer panoramic valley views. It’s a great stopover during Mahabaleshwar trips or for a peaceful holiday surrounded by strawberry farms and cool breezes."
  },
  {
    "title": "Lavasa",
    "location": "Pune District, Maharashtra",
    "description": "Lavasa is a planned hill city around 190 km from Mumbai, known for its European-style townscape set around a lake. It offers waterfront dining, kayaking, and adventure sports, making it ideal for leisure seekers and weekend explorers. The colorful buildings and misty hills create a resort-town atmosphere perfect for couples and families alike."
  },
  {
    "title": "Bhandardara",
    "location": "Ahmednagar District, Maharashtra",
    "description": "Bhandardara is a hidden gem located 165 km from Mumbai, known for its serene lakes, greenery, and trekking trails. Arthur Lake, Randha Falls, and Wilson Dam are key attractions. It’s perfect for stargazing, camping, and offbeat travel experiences. Ideal for couples and nature lovers seeking peaceful, crowd-free locations."
  },
  {
    "title": "Silvassa",
    "location": "Dadra and Nagar Haveli",
    "description": "About 170 km from Mumbai, Silvassa offers a unique blend of tribal heritage, gardens, and Portuguese architecture. Top attractions include the Tribal Cultural Museum, Vanganga Garden, and Dudhani Lake. It’s a relaxing destination with a blend of culture and nature, best for weekend cab rides or corporate retreats."
  }
],



 "services": [
    {
      "name": "Mumbai Outstation Cabs",
      "description": "Explore destinations outside Mumbai with Deva Cabs’ trusted outstation cab service. Whether it’s a business visit, weekend escape, family trip, or pilgrimage, we provide reliable and comfortable outstation taxi options to cities across Maharashtra and beyond. Choose from a wide range of vehicles including sedans, SUVs, and luxury cars — all driven by professional chauffeurs. Our Mumbai outstation cabs offer flexible scheduling, clean vehicles, 24/7 support, and competitive pricing. Enjoy a stress-free journey with on-time pick-up and smooth highway travel."
    },
    {
      "name": "Outstation Taxi Service Mumbai",
      "description": "Deva Cabs offers dependable outstation taxi service from Mumbai to popular destinations like Pune, Nashik, Lonavala, Mahabaleshwar, Shirdi, Goa, and more. Whether you need a one-way drop or a full round trip, we provide flexible travel solutions tailored to your schedule. Our drivers are experienced in long-distance travel, and our fleet is regularly maintained for your safety and comfort. Book easily online and travel without delays, detours, or worries."
    },
    {
      "name": "Book Outstation Cab from Mumbai",
      "description": "Booking an outstation cab from Mumbai has never been easier. With Deva Cabs, you can choose your destination, select your preferred vehicle type, and confirm your trip in minutes. We specialize in door-to-door intercity cab services that ensure a smooth journey from start to finish. Whether you're traveling for work, leisure, or personal commitments, our booking process is seamless, transparent, and backed by dedicated customer support."
    },
    {
      "name": "One Way Outstation Cab Mumbai",
      "description": "Travel one way from Mumbai to any nearby city without paying return charges. Deva Cabs offers economical one-way outstation taxi service from Mumbai to hundreds of locations including Surat, Ahmedabad, Aurangabad, Kolhapur, and more. Our drivers will drop you at your destination safely and return, so you only pay for your journey — no hidden fees, no extra charges. Choose from a variety of cab types to suit your comfort and budget."
    },
    {
      "name": "Round Trip Outstation Cab Mumbai",
      "description": "Planning to return the same day or after a short stay? Our round trip outstation cabs from Mumbai are the ideal solution. Enjoy the convenience of keeping the same vehicle and driver for your return trip, without worrying about availability. Deva Cabs offers full and half-day round trip packages to destinations across Maharashtra and neighboring states. Travel on your terms, with flexible return timing and courteous service."
    },
    {
      "name": "SUV Outstation Cab Hire Mumbai",
      "description": "Need more space and power for your outstation trip? Book our SUV outstation cabs from Mumbai for group travel, family vacations, or road trips. Our SUVs offer ample legroom, luggage space, and smooth rides on highways or hilly roads. Ideal for long journeys, our SUV cabs are driven by professionals who prioritize your comfort and safety. Book your SUV cab online today and enjoy your trip without compromise."
    },
    {
      "name": "Luxury Outstation Cab Mumbai",
      "description": "Travel in unmatched style with Deva Cabs’ luxury outstation car rentals from Mumbai. Perfect for corporate trips, VIP guests, or special occasions, our luxury fleet includes high-end sedans and SUVs. Enjoy plush interiors, courteous chauffeurs, on-time service, and premium travel comfort. Make your journey just as memorable as your destination with our luxury outstation cab service."
    },
    {
      "name": "Affordable Outstation Taxi Mumbai",
      "description": "Deva Cabs is committed to making long-distance travel affordable without compromising on service. Our budget-friendly outstation taxi services from Mumbai are priced transparently with no hidden fees. Choose from a range of AC sedans, hatchbacks, and economy cars to reach your destination comfortably while staying within budget. Get instant fare quotes and book your affordable outstation ride with ease."
    },
    {
      "name": "Chauffeur-driven Outstation Car Mumbai",
      "description": "Relax and enjoy the journey with our chauffeur-driven outstation car rental service in Mumbai. Our drivers are trained, background-verified, and well-versed with intercity routes. Whether you’re headed for a holiday or a business meeting, our chauffeurs ensure a smooth, professional travel experience. Our cabs come equipped with AC, clean seating, and essentials for a comfortable journey."
    },
    {
      "name": "Online Outstation Cab Booking Mumbai",
      "description": "Avoid last-minute hassles and book your outstation cab online with Deva Cabs. Our easy-to-use platform lets you select trip type (one way or round trip), pickup location, destination, and car model — all in a few clicks. Receive instant confirmation, accurate fare estimates, and driver details. With real-time tracking, 24/7 customer support, and multiple payment options, we make online cab booking simple and secure."
    },
    {
      "name": "Family Cab for Outstation Mumbai",
      "description": "Planning a family getaway? Deva Cabs offers spacious and comfortable family cabs for outstation trips from Mumbai. Choose from sedans, SUVs, or tempo travellers depending on your group size. Our drivers are courteous and attentive to family travel needs, and we ensure your cab is equipped for a relaxed and safe journey. Trust Deva Cabs for a reliable, clean, and enjoyable travel experience for the whole family."
    },
    {
      "name": "Premium Outstation Taxi Mumbai",
      "description": "For those who seek extra comfort and a touch of class, our premium outstation taxi service from Mumbai is the right choice. Featuring top-tier vehicles with luxurious interiors, professional drivers, and on-time performance, Deva Cabs delivers a superior travel experience. Book a premium cab for business travel, weekend escapes, or special occasions and enjoy the best in class service."
    }
  ],
  "tableData": [
    ["Mumbai Outstation Cabs", "-Outstation Taxi Service Mumbai"],
    ["Book Outstation Cab from Mumbai", "-One Way Outstation Cab Mumbai"],
    ["Round Trip Outstation Cab Mumbai", "-SUV Outstation Cab Hire Mumbai"],
    ["Luxury Outstation Cab Mumbai", "-Affordable Outstation Taxi Mumbai"],
    ["Chauffeur-driven Outstation Car Mumbai", "-Online Outstation Cab Booking Mumbai"],
    ["Family Cab for Outstation Mumbai", "-Premium Outstation Taxi Mumbai"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Outstation Cab Service from Mumbai",
    "WhyChoosedescription": "Deva Cabs provides dependable and timely outstation cab services from Mumbai to various popular destinations like Pune, Lonavala, Nashik, Shirdi, Aurangabad, and more. Our professional drivers ensure that your journey is smooth, comfortable, and on schedule, no matter the distance."
  },
  {
    "WhyChooseheading": "Wide Range of Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a fleet of sedans, SUVs, and premium cars that are regularly serviced and sanitized. Whether you’re traveling solo, with family, or in a group, our vehicles offer ample space, air conditioning, and modern amenities for a relaxing outstation journey."
  },
  {
    "WhyChooseheading": "Experienced and Knowledgeable Drivers",
    "WhyChoosedescription": "Our drivers are familiar with major routes and destinations outside Mumbai, ensuring efficient navigation and safe driving. Courteous and professional, they assist with luggage and provide a stress-free travel experience throughout your trip."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "Deva Cabs offers clear, upfront pricing for outstation trips with no hidden fees or surge charges. Receive detailed fare estimates before booking, so you can plan your travel budget with confidence."
  },
  {
    "WhyChooseheading": "Flexible Booking Options for Outstation Travel",
    "WhyChoosedescription": "Book one-way, round-trip, or hourly packages tailored to your travel needs. Whether it’s a business trip, family vacation, or a weekend getaway, our flexible packages ensure your itinerary is fully supported."
  },
  {
    "WhyChooseheading": "24/7 Availability for Outstation Cabs",
    "WhyChoosedescription": "No matter the time or day, our outstation cabs are ready to serve you. Early morning departures or late-night arrivals are handled with equal care, ensuring your trip begins and ends on a positive note."
  },
  {
    "WhyChooseheading": "Easy Booking with Real-Time Tracking",
    "WhyChoosedescription": "Use our mobile app, website, or call center to book your outstation cab quickly. Track your driver’s location in real-time and receive instant ride confirmations for a transparent and hassle-free experience."
  },
  {
    "WhyChooseheading": "Customer Support for a Smooth Journey",
    "WhyChoosedescription": "Our dedicated support team is available round the clock to assist with bookings, route queries, and any special requirements, making your outstation travel comfortable and worry-free."
  }
]














    }




const faqData = [
  {
    question: "Does Deva Cabs provide outstation cab services from Mumbai?",
    answer: "Yes, Deva Cabs offers reliable and comfortable outstation cab services from Mumbai to a wide range of destinations. You can book via our website, mobile app, or by contacting customer support."
  },
  {
    question: "Which cities can I travel to using Deva Cabs' outstation service from Mumbai?",
    answer: "You can book outstation cabs from Mumbai to Pune, Lonavala, Nashik, Shirdi, Mahabaleshwar, Goa, Ahmedabad, Surat, Bangalore, and many other cities across India."
  },
  {
    question: "Can I choose between one-way and round-trip outstation cabs from Mumbai?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip outstation cab options to give you maximum flexibility for your travel plans."
  },
  {
    question: "What types of vehicles are available for outstation trips from Mumbai?",
    answer: "We offer a wide variety of vehicles including hatchbacks, sedans, SUVs, tempo travellers, and premium cars depending on your travel needs and group size."
  },
  {
    question: "How are fares calculated for outstation cab bookings from Mumbai?",
    answer: "Fares are based on distance, vehicle type, duration, tolls, and any extra charges for night travel or driver allowances. You can get an instant quote on our booking platform."
  },
  {
    question: "Is it safe to travel outstation with Deva Cabs from Mumbai?",
    answer: "Absolutely. All our outstation cabs are GPS-enabled and driven by experienced, verified drivers. We prioritize your comfort and safety on long journeys."
  },
  {
    question: "Can I schedule my outstation cab in advance?",
    answer: "Yes, we highly recommend pre-booking your outstation cab in advance to ensure vehicle availability and best pricing."
  },
  {
    question: "What payment methods are accepted for Mumbai outstation cab bookings?",
    answer: "We accept cash, credit/debit cards, UPI, and online payments through our secure mobile app or website."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Manish Rane',
    role: 'Business Traveler',
    review: 'I booked an outstation cab from Mumbai to Pune with Deva Cabs. The experience was flawless — clean car, professional driver, and on-time service. Highly recommended!',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Aarti Bhosale',
    role: 'Leisure Traveler',
    review: 'Used Deva Cabs for a weekend getaway from Mumbai to Mahabaleshwar. Booking was easy and the ride was very comfortable. Will definitely use them for future trips!',
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
  "name": "Mumbai Outstation Cabs",
  "image": "https://devacab.com/assets/images/mumbai-outstation-cabs.jpg", // Replace with actual image URL
  "description": "Book reliable Mumbai outstation cabs with Deva Cabs. One-way and round trip taxi service with AC sedans, SUVs, luxury cars, and chauffeur-driven options. Affordable fares and convenient online booking for family, corporate, and leisure travel.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "4200"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2499", // Example starting fare, update as needed
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-outstation-cabs" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Mumbai Outstation Cabs | One-Way & Round Trip Taxi from Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Book Mumbai outstation cabs with Deva Cabs. Affordable one-way and round trip taxis with AC sedans, SUVs, and luxury options. Chauffeur-driven cars for family, corporate, and weekend travel. Instant online booking."
  />
  <meta
    name="keywords"
    content="Mumbai Outstation Cabs, Outstation taxi service Mumbai, Book outstation cab from Mumbai, One way outstation cab Mumbai, Round trip outstation cab Mumbai, SUV outstation cab hire Mumbai, Luxury outstation cab Mumbai, Affordable outstation taxi Mumbai, Chauffeur-driven outstation car Mumbai, Online outstation cab booking Mumbai, Family cab for outstation Mumbai, Premium outstation taxi Mumbai"
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
                            <img src='./images/keyword/72.jpg' alt='img' />
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

export default Mumbaioutstationcabs;