
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaidarshancabs() {



    const cardData =
    {
        keyword: ' Mumbai Darshan Cabs',
        heading: 'Deva Cabs:  Mumbai Darshan Cabs',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free Mumbai Darshan cab services for tourists and locals alike. Explore the vibrant city with our customized sightseeing packages covering iconic spots like Gateway of India, Marine Drive, Siddhivinayak Temple, Haji Ali, Juhu Beach, Bandra-Worli Sea Link, and more. Our experienced drivers and clean, air-conditioned cabs ensure a smooth and enjoyable sightseeing experience. Whether it is a full-day city tour or a half-day excursion, Deva Cabs provides flexible plans, affordable rates, and multiple vehicle options to make your Mumbai Darshan memorable and comfortable.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

"topPlaces": [
  {
    "title": "Gateway of India",
    "location": "Mumbai, Maharashtra",
    "description": "The Gateway of India is Mumbai’s most iconic landmark, built in 1924 to commemorate the visit of King George V and Queen Mary. Standing 26 meters tall on the waterfront in Colaba, it features Indo-Saracenic architecture and overlooks the Arabian Sea. Tourists flock here for ferry rides to Elephanta Caves, street snacks, and the beautiful view of the Taj Mahal Palace Hotel nearby. It’s a favorite photo spot and a symbol of Mumbai’s colonial legacy."
  },
  {
    "title": "Marine Drive",
    "location": "South Mumbai, Maharashtra",
    "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km crescent-shaped boulevard along the Arabian Sea. Lined with Art Deco buildings and palm trees, it’s a favorite spot for evening strolls, joggers, and sunset watchers. The Chowpatty Beach at the northern end is famous for Mumbai street food. At night, the street lights along the curve resemble a sparkling necklace, giving it its popular nickname."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CST)",
    "location": "Fort, Mumbai, Maharashtra",
    "description": "CST, formerly known as Victoria Terminus, is a UNESCO World Heritage Site and one of India’s busiest railway stations. Built in 1887, it features Victorian Gothic Revival architecture mixed with Indian influences. The grand domes, pointed arches, turrets, and stained glass make it a masterpiece of colonial-era construction. It’s also a central hub for Mumbai’s suburban and long-distance trains."
  },
  {
    "title": "Elephanta Caves",
    "location": "Elephanta Island, Mumbai Harbour",
    "description": "Located on Elephanta Island, about an hour’s ferry ride from the Gateway of India, these 5th–8th century rock-cut caves are a UNESCO World Heritage Site. The main attraction is the 20-foot-tall Trimurti sculpture of Lord Shiva. The island is serene, with stone steps leading through souvenir shops, monkeys, and views of the sea. It’s a perfect half-day historical excursion."
  },
  {
    "title": "Juhu Beach",
    "location": "Juhu, Mumbai, Maharashtra",
    "description": "Juhu Beach is one of the most popular beaches in Mumbai, known for its vast sandy shoreline, street food stalls, and vibrant crowds. It's a favorite hangout spot for locals, celebrities, and tourists. Activities include horse rides, kite flying, and enjoying bhel puri or pav bhaji by the sea. The beach becomes especially festive during Ganesh Visarjan and sunset hours."
  },
  {
    "title": "Haji Ali Dargah",
    "location": "Worli, Mumbai, Maharashtra",
    "description": "Built in 1431, Haji Ali Dargah is a revered Islamic shrine situated on a small islet off the Worli coast. It houses the tomb of Pir Haji Ali Shah Bukhari and is connected to the mainland by a narrow causeway. The white-domed mosque is both a spiritual center and architectural wonder, attracting people of all faiths for blessings and scenic views of the Arabian Sea."
  },
  {
    "title": "Sanjay Gandhi National Park",
    "location": "Borivali, Mumbai, Maharashtra",
    "description": "Spanning over 100 square kilometers, Sanjay Gandhi National Park is a green lung within the city. It’s home to leopards, deer, monkeys, and over 250 species of birds. Attractions include a lion and tiger safari, boating, the toy train Vanrani, and the 2,000-year-old Kanheri Caves carved into basalt rock. It’s a peaceful escape for nature lovers and families."
  },
  {
    "title": "Bandra-Worli Sea Link",
    "location": "Mumbai, Maharashtra",
    "description": "The Bandra-Worli Sea Link is a cable-stayed bridge that connects Mumbai’s western suburbs to South Mumbai. Officially named the Rajiv Gandhi Sea Link, it stretches 5.6 km and offers breathtaking views of the sea and skyline. The bridge symbolizes modern Mumbai and is best admired at night when it’s lit up beautifully. It’s not open to pedestrians but is a scenic route by car."
  },
  {
    "title": "Chor Bazaar",
    "location": "Grant Road, Mumbai, Maharashtra",
    "description": "Chor Bazaar, meaning 'Thieves’ Market', is one of the oldest and most famous flea markets in Mumbai. Located near Grant Road, it’s a paradise for antique lovers and bargain hunters. From vintage Bollywood posters and furniture to brassware, gramophones, and spare car parts—you’ll find a fascinating mix of old and odd. It’s a must-visit for collectors and those looking for quirky souvenirs."
  },
  {
    "title": "Global Vipassana Pagoda",
    "location": "Gorai, Mumbai, Maharashtra",
    "description": "The Global Vipassana Pagoda is a large Buddhist meditation center near Gorai Creek. Standing 96 meters tall, it houses the world’s largest stone dome built without supporting pillars. The golden stupa is a symbol of peace and harmony and offers free Anapana meditation sessions for visitors. Surrounded by water and greenery, it’s an ideal spot for spiritual retreat and quiet reflection."
  }
],



  "services": [
    {
      "name": "Mumbai Darshan Cabs",
      "description": "Explore Mumbai like never before with Deva Cabs’ dedicated Mumbai Darshan cab service. Our specially curated city tour packages are ideal for tourists, families, or anyone who wants to discover the iconic landmarks of Mumbai comfortably and efficiently. Visit Gateway of India, Marine Drive, Haji Ali, Siddhivinayak Temple, Juhu Beach, and more — all in a single day. Our Mumbai Darshan cabs are clean, air-conditioned, and driven by experienced chauffeurs who know the best sightseeing routes. With flexible packages, transparent pricing, and professional service, we make your Mumbai tour memorable from start to finish."
    },
    {
      "name": "Book Mumbai City Tour Cab",
      "description": "Make the most of your time in Mumbai by booking a city tour cab with Deva Cabs. Whether you're a first-time visitor or a local looking to rediscover the city, our well-planned Mumbai city tour cabs offer comfort, convenience, and local expertise. Enjoy curated itineraries covering historic sites, bustling markets, beaches, and more. Choose between half-day or full-day tours, and travel in AC sedans, SUVs, or luxury cars. Our drivers are courteous and knowledgeable, ready to provide insights and ensure a smooth ride across the city’s top attractions."
    },
    {
      "name": "Mumbai Sightseeing Taxi",
      "description": "See the best of Mumbai with Deva Cabs’ sightseeing taxi service. Designed for solo travelers, couples, and families alike, our Mumbai sightseeing taxis cover major city attractions including Colaba, Worli Sea Face, Bandra Bandstand, Hanging Gardens, and more. You can customize your itinerary or follow our expert-designed tour route. Our cabs are available for hourly bookings, half-day, and full-day rentals, ensuring flexibility to suit your travel plans. Enjoy the city in comfort with AC vehicles, polite chauffeurs, and guaranteed on-time service."
    },
    {
      "name": "Local City Darshan Cab Mumbai",
      "description": "Experience Mumbai with a local touch through Deva Cabs’ local city darshan cab service. Our city tours include the cultural, historical, and coastal highlights of Mumbai. With experienced local drivers, we ensure you don't miss hidden gems and iconic spots alike. Book our city darshan cabs for flexible durations and enjoy clean, comfortable rides across Mumbai’s vibrant neighborhoods. Ideal for day-long sightseeing, casual exploration, or visiting religious places across the city."
    },
    {
      "name": "Chauffeur for Mumbai Darshan",
      "description": "Deva Cabs provides trained chauffeurs for your Mumbai Darshan experience. Our drivers are familiar with all major tourist spots and can assist in creating the perfect tour itinerary. They speak multiple languages, are courteous, and know how to avoid traffic bottlenecks for a smoother tour. Whether you need a guide-like experience or just a comfortable drive, our chauffeur-driven Mumbai city tour cabs ensure a safe and enjoyable journey."
    },
    {
      "name": "Affordable Mumbai Darshan Cab",
      "description": "Enjoy Mumbai Darshan without stretching your budget with Deva Cabs’ affordable city tour packages. Our budget-friendly Mumbai sightseeing cabs come with transparent pricing, no hidden charges, and multiple vehicle options to suit every group size. Whether you’re traveling solo, with family, or in a small group, we provide AC sedans and hatchbacks at economical rates. Explore more while spending less — that’s the Deva Cabs promise."
    },
    {
      "name": "Luxury Cab for Mumbai Tour",
      "description": "Experience Mumbai in premium style with our luxury city tour cabs. Deva Cabs offers high-end vehicles like Toyota Innova Crysta, Honda City, and other executive sedans/SUVs for your Mumbai Darshan. Ideal for corporate guests, VIPs, or those seeking a more refined tour experience, our luxury cabs ensure top-notch comfort, professional chauffeurs, and a smooth ride. Book your premium cab for a full-day Mumbai city tour and travel in absolute comfort."
    },
    {
      "name": "Mumbai Darshan SUV Cab",
      "description": "Need extra space and comfort for your Mumbai sightseeing trip? Book a spacious SUV for your Mumbai Darshan with Deva Cabs. Perfect for families and groups, our SUVs offer excellent legroom, luggage capacity, and a commanding view of the city’s sights. Visit temples, museums, shopping areas, and beaches without squeezing in a small car. Our SUV cabs are ideal for long hours on the road, with professional drivers to guide your tour."
    },
    {
      "name": "Family Darshan Cab Mumbai",
      "description": "Make family sightseeing in Mumbai a joy with our family-friendly darshan cabs. Deva Cabs offers comfortable vehicles for families exploring the city together. From historic places to parks, beaches to religious sites, our Mumbai Darshan family cabs are designed to keep your trip convenient, safe, and enjoyable. Child-friendly features, courteous drivers, and customizable stops make our cabs perfect for full-family tours of Mumbai."
    },
    {
      "name": "Half Day Darshan Cab Mumbai",
      "description": "Short on time but still want to experience Mumbai? Book Deva Cabs’ half-day darshan cabs for a quick tour of the city’s major highlights. Ideal for transit passengers, business travelers, or short-stay visitors, our half-day Mumbai sightseeing cabs cover key attractions in 4–5 hours. Get the most out of your visit with a well-planned route, knowledgeable chauffeur, and a comfortable vehicle tailored to your time and needs."
    },
    {
      "name": "Full Day Mumbai Sightseeing Taxi",
      "description": "See everything Mumbai has to offer with our full-day sightseeing taxi service. Spend 8–10 hours exploring the city’s cultural, historical, and modern attractions in a clean, air-conditioned cab. Our full-day Mumbai Darshan service includes pick-up and drop at your location, pre-planned routes or custom stops, and expert driver support throughout the journey. Book a full-day tour and discover the essence of Mumbai with Deva Cabs."
    },
    {
      "name": "Online Mumbai Darshan Cab Booking",
      "description": "Booking a Mumbai Darshan cab is quick and hassle-free with Deva Cabs' online booking system. Select your vehicle, date, time, and type of tour — and confirm your cab in minutes. With instant booking confirmation, secure payment options, and round-the-clock support, you can plan your Mumbai tour confidently. Book online today and get ready for a comfortable and curated city experience."
    },
    {
      "name": "Tourist Cab Mumbai Darshan",
      "description": "Designed specifically for travelers and tourists, Deva Cabs’ Mumbai Darshan taxi service is a great way to experience the best of the city. Our tourist cabs are driven by friendly and informed chauffeurs who can provide insights into each landmark and help customize your route. Whether you’re here for a day or a week, start your Mumbai experience the right way — with a reliable tourist cab from Deva Cabs."
    }
  ],
  "tableData": [
    ["Mumbai Darshan Cabs", "-Book Mumbai City Tour Cab"],
    ["Mumbai Sightseeing Taxi", "-Local City Darshan Cab Mumbai"],
    ["Chauffeur for Mumbai Darshan", "-Affordable Mumbai Darshan Cab"],
    ["Luxury Cab for Mumbai Tour", "-Mumbai Darshan SUV Cab"],
    ["Family Darshan Cab Mumbai", "-Half Day Darshan Cab Mumbai"],
    ["Full Day Mumbai Sightseeing Taxi", "-Online Mumbai Darshan Cab Booking"],
    ["Tourist Cab Mumbai Darshan", "-Mumbai Darshan Cabs"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Comprehensive Mumbai Darshan Tours",
    "WhyChoosedescription": "Explore Mumbai’s iconic landmarks and hidden gems with Deva Cabs’ specially curated Mumbai Darshan cab services. Whether you want to visit Gateway of India, Marine Drive, Elephanta Caves, or local markets, we provide personalized routes to suit your interests and schedule."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles",
    "WhyChoosedescription": "Our fleet includes well-maintained sedans and SUVs with air conditioning, ample legroom, and luggage space, ensuring a comfortable ride for individuals, families, or groups during your Mumbai sightseeing tour."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Local Knowledge",
    "WhyChoosedescription": "Our drivers are not just chauffeurs—they’re knowledgeable guides who know Mumbai inside out. They offer insights about the city’s culture, history, and attractions, making your darshan tour informative and enjoyable."
  },
  {
    "WhyChooseheading": "Flexible and Customizable Itineraries",
    "WhyChoosedescription": "Whether you have a few hours or a full day, our Mumbai Darshan packages can be tailored to fit your preferences. Choose your own destinations or opt for popular predefined routes to make the most of your sightseeing experience."
  },
  {
    "WhyChooseheading": "Affordable Pricing with Transparent Fares",
    "WhyChoosedescription": "We provide clear, upfront pricing for Mumbai Darshan cab services without any hidden charges. Choose hourly, half-day, or full-day packages that suit your budget and travel plans."
  },
  {
    "WhyChooseheading": "24/7 Availability for Sightseeing Tours",
    "WhyChoosedescription": "No matter when you want to explore Mumbai, our cabs are available round the clock. Early morning or late evening tours can be easily scheduled to match your itinerary and preferences."
  },
  {
    "WhyChooseheading": "Easy Booking and Real-Time Tracking",
    "WhyChoosedescription": "Book your Mumbai Darshan cab quickly through our app, website, or customer support. Receive instant confirmations and track your cab in real-time for a seamless and hassle-free sightseeing experience."
  },
  {
    "WhyChooseheading": "Dedicated Customer Support",
    "WhyChoosedescription": "Our customer care team is always ready to help you customize your Mumbai Darshan tour, answer questions, or assist with any special requests, ensuring a smooth and memorable trip."
  }
]















    }




const faqData = [
  {
    question: "Does Deva Cabs offer Mumbai Darshan cab services?",
    answer: "Yes, Deva Cabs provides dedicated Mumbai Darshan cab services for sightseeing across the city’s top tourist attractions. You can book a ride through our website, mobile app, or customer support."
  },
  {
    question: "What places are covered in the Mumbai Darshan tour?",
    answer: "Our Mumbai Darshan cabs cover major landmarks like Gateway of India, Marine Drive, Siddhivinayak Temple, Haji Ali Dargah, Juhu Beach, Hanging Gardens, and more. Customized itineraries are also available."
  },
  {
    question: "What are the charges for Mumbai Darshan cab service?",
    answer: "Charges for Mumbai Darshan depend on the duration of the trip, the type of vehicle selected, and any custom stops. You can get an instant quote via our website or app."
  },
  {
    question: "What types of vehicles are available for Mumbai Darshan?",
    answer: "We offer a range of vehicles including hatchbacks, sedans, SUVs, and tempo travellers for group travel. Choose what best suits your group size and comfort."
  },
  {
    question: "Can I customize the Mumbai Darshan itinerary?",
    answer: "Yes, Deva Cabs offers customizable itineraries so you can choose the spots you wish to visit, along with your preferred schedule and timings."
  },
  {
    question: "Is it safe to use Deva Cabs for sightseeing in Mumbai?",
    answer: "Absolutely. All our cabs are GPS-enabled, well-maintained, and driven by experienced, verified drivers who know the city well."
  },
  {
    question: "Are guides available with Mumbai Darshan cabs?",
    answer: "While we do not provide professional tour guides, our experienced drivers are knowledgeable about the city's landmarks and can offer helpful insights along the way."
  },
  {
    question: "Can I book a half-day or full-day Mumbai Darshan tour?",
    answer: "Yes, we offer flexible packages including half-day, full-day, and hourly-based Mumbai Darshan services. Book as per your convenience."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Prakash Sharma',
    role: 'Tourist from Delhi',
    review: 'Booked a Mumbai Darshan cab with Deva Cabs and had an amazing day. The driver was very polite and knew all the important spots. The car was clean and comfortable.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Falguni Patel',
    role: 'Visitor from Gujarat',
    review: 'We used Deva Cabs for a family Mumbai Darshan tour. Everything was well organized, and the driver was very helpful. Highly recommend them for a relaxed sightseeing experience.',
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
  "name": "Mumbai Darshan Cabs",
  "image": "https://devacab.com/assets/images/mumbai-darshan-cabs.jpg", // Replace with actual image URL
  "description": "Book Mumbai Darshan cabs with Deva Cabs for a comfortable city sightseeing experience. Choose from AC sedans, SUVs, and luxury vehicles for half-day or full-day Mumbai tours. Ideal for tourists, families, and groups with chauffeur-driven convenience and online booking.",
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
    "price": "1799", // Example starting fare, adjust if needed
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-darshan-cabs" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Mumbai Darshan Cabs | Book City Tour & Sightseeing Taxi | Deva Cabs</title>
  <meta
    name="description"
    content="Explore the city with Mumbai Darshan Cabs from Deva Cabs. Book full-day or half-day sightseeing taxis with AC, SUV, and luxury options. Chauffeur-driven and ideal for tourists and family groups. Easy online booking available."
  />
  <meta
    name="keywords"
    content="Mumbai Darshan Cabs, Book Mumbai city tour cab, Mumbai sightseeing taxi, Local city darshan cab Mumbai, Chauffeur for Mumbai darshan, Affordable Mumbai darshan cab, Luxury cab for Mumbai tour, Mumbai darshan SUV cab, Family darshan cab Mumbai, Half day darshan cab Mumbai, Full day Mumbai sightseeing taxi, Online Mumbai darshan cab booking, Tourist cab Mumbai darshan"
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
                            <img src='/images/keyword/73.jpg' alt='img' />
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

export default Mumbaidarshancabs;