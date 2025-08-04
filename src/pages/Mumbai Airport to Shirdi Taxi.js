
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';
import Mumbaiairportcabbooking from './Mumbai Airport Cab Booking';


function Mumbaiairporttoshirditaxi() {



    const cardData =
    {
        keyword: ' Mumbai Airport to Shirdi Taxi   ',
        heading: 'Deva Cabs: Mumbai Airport to Shirdi Taxi      ',
        headingDescription: 'Deva Cabs offers reliable and comfortable taxi services from Mumbai Airport to Shirdi, perfect for pilgrimage tours and family travel. Covering a distance of around 240 km, our well-maintained taxis ensure a smooth and serene journey to the holy town of Shirdi. Whether you’re traveling solo or with a group, we provide a variety of vehicle options including Sedans, SUVs, and Innova Crysta. With courteous drivers, on-time pickups, and fixed fares, Deva Cabs makes your spiritual journey hassle-free.',

        top: 'Top Places to Visit in Shirdi with Deva Cabs',

"topPlaces": [
  {
    "title": "Shirdi Sai Baba Samadhi Mandir",
    "location": "Shirdi, Maharashtra",
    "description": "The Samadhi Mandir is the main temple in Shirdi and the final resting place of Shri Sai Baba. Constructed from white marble, the temple houses a beautifully carved idol of Sai Baba seated over his tomb. Devotees from all over the world visit this sacred site to offer prayers, participate in aarti, and experience divine peace. It is the spiritual heart of Shirdi and the most visited attraction in the town."
  },
  {
    "title": "Dwarkamai",
    "location": "Shirdi, Maharashtra",
    "description": "Dwarkamai is the mosque where Sai Baba spent a significant part of his life. It houses sacred items like Baba's stone seat, his grinding stone, and the sacred fire (dhuni) which still burns today. The place exudes divine energy and historical importance, drawing pilgrims who wish to witness the humble setting of Sai Baba’s miracles and teachings."
  },
  {
    "title": "Chavadi",
    "location": "Shirdi, Maharashtra",
    "description": "Chavadi is a revered building where Sai Baba used to sleep every alternate night during the later years of his life. The site is now preserved with photographs, his wooden bed, and other relics. On Thursdays, a ceremonial procession carries Baba's portrait from Dwarkamai to Chavadi, recreating the same tradition with great devotion."
  },
  {
    "title": "Shri Sai Baba Sansthan Trust",
    "location": "Shirdi, Maharashtra",
    "description": "The Shri Sai Baba Sansthan Trust is the official organization that manages all the spiritual and infrastructural activities in Shirdi. The complex includes the main temple, prasadalaya (dining hall), accommodation facilities, hospitals, and donation counters. It ensures a smooth and spiritual experience for all pilgrims visiting Shirdi."
  },
  {
    "title": "Sai Heritage Village",
    "location": "Shirdi, Maharashtra",
    "description": "Sai Heritage Village is a themed museum and park that portrays the life and times of Sai Baba through life-sized statues, village scenes, and traditional settings. It offers an informative and visual journey of Baba’s life, ideal for children and families who wish to understand the history and culture of the time."
  },
  {
    "title": "Lendi Baug",
    "location": "Shirdi, Maharashtra",
    "description": "Lendi Baug is a serene garden where Sai Baba used to meditate and water plants daily. The place houses the Nanda Deep lamp which Baba kept lit under a Peepal tree, and it still continues to burn today. The garden is peaceful and ideal for meditation and reflection amidst nature."
  },
  {
    "title": "Khandoba Mandir",
    "location": "Shirdi, Maharashtra",
    "description": "Khandoba Mandir is a small yet significant temple dedicated to Lord Khandoba, where Sai Baba was first welcomed into Shirdi by Mahalsapati with the words 'Aao Sai'. The temple is closely associated with the saint’s arrival and holds a special spiritual aura for devotees tracing his early steps in the town."
  },
  {
    "title": "Wet N Joy Water Park",
    "location": "Shirdi, Maharashtra",
    "description": "Located just a few minutes from the Sai Temple, Wet N Joy is a fun-filled water park perfect for families and children visiting Shirdi. With thrilling water rides, wave pools, and kid zones, it offers a refreshing break from spiritual sightseeing. It’s a great blend of devotion and recreation in one trip."
  },
  {
    "title": "Sai Teerth Theme Park",
    "location": "Shirdi, Maharashtra",
    "description": "Sai Teerth is India’s first devotional theme park dedicated to Sai Baba’s life and teachings. It features attractions like a 5D show, animatronics-based storytelling, a train ride through key spiritual locations, and replicas of sacred temples. The park offers an immersive, modern way to experience the spiritual journey of Sai Baba."
  },
  {
    "title": "Upasani Maharaj Ashram",
    "location": "Shirdi, Maharashtra",
    "description": "Upasani Maharaj Ashram is the resting place of one of Sai Baba’s key disciples. Located close to the main temple, the ashram is calm and spiritual, housing Samadhis and relics of Upasani Maharaj. Devotees interested in the extended teachings and lineage of Sai Baba often visit this peaceful ashram."
  }
],



"services": [
  {
    "name": "Mumbai Airport to Shirdi Taxi",
    "description": "Deva Cabs offers convenient and comfortable taxi services from Mumbai Airport to Shirdi, perfect for pilgrims and travelers visiting the famous Sai Baba temple. Our taxis are well-maintained, air-conditioned, and driven by experienced chauffeurs who ensure a safe and smooth journey. With real-time flight tracking, your driver will be ready to pick you up promptly from Mumbai International or Domestic Airport. Enjoy ample legroom, luggage space, and competitive pricing for one-way or round-trip travel."
  },
  {
    "name": "Taxi from Mumbai T2 to Shirdi",
    "description": "Travel from Mumbai’s Terminal 2 to Shirdi effortlessly with Deva Cabs. Our professional drivers monitor flight arrivals to provide timely pickups right at the airport terminal. Choose from a fleet of sedans, SUVs, and luxury cars, all equipped with AC and comfortable seating to make your pilgrimage or leisure trip enjoyable. Whether you’re traveling solo or with family, our T2 to Shirdi taxi service offers transparent pricing and reliable, door-to-door transfers."
  },
  {
    "name": "Mumbai Airport to Shirdi cab booking",
    "description": "Booking a cab from Mumbai Airport to Shirdi is quick and easy with Deva Cabs’ online platform. Select your preferred vehicle type, enter your travel dates, and receive instant confirmation. Our extensive fleet includes economy cars, spacious SUVs, and premium vehicles tailored to your budget and comfort preferences. Our courteous chauffeurs ensure a pleasant journey across the expressway, with regular vehicle sanitation for your safety."
  },
  {
    "name": "Affordable Shirdi cab from Mumbai Airport",
    "description": "For travelers seeking affordable cab services from Mumbai Airport to Shirdi, Deva Cabs offers competitive rates without compromising on comfort or safety. Choose budget-friendly sedans or hatchbacks with air-conditioning for a cost-effective pilgrimage ride. We maintain transparent pricing with no hidden fees, and our drivers prioritize punctuality and professional service to ensure you reach Shirdi on time and within your budget."
  },
  {
    "name": "AC taxi Mumbai Airport to Shirdi",
    "description": "Beat the heat and enjoy a cool, comfortable ride with our fully air-conditioned taxi services from Mumbai Airport to Shirdi. Our AC taxis provide a relaxing environment with well-maintained cooling systems, spacious seating, and smooth suspension for long-distance travel. Ideal for all weather conditions, our AC taxi fleet includes sedans and SUVs, ensuring you arrive refreshed and ready to explore the spiritual city."
  },
  {
    "name": "Mumbai International Airport to Shirdi taxi",
    "description": "Deva Cabs specializes in airport transfers from Mumbai International Airport to Shirdi with a variety of vehicle options to suit every traveler’s needs. Our experienced drivers are familiar with the route and terrain, ensuring a safe and timely journey. We offer one-way and round-trip services with door-to-door convenience, modern vehicles, and real-time flight tracking to handle any changes in your arrival time."
  },
  {
    "name": "Mumbai domestic airport to Shirdi cab",
    "description": "Passengers arriving at Mumbai’s domestic terminal can rely on Deva Cabs for timely and comfortable cab services to Shirdi. Our drivers assist with luggage and provide courteous service while our vehicles are sanitized and air-conditioned for your health and comfort. Choose from sedans, SUVs, or luxury cars based on your group size and preferences. Flexible booking and transparent fares make your domestic terminal to Shirdi transfer hassle-free."
  },
  {
    "name": "Luxury taxi Mumbai Airport to Shirdi",
    "description": "Experience premium travel with Deva Cabs’ luxury taxi service from Mumbai Airport to Shirdi. Our fleet includes top-tier vehicles like Mercedes, BMW, and Audi, offering plush interiors, advanced climate control, and entertainment systems. Ideal for VIP travelers, corporate guests, or special occasions, our luxury taxis ensure privacy, comfort, and impeccable service. Chauffeurs are professionally trained to provide discreet and courteous rides for a truly indulgent journey."
  },
  {
    "name": "One-way Shirdi taxi from Mumbai Airport",
    "description": "Deva Cabs provides convenient one-way taxi services from Mumbai Airport to Shirdi for travelers who require direct, efficient transport. Our fixed-rate one-way trips come with no hidden fees, punctual pickups, and professional drivers. Select from sedans or SUVs that offer ample space for passengers and luggage. Perfect for solo travelers, families, and groups seeking hassle-free airport transfers to Shirdi’s spiritual destination."
  },
  {
    "name": "Online Shirdi cab booking Mumbai Airport",
    "description": "Booking your Shirdi cab from Mumbai Airport online has never been easier with Deva Cabs. Our user-friendly website and mobile app allow you to select vehicle types, schedule pick-up times, and receive instant booking confirmation. Our secure payment gateways support multiple payment methods, including cards and wallets. Enjoy real-time flight tracking, driver details, and 24/7 customer support, ensuring a smooth and worry-free start to your Shirdi pilgrimage."
  },
  {
    "name": "SUV taxi to Shirdi from Mumbai Airport",
    "description": "Travel comfortably in a spacious and reliable SUV taxi from Mumbai Airport to Shirdi with Deva Cabs. Our SUVs like Toyota Innova and Mahindra XUV provide ample legroom, reclining seats, and generous luggage capacity—ideal for families, group travelers, and pilgrims. Equipped with air-conditioning and modern amenities, our SUVs guarantee a smooth ride on the expressway. Our professional chauffeurs prioritize safety, timely arrivals, and courteous service."
  },
  {
    "name": "Airport to Shirdi round trip cab",
    "description": "Plan your entire Shirdi pilgrimage with Deva Cabs’ airport to Shirdi round trip cab services. Enjoy the convenience of having a dedicated driver waiting for your return journey, eliminating any last-minute travel worries. Our round-trip packages include comfortable vehicles, flexible scheduling, and competitive rates. Perfect for families and groups, this service ensures you can focus on your spiritual experience while we handle all transportation logistics professionally."
  },
  {
    "name": "Family cab Mumbai Airport to Shirdi",
    "description": "Deva Cabs provides family-friendly cab services from Mumbai Airport to Shirdi with spacious vehicles, child-friendly amenities, and courteous drivers. Our sedans and SUVs comfortably accommodate families of various sizes, offering ample luggage space and a smooth ride. Safety features such as seat belts and child locks are standard. Traveling with Deva Cabs guarantees a stress-free and enjoyable trip for your entire family to the sacred city of Shirdi."
  },
  {
    "name": "24x7 Shirdi taxi from Mumbai Airport",
    "description": "No matter when your flight lands, Deva Cabs offers 24x7 Shirdi taxi services from Mumbai Airport. Our round-the-clock availability ensures you have a dependable ride regardless of early morning or late-night arrivals. Our drivers are well-rested, experienced, and familiar with night driving conditions. Benefit from instant booking confirmations, flexible payment options, and seamless customer support at any hour for uninterrupted travel convenience."
  },
  {
    "name": "Chauffeur-driven cab Mumbai to Shirdi from airport",
    "description": "Experience premium chauffeur-driven cab services from Mumbai Airport to Shirdi with Deva Cabs. Our professional drivers provide courteous, safe, and personalized service, assisting you throughout your journey. Vehicles are modern, air-conditioned, and equipped with all necessary amenities for a comfortable ride. Ideal for corporate travelers, VIP guests, and families, our chauffeur-driven service adds an extra layer of luxury, reliability, and peace of mind to your pilgrimage or trip."
  }
],
"tableData": [
  ["Mumbai Airport to Shirdi Taxi", "-Taxi from Mumbai T2 to Shirdi"],
  ["Mumbai Airport to Shirdi cab booking", "-Affordable Shirdi cab from Mumbai Airport"],
  ["AC taxi Mumbai Airport to Shirdi", "-Mumbai International Airport to Shirdi taxi"],
  ["Mumbai domestic airport to Shirdi cab", "-Luxury taxi Mumbai Airport to Shirdi"],
  ["One-way Shirdi taxi from Mumbai Airport", "-Online Shirdi cab booking Mumbai Airport"],
  ["SUV taxi to Shirdi from Mumbai Airport", "-Airport to Shirdi round trip cab"],
  ["Family cab Mumbai Airport to Shirdi", "-24x7 Shirdi taxi from Mumbai Airport"],
  ["Chauffeur-driven cab Mumbai to Shirdi from airport", ""]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable and Timely Mumbai Airport to Shirdi Transfers",
    "WhyChoosedescription": "We ensure punctual pickups from Mumbai Airport to Shirdi, helping you reach your destination on time without any stress."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles",
    "WhyChoosedescription": "Our well-maintained taxis provide ample space and comfort, making the long journey from Mumbai Airport to Shirdi relaxing and enjoyable."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Knowledge of Routes",
    "WhyChoosedescription": "Our professional drivers are familiar with the best routes from Mumbai Airport to Shirdi, ensuring a safe and efficient trip."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "We offer competitive rates with no hidden charges for your Mumbai Airport to Shirdi taxi service, allowing you to travel worry-free."
  },
  {
    "WhyChooseheading": "24/7 Availability for All Flight Timings",
    "WhyChoosedescription": "Whether your flight lands early morning or late at night, our taxis are available round the clock to accommodate your schedule."
  },
  {
    "WhyChooseheading": "Easy Booking and Customer Support",
    "WhyChoosedescription": "Book your Mumbai Airport to Shirdi taxi easily through our website or customer support, ready to assist you at any time."
  },
  {
    "WhyChooseheading": "Safety and Security Priority",
    "WhyChoosedescription": "Our vehicles undergo regular maintenance and are equipped with safety features, including seat belts and GPS tracking, for a secure journey."
  },
  {
    "WhyChooseheading": "Personalized Service for a Comfortable Ride",
    "WhyChoosedescription": "We prioritize your comfort with clean vehicles and courteous drivers, making your Mumbai Airport to Shirdi trip smooth and hassle-free."
  }
]













    }










const faqData = [
  {
    question: "Can I book a taxi from Mumbai Airport to Shirdi with Deva Cabs?",
    answer: "Yes, Deva Cabs provides comfortable and reliable taxi services from Mumbai Airport to Shirdi, available at all hours."
  },
  {
    question: "How far is Shirdi from Mumbai Airport by taxi?",
    answer: "The distance is approximately 240 km, and the journey usually takes around 5 to 6 hours depending on traffic and road conditions."
  },
  {
    question: "What types of taxis are available for the Mumbai Airport to Shirdi route?",
    answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, Ertiga, and tempo travellers for group travel."
  },
  {
    question: "Is one-way taxi service available from Mumbai Airport to Shirdi?",
    answer: "Yes, Deva Cabs offers convenient and affordable one-way taxi services with no extra return fare."
  },
  {
    question: "Can I book a taxi in advance for pickup from Mumbai Airport?",
    answer: "Absolutely. You can pre-book your taxi via our website, app, or by calling our customer support team for scheduled pickups."
  },
  {
    question: "Do your drivers know the Shirdi route well?",
    answer: "Yes, our drivers are experienced and familiar with the Mumbai–Shirdi route to ensure a smooth and safe journey."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll and parking charges are usually additional and will be clearly communicated at the time of booking."
  },
  {
    question: "Is the taxi service available late night or early morning?",
    answer: "Yes, our Mumbai Airport to Shirdi taxi service operates 24/7, perfect for early morning or late-night arrivals."
  },
  {
    question: "Is the taxi ride safe for solo travelers and families?",
    answer: "Definitely. All our drivers are verified and trained to ensure safety and comfort for all passengers."
  },
  {
    question: "Why choose Deva Cabs for Mumbai Airport to Shirdi travel?",
    answer: "Deva Cabs offers reliable service, clean and comfortable vehicles, courteous drivers, and transparent pricing for worry-free travel to Shirdi."
  }
];

const testimonialData = [
  {
    id: 15,
    name: 'Mrs. Sunita Kulkarni',
    role: 'Pilgrim',
    review: 'We booked a taxi from Mumbai Airport to Shirdi with Deva Cabs. The vehicle was clean, driver was respectful, and the journey was smooth. Very satisfied.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 16,
    name: 'Mr. Ramesh Iyer',
    role: 'Senior Citizen',
    review: 'Deva Cabs made my Shirdi trip from Mumbai Airport very comfortable. The driver was patient and helpful throughout. Great service for elderly travelers.',
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
  "name": "Mumbai Airport to Shirdi Taxi",
  "image": "https://devacab.com/assets/images/mumbai-airport-to-shirdi-taxi.jpg", // Replace with actual image URL
  "description": "Book affordable and comfortable taxis from Mumbai Airport (T2) to Shirdi with Deva Cabs. Choose from AC, SUV, luxury, and chauffeur-driven options for one-way or round trips with 24x7 availability.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "1500"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-airport-to-shirdi-taxi" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Mumbai Airport to Shirdi Taxi | Affordable & 24x7 Cab Service | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai Airport to Shirdi taxi with Deva Cabs. Affordable, AC, SUV, luxury, and chauffeur-driven cabs available for one-way and round trips. 24x7 online booking and reliable service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Airport to Shirdi Taxi, Taxi from Mumbai T2 to Shirdi, Mumbai Airport to Shirdi cab booking, Affordable Shirdi cab from Mumbai Airport, AC taxi Mumbai Airport to Shirdi, Mumbai International Airport to Shirdi taxi, Mumbai domestic airport to Shirdi cab, Luxury taxi Mumbai Airport to Shirdi, One-way Shirdi taxi from Mumbai Airport, Online Shirdi cab booking Mumbai Airport, SUV taxi to Shirdi from Mumbai Airport, Airport to Shirdi round trip cab, Family cab Mumbai Airport to Shirdi, 24x7 Shirdi taxi from Mumbai Airport, Chauffeur-driven cab Mumbai to Shirdi from airport" 
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
                            <img src='/images/keyword/16.jpg' alt='img' />
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

export default Mumbaiairporttoshirditaxi;