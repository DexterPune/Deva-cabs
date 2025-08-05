
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Onlinetaxibookingmumbai() {



    const cardData =
    {
        keyword: '  Online taxi booking mumbai',
        heading: 'Deva Cabs: Online taxi booking mumbai',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free online taxi booking services in Mumbai. Whether you are planning a quick local trip or a long-distance ride, our easy-to-use booking system and prompt service ensure a stress-free experience. With just a few taps, you can book a clean, well-maintained taxi with a professional driver right at your doorstep. Enjoy the convenience of 24/7 availability, transparent pricing, and safe travel across Mumbai with Deva Cabs.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

   "topPlaces": [
    {
      "title": "Marine Drive",
      "location": "Mumbai, Maharashtra",
      "description": "Marine Drive is a 3.6-kilometer-long arc-shaped boulevard that stretches from Nariman Point to Girgaon Chowpatty. Also known as the 'Queen’s Necklace' for its glowing curve of street lights at night, it is a beloved seaside promenade for evening walks, breezy bike rides, and romantic sunsets. The backdrop of art deco buildings and the peaceful sound of waves create a rare urban serenity, making Marine Drive a timeless retreat in the heart of Mumbai."
    },
    {
      "title": "Gateway of India",
      "location": "Mumbai, Maharashtra",
      "description": "Located at the waterfront in Colaba, the Gateway of India is Mumbai’s most iconic monument. Built in 1924 to honor the visit of King George V and Queen Mary, this massive basalt arch combines Indo-Saracenic architecture with colonial flair. Overlooking the Arabian Sea and facing the Taj Mahal Palace Hotel, it serves as a central tourist hub, with ferry rides to Elephanta Caves and local photographers capturing the city’s vibrant pulse. The Gateway is not just a historic landmark—it’s a symbol of Mumbai’s pride and resilience."
    },
    {
      "title": "Elephanta Caves",
      "location": "Elephanta Island, Mumbai Harbour",
      "description": "A UNESCO World Heritage Site, the Elephanta Caves are a complex of ancient Hindu and Buddhist rock-cut temples located on Elephanta Island, about 11 km from Mumbai. These 5th–8th century caves are renowned for their incredible sculptures of Lord Shiva, particularly the 20-foot-high Trimurti—the three-faced form of Shiva representing creation, preservation, and destruction. The island is accessible by ferry from the Gateway of India and offers a tranquil and culturally enriching day trip."
    },
    {
      "title": "Siddhivinayak Temple",
      "location": "Prabhadevi, Mumbai, Maharashtra",
      "description": "The Shree Siddhivinayak Ganapati Mandir is one of Mumbai’s most spiritually significant landmarks, drawing millions of devotees each year. Dedicated to Lord Ganesha, the temple is famous for its beautiful black stone idol with a curved trunk and diamond-studded forehead. Rich in faith, energy, and devotion, the temple also showcases architectural beauty with its carved wooden doors and gold-plated sanctum. Tuesday is considered especially auspicious for darshan, attracting celebrities and commoners alike."
    },
    {
      "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
      "location": "Mumbai, Maharashtra",
      "description": "A majestic example of Indo-Gothic architecture, Chhatrapati Shivaji Maharaj Terminus is both a UNESCO World Heritage Site and one of India’s busiest railway stations. Designed by British architect F.W. Stevens in 1887, it features elaborate stone carvings, pointed arches, domes, and turrets. The station is a vital part of Mumbai’s daily life while also standing as a living monument to the city’s colonial legacy and artistic grandeur."
    },
    {
      "title": "Juhu Beach",
      "location": "Mumbai, Maharashtra",
      "description": "Juhu Beach is a bustling stretch of sandy coastline in suburban Mumbai, popular for sunsets, local street food, and Bollywood vibes. From joggers and kite-flyers to food stalls selling vada pav, bhel puri, and kulfi, the beach offers a true slice of Mumbai life. Celebrities often frequent nearby luxury homes, and the beach hosts cultural performances and film shoots throughout the year. It's the perfect blend of leisure and local flavor."
    },
    {
      "title": "Haji Ali Dargah",
      "location": "Worli, Mumbai, Maharashtra",
      "description": "Built in the 15th century, the Haji Ali Dargah is a white-domed Indo-Islamic shrine located on an islet off the coast of Worli. The dargah houses the tomb of Sufi saint Haji Ali Shah Bukhari and is accessible via a narrow causeway during low tide. The spiritual calm, rhythmic sea waves, and panoramic sea views create a unique experience for visitors of all faiths. It is one of the most peaceful and scenic religious sites in Mumbai."
    },
    {
      "title": "Sanjay Gandhi National Park",
      "location": "Borivali, Mumbai, Maharashtra",
      "description": "Spread across 104 square kilometers, Sanjay Gandhi National Park is Mumbai’s green oasis and a rare natural reserve within a bustling metropolis. The park is home to leopards, deer, monkeys, and countless bird species. A major highlight is the Kanheri Caves—ancient Buddhist cave carvings over 2,000 years old. With toy train rides, cycling trails, nature walks, and boating, the park is a perfect weekend escape for families, nature lovers, and adventure seekers."
    },
    {
      "title": "Chor Bazaar",
      "location": "Bhendi Bazaar, South Mumbai, Maharashtra",
      "description": "One of the oldest and most legendary flea markets in India, Chor Bazaar is a chaotic maze of shops offering antiques, Bollywood posters, vintage cameras, old clocks, and second-hand furniture. Despite the name (meaning 'Thieves Market'), it's a legal and vibrant place known for unexpected treasures and bargaining fun. Whether you're a collector or a curious explorer, this market is a true reflection of Mumbai’s vibrant street economy and layered history."
    },
    {
      "title": "Girgaon Chowpatty",
      "location": "Girgaon, Mumbai, Maharashtra",
      "description": "Girgaon Chowpatty is a central beach located at the northern end of Marine Drive. Known for its lively ambiance, it becomes a focal point during Ganesh Chaturthi for idol immersions. Food stalls offer classic Mumbai street snacks like pani puri, pav bhaji, and kulfi. Families, couples, and students often gather here to watch the sunset, fly kites, or simply relax by the sea. The beach offers both spiritual and recreational charm right in the heart of the city."
    }
  ],



  "services": [
    {
      "name": "Online Taxi Booking Mumbai",
      "description": "Deva Cabs makes online taxi booking in Mumbai quick, secure, and hassle-free. With our easy-to-use booking platform, you can reserve a cab from anywhere in just a few clicks. Our service includes instant confirmation, GPS-tracked vehicles, and a wide selection of cars — from economy to luxury. Whether you need a ride within the city or to another destination, our online booking system ensures reliable service at all hours."
    },
    {
      "name": "Taxi Booking Online Mumbai",
      "description": "Book your taxi online in Mumbai with Deva Cabs and skip the hassle of waiting or calling. Our platform is designed for speed, reliability, and convenience. Choose your preferred car, set your time and destination, and receive real-time updates on your ride. Perfect for business meetings, airport drops, or daily commutes, our online taxi booking offers peace of mind and affordable fares."
    },
    {
      "name": "Best Online Taxi Services in Mumbai",
      "description": "Looking for the best online taxi service in Mumbai? Deva Cabs leads the way with reliable drivers, punctual service, and a fleet of modern, clean vehicles. Our easy online platform allows you to schedule rides, track your cab, and choose from a range of cars. With 24/7 availability and outstanding customer support, we are trusted by thousands across Mumbai for local and outstation travel."
    },
    {
      "name": "Mumbai Taxi Booking App",
      "description": "Download the Deva Cabs taxi booking app for Mumbai and experience smooth, on-the-go cab reservations. Our app supports live tracking, fare estimates, easy payments, and ride history access. Whether you're commuting daily or booking in advance, our user-friendly mobile app gives you full control over your taxi bookings — anytime, anywhere."
    },
    {
      "name": "Online Cab Booking Mumbai",
      "description": "Deva Cabs offers online cab booking in Mumbai with flexible options for all types of travelers. Book a sedan for a solo ride, an SUV for a family trip, or a luxury car for special occasions. Our online portal ensures instant booking confirmation, detailed invoices, and multiple payment modes. Enjoy a safe and timely ride across Mumbai with just a few clicks."
    },
    {
      "name": "Mumbai Online Taxi Booking Services",
      "description": "Our Mumbai-based online taxi booking services are perfect for local travel, business trips, and intercity rides. Deva Cabs allows you to pre-book or schedule rides easily using our website or mobile app. All rides are managed by professional drivers, and customer support is available 24/7 for any queries. Safe, fast, and budget-friendly travel — that’s our promise."
    },
    {
      "name": "Affordable Taxi Booking Online Mumbai",
      "description": "Looking for budget taxi booking online in Mumbai? Deva Cabs provides the most affordable online cab rates without compromising on comfort or safety. Get instant fare estimates, no hidden charges, and transparent billing. We offer seasonal discounts and corporate packages as well. Travel smarter with low-cost online taxi booking across Mumbai."
    },
    {
      "name": "Book Taxi Online Mumbai",
      "description": "Need to book a taxi quickly? Deva Cabs makes it easy to book a taxi online in Mumbai for immediate or scheduled trips. Our online system is optimized for fast bookings, route selection, and real-time updates. Whether you're heading to a meeting, market, or a weekend getaway, booking a taxi online with us is fast and reliable."
    },
    {
      "name": "Mumbai Online Cab Booking with Driver",
      "description": "Deva Cabs provides online cab booking in Mumbai with experienced, licensed drivers. Whether it’s for a few hours, a full day, or long-distance travel, our drivers ensure comfort, safety, and punctuality. With easy online booking, you get a vehicle and a courteous chauffeur without the usual delays and complications."
    },
    {
      "name": "Luxury Online Taxi Booking Mumbai",
      "description": "For a premium travel experience, book luxury taxis online in Mumbai with Deva Cabs. We offer high-end vehicles like Innova Crysta, Hyundai Alcazar, and Sedans for your executive travel or special occasions. Get door-to-door service, professional drivers, and an elite ride experience with our luxury taxi booking portal."
    },
    {
      "name": "Online Taxi Booking for Mumbai Airport",
      "description": "Deva Cabs specializes in online taxi booking for Mumbai Airport pick-up and drop-off. Avoid last-minute rushes and traffic delays with scheduled airport taxis that monitor your flight in real time. Choose from hatchbacks, sedans, or SUVs and enjoy a punctual, comfortable airport transfer every time."
    },
    {
      "name": "24/7 Online Taxi Booking Mumbai",
      "description": "Whether it’s early morning or late night, Deva Cabs offers 24/7 online taxi booking across Mumbai. Our platform ensures round-the-clock availability, real-time confirmations, and driver tracking. Perfect for emergencies, late-night flights, or early-morning meetings — we’re just a click away at any hour."
    },
    {
      "name": "Online Taxi Booking for Sightseeing Mumbai",
      "description": "Planning a tour of Mumbai? Deva Cabs offers full-day and half-day sightseeing taxi services available for online booking. Visit iconic spots like Gateway of India, Marine Drive, Juhu Beach, and more with experienced local drivers. Our sightseeing cabs are clean, spacious, and perfect for exploring the city at your own pace."
    },
    {
      "name": "Online Taxi Booking for Family Trips Mumbai",
      "description": "Make family travel easy with Deva Cabs’ online taxi booking services. Whether it’s a family gathering, shopping trip, or a day outing, our multi-seat vehicles and trained drivers ensure a safe, comfortable journey. Book online and choose vehicles suited for groups, kids, and luggage — all at affordable rates."
    },
    {
      "name": "Mumbai Online Taxi Booking for Business",
      "description": "Deva Cabs supports online taxi booking for business travel in Mumbai. Schedule meetings, airport pickups, and VIP travel easily through our web or app platform. We offer GST billing, ride logs, and priority service for professionals and corporate teams. Ride with us to keep your business moving efficiently."
    },
    {
      "name": "Online Booking for Outstation Taxi Mumbai",
      "description": "Planning a trip outside Mumbai? Book your outstation cab online with Deva Cabs. We offer one-way, round-trip, and multi-city packages with doorstep pickup and experienced drivers. Choose from economy to luxury vehicles and travel anywhere from Mumbai with ease using our secure online platform."
    },
    {
      "name": "Mumbai Online Taxi Booking with Instant Confirmation",
      "description": "Skip the waiting! Deva Cabs offers instant confirmation for all online taxi bookings in Mumbai. The moment you book, your cab is locked in and details are shared via SMS and email. No follow-ups or uncertainty — just fast, clear booking with 100% reliability."
    },
    {
      "name": "One-Way Online Taxi Booking Mumbai",
      "description": "Need a one-way ride from Mumbai? Deva Cabs provides online booking for one-way taxis at the best rates. No return fare or extra charges — just pay for your ride. Book online for popular routes like Mumbai to Pune, Nashik, Lonavala, and more with instant confirmation."
    },
    {
      "name": "Mumbai Online Taxi Booking Near Me",
      "description": "Searching for taxi booking near your location in Mumbai? Use Deva Cabs’ online system to instantly locate and book a cab closest to you. Our GPS-based platform shows real-time availability of nearby drivers so you can get picked up quickly — no phone calls required."
    }
  ],
  "tableData": [
    ["Online Taxi Booking Mumbai", "-Taxi Booking Online Mumbai"],
    ["Best Online Taxi Services in Mumbai", "-Mumbai Taxi Booking App"],
    ["Online Cab Booking Mumbai", "-Mumbai Online Taxi Booking Services"],
    ["Affordable Taxi Booking Online Mumbai", "-Book Taxi Online Mumbai"],
    ["Mumbai Online Cab Booking with Driver", "-Luxury Online Taxi Booking Mumbai"],
    ["Online Taxi Booking for Mumbai Airport", "-24/7 Online Taxi Booking Mumbai"],
    ["Online Taxi Booking for Sightseeing Mumbai", "-Online Taxi Booking for Family Trips Mumbai"],
    ["Mumbai Online Taxi Booking for Business", "-Online Booking for Outstation Taxi Mumbai"],
    ["Mumbai Online Taxi Booking with Instant Confirmation", "-One-Way Online Taxi Booking Mumbai"],
    ["Mumbai Online Taxi Booking Near Me", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Seamless Online Booking Experience",
    "WhyChoosedescription": "Deva Cabs offers an easy-to-use online platform where you can book your taxi in just a few clicks. Whether you need a cab immediately or want to schedule a future ride, our intuitive website and mobile-friendly interface make the process quick, reliable, and user-friendly—eliminating the hassle of calling or waiting in queues."
  },
  {
    "WhyChooseheading": "Instant Confirmation and Live Tracking",
    "WhyChoosedescription": "With Deva Cabs, once you book online, you receive an instant booking confirmation along with driver and cab details. Our real-time GPS tracking lets you monitor your ride’s location, giving you full visibility and peace of mind, especially in a busy city like Mumbai."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicles to Choose From",
    "WhyChoosedescription": "Our online booking portal offers a wide selection of vehicles to suit your specific travel needs—ranging from economical hatchbacks to luxury sedans and SUVs. Whether it’s a solo trip, a family outing, or business travel, you can choose the perfect ride while booking online."
  },
  {
    "WhyChooseheading": "Multiple Payment Options and Digital Invoicing",
    "WhyChoosedescription": "Pay your fare conveniently using your preferred method—UPI, credit/debit cards, wallets, or net banking. Our secure payment gateway ensures safe transactions, and digital invoices are sent to your email for easy expense tracking and reimbursement purposes."
  },
  {
    "WhyChooseheading": "24/7 Taxi Availability Across Mumbai",
    "WhyChoosedescription": "Need a cab at 3 AM or during peak evening traffic? No problem. Deva Cabs operates round the clock across all major zones in Mumbai, ensuring you always have access to a reliable ride regardless of the time or occasion."
  },
  {
    "WhyChooseheading": "Verified Drivers and Safe Rides",
    "WhyChoosedescription": "Every Deva Cabs driver is thoroughly background-checked and trained to prioritize your safety and comfort. Our vehicles are equipped with safety features like seat belts, airbags, and GPS, and we ensure all hygiene protocols are followed, especially for shared or long-distance rides."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Our online booking system provides upfront pricing with no hidden charges. What you see is what you pay—be it a local trip, airport transfer, or intercity journey. We also offer special discounts for regular users and promotional offers during festive periods."
  },
  {
    "WhyChooseheading": "Customer Support When You Need It",
    "WhyChoosedescription": "In case you face any booking issues or last-minute changes, our support team is just a call or click away. We’re available 24/7 to help you manage your ride, modify your booking, or resolve concerns quickly and professionally."
  }
]



















    }








const faqData = [
  {
    question: "How can I book a taxi online in Mumbai with Deva Cabs?",
    answer: "You can book a taxi easily through our website or mobile app. Just select your pickup location, destination, and preferred vehicle to confirm your ride in seconds."
  },
  {
    question: "Is online taxi booking with Deva Cabs available 24/7 in Mumbai?",
    answer: "Yes, our online booking system is available 24/7. Whether it’s early morning or late at night, you can book a taxi anytime in Mumbai."
  },
  {
    question: "What types of taxis are available for online booking in Mumbai?",
    answer: "We offer a range of options including hatchbacks, sedans, SUVs, and premium cars to suit your needs, all bookable online."
  },
  {
    question: "Can I track my ride after booking a taxi online with Deva Cabs?",
    answer: "Yes, once your booking is confirmed, you’ll receive live tracking details and driver contact information for real-time updates."
  },
  {
    question: "Do I get instant confirmation for my online taxi booking in Mumbai?",
    answer: "Absolutely. You will receive instant booking confirmation via SMS, email, or in-app notification right after you confirm your ride."
  },
  {
    question: "Can I schedule an online taxi booking in advance?",
    answer: "Yes, you can schedule your ride for a later date or time while booking online, ensuring timely pickup when you need it."
  },
  {
    question: "What payment methods are accepted for online taxi bookings in Mumbai?",
    answer: "We accept multiple payment options including UPI, credit/debit cards, net banking, wallets, and cash at the end of your ride."
  },
  {
    question: "Is Deva Cabs’ online taxi booking system safe and secure?",
    answer: "Yes, our platform is encrypted and secure. Your personal and payment details are protected throughout the booking process."
  },
  {
    question: "Can I cancel or modify my online taxi booking with Deva Cabs?",
    answer: "Yes, you can cancel or change your booking easily through our app or by contacting our support team. Cancellation policies may apply."
  },
  {
    question: "Why choose Deva Cabs for online taxi booking in Mumbai?",
    answer: "Deva Cabs offers a fast, user-friendly online booking experience backed by reliable service, experienced drivers, and transparent pricing."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Kunal Jain',
    role: 'Entrepreneur',
    review: 'I needed a last-minute cab in Mumbai and booked online with Deva Cabs. The process was super smooth, and the cab arrived in less than 10 minutes. Great service!',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Alisha Rao',
    role: 'Student',
    review: 'Online taxi booking in Mumbai has never been easier. Deva Cabs made it fast and convenient. The driver was polite, and the ride was comfortable.',
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
  "name": "Online Taxi Booking Mumbai",
  "image": "https://devacab.com/assets/images/online-taxi-booking-mumbai.jpg", // Replace with actual image URL
  "description": "Book taxis online in Mumbai with Deva Cabs. Enjoy instant, affordable, and 24x7 online taxi booking for airport transfers, city tours, outstation trips, and chauffeur services. Safe and prepaid options available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "4600"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "450",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/online-taxi-booking-mumbai" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Online Taxi Booking Mumbai | Instant Cab Booking & Airport Taxi | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book taxis online in Mumbai with Deva Cabs. Instant, affordable, and 24x7 online taxi bookings for airport transfers, city tours, outstation trips, and chauffeur services. Safe prepaid rides." 
  />
  <meta 
    name="keywords" 
    content="Online Taxi Booking Mumbai, Book taxi online Mumbai, Mumbai cab booking app, Instant cab service Mumbai, Affordable online taxi Mumbai, Luxury cab booking Mumbai, Online Mumbai airport taxi, Mumbai taxi reservation, One-way online cab Mumbai, Round trip taxi booking Mumbai, Outstation cab booking online Mumbai, Mumbai car rental online, Quick cab booking Mumbai, Mumbai online chauffeur service, Prepaid taxi booking Mumbai, Online Mumbai Darshan cab, 24x7 online cab Mumbai, Emergency cab booking Mumbai" 
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
                            <img src='./images/keyword/7.jpg' alt='img' />
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

export default Onlinetaxibookingmumbai;