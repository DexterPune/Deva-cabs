
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaiairportcabbooking() {



    const cardData =
    {
        keyword: ' Mumbai Airport Cab Booking ',
        heading: 'Deva Cabs: Mumbai Airport Cab Booking    ',
        headingDescription: 'Deva Cabs provides reliable and punctual Mumbai Airport cab booking services, ensuring a smooth start or end to your journey. Whether you are arriving late at night or catching an early flight, our professional drivers and clean, air-conditioned cabs guarantee timely pickups and drop-offs. Choose from a wide range of vehicles—Sedan, SUV, or Innova Crysta—for solo travel or group airport transfers. With real-time tracking and fixed fares, Deva Cabs makes airport travel convenient and stress-free.',

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
    "name": "Mumbai Airport Cab Booking",
    "description": "Deva Cabs provides seamless Mumbai airport cab booking services with instant confirmation, real-time tracking, and 24x7 availability. Whether you’re arriving at Terminal 1 or T2, we ensure a smooth pickup and drop experience with courteous drivers, clean vehicles, and punctual service. Our fleet includes sedans, SUVs, premium cars, and tempo travellers—catering to solo travelers, families, and corporate clients alike. Book in advance or at the last minute using our easy online platform or customer helpline. With Deva Cabs, your airport travel is stress-free, affordable, and reliable every time."
  },
  {
    "name": "Book taxi from Mumbai airport",
    "description": "Need a cab from Mumbai airport? Book with Deva Cabs and get picked up right outside the terminal by a professional chauffeur. We monitor flight schedules in real time to ensure timely pickups—even in case of delays. Our drivers assist with luggage and help you settle in for a comfortable ride to your destination. Whether you're heading to South Mumbai, Thane, Navi Mumbai, or any suburb, we’ve got you covered with fixed pricing and no hidden charges. Choose from economy to luxury vehicles and experience world-class service upon arrival."
  },
  {
    "name": "Mumbai T2 cab service",
    "description": "Arriving at Mumbai’s Terminal 2? Deva Cabs offers dedicated T2 cab services that include professional meet-and-greet, luggage assistance, and timely transfers. Our experienced drivers are familiar with T2 pickup protocols and parking zones, ensuring a hassle-free exit from the airport. We provide a wide selection of vehicles—from hatchbacks for quick city trips to luxury sedans for VIP transport. Whether you’re a tourist, business traveler, or returning resident, our T2 cabs ensure a comfortable and smooth journey out of the airport, day or night."
  },
  {
    "name": "Pickup drop cab Mumbai Airport",
    "description": "Deva Cabs specializes in airport pickup and drop services across Mumbai. We provide door-to-door service between the airport and any location in or around the city. Our drivers are punctual, trained in customer service, and ready to help with baggage. Whether you need a one-time drop, a recurring airport shuttle, or a round trip service, we offer flexible booking options and competitive fares. With AC vehicles, sanitized interiors, and 24x7 support, your airport pickup and drop is just a call or click away."
  },
  {
    "name": "Mumbai airport to city cab",
    "description": "Traveling from Mumbai airport to the city? Deva Cabs ensures smooth transfers with prompt pickups and comfortable rides. Our cabs are available round the clock for travel to South Mumbai, Bandra, Andheri, Thane, Navi Mumbai, and beyond. Choose from a variety of vehicles depending on your group size and budget. Avoid long queues, prepaid hassles, and surge pricing by booking with us in advance. We also offer billing for corporate clients and customized ride packages for frequent flyers."
  },
  {
    "name": "Luxury car from Mumbai airport",
    "description": "Arrive in style with Deva Cabs’ luxury car rentals from Mumbai airport. We offer top-end vehicles like BMW, Audi, and Mercedes, perfect for business travelers, VIP guests, or special occasions. Our chauffeurs are trained, professionally dressed, and ready to provide you with a first-class experience. From airport to hotel or a direct trip to Pune, our luxury fleet ensures ultimate comfort, privacy, and convenience. Book your premium ride in advance and travel like a true professional or dignitary."
  },
  {
    "name": "Affordable airport cab Mumbai",
    "description": "Looking for a budget-friendly yet reliable airport cab in Mumbai? Deva Cabs offers affordable options without compromising on service quality. Our pricing is transparent, with no surge charges or last-minute hikes. Whether you need a cab for early morning travel or a midnight pickup, our economy range of sedans and hatchbacks ensures you get value for money along with clean vehicles and verified drivers. Ideal for students, solo travelers, and everyday flyers looking for dependable transportation."
  },
  {
    "name": "Mumbai airport to Pune taxi",
    "description": "Travel from Mumbai airport to Pune in comfort with Deva Cabs' dedicated outstation taxi service. Avoid the inconvenience of changing modes of transport and book a direct cab with professional drivers who are experienced with the Mumbai–Pune Expressway. Our vehicles offer AC, push-back seats, luggage space, and route flexibility. Whether you’re traveling for work, a family function, or a weekend getaway, we provide one-way and round-trip options at fixed fares. Book in advance to avoid delays and enjoy door-to-door service from airport to destination."
  },
  {
    "name": "Mumbai airport to Shirdi cab",
    "description": "Deva Cabs offers safe and comfortable cabs from Mumbai airport to Shirdi for pilgrims and tourists. Our drivers are familiar with the route and temple timings, making your journey efficient and peaceful. Enjoy a direct ride in AC vehicles equipped with push-back seats and spacious interiors. Choose from multiple vehicle types based on your group size and travel budget. We also offer customized stopovers at Nashik, Trimbakeshwar, or local eateries en route to Shirdi, making your spiritual journey smoother and more enjoyable."
  },
  {
    "name": "Airport to hotel cab Mumbai",
    "description": "Book reliable airport-to-hotel transfers in Mumbai with Deva Cabs. Whether you're staying at a 5-star hotel, business apartment, or guesthouse, we ensure you reach your destination safely and on time. Our drivers wait at the airport with placards (on request), assist with baggage, and drive you comfortably through city traffic. We support flexible booking timings, short notice pickups, and multi-hotel drops. Ideal for business travelers, foreign tourists, and corporate clients requiring seamless travel solutions."
  },
  {
    "name": "24x7 airport cab booking Mumbai",
    "description": "Deva Cabs offers round-the-clock airport cab bookings in Mumbai, so you never have to worry about odd-hour travel. Whether your flight lands at 2 AM or departs at 5 AM, we ensure timely pickups and safe drop-offs across Mumbai and nearby cities. Our customer service team is available 24/7 to assist you with bookings, changes, and driver coordination. Our vehicles are GPS-enabled and driven by verified chauffeurs, making your late-night or early-morning commute completely secure and stress-free."
  },
  {
    "name": "Airport round trip cab Mumbai",
    "description": "Need a round trip to and from Mumbai airport? Deva Cabs provides convenient round-trip cab packages for solo travelers, families, and business clients. Whether you're picking up a guest, dropping off a friend, or need the same cab to wait and return, we offer customizable return fare options and hourly packages. Avoid booking two separate rides—our round trip cabs save both time and money. Our drivers wait as per your itinerary, and our support team keeps you updated in real time."
  },
  {
    "name": "Prepaid cab Mumbai airport",
    "description": "Skip the queue at prepaid counters with Deva Cabs’ prepaid cab service at Mumbai airport. Simply book online or via call, pay in advance, and walk out of the terminal to your waiting cab. No need for cash exchanges, negotiations, or app confusion. This is especially useful for international travelers, senior citizens, and families with kids. Our prepaid bookings come with fixed fares, driver details in advance, and 24x7 support for delays or reschedules. Choose peace of mind every time you land in Mumbai."
  },
  {
    "name": "Chauffeur cab service Mumbai Airport",
    "description": "Arrive or depart in style with our premium chauffeur-driven cab service at Mumbai airport. Deva Cabs offers luxury and business-class sedans with uniformed, English-speaking drivers trained in etiquette and hospitality. Perfect for CEOs, NRIs, dignitaries, or anyone who values comfort and discretion. Our chauffeurs ensure on-time arrivals, assist with luggage, and take care of every travel detail from airport to hotel or meeting venues. Available for both domestic and international terminals."
  },
  {
    "name": "Instant airport cab booking Mumbai",
    "description": "Need a last-minute ride from the airport? Deva Cabs offers instant airport cab bookings in Mumbai with near-zero wait time. Book through our website or hotline and get a vehicle dispatched within minutes. Whether you need a sedan, SUV, or luxury car, we have a fleet ready to serve. This service is ideal for emergency travel, delayed flights, or unplanned pickups. GPS-tracked rides, verified drivers, and fixed pricing make your quick travel easy and safe."
  },
  {
    "name": "Best cab from airport Mumbai",
    "description": "Looking for the best cab service from Mumbai airport? Deva Cabs stands out with its punctuality, professionalism, and vehicle quality. Whether you're looking for budget travel, luxury comfort, or group transfers, we offer options to suit every need. Our drivers are polite, experienced, and well-versed in Mumbai routes, ensuring a smooth journey from the moment you exit the terminal. We’re trusted by thousands of travelers for airport pickups every month—experience why we’re rated the best in the business."
  },
  {
    "name": "Mumbai airport taxi near me",
    "description": "Searching for a ‘Mumbai airport taxi near me’? Deva Cabs offers instant pickups from both domestic and international terminals, regardless of your location. Our GPS-enabled booking ensures the closest available cab reaches you within minutes. We operate across all terminals and nearby hotels, making us the go-to option for quick and reliable airport taxis. With multiple vehicle types, 24/7 availability, and affordable pricing, we’re always just around the corner when you land or need a ride."
  }
],
"tableData": [
  ["Mumbai Airport Cab Booking", "-Book taxi from Mumbai airport"],
  ["Mumbai T2 cab service", "-Pickup drop cab Mumbai Airport"],
  ["Mumbai airport to city cab", "-Luxury car from Mumbai airport"],
  ["Affordable airport cab Mumbai", "-Mumbai airport to Pune taxi"],
  ["Mumbai airport to Shirdi cab", "-Airport to hotel cab Mumbai"],
  ["24x7 airport cab booking Mumbai", "-Airport round trip cab Mumbai"],
  ["Prepaid cab Mumbai airport", "-Chauffeur cab service Mumbai Airport"],
  ["Instant airport cab booking Mumbai", "-Best cab from airport Mumbai"],
  ["Mumbai airport taxi near me", ""]
],

whychoose: [
  {
    "WhyChooseheading": "Punctual and Reliable Airport Transfers",
    "WhyChoosedescription": "We ensure timely pickups and drop-offs for your Mumbai airport transfers, helping you avoid any stress related to flight schedules. Our cabs are always on time to get you to the airport or your destination safely."
  },
  {
    "WhyChooseheading": "Comfortable and Clean Vehicles",
    "WhyChoosedescription": "Our fleet of well-maintained cabs offers clean interiors, comfortable seating, and ample luggage space, making your airport journey pleasant and hassle-free."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Airport Routes",
    "WhyChoosedescription": "Our professional drivers are experts in navigating Mumbai’s traffic and airport routes efficiently, ensuring a smooth and timely ride."
  },
  {
    "WhyChooseheading": "Easy and Quick Booking Process",
    "WhyChoosedescription": "Book your Mumbai airport cab effortlessly via our website or customer support. Whether it’s a pre-planned trip or a last-minute booking, we provide quick and hassle-free service."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Enjoy competitive and clear pricing with no hidden charges. We offer value-for-money airport transfer services so you can travel worry-free."
  },
  {
    "WhyChooseheading": "24/7 Availability for All Flight Timings",
    "WhyChoosedescription": "Our airport cabs are available round the clock to match your flight schedule, whether it’s an early morning departure or a late-night arrival."
  },
  {
    "WhyChooseheading": "Safety and Security Priority",
    "WhyChoosedescription": "We prioritize your safety with well-maintained vehicles, seat belts, GPS tracking, and experienced drivers to ensure a secure journey to and from the airport."
  },
  {
    "WhyChooseheading": "Personalized Customer Support",
    "WhyChoosedescription": "Our dedicated customer support team is always ready to assist you with your booking, changes, or any queries to make your airport travel smooth and convenient."
  }
]










    }










const faqData = [
  {
    question: "Can I book an airport cab with Deva Cabs in Mumbai?",
    answer: "Yes, Deva Cabs offers reliable airport cab booking services in Mumbai for pickups and drop-offs at both domestic and international terminals."
  },
  {
    question: "How do I book a cab for Mumbai Airport with Deva Cabs?",
    answer: "You can book an airport cab easily through our website, mobile app, or by calling our customer support for instant assistance."
  },
  {
    question: "Is airport pickup available 24/7 in Mumbai?",
    answer: "Yes, Deva Cabs provides 24/7 airport pickup and drop services to ensure your travel needs are met any time of day or night."
  },
  {
    question: "What types of vehicles are available for Mumbai airport transfers?",
    answer: "We offer a range of vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to match your comfort and group size."
  },
  {
    question: "Will the driver wait if my flight is delayed?",
    answer: "Yes, our drivers track flight schedules and adjust pickup times accordingly, so you won’t be charged for delays beyond your control."
  },
  {
    question: "Are your airport cabs sanitized and safe?",
    answer: "Absolutely. All our cabs are regularly sanitized and our drivers follow safety and hygiene protocols for your peace of mind."
  },
  {
    question: "Can I pre-book a cab for airport drop-off in Mumbai?",
    answer: "Yes, we recommend pre-booking your cab to ensure timely service and avoid last-minute hassles."
  },
  {
    question: "What are the charges for Mumbai airport cab services?",
    answer: "The fare depends on your pickup/drop location, cab type, and time. Contact us for an exact quote tailored to your trip."
  },
  {
    question: "Do you provide meet and greet service at the airport?",
    answer: "Yes, on request, our driver can meet you at the arrival gate with a placard for a hassle-free pickup experience."
  },
  {
    question: "Why choose Deva Cabs for airport cab booking in Mumbai?",
    answer: "Deva Cabs is known for punctual service, courteous drivers, well-maintained vehicles, and transparent pricing, making your airport travel stress-free."
  }
];

const testimonialData = [
  {
    id: 9,
    name: 'Mr. Arvind Menon',
    role: 'Frequent Flyer',
    review: 'Deva Cabs never disappoints when it comes to airport transfers. The cab arrived on time, was clean, and the driver was very polite. Highly recommended!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 10,
    name: 'Ms. Tanya Kapoor',
    role: 'Business Traveler',
    review: 'Booked a late-night cab from Mumbai airport through Deva Cabs. The booking process was smooth and the service was prompt and professional.',
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
  "name": "Mumbai Airport Cab Booking",
  "image": "https://devacab.com/assets/images/mumbai-airport-cab-booking.jpg", // Replace with actual image URL
  "description": "Book reliable and affordable airport cab services in Mumbai with Deva Cabs. Available 24x7 for pickups and drop-offs at Mumbai Airport (T2), with luxury, prepaid, chauffeur-driven, and instant booking options.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "2100"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "900",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-airport-cab-booking" // Replace with actual page URL
  }
};




    return (
        <div>
<Helmet>
  <title>Mumbai Airport Cab Booking | 24x7 Pickup & Drop | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book airport cabs from Mumbai Airport (T2) with Deva Cabs. 24x7 pickup and drop, luxury and affordable options, prepaid bookings, chauffeur-driven cars, and instant cab booking service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Airport Cab Booking, Book taxi from Mumbai airport, Mumbai T2 cab service, Pickup drop cab Mumbai Airport, Mumbai airport to city cab, Luxury car from Mumbai airport, Affordable airport cab Mumbai, Mumbai airport to Pune taxi, Mumbai airport to Shirdi cab, Airport to hotel cab Mumbai, 24x7 airport cab booking Mumbai, Airport round trip cab Mumbai, Prepaid cab Mumbai airport, Chauffeur cab service Mumbai Airport, Instant airport cab booking Mumbai, Best cab from airport Mumbai, Mumbai airport taxi near me" 
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
                            <img src='/images/keyword/13.jpg' alt='img' />
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

export default Mumbaiairportcabbooking;