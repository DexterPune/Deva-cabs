
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitogoacabs() {



    const cardData =
    {
        keyword: ' Mumbai to Goa Cab   ',
        heading: 'Deva Cabs: Mumbai to Goa Cab ',
        headingDescription: 'Deva Cabs offers long-distance, comfortable cab services from Mumbai to Goa, perfect for beach vacations, group trips, and weekend escapes. Spanning a distance of about 590 km, our cabs ensure a smooth and scenic journey through the Konkan routes. Choose from a variety of well-maintained vehicles—Sedans, SUVs, or Innova Crysta—based on your group size and comfort preferences. With experienced drivers, fixed pricing, and door-to-door pickup, Deva Cabs makes your Mumbai to Goa road trip enjoyable, safe, and memorable.',

        top: 'Top Places to Visit in Goa with Deva Cabs',

"topPlaces": [
  {
    "title": "Baga Beach",
    "location": "North Goa, Goa",
    "description": "Baga Beach is one of the most popular and lively beaches in Goa, known for its vibrant nightlife, water sports, and beach shacks. Tourists flock here for parasailing, jet skiing, and to enjoy music and seafood at places like Britto’s and Tito’s Lane nearby."
  },
  {
    "title": "Basilica of Bom Jesus",
    "location": "Old Goa, Goa",
    "description": "A UNESCO World Heritage Site, the Basilica of Bom Jesus houses the mortal remains of St. Francis Xavier. This 16th-century baroque church is a masterpiece of Christian architecture in India and draws thousands of pilgrims and tourists for its spiritual and historical importance."
  },
  {
    "title": "Dudhsagar Waterfalls",
    "location": "Mollem, Goa-Karnataka Border",
    "description": "Dudhsagar Falls is one of the tallest and most stunning waterfalls in India, cascading from a height of over 300 meters. Located in the Bhagwan Mahaveer Sanctuary, it's accessible via jeep safaris and is especially majestic during the monsoon season."
  },
  {
    "title": "Aguada Fort",
    "location": "SinQ Beach, North Goa, Goa",
    "description": "Built by the Portuguese in the 17th century, Fort Aguada overlooks the Arabian Sea and served as a strategic defense point. It also has a lighthouse and offers panoramic views of the coastline. The fort is a must-visit for history lovers and photographers."
  },
  {
    "title": "Calangute Beach",
    "location": "North Goa, Goa",
    "description": "Often referred to as the ‘Queen of Beaches,’ Calangute is the largest beach in North Goa and is bustling with activity. From beach shopping and seafood stalls to parasailing and banana boat rides, it offers a complete Goan experience."
  },
  {
    "title": "Se Cathedral",
    "location": "Old Goa, Goa",
    "description": "Se Cathedral is one of the largest churches in Asia and a significant symbol of Portuguese rule in Goa. Dedicated to St. Catherine, the cathedral features a giant golden bell and classic Portuguese-Gothic architecture. It stands opposite the Basilica of Bom Jesus."
  },
  {
    "title": "Anjuna Flea Market",
    "location": "Anjuna, North Goa, Goa",
    "description": "Held every Wednesday, the Anjuna Flea Market is a colorful and bustling bazaar where travelers can shop for clothes, jewelry, handicrafts, spices, and souvenirs. It reflects Goa’s hippie heritage and offers a vibrant cultural shopping experience."
  },
  {
    "title": "Chapora Fort",
    "location": "Vagator, North Goa, Goa",
    "description": "Famous for its appearance in the Bollywood movie 'Dil Chahta Hai', Chapora Fort offers breathtaking views of Vagator Beach and the Arabian Sea. Though now in ruins, it’s a popular sunset point and a favorite among photographers and couples."
  },
  {
    "title": "Palolem Beach",
    "location": "South Goa, Goa",
    "description": "Palolem Beach is a crescent-shaped paradise in South Goa, known for its tranquil waters, beach huts, and scenic beauty. It’s ideal for kayaking, dolphin-spotting, or just relaxing under palm trees. The beach offers a quieter and more laid-back vibe than North Goa."
  },
  {
    "title": "Shri Mangeshi Temple",
    "location": "Mangeshi Village, Goa",
    "description": "One of the most famous Hindu temples in Goa, Shri Mangeshi Temple is dedicated to Lord Shiva. Featuring Goan temple architecture with a prominent white façade, a deepstambha (lamp tower), and beautiful surroundings, it’s a sacred place for devotees and architecture lovers alike."
  }
],



"services": [
  {
    "name": "Mumbai to Goa Cab",
    "description": "Experience a seamless and comfortable journey from Mumbai to the scenic beaches and vibrant culture of Goa with our premium cab service. Whether you are traveling solo, with family, or a group of friends, our Mumbai to Goa cab options cater to all needs, ensuring a safe and relaxing trip covering approximately 590 km with convenient stops along the way."
  },
  {
    "name": "One-way cab Mumbai to Goa",
    "description": "Opt for a hassle-free one-way cab service from Mumbai to Goa, perfect for travelers who wish to continue their journey from Goa to other destinations. Our transparent pricing and flexible schedules make the one-way trip convenient and economical without compromising on comfort or safety."
  },
  {
    "name": "SUV cab to Goa from Mumbai",
    "description": "Travel in style and comfort with our spacious and sturdy SUV cabs for your Mumbai to Goa trip. Ideal for families or groups carrying extra luggage, our SUVs such as Innova, XUV, and Scorpio offer high ground clearance, plush interiors, and smooth handling on highways and winding roads."
  },
  {
    "name": "AC cab hire Mumbai to Goa",
    "description": "Beat the heat and enjoy a cool and refreshing ride with our air-conditioned cabs for the Mumbai to Goa journey. Our fleet features well-maintained AC cars ranging from sedans to SUVs, ensuring that you stay comfortable throughout the 10 to 12-hour drive."
  },
  {
    "name": "Luxury car Mumbai to Goa",
    "description": "For travelers who prefer a premium experience, our luxury car hire from Mumbai to Goa offers high-end vehicles such as Mercedes, Audi, and BMW. Enjoy top-notch comfort, advanced features, and personalized chauffeur services that make your road trip truly memorable and stylish."
  },
  {
    "name": "Chauffeur-driven cab Mumbai to Goa",
    "description": "Relax and enjoy the scenic journey from Mumbai to Goa with our professional chauffeur-driven cab services. Our experienced and courteous drivers ensure timely pickups, safe driving on highways, and can assist with local travel recommendations once you reach Goa."
  },
  {
    "name": "Mumbai to Goa outstation cab",
    "description": "Planning an outstation trip from Mumbai to Goa? Our outstation cab services are tailored for long-distance travel, with fixed packages, round-trip options, and stopover flexibility. Enjoy peace of mind with reliable vehicles, roadside assistance, and transparent pricing."
  },
  {
    "name": "Round trip Goa cab Mumbai",
    "description": "Book a round trip cab service for your Mumbai to Goa vacation and return journey, giving you the convenience of a single booking with fixed rates. Spend your holiday without worrying about transport and return on your preferred date with our dependable round trip cabs."
  },
  {
    "name": "Beach trip cab Mumbai to Goa",
    "description": "Make your beach holiday extra special by hiring our beach trip cabs from Mumbai to Goa. Designed for comfort and leisure, these cabs provide ample space for beach gear, picnic supplies, and luggage, making your Goa adventure stress-free and fun-filled."
  },
  {
    "name": "Affordable cab hire Mumbai to Goa",
    "description": "Get the best value for your money with our affordable cab hire options for the Mumbai to Goa route. We provide budget-friendly yet quality transport solutions without compromising on safety, comfort, or reliability, perfect for travelers on a budget."
  },
  {
    "name": "Online booking Mumbai to Goa taxi",
    "description": "Book your Mumbai to Goa taxi online quickly and securely through our user-friendly platform. Choose your preferred vehicle, pickup time, and customize your travel itinerary with instant confirmation and 24/7 customer support."
  },
  {
    "name": "Premium cab Mumbai to Goa",
    "description": "Experience the best in comfort, style, and service with our premium cab options from Mumbai to Goa. Featuring well-maintained luxury vehicles, professional chauffeurs, and personalized travel plans, our premium cabs make your journey to Goa a delightful experience."
  }
],
"tableData": [
  ["Mumbai to Goa Cab", "-One-way cab Mumbai to Goa"],
  ["SUV cab to Goa from Mumbai", "-AC cab hire Mumbai to Goa"],
  ["Luxury car Mumbai to Goa", "-Chauffeur-driven cab Mumbai to Goa"],
  ["Mumbai to Goa outstation cab", "-Round trip Goa cab Mumbai"],
  ["Beach trip cab Mumbai to Goa", "-Affordable cab hire Mumbai to Goa"],
  ["Online booking Mumbai to Goa taxi", "-Premium cab Mumbai to Goa"]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable Mumbai to Goa Cab Service",
    "WhyChoosedescription": "Travel from Mumbai to the beautiful beaches of Goa with our dependable cab service. Whether you’re heading out for a vacation, a weekend getaway, or a business trip, we ensure timely pickups and a smooth, hassle-free journey. Our commitment to punctuality and comfort makes your long-distance travel stress-free and enjoyable."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles for Long Journeys",
    "WhyChoosedescription": "Our fleet features well-maintained, air-conditioned vehicles that provide ample legroom, comfortable seating, and generous luggage space. The approximately 590 km journey is made relaxing and enjoyable, whether you’re traveling solo, with family, or in a group. Our vehicles are perfect for long-distance travel, equipped to handle the entire trip comfortably."
  },
  {
    "WhyChooseheading": "Experienced Drivers Skilled in Highway Travel",
    "WhyChoosedescription": "Our professional drivers are well-versed with the Mumbai-Goa route, including highway conditions and traffic patterns. They prioritize safety and punctuality, ensuring you reach your destination on time while providing a smooth, secure ride. Their experience helps navigate any road challenges, making your journey worry-free."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "We offer clear, upfront pricing without hidden charges. Our rates include fuel, tolls, and driver allowances, allowing you to plan your travel budget confidently. Enjoy competitive pricing that delivers excellent value for your Mumbai to Goa trip."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel Plans",
    "WhyChoosedescription": "Our cab service is available round the clock, allowing you to start your trip whenever it suits you best. Whether it’s an early morning departure or a late-night journey, we accommodate your schedule to ensure seamless travel."
  },
  {
    "WhyChooseheading": "Easy Online Booking with Instant Confirmation",
    "WhyChoosedescription": "Booking your Mumbai to Goa cab is quick and simple through our website or customer support. Get instant confirmation along with detailed fare and driver information, enabling you to plan your trip with ease and confidence."
  },
  {
    "WhyChooseheading": "Safety and Well-Maintained Vehicles",
    "WhyChoosedescription": "Your safety is our top priority. All our vehicles undergo regular maintenance and sanitation, equipped with seat belts, GPS tracking, and emergency kits. Our drivers strictly adhere to safety protocols, ensuring a secure and comfortable journey to Goa."
  },
  {
    "WhyChooseheading": "Customizable Packages to Suit Your Itinerary",
    "WhyChoosedescription": "We offer flexible travel packages including one-way trips, round trips, and multi-day plans with stops along the way. Whether you want a direct ride or plan to explore en route, we tailor the service to your preferences, making your Mumbai to Goa journey truly personalized."
  }
]











    }








const faqData = [
  {
    question: "Can I book a cab from Mumbai to Goa with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Mumbai to Goa for vacations, business trips, and group travel."
  },
  {
    question: "How long does the journey from Mumbai to Goa take by cab?",
    answer: "The trip usually takes around 10 to 12 hours depending on traffic and route taken."
  },
  {
    question: "What vehicle options are available for the Mumbai to Goa route?",
    answer: "We offer a variety of vehicles including sedans, SUVs, Innova Crysta, Ertiga, and tempo travellers to accommodate solo travelers and groups."
  },
  {
    question: "Can I book a one-way or round-trip cab from Mumbai to Goa?",
    answer: "Yes, both one-way and round-trip cab services are available to suit your travel plans."
  },
  {
    question: "Are tolls, parking, and driver charges included in the fare?",
    answer: "Tolls, parking, and driver allowances are generally additional charges, which will be clearly communicated during booking."
  },
  {
    question: "Is the Mumbai to Goa cab service available 24/7?",
    answer: "Yes, Deva Cabs operates round-the-clock to ensure you can travel at your preferred time."
  },
  {
    question: "Is the cab service suitable for long-distance travel like Mumbai to Goa?",
    answer: "Absolutely. Our vehicles are well-maintained, spacious, and comfortable for long journeys."
  },
  {
    question: "Can I book a cab for sightseeing or multiple stops en route to Goa?",
    answer: "Yes, customized sightseeing packages with stops can be arranged on request."
  },
  {
    question: "Is it safe to travel from Mumbai to Goa by cab?",
    answer: "Yes, our drivers are experienced and background-verified to ensure a safe and pleasant journey."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Goa cab service?",
    answer: "Deva Cabs provides professional drivers, clean vehicles, transparent pricing, and reliable service to make your trip hassle-free."
  }
];

const testimonialData = [
  {
    id: 51,
    name: 'Mr. Amit Deshmukh',
    role: 'Traveler',
    review: 'We booked a cab from Mumbai to Goa with Deva Cabs. The ride was comfortable and the driver was punctual and courteous. Highly recommended!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 52,
    name: 'Ms. Priya Nair',
    role: 'Vacationer',
    review: 'Deva Cabs made our Mumbai to Goa journey smooth and hassle-free. The vehicle was clean and perfect for a long trip.',
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
  "name": "Mumbai to Goa Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-goa-cab.jpg", // Replace with actual image URL
  "description": "Book Mumbai to Goa cab with Deva Cabs. Enjoy comfortable and reliable one-way or round-trip cabs including AC, SUV, chauffeur-driven, luxury, and premium cars. Ideal for beach trips and vacations.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "1290"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "9500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-goa-cab" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Mumbai to Goa Cab | Book Outstation Taxi from Mumbai to Goa | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Goa cab with Deva Cabs. Reliable one-way and round trip cab service to Goa with AC, SUV, chauffeur-driven, luxury, and premium vehicles. Ideal for beach trips and long drives." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Goa Cab, One-way cab Mumbai to Goa, SUV cab to Goa from Mumbai, AC cab hire Mumbai to Goa, Luxury car Mumbai to Goa, Chauffeur-driven cab Mumbai to Goa, Mumbai to Goa outstation cab, Round trip Goa cab Mumbai, Beach trip cab Mumbai to Goa, Affordable cab hire Mumbai to Goa, Online booking Mumbai to Goa taxi, Premium cab Mumbai to Goa" 
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
                            <img src='./images/keyword/34.jpg' alt='img' />
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

export default Mumbaitogoacabs;