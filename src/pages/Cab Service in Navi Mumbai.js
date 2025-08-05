
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Cabserviceinnavimumbai() {



    const cardData =
    {
        keyword: ' Cab Service in Navi Mumbai',
        heading: 'Deva Cabs:  Cab Service in Navi Mumbai',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free cab services across Navi Mumbai. Whether you are heading to a business meeting, a local attraction, or catching a flight, our professional drivers and well-maintained fleet ensure a smooth and safe journey. Mumbai is a bustling city with heavy traffic, and our experienced chauffeurs navigate it efficiently to get you to your destination on time. We offer a variety of vehicle options tailored to your travel needs, ensuring every ride is convenient, comfortable, and punctual.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

         "topPlaces": [
    {
      "title": "Gateway of India",
      "location": "Mumbai, Maharashtra",
      "description": "Standing majestically on the waterfront in Colaba, the Gateway of India is one of Mumbai’s most celebrated historical monuments. Built in 1924 to honor the visit of King George V and Queen Mary, this Indo-Saracenic arch is more than just a tourist attraction—it's a symbol of Mumbai’s colonial past and cultural pride. Facing the Arabian Sea and flanked by the iconic Taj Mahal Palace Hotel, the Gateway serves as the launching point for ferry rides to Elephanta Caves and offers breathtaking views, especially at sunrise and sunset."
    },
    {
      "title": "Marine Drive",
      "location": "Mumbai, Maharashtra",
      "description": "Popularly known as the Queen’s Necklace, Marine Drive is a sweeping 3.6-kilometer-long boulevard that curves along the Arabian Sea from Nariman Point to Girgaon Chowpatty. This scenic stretch is a favorite among locals and visitors for leisurely walks, romantic evenings, and photography. Lined with palm trees and art deco buildings, the drive comes alive at night when streetlights form a glowing necklace-like pattern. It’s also the ideal place to witness Mumbai’s vibrant street culture and the serenity of the sea coexisting side by side."
    },
    {
      "title": "Elephanta Caves",
      "location": "Elephanta Island, Mumbai Harbour",
      "description": "A UNESCO World Heritage Site, the Elephanta Caves are a network of ancient rock-cut temples located on Elephanta Island, about an hour’s ferry ride from the Gateway of India. These caves, dating back to the 5th to 8th centuries, are primarily dedicated to Lord Shiva and feature intricate carvings, including the monumental 20-foot sculpture of Trimurti Sadashiva. The caves are surrounded by lush greenery and offer a serene escape from the city, making them an essential cultural and spiritual destination for any visitor to Mumbai."
    },
    {
      "title": "Siddhivinayak Temple",
      "location": "Prabhadevi, Mumbai, Maharashtra",
      "description": "Shree Siddhivinayak Ganapati Mandir is one of Mumbai's most significant and spiritually revered temples, attracting thousands of devotees daily. Dedicated to Lord Ganesha, the temple is known for its beautiful idol carved out of a single black stone, adorned with gold and precious jewels. Tuesdays witness especially large crowds, and many Bollywood celebrities and political leaders are regular visitors. The temple complex is beautifully maintained and offers a deeply spiritual and peaceful atmosphere in the midst of a bustling city."
    },
    {
      "title": "Chhatrapati Shivaji Maharaj Terminus",
      "location": "Mumbai, Maharashtra",
      "description": "A stunning blend of Victorian Gothic Revival and traditional Indian architecture, Chhatrapati Shivaji Maharaj Terminus (CSMT), formerly Victoria Terminus, is not just a railway station but an architectural marvel. Declared a UNESCO World Heritage Site, the structure features stone domes, pointed arches, and turrets, all intricately designed. Completed in 1887, it remains one of Mumbai’s busiest transport hubs and is a standing testimony to the city’s colonial history and its continued evolution."
    },
    {
      "title": "Juhu Beach",
      "location": "Mumbai, Maharashtra",
      "description": "Juhu Beach is one of Mumbai’s most famous and accessible coastal spots, stretching along the Arabian Sea and bustling with activity day and night. Known for its street food stalls offering Mumbai specialties like sev puri, pav bhaji, and ice gola, it’s a paradise for foodies. The beach is also a popular hangout for families, joggers, photographers, and even Bollywood celebrities, many of whom live in the area. The sunsets at Juhu Beach are especially captivating, offering a calm and colorful end to the day."
    },
    {
      "title": "Haji Ali Dargah",
      "location": "Worli, Mumbai, Maharashtra",
      "description": "Haji Ali Dargah is a spiritual and architectural landmark situated on a small islet in the Arabian Sea, connected to the city by a narrow causeway. Built in 1431, it houses the tomb of Sufi saint Haji Ali Shah Bukhari and is visited by people of all faiths. Surrounded by water and featuring Indo-Islamic architecture with white domes and minarets, the dargah offers a deeply serene and soulful experience. It's especially magical to visit during high tide when the structure appears to float on the sea."
    },
    {
      "title": "Sanjay Gandhi National Park",
      "location": "Borivali, Mumbai, Maharashtra",
      "description": "Spread over 100 square kilometers, Sanjay Gandhi National Park is a rare green oasis in the heart of Mumbai. The park is home to a wide variety of flora and fauna, including leopards, deer, and over 270 species of birds. It also houses the ancient Kanheri Caves—Buddhist cave monuments that date back over 2,000 years. With cycling tracks, trekking trails, toy train rides, and boating facilities, the park is perfect for a day of exploration and nature connection."
    },
    {
      "title": "Chor Bazaar",
      "location": "Mumbai, Maharashtra",
      "description": "One of India’s oldest and most famous flea markets, Chor Bazaar is located in South Mumbai and is known for its quirky, antique, and second-hand goods. From vintage Bollywood posters and colonial-era furniture to musical instruments and electronics, the market offers a treasure trove for collectors and bargain hunters. Its name, which means 'Thieves Market,' adds a sense of intrigue, although today it’s a legitimate and lively place filled with history, chaos, and charm."
    },
    {
      "title": "Girgaon Chowpatty",
      "location": "Girgaon, Mumbai, Maharashtra",
      "description": "Nestled at the northern end of Marine Drive, Girgaon Chowpatty is a cultural and recreational hotspot where locals gather to enjoy beachside snacks, kite-flying, and stunning sunsets. Known for its vibrant atmosphere during Ganesh Visarjan, the beach transforms into a spiritual center as thousands of devotees bid farewell to their beloved Ganesha idols. With its street food stalls and sea-facing benches, it’s the perfect place to experience Mumbai’s lively yet laid-back beach culture."
    }
  ],




        "services": [
    {
        "name": "Cab Service in Navi Mumbai",
        "description": "Deva Cabs provides top-quality cab service in Navi Mumbai, catering to daily commuters, tourists, and business travelers alike. Our fleet consists of clean, well-maintained vehicles ranging from compact cars to spacious SUVs to fit all your needs. Whether you need a quick ride across the city or a longer journey, our professional drivers ensure timely pick-ups, safe driving, and a comfortable experience. Our transparent pricing, easy booking process, and friendly customer support make Deva Cabs the preferred choice for all your travel needs within Navi Mumbai."
    },
    {
        "name": "Cab Hire in Navi Mumbai",
        "description": "Looking to hire a cab in Navi Mumbai? Deva Cabs offers flexible cab hire services for hourly, daily, or long-term needs. Perfect for business trips, sightseeing tours, or personal use, our cab hire service comes with the freedom to customize your itinerary. You can choose from a wide range of vehicles that suit your group size and budget. Our drivers are well-trained and knowledgeable about the local area to provide you with smooth and hassle-free rides wherever you want to go."
    },
    {
        "name": "Cabs in Navi Mumbai",
        "description": "Searching for reliable cabs in Navi Mumbai? Deva Cabs is your go-to provider for safe, efficient, and comfortable cab rides. Whether you need an airport transfer, city tour, or an outstation trip, our fleet and experienced drivers are ready to serve you. Our booking process is seamless through our app or website, allowing you to book cabs instantly. Enjoy peace of mind with our customer support available 24/7 to assist with your queries or special requests."
    },
    {
        "name": "Navi Mumbai Taxi Service",
        "description": "Deva Cabs offers comprehensive taxi services in Navi Mumbai, making local travel easy and stress-free. Our taxis are equipped with GPS tracking for safety and route optimization, ensuring you reach your destination on time. Whether you're heading to an important meeting, attending a family function, or simply running errands, our punctual drivers and clean vehicles provide a pleasant travel experience. We also offer customized packages for corporate clients and tourists who want to explore Navi Mumbai’s highlights in comfort."
    },
    {
        "name": "Taxi Navi Mumbai",
        "description": "Booking a taxi in Navi Mumbai has never been easier with Deva Cabs. We pride ourselves on quick response times, professional drivers, and competitive pricing. Our taxis are available round the clock to serve your transportation needs. Whether it’s an early morning airport drop or a late-night city ride, you can rely on us for timely and safe travel. Our user-friendly booking platform allows you to select your preferred vehicle type and schedule rides in advance."
    },
    {
        "name": "Taxi Service in Vashi Navi Mumbai",
        "description": "For residents and visitors in Vashi, Navi Mumbai, Deva Cabs provides specialized taxi services catering to the busy urban lifestyle. Our drivers are well-versed with Vashi’s road network and traffic conditions, enabling quick and efficient rides. Whether you need a quick ride to the Vashi railway station, shopping malls, or corporate offices, our taxis are available on-demand or through advance bookings. Experience affordable rates coupled with a commitment to customer satisfaction with Deva Cabs in Vashi."
    },
    {
        "name": "Navi Mumbai to Pune Cab",
        "description": "Planning to travel from Navi Mumbai to Pune? Deva Cabs offers comfortable, reliable, and affordable cab services on this popular route. Our vehicles are spacious and well-maintained, suitable for solo travelers, couples, and families alike. Drivers are courteous and knowledgeable about the best routes to ensure a smooth and timely journey. Whether it’s a business trip or a leisure visit, enjoy a hassle-free experience with transparent pricing and easy online booking."
    },
    {
        "name": "Navi Mumbai to Nashik Cab",
        "description": "Travel to Nashik from Navi Mumbai in comfort and style with Deva Cabs. Our outstation cab services are designed to provide a safe and relaxing journey for you and your group. Whether visiting for business, religious tourism, or vineyards, our drivers will take care of the route while you enjoy the ride. We offer flexible scheduling, transparent fare estimates, and well-maintained vehicles to make your trip enjoyable and stress-free."
    },
    {
        "name": "Navi Mumbai to Mahabaleshwar Cab",
        "description": "Make your hill station trip to Mahabaleshwar memorable with Deva Cabs’ dedicated cab service from Navi Mumbai. Our vehicles provide ample space for luggage and passengers, perfect for family vacations or group outings. Experience scenic routes, comfortable seating, and professional drivers who prioritize your safety. We also provide customized tour packages on request to cover popular attractions in Mahabaleshwar."
    },
    {
        "name": "Navi Mumbai to Goa Cab Booking",
        "description": "Heading to the beaches of Goa from Navi Mumbai? Deva Cabs offers reliable and comfortable cab booking services for this long-distance journey. Our fleet includes a range of vehicles suited for different group sizes and preferences. Enjoy a hassle-free trip with courteous drivers, guaranteed on-time pick-ups, and transparent pricing. Whether for leisure or business, our Goa cab service ensures a smooth start and end to your trip."
    },
    {
        "name": "Navi Mumbai to Shirdi Taxi Fare",
        "description": "Get affordable and transparent taxi fares for your pilgrimage or trip from Navi Mumbai to Shirdi with Deva Cabs. We ensure no hidden charges and provide competitive pricing for your convenience. Our comfortable vehicles and experienced drivers will make your journey peaceful and worry-free. Book in advance to secure the best rates and enjoy 24/7 customer support throughout your trip."
    },
    {
        "name": "Navi Mumbai Outstation Cabs",
        "description": "For all your outstation travel needs from Navi Mumbai, Deva Cabs offers dependable cab services to a wide range of destinations. Whether it’s a weekend getaway, business travel, or family visit, choose from a variety of vehicles tailored to your group size and budget. Our professional drivers ensure safe and timely travel, and our easy booking system allows you to plan your trip with confidence. Experience excellent customer service and transparent pricing with Deva Cabs’ outstation cabs."
    }
],

"tableData": [
    ["Cab Service in Navi Mumbai", "-Cab Hire in Navi Mumbai"],
    ["Cabs in Navi Mumbai", "-Navi Mumbai Taxi Service"],
    ["Taxi Navi Mumbai", "-Taxi Service in Vashi Navi Mumbai"],
    ["Navi Mumbai to Pune Cab", "-Navi Mumbai to Nashik Cab"],
    ["Navi Mumbai to Mahabaleshwar Cab", "-Navi Mumbai to Goa Cab Booking"],
    ["Navi Mumbai to Shirdi Taxi Fare", "-Navi Mumbai Outstation Cabs"]
],

      whychoose: [
  {
    "WhyChooseheading": "Timely and Reliable Cab Service",
    "WhyChoosedescription": "At Deva Cabs, we know how crucial time is, especially in a bustling city like Navi Mumbai. That’s why we prioritize punctuality above all. Our drivers are trained to plan routes efficiently, avoiding traffic bottlenecks and ensuring timely pickups and drop-offs, whether you're headed to the office, an important meeting, the airport, or simply running errands around the city. You can count on us for a dependable ride—anytime, anywhere."
  },
  {
    "WhyChooseheading": "Comfortable and Clean Vehicles",
    "WhyChoosedescription": "Your comfort is our priority. Our fleet features a wide range of air-conditioned, well-maintained vehicles—from sedans to SUVs and luxury options. Each vehicle is regularly cleaned and sanitized, offering plush seating, spacious legroom, and smooth suspension for a peaceful ride through Navi Mumbai. Whether you're traveling solo, with family, or in a group, we have the right cab to make your journey as relaxing and enjoyable as possible."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our drivers aren’t just skilled—they’re also friendly, professional, and courteous. With years of experience navigating Navi Mumbai’s roads, they ensure a smooth ride while maintaining high standards of customer service. From helping with luggage to choosing the best route to avoid delays, our drivers go the extra mile to make your trip pleasant and stress-free. They’re trained in both safety and hospitality to ensure a great experience every time."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "With Deva Cabs, you’ll never have to worry about surprise charges. We follow a transparent pricing structure that’s easy to understand and budget-friendly. Whether it’s a one-way trip, a round trip, or a long-distance ride, we provide accurate fare estimates upfront so you can plan your travel with confidence. No surge pricing, no hidden costs—just honest rates that make quality cab service accessible to everyone."
  },
  {
    "WhyChooseheading": "Round-the-Clock Availability",
    "WhyChoosedescription": "No matter the time of day or night, Deva Cabs is at your service. We operate 24/7 across Navi Mumbai to meet your travel needs—be it an early morning airport transfer, a late-night pickup from the railway station, or a last-minute business meeting. Our always-on availability means you’ll never be left stranded. One call or click, and your cab is on the way, any time you need it."
  },
  {
    "WhyChooseheading": "Safe and Secure Travel",
    "WhyChoosedescription": "Your safety is paramount at Deva Cabs. All our vehicles are equipped with GPS tracking, emergency support, and undergo regular mechanical inspections. Drivers follow strict road safety protocols, and all cars are fitted with working seat belts and airbags. We also monitor driver behavior to ensure your peace of mind during the ride. Whether you're traveling alone or with family, you can ride confidently knowing you’re in safe hands."
  },
  {
    "WhyChooseheading": "Quick and Easy Booking Process",
    "WhyChoosedescription": "We understand that convenience starts with booking. That’s why Deva Cabs offers a fast, intuitive, and user-friendly booking experience. Whether you prefer to book online, through our mobile app, or by calling our support team, the process is seamless. You’ll receive instant confirmations, real-time driver tracking, and customer support throughout your ride. Booking a cab in Navi Mumbai has never been easier or quicker."
  },
  {
    "WhyChooseheading": "Flexible Ride Options",
    "WhyChoosedescription": "Every traveler has different needs, and we cater to them all. Deva Cabs offers a variety of flexible ride options—one-way drops, round trips, hourly rentals, airport transfers, and even full-day hires for sightseeing or business purposes. Whether you need a short hop within Navi Mumbai or a long-distance journey, we have customizable packages to suit your specific requirements and budget."
  }
]

















    }


    // ✅ FAQ and Testimonials for Deva Cabs – Cab Service in Navi Mumbai

const faqData = [
  {
    question: "How do I book a cab with Deva Cabs in Navi Mumbai?",
    answer: "You can easily book a cab through our website, mobile app, or by calling our customer care. We ensure hassle-free booking for all rides in Navi Mumbai."
  },
  {
    question: "Which areas in Navi Mumbai does Deva Cabs cover?",
    answer: "Deva Cabs covers all major areas in Navi Mumbai including Vashi, Nerul, CBD Belapur, Kharghar, Panvel, and surrounding localities."
  },
  {
    question: "What types of vehicles are offered by Deva Cabs in Navi Mumbai?",
    answer: "We provide a variety of vehicles such as hatchbacks, sedans, SUVs, and luxury cars to meet different travel needs within Navi Mumbai."
  },
  {
    question: "Are Deva Cabs available 24/7 in Navi Mumbai?",
    answer: "Yes, our cab services are available 24/7 in Navi Mumbai, making sure you have a safe and reliable ride anytime you need."
  },
  {
    question: "Can I book a cab from Navi Mumbai to Mumbai or other cities?",
    answer: "Certainly! Deva Cabs offers intercity and outstation cab services, including rides from Navi Mumbai to Mumbai, Pune, Lonavala, and beyond."
  },
  {
    question: "Does Deva Cabs provide airport transfers from Navi Mumbai?",
    answer: "Yes, we offer convenient airport transfers to and from Mumbai Airport and Navi Mumbai’s proposed airport locations."
  },
  {
    question: "What payment methods does Deva Cabs accept in Navi Mumbai?",
    answer: "You can pay via cash, credit/debit cards, UPI, or through our app for a smooth payment experience."
  },
  {
    question: "Is it safe to travel alone or at night with Deva Cabs in Navi Mumbai?",
    answer: "Absolutely. We prioritize passenger safety with verified drivers, GPS tracking, and 24/7 customer support."
  },
  {
    question: "Can I schedule my ride in advance with Deva Cabs in Navi Mumbai?",
    answer: "Yes, you can book rides in advance by selecting your preferred date and time on our website or app."
  },
  {
    question: "Why choose Deva Cabs for cab service in Navi Mumbai?",
    answer: "Deva Cabs is known for reliable service, timely pickups, courteous drivers, and clean vehicles, making your Navi Mumbai travel comfortable and hassle-free."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Ms. Sneha Kulkarni',
    role: 'Local Resident',
    review: 'I rely on Deva Cabs for my daily commute in Navi Mumbai. The drivers are punctual, and the cars are well-maintained. Truly a dependable service!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mr. Amit Shah',
    role: 'Business Traveler',
    review: 'Deva Cabs provided me seamless airport transfers from Navi Mumbai. The booking process was simple, and the ride was very comfortable.',
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
  "name": "Cab Service in Navi Mumbai",
  "image": "https://devacab.com/assets/images/cab-service-in-navi-mumbai.jpg", // Replace with actual image URL
  "description": "Book reliable cab service in Navi Mumbai with Deva Cabs. Offering taxi booking for airport transfers, city tours, corporate travel, weddings, outstation trips, and monthly rentals. Affordable luxury and economy cabs available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "3200"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "550",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/cab-service-in-navi-mumbai" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Cab Service in Navi Mumbai | Taxi Booking & Airport Transfers | Deva Cabs</title>
  <meta 
    name="description" 
    content="Deva Cabs provides dependable cab service in Navi Mumbai. Book for airport transfers, city tours, corporate travel, weddings, events, outstation, and monthly rentals. Luxury and economy options available." 
  />
  <meta 
    name="keywords" 
    content="Cab Service in Navi Mumbai, Navi Mumbai taxi booking, Navi Mumbai local cab, Navi Mumbai airport transferable taxi, Navi Mumbai city tour cab, Navi Mumbai corporate cab service, Navi Mumbai wedding car hire, Navi Mumbai outstation taxi, Navi Mumbai monthly rental cab, Navi Mumbai chauffeur driven car, Navi Mumbai cab near me, Affordable cab Navi Mumbai, Luxury cab Navi Mumbai, Book cab online Navi Mumbai, Economy cab Navi Mumbai, Premium cab service Navi Mumbai, Navi Mumbai family cab booking, Navi Mumbai cab for events" 
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
                            <img src='./images/keyword/2.jpg' alt='img' />
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

export default Cabserviceinnavimumbai;