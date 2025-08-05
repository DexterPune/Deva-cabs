
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function CabSetvicenearmemumbai() {



    const cardData =
    {
        keyword: ' Cab Service Near Me Mumbai',
        heading: 'Deva Cabs:  Cab Service Near Me Mumbai',
        headingDescription: 'Deva Cabs delivers reliable, comfortable, and hassle-free cab services near you in Mumbai. Whether you need a quick ride to your office, a shopping mall, or a local destination, our nearby drivers and well-maintained vehicles are just a few minutes away. With Mumbai’s fast-paced lifestyle, we ensure prompt pickups, professional service, and a smooth journey every time. Choose from a variety of vehicles tailored to your needs and enjoy convenient, safe, and comfortable travel with Deva Cabs.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

    "topPlaces": [
    {
      "title": "Gateway of India",
      "location": "Mumbai, Maharashtra",
      "description": "The Gateway of India is an architectural marvel and a historic monument situated at the waterfront in Colaba, South Mumbai. Built in 1924 to commemorate the visit of King George V and Queen Mary, this grand basalt arch stands as a symbol of the city’s colonial legacy. Facing the Arabian Sea and adjacent to the iconic Taj Mahal Palace Hotel, it serves as a popular departure point for ferry rides to Elephanta Island. Tourists flock here for the stunning sea views, vibrant street culture, and its significance in India’s freedom movement."
    },
    {
      "title": "Marine Drive",
      "location": "Mumbai, Maharashtra",
      "description": "Marine Drive, also known as the Queen’s Necklace, is a 3.6-kilometer-long boulevard that curves gracefully along the Arabian Sea coast. Lined with palm trees and art deco buildings, it’s one of Mumbai’s most scenic promenades. As dusk sets in, the street lights along the arc-shaped road resemble a sparkling necklace, making it a beloved spot for evening walks, street food indulgence, and peaceful sea gazing. It also connects key city attractions like Chowpatty Beach and Nariman Point."
    },
    {
      "title": "Elephanta Caves",
      "location": "Elephanta Island, Mumbai Harbour",
      "description": "Located on Elephanta Island, about an hour's ferry ride from the Gateway of India, the Elephanta Caves are a UNESCO World Heritage Site known for their stunning rock-cut sculptures. Dating back to the 5th–7th century, these caves are dedicated primarily to Lord Shiva and house the majestic Trimurti sculpture—an 18-foot masterpiece symbolizing creation, preservation, and destruction. Surrounded by lush greenery and peaceful surroundings, the caves offer a spiritual and historical retreat from the city's bustle."
    },
    {
      "title": "Siddhivinayak Temple",
      "location": "Prabhadevi, Mumbai, Maharashtra",
      "description": "Siddhivinayak Temple is among Mumbai’s most sacred and visited Hindu temples, dedicated to Lord Ganesha. The temple features a black stone idol with a tilted trunk, adorned with gold and flowers. Devotees, including celebrities and politicians, come here to seek blessings, especially on Tuesdays when special rituals are held. The spiritual aura, coupled with the temple’s architectural beauty and crowd of devotees, makes it a must-visit destination for both pilgrims and tourists."
    },
    {
      "title": "Chhatrapati Shivaji Maharaj Terminus",
      "location": "Mumbai, Maharashtra",
      "description": "Chhatrapati Shivaji Maharaj Terminus (CSMT) is not just a bustling railway station but also a UNESCO World Heritage Site celebrated for its Victorian Gothic architecture. Built in 1887, the structure is adorned with stained-glass windows, stone domes, turrets, and detailed carvings that reflect the grandeur of British colonial design fused with Indian artistry. CSMT is a working station serving millions of daily commuters, and its breathtaking façade is best admired when illuminated at night."
    },
    {
      "title": "Juhu Beach",
      "location": "Mumbai, Maharashtra",
      "description": "Stretching along the Arabian Sea, Juhu Beach is one of Mumbai’s most popular public beaches. Known for its lively atmosphere and delectable street food like bhel puri, vada pav, and pav bhaji, it draws large crowds especially during weekends and festivals. The beach also serves as a jogging track, yoga spot, and even a shooting location for Bollywood movies. Visitors often spot celebrities jogging or relaxing nearby, making it both a leisure and glamour hotspot."
    },
    {
      "title": "Haji Ali Dargah",
      "location": "Worli, Mumbai, Maharashtra",
      "description": "Floating like a spiritual oasis in the Arabian Sea, Haji Ali Dargah is one of Mumbai’s most iconic religious landmarks. Built in 1431, it enshrines the tomb of Sufi saint Haji Ali Shah Bukhari. The white-domed Indo-Islamic structure is accessible via a causeway that is engulfed by the sea during high tide. The dargah attracts devotees of all faiths and offers a unique blend of tranquility, architectural beauty, and cultural harmony."
    },
    {
      "title": "Sanjay Gandhi National Park",
      "location": "Borivali, Mumbai, Maharashtra",
      "description": "Covering over 100 square kilometers, Sanjay Gandhi National Park is Mumbai’s green lung and one of the world’s few national parks within city limits. Home to leopards, deer, langurs, and over 270 bird species, the park also houses the ancient Kanheri Caves—Buddhist rock-cut monuments carved from basalt rock. With its trekking trails, cycling paths, boating facilities, and toy train, it is a haven for nature lovers and a perfect family weekend destination."
    },
    {
      "title": "Chor Bazaar",
      "location": "Mumbai, Maharashtra",
      "description": "Chor Bazaar, or 'Thieves Market', is one of the oldest flea markets in India and a treasure trove for collectors and antique lovers. From vintage Bollywood posters and gramophones to brass artifacts and rare furniture, this market offers an eclectic shopping experience. Though its name suggests otherwise, most items are legally sold. The bazaar's narrow lanes and centuries-old shops create a nostalgic vibe, making it an exciting stop for explorers and bargain hunters alike."
    },
    {
      "title": "Girgaon Chowpatty",
      "location": "Girgaon, Mumbai, Maharashtra",
      "description": "Situated at the end of Marine Drive, Girgaon Chowpatty is a vibrant beach that becomes a cultural epicenter during Ganesh Visarjan, when thousands gather to immerse Lord Ganesha idols. Known for its lip-smacking street food and festive atmosphere, the beach is also ideal for casual outings, yoga sessions, or simply relaxing by the shore. It offers beautiful sunset views and is a reflection of Mumbai’s lively spirit and community culture."
    }
  ],



"services": [
    {
        "name": "Cab Service near Me",
        "description": "Looking for a reliable cab service near you? Deva Cabs offers convenient and affordable cab services at your location, anytime you need. With GPS-enabled tracking and a fleet of well-maintained vehicles, we ensure you get picked up promptly. Our drivers are experienced and courteous, offering a smooth ride whether you're heading across town or to the airport. Book instantly via call or online for trusted service right around the corner."
    },
    {
        "name": "Taxi near Me",
        "description": "Deva Cabs provides quick and professional taxi services near your current location. Our taxis are available 24/7, ensuring you're never left waiting when you need transportation the most. Whether you're headed to the office, shopping, a meeting, or a night out, our nearby taxis offer reliable and comfortable rides at budget-friendly rates."
    },
    {
        "name": "Cabs near Me",
        "description": "Need a cab urgently? Deva Cabs offers fast-response cab services near your location. We operate in multiple zones with active drivers stationed strategically across the city. Get picked up quickly and ride comfortably in clean, air-conditioned vehicles with professional drivers who know the best local routes."
    },
    {
        "name": "Cab Company near Me",
        "description": "As one of the most trusted cab companies near you, Deva Cabs provides professional and affordable transportation services. We serve local areas with top-rated cabs and trained drivers, making us the preferred choice for city rides, airport transfers, and outstation trips. Our reputation is built on safety, punctuality, and excellent customer service."
    },
    {
        "name": "Local Taxi near Me",
        "description": "Looking for a local taxi near you? Deva Cabs offers neighborhood-based taxi services that cater to your daily commuting needs. Whether it's a short ride to the market or a daily office drop, our local taxi services ensure quick response and affordable pricing, backed by experienced drivers who know the area well."
    },
    {
        "name": "Airport Taxi near Me",
        "description": "Deva Cabs offers fast and reliable airport taxi services near you. No more rushing or worrying about missing your flight — our drivers are trained for airport pick-ups and drops, and we track flights for real-time updates. Book an airport taxi near your location and travel stress-free with prompt pickups and smooth rides."
    },
    {
        "name": "Call Taxi near Me",
        "description": "Need to book a taxi over the phone? Deva Cabs lets you easily call a taxi near you with just a quick phone call. Our dedicated customer service line ensures you’re connected to a nearby driver immediately. Whether it’s early morning or late night, call us and a cab will be on the way within minutes."
    },
    {
        "name": "Local Taxi Service",
        "description": "Deva Cabs provides reliable local taxi service for all your daily travel needs. We offer easy booking, trained drivers, and a range of vehicles from hatchbacks to SUVs. Whether it's a school drop-off, a visit to the doctor, or a shopping trip, our local taxi service is convenient, safe, and budget-friendly."
    },
    {
        "name": "Cheapest Taxi Service near Me",
        "description": "Looking for the most affordable taxi service nearby? Deva Cabs offers low-cost rides without compromising on quality or safety. We provide competitive flat rates, transparent billing, and budget-friendly vehicle options, making us the cheapest and most reliable taxi service in your area."
    },
    {
        "name": "Taxi Number near Me",
        "description": "Searching for a taxi contact number near you? Call Deva Cabs directly at our 24/7 helpline to book a ride instantly. We are always available to assist with nearby cab bookings, fare details, and real-time location-based taxi dispatch. Save our number and call anytime for immediate service."
    },
    {
        "name": "24-Hour Taxi Service near Me",
        "description": "Deva Cabs operates a 24-hour taxi service near you, offering round-the-clock transportation for early flights, late-night outings, or emergencies. Our drivers are available day and night to provide safe, clean, and timely rides whenever you need them — with no surge pricing or delays."
    },
    {
        "name": "Taxi Cab Service near Me",
        "description": "For comfortable and efficient travel, Deva Cabs offers a complete taxi cab service near your area. From local commutes to long-distance rides, our service includes professional drivers, sanitized vehicles, and easy payment options. Ride with us for dependable, nearby transportation you can trust."
    },
    {
        "name": "Call a Taxi near Me",
        "description": "Need to call a taxi nearby? Deva Cabs makes it simple. Just give us a call, and we’ll dispatch a driver to your location immediately. Our call center is open 24/7 and can assist with booking, fare queries, and urgent rides — no app needed."
    },
    {
        "name": "Nearest Taxi Service",
        "description": "Deva Cabs connects you with the nearest available taxi using GPS-based dispatch. Our wide network of drivers ensures a cab is never too far away. Whether you're downtown or in the suburbs, we’ll get a taxi to you quickly so you can reach your destination on time."
    },
    {
        "name": "Call a Cab near Me",
        "description": "Looking to call a cab close by? Deva Cabs offers fast and friendly cab service right at your location. Whether it’s a short ride or a longer trip, simply call us and a professional driver will be at your doorstep in no time, ready to take you wherever you need to go."
    },
    {
        "name": "Local Cab Service",
        "description": "For trusted local cab rides, Deva Cabs offers reliable service at any hour. Our cabs are stationed near popular neighborhoods and pickup spots to ensure minimal waiting time. Get dropped off to work, home, school, or anywhere else without hassle or delay."
    }
],
"tableData": [
    ["Cab Service near Me", "-Taxi near Me"],
    ["Cabs near Me", "-Cab Company near Me"],
    ["Local Taxi near Me", "-Airport Taxi near Me"],
    ["Call Taxi near Me", "-Local Taxi Service"],
    ["Cheapest Taxi Service near Me", "-Taxi Number near Me"],
    ["24-Hour Taxi Service near Me", "-Taxi Cab Service near Me"],
    ["Call a Taxi near Me", "-Nearest Taxi Service"],
    ["Call a Cab near Me", "-Local Cab Service"]
],

whychoose: [
  {
    "WhyChooseheading": "Quick Access to Cabs Near You",
    "WhyChoosedescription": "With Deva Cabs, finding a taxi near your location in Mumbai is just a few taps away. Our wide network of drivers across every major neighborhood—whether you're in Andheri, Bandra, Borivali, or Colaba—ensures that a cab is always nearby. We leverage smart GPS-based allocation so you get picked up quickly, reducing wait time and ensuring a seamless start to your journey."
  },
  {
    "WhyChooseheading": "Highly Maintained Vehicles for Every Ride",
    "WhyChoosedescription": "We prioritize your comfort with a fleet that’s regularly serviced and thoroughly cleaned. Whether you're booking a hatchback for a short city hop or an SUV for a longer trip, all our vehicles come with spacious seating, working air conditioning, clean interiors, and a pleasant travel environment. It's not just a ride, it's your private, comfortable travel space."
  },
  {
    "WhyChooseheading": "Skilled Local Drivers You Can Trust",
    "WhyChoosedescription": "Our drivers are locals who know Mumbai’s roads, shortcuts, and traffic patterns like the back of their hand. You’ll never have to worry about getting lost or stuck unnecessarily in traffic. Every driver at Deva Cabs is verified, polite, and committed to giving you a safe and courteous experience from pickup to drop-off."
  },
  {
    "WhyChooseheading": "Affordable Pricing with No Hidden Charges",
    "WhyChoosedescription": "Tired of unpredictable fares? At Deva Cabs, what you see is what you pay. Our pricing model is transparent and budget-friendly, whether you’re booking a short ride to the market or a long journey across the city. No surge pricing during peak hours, no hidden fees—just honest rates and complete fare clarity."
  },
  {
    "WhyChooseheading": "Round-the-Clock Availability",
    "WhyChoosedescription": "Need a cab early in the morning or past midnight? We’re here 24/7. Deva Cabs operates continuously to ensure that transportation is never a concern—be it a spontaneous plan, an emergency, or a scheduled commute. Just search 'cab near me' in Mumbai, and we’ll be on our way, any time of day or night."
  },
  {
    "WhyChooseheading": "Emphasis on Passenger Safety",
    "WhyChoosedescription": "Your safety is our responsibility. All our vehicles are equipped with GPS tracking, emergency support, seatbelts, and airbags. Our drivers follow strict safety protocols, including safe driving practices and vehicle sanitization, to ensure you always travel with confidence and peace of mind."
  },
  {
    "WhyChooseheading": "Fast & Easy Booking Options",
    "WhyChoosedescription": "Booking a cab near you is easy with Deva Cabs. Use our intuitive website or mobile app to book a ride in seconds, or call our dedicated support line for help. You get instant booking confirmation, real-time cab tracking, and ETA notifications so you’re always informed and in control."
  },
  {
    "WhyChooseheading": "Tailored Ride Options for Every Need",
    "WhyChoosedescription": "Whether you're going grocery shopping, commuting to the office, picking someone up from the station, or heading out for dinner, we’ve got the perfect ride. Choose from various vehicle types and packages designed to suit your trip—hourly rentals, one-way drops, airport transfers, and more—all available at your fingertips."
  }
]



















    }





const faqData = [
  {
    question: "How can I find a cab service near me in Mumbai with Deva Cabs?",
    answer: "Just open our website or mobile app, and we’ll automatically detect your location in Mumbai. You can also call us directly to book a nearby cab instantly."
  },
  {
    question: "Is Deva Cabs available throughout Mumbai?",
    answer: "Yes, Deva Cabs operates across all parts of Mumbai including South Mumbai, Western and Eastern suburbs, and Navi Mumbai. You can find a cab near you anytime."
  },
  {
    question: "What types of vehicles does Deva Cabs provide near me in Mumbai?",
    answer: "We offer a range of vehicles from hatchbacks and sedans to SUVs and premium cars, depending on your requirements and location."
  },
  {
    question: "How quickly can Deva Cabs reach my location in Mumbai?",
    answer: "Our large fleet allows us to dispatch the nearest available cab to your location. Most pickups happen within 10-15 minutes depending on traffic."
  },
  {
    question: "Can I use Deva Cabs for both short and long-distance travel within Mumbai?",
    answer: "Yes, whether you need a quick ride within your neighborhood or a longer trip across the city, Deva Cabs is ready to serve you."
  },
  {
    question: "Is Deva Cabs a safe cab service near me in Mumbai?",
    answer: "Safety is our top priority. All our drivers are background-verified, and our cabs are GPS-tracked with 24/7 support."
  },
  {
    question: "Can I make payments online when booking a cab near me?",
    answer: "Yes, Deva Cabs supports payments through UPI, credit/debit cards, wallets, and cash, offering flexible options for your convenience."
  },
  {
    question: "Can I schedule a cab near me in Mumbai in advance?",
    answer: "Absolutely. Use our app or website to pre-book your cab at a specific time and location anywhere in Mumbai."
  },
  {
    question: "Do Deva Cabs offer corporate or business travel services near me?",
    answer: "Yes, we offer customized corporate travel solutions. Businesses in Mumbai trust us for timely and professional cab services for their employees and clients."
  },
  {
    question: "Why choose Deva Cabs for cab service near me in Mumbai?",
    answer: "With fast pickups, clean vehicles, courteous drivers, and affordable pricing, Deva Cabs is your trusted choice for local travel in Mumbai."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Aditya Menon',
    role: 'Marketing Executive',
    review: 'I searched for a cab service near me in Mumbai and found Deva Cabs. The driver arrived within 10 minutes and the ride was smooth. Highly efficient!',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Tanvi Shah',
    role: 'College Student',
    review: 'Whenever I need a cab near me in Mumbai, I rely on Deva Cabs. They’re always reliable, safe, and quick to respond.',
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
  "name": "Cab Service Near Me Mumbai",
  "image": "https://devacab.com/assets/images/cab-service-near-me-mumbai.jpg", // Replace with actual image URL
  "description": "Find trusted cab service near you in Mumbai with Deva Cabs. Book local taxis, airport transfers, city tours, corporate rides, weddings, outstation trips, and monthly rentals. Affordable luxury and economy options available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "3500"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "520",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/cab-service-near-me-mumbai" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Cab Service Near Me Mumbai | Local & Airport Taxi Booking | Deva Cabs</title>
  <meta 
    name="description" 
    content="Deva Cabs offers cab service near me in Mumbai. Book local cabs, airport transfers, city tours, corporate travel, weddings, events, and monthly rentals. Affordable luxury and economy cabs available." 
  />
  <meta 
    name="keywords" 
    content="Cab Service Near Me Mumbai, Nearby Mumbai taxi, Local Mumbai cab near me, Mumbai airport cab near me, Nearby Mumbai city tour cab, Corporate cab near me Mumbai, Wedding car near me Mumbai, Outstation cab near me Mumbai, Monthly rental cab near me, Chauffeur cab near me Mumbai, Economy cab near me Mumbai, Budget cab near me Mumbai, Luxury cab near me Mumbai, Book cab near me Mumbai, Family cab near me Mumbai, Premium cab near me Mumbai, Mumbai cab near me events, Nearby cab booking Mumbai" 
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
                            <img src='./images/keyword/4.jpg' alt='img' />
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

export default CabSetvicenearmemumbai;