
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitokonkancab() {



    const cardData =
    {
        keyword: ' Mumbai to Konkan Cab',
        heading: 'Deva Cabs:  Mumbai to Konkan Cab',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free cab services from Mumbai to Konkan. Whether you are planning a coastal vacation, visiting family, or heading home for the holidays, our experienced drivers and well-maintained fleet ensure a safe and scenic journey along Maharashtra’s western coastline. Konkan’s lush greenery, pristine beaches, and cultural richness make it a favorite getaway, and we make sure you get there stress-free. With a wide range of vehicle options suited for long drives, Deva Cabs guarantees a smooth and comfortable travel experience from Mumbai to Konkan every time.',

        top: 'Top Places to Visit in Konkan with Deva Cabs',

  "topPlaces": [
  {
    "title": "Ganpatipule Beach",
    "location": "Ratnagiri, Konkan, Maharashtra",
    "description": "Ganpatipule Beach is a pristine stretch of white sand lined with palm trees, famous for its serene ambiance and the ancient Swayambhu Ganpati Temple. Unlike commercialized beaches, it offers a spiritual and peaceful escape. The nearby Jaigad Fort and lighthouse also attract history lovers. It's an ideal destination for pilgrims, families, and beach lovers looking for a tranquil coastal experience."
  },
  {
    "title": "Tarkarli Beach",
    "location": "Sindhudurg, Konkan, Maharashtra",
    "description": "Tarkarli is known for its crystal-clear waters, coral reefs, and thrilling water sports like snorkeling and scuba diving. Located near the historic Sindhudurg Fort, the beach offers a mix of relaxation and adventure. With homestays and local seafood delights, Tarkarli is a favorite for couples, water enthusiasts, and offbeat travelers exploring the coastal beauty of Konkan."
  },
  {
    "title": "Alibaug Beach",
    "location": "Raigad, Konkan, Maharashtra",
    "description": "A popular weekend getaway from Mumbai, Alibaug Beach is known for its scenic shoreline, beachside forts, and vibrant local markets. The beach offers horse-cart rides, parasailing, and views of the iconic Kolaba Fort. It's ideal for day trips or overnight stays, blending history, leisure, and coastal charm all in one destination."
  },
  {
    "title": "Murud-Janjira Fort",
    "location": "Murud, Raigad, Konkan, Maharashtra",
    "description": "Murud-Janjira Fort is a majestic sea fort located off the Arabian Sea, accessible only by boat. Known for its unconquerable walls and historical significance, the fort offers panoramic ocean views and fascinating architecture. A must-visit for history buffs and photographers, it's one of Konkan’s most iconic heritage sites."
  },
  {
    "title": "Velas Beach",
    "location": "Ratnagiri, Konkan, Maharashtra",
    "description": "Velas is a small coastal village known for its annual Olive Ridley turtle festival. The beach is tranquil, clean, and perfect for witnessing turtle hatchlings during the nesting season. Supported by eco-tourism initiatives, Velas offers a rare blend of conservation, village culture, and beach relaxation. It’s ideal for nature lovers and families."
  },
  {
    "title": "Devgad Fort and Beach",
    "location": "Sindhudurg, Konkan, Maharashtra",
    "description": "Devgad Beach is famous for its pristine coastline and the nearby Devgad Fort perched on a cliff. The area is also known for its Alphonso mango orchards. Visitors can enjoy scenic views, explore historic ruins, and relax amidst coconut groves. It’s a peaceful, less crowded alternative to mainstream beaches."
  },
  {
    "title": "Malvan",
    "location": "Sindhudurg, Konkan, Maharashtra",
    "description": "Malvan is a cultural and culinary hotspot in Konkan, known for its Malvani cuisine, Tarkarli beach, and the nearby Sindhudurg Fort. Tourists can enjoy water activities, boat rides, and savor authentic seafood. It’s a perfect blend of nature, adventure, and local tradition, making it a top pick for coastal tourism."
  },
  {
    "title": "Harihareshwar Temple and Beach",
    "location": "Raigad, Konkan, Maharashtra",
    "description": "Often called the 'Kashi of the South,' Harihareshwar is a spiritual destination flanked by four hills and a scenic beach. The Shiva temple complex attracts devotees year-round. The beach is less crowded and ideal for a peaceful retreat or a spiritual vacation in the lap of nature."
  },
  {
    "title": "Anjarle Beach",
    "location": "Ratnagiri, Konkan, Maharashtra",
    "description": "Anjarle is a hidden gem in Konkan with clean sands, turquoise waters, and a peaceful environment. It is famous for the ancient Kadyawarcha Ganpati temple and the seasonal turtle nesting. With minimal commercial activity, it’s perfect for offbeat travelers and those seeking solitude."
  },
  {
    "title": "Shrivardhan Beach",
    "location": "Raigad, Konkan, Maharashtra",
    "description": "Shrivardhan Beach is a calm and scenic destination ideal for long walks, sunsets, and peaceful getaways. With its historical significance as the hometown of the Peshwas, it offers both cultural and leisure value. It's popular among weekend travelers and beachside homestay lovers."
  }
],



"services": [
    {
        "name": "Thane to Pune Cab",
        "description": "Travel conveniently from Thane to Pune with Deva Cabs' premium intercity taxi service. Our Thane to Pune cab service is ideal for business trips, family travel, or weekend getaways. We offer a wide range of vehicles, including sedans, SUVs, and tempo travellers, ensuring the perfect ride for every group size. Our professional drivers are punctual and experienced in highway travel, providing a safe, smooth journey. With transparent pricing, clean vehicles, and 24/7 customer support, Deva Cabs ensures your Pune trip starts on the right note from Thane."
    },
    {
        "name": "Cab Booking in Thane Made Easy",
        "description": "At Deva Cabs, we’ve simplified cab booking in Thane for your convenience. Whether you need a cab for a short trip, a full day of errands, or a long-distance journey, our seamless online booking system allows you to reserve your ride in just a few clicks. Choose your vehicle type, set your schedule, and relax — our team handles the rest. Our fleet is regularly serviced, and our drivers are background-verified to ensure a safe and reliable experience every time you ride with us in Thane."
    },
    {
        "name": "Car Rental in Thane for Outstation Adventures",
        "description": "Planning an outstation trip from Thane? Deva Cabs offers flexible and affordable car rental options perfect for weekend escapes, pilgrimages, or long holidays. Whether you're heading to Lonavala, Goa, Nashik, or beyond, our outstation rental service ensures a comfortable and enjoyable journey. With a wide variety of well-maintained vehicles, you can travel in style and comfort with professional drivers who know the best routes. Choose hourly or per-day rentals and travel at your own pace with full support from our team."
    },
    {
        "name": "Thane to Airport Cab",
        "description": "Need a dependable airport transfer? Deva Cabs offers prompt and efficient cab services from Thane to Mumbai Airport (both Domestic and International terminals). Avoid the stress of traffic or public transport with our door-to-door airport cab service. Our drivers are punctual, familiar with airport routes, and track your flight for any delays to ensure timely pick-up or drop-off. Book your airport cab in advance or last minute — we're available 24/7 to serve you with safe and comfortable rides."
    },
    {
        "name": "Thane to Mahabaleshwar Cab",
        "description": "Escape to the cool hills of Mahabaleshwar with Deva Cabs’ reliable cab service from Thane. Our long-distance cab services are perfect for family vacations, romantic getaways, or group tours. Enjoy breathtaking views, winding mountain roads, and a stress-free travel experience in our comfortable cabs. All vehicles come with experienced drivers who prioritize your safety and comfort. Book your Mahabaleshwar ride easily online and benefit from competitive pricing and round-the-clock customer support."
    },
    {
        "name": "Taxi Service in Thane West",
        "description": "Deva Cabs is proud to serve the Thane West community with professional and efficient taxi services. Whether you need a daily ride to work, a trip to the market, or a weekend travel plan, our cabs are always nearby. We offer both one-way and round-trip packages with clear pricing and no hidden charges. Our drivers know the Thane West area thoroughly, so you’ll get to your destination on time, every time. Book your cab instantly via phone, app, or website."
    },
    {
        "name": "Thane to Bandra Taxi Fare",
        "description": "Planning a trip from Thane to Bandra? Deva Cabs provides a reliable and affordable taxi service with transparent fare estimates. Our Thane to Bandra route is serviced by experienced drivers who ensure a smooth and timely ride. You can choose from multiple vehicle options depending on your comfort and budget. Avoid the hassle of public transport and enjoy a direct, comfortable ride to Bandra with upfront pricing and professional service."
    },
    {
        "name": "Thane to Borivali Taxi Fare",
        "description": "Deva Cabs offers convenient and economical taxi services from Thane to Borivali. Whether you’re commuting for work, attending a family event, or running errands across town, we ensure a comfortable ride with fixed, transparent fares. Our courteous drivers and clean vehicles make every journey pleasant. You can book in advance or request a ride on-demand — either way, our team is here to make your Thane to Borivali trip as smooth as possible."
    },
    {
        "name": "Thane to Igatpuri Taxi",
        "description": "Heading to the serene hills of Igatpuri? Deva Cabs provides dedicated cab services from Thane to Igatpuri for nature lovers, trekkers, and families looking for a weekend escape. Our vehicles are ideal for long journeys, with spacious seating and professional drivers who are familiar with the scenic route. Sit back and enjoy the beautiful views while we ensure a safe and comfortable ride to one of Maharashtra’s most picturesque destinations."
    },
    {
        "name": "Thane to Mumbai Airport Cab",
        "description": "Deva Cabs specializes in fast and efficient airport transfers from Thane to Mumbai Airport. Whether you're catching a flight or returning home, our cab service ensures timely pickups and smooth rides to both Domestic and International terminals. We monitor traffic and flight timings to give you peace of mind, and our clean, AC-equipped vehicles ensure a comfortable experience from door to door. Choose us for dependable airport cab service at competitive rates."
    },
    {
        "name": "Thane to Panchgani Cab",
        "description": "Explore the beauty of Panchgani with Deva Cabs’ outstation cab service from Thane. Our long-distance travel packages offer maximum comfort, with flexible departure times, spacious vehicles, and skilled drivers who ensure a safe journey through hilly terrain. Whether it's a family outing, romantic getaway, or solo trip, Deva Cabs takes care of all your travel needs. Book online or through our customer support team and enjoy competitive fares with no hidden charges."
    },
    {
        "name": "Mumbai to Konkan Cab",
        "description": "Discover the scenic beauty of the Konkan coast with Deva Cabs’ Mumbai to Konkan cab service. Whether you're heading to Alibaug, Ratnagiri, Sindhudurg, or any hidden gem along the coastline, our premium chauffeur-driven cabs ensure a relaxing and enjoyable journey. Choose from affordable sedans, spacious SUVs, or luxury AC vehicles based on your travel needs. Ideal for family vacations, one-way trips, or round journeys, our service offers transparent pricing, online booking, and 24/7 support. Travel hassle-free with experienced drivers who know the best coastal routes to make your Konkan getaway unforgettable."
    }
],

"tableData": [
    ["Thane to Pune Cab", "-Cab Booking in Thane Made Easy"],
    ["Car Rental in Thane for Outstation Adventures", "-Thane to Airport Cab"],
    ["Thane to Mahabaleshwar Cab", "-Taxi Service in Thane West"],
    ["Thane to Bandra Taxi Fare", "-Thane to Borivali Taxi Fare"],
    ["Thane to Igatpuri Taxi", "-Thane to Mumbai Airport Cab"],
    ["Thane to Panchgani Cab", "-Mumbai to Konkan Cab"]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable and On-Time Pickup from Mumbai",
    "WhyChoosedescription": "Planning a trip to the scenic Konkan coast? Deva Cabs ensures timely pickups from anywhere in Mumbai, so your travel begins without delays. Whether you're starting early in the morning or heading out late at night, our punctual service guarantees a smooth start to your Konkan journey."
  },
  {
    "WhyChooseheading": "Comfortable Rides for Long Distances",
    "WhyChoosedescription": "Our cabs are perfect for long drives from Mumbai to Konkan. Equipped with plush seating, air conditioning, and ample legroom, you can relax throughout the journey. Whether it’s a quick weekend getaway or a multi-day vacation, we ensure comfort all the way."
  },
  {
    "WhyChooseheading": "Experienced Drivers Who Know the Route",
    "WhyChoosedescription": "Our drivers are familiar with the routes to Konkan, including scenic coastal roads and lesser-known shortcuts. With safe driving practices and local knowledge, they make sure your ride is efficient, pleasant, and hassle-free."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Enjoy peace of mind with upfront fare details and no hidden charges. Whether it’s a one-way trip or a return journey, Deva Cabs offers clear pricing so you know exactly what you're paying for. No surprises—just honest value."
  },
  {
    "WhyChooseheading": "24/7 Availability for Mumbai to Konkan Trips",
    "WhyChoosedescription": "Need to leave Mumbai at dawn or return from Konkan late at night? We operate round the clock to match your travel plans. Just book your ride online, via our app, or by phone—any time, any day."
  },
  {
    "WhyChooseheading": "Safety First, Always",
    "WhyChoosedescription": "Your safety is our priority. All cabs are equipped with GPS tracking, sanitized interiors, and driven by trained professionals. Whether you're traveling with family or solo, Deva Cabs provides a secure travel experience on the Mumbai-Konkan route."
  },
  {
    "WhyChooseheading": "Easy Booking & Real-Time Updates",
    "WhyChoosedescription": "Book your Mumbai to Konkan cab in just a few taps using our app or website. Receive instant confirmation and track your driver in real-time. Need help? Our customer support team is always ready to assist."
  },
  {
    "WhyChooseheading": "Custom Travel Plans for Every Need",
    "WhyChoosedescription": "Weekend getaway, beach tour, or family visit? Deva Cabs offers custom packages for Mumbai to Konkan travel—one-way, round-trip, or hourly rental. You choose the plan, we handle the journey."
  }
]



















    }




const faqData = [
  {
    question: "Can I book a cab from Mumbai to Konkan with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Mumbai to Konkan. You can book your ride easily via our website, mobile app, or by contacting our customer support."
  },
  {
    question: "What are the vehicle options for Mumbai to Konkan trips?",
    answer: "We offer a variety of vehicle options including hatchbacks, sedans, SUVs, and premium cars for a comfortable ride from Mumbai to Konkan."
  },
  {
    question: "How long does the journey from Mumbai to Konkan take?",
    answer: "The journey duration from Mumbai to Konkan typically ranges between 4 to 6 hours depending on the destination in Konkan and traffic conditions."
  },
  {
    question: "Is there an option for a round trip from Mumbai to Konkan?",
    answer: "Yes, you can book a round trip for your journey to Konkan, and we will ensure timely pick-up and drop-off based on your schedule."
  },
  {
    question: "Can I pre-schedule my Mumbai to Konkan ride?",
    answer: "Yes, you can pre-schedule your ride from Mumbai to Konkan through our booking portal or app. Choose your preferred date and time for guaranteed pickup."
  },
  {
    question: "What are the payment options for booking a Mumbai to Konkan cab?",
    answer: "We accept cash, credit/debit cards, UPI, and online payments through our mobile app or website for your Mumbai to Konkan ride."
  },
  {
    question: "Are the drivers for Mumbai to Konkan rides experienced?",
    answer: "Yes, all our drivers are experienced, verified, and familiar with the Mumbai to Konkan route to ensure a safe and smooth journey."
  },
  {
    question: "Is it safe to travel from Mumbai to Konkan with Deva Cabs?",
    answer: "Absolutely! All our cabs are GPS-enabled, and we ensure the highest safety standards, with professional drivers dedicated to your comfort."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Sameer Jadhav',
    role: 'Business Traveler',
    review: 'I frequently travel from Mumbai to Konkan for work, and Deva Cabs provides the most reliable and comfortable service. The drivers are professional, and the ride is always smooth.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Priya Deshmukh',
    role: 'Tourist',
    review: 'Had a fantastic trip with Deva Cabs from Mumbai to Konkan. The car was clean, and the driver was very knowledgeable about the area. Highly recommend for scenic trips!',
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
  "name": "Mumbai to Konkan Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-konkan-cab.jpg", // Replace with actual image URL
  "description": "Reliable and affordable Mumbai to Konkan cab service by Deva Cabs. Book outstation taxis for one-way or round trips with luxury and economy options. Chauffeur-driven SUVs and AC cars available for family trips and corporate travel.",
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
    "price": "3500", // Example price, adjust as needed
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-konkan-cab" // Replace with actual page URL
  }
};



    return (
        <div>



<Helmet>
  <title>Mumbai to Konkan Cab | Mumbai to Konkan Taxi Service | Deva Cabs</title>
  <meta
    name="description"
    content="Book reliable Mumbai to Konkan cab service with Deva Cabs. Affordable outstation taxi from Mumbai to Konkan for one-way and round trips. Luxury and economy SUVs, AC cars, chauffeur-driven options available."
  />
  <meta
    name="keywords"
    content="Mumbai to Konkan Cab, Mumbai to Konkan taxi service, Konkan cab from Mumbai, Outstation cab Mumbai to Konkan, One way cab to Konkan from Mumbai, Round trip Mumbai Konkan cab, Affordable cab Mumbai to Konkan, Premium cab Mumbai to Konkan, SUV cab to Konkan from Mumbai, Chauffeur-driven cab to Konkan, Mumbai to Konkan car rental, AC cab Mumbai to Konkan, Luxury cab hire to Konkan, Book Mumbai to Konkan taxi, Online cab booking to Konkan, Mumbai to Konkan family cab"
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
                            <img src='./images/keyword/62.jpg' alt='img' />
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

export default Mumbaitokonkancab;