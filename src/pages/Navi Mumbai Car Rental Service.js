
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Navibookingcarrentalservice() {



    const cardData =
    {
        keyword: ' Navi Mumbai Car Rental Service ',
        heading: 'Deva Cabs: Navi Mumbai Car Rental Service    ',
        headingDescription: 'Deva Cabs offers dependable and affordable car rental services in Navi Mumbai for all your travel needs—be it personal, corporate, or leisure. Choose from our wide fleet including hatchbacks, sedans, SUVs, and luxury cars, all maintained for top performance and comfort. Whether you are heading out for a business meeting, city tour, or outstation trip, our expert drivers and transparent pricing ensure a hassle-free experience. Enjoy flexible rental durations and on-time service with Deva Cabs in Navi Mumbai.',

        top: 'Top Places to Visit in Navi Mumbai with Deva Cabs',

"topPlaces": [
  {
    "title": "Central Park",
    "location": "Kharghar, Navi Mumbai, Maharashtra",
    "description": "Central Park in Kharghar is one of the largest parks in Asia, spanning over 119 hectares. With lush gardens, amphitheaters, walking tracks, water fountains, and sculptures, it’s a peaceful getaway for morning walkers, fitness enthusiasts, and families. The park is beautifully maintained and offers scenic views of the Kharghar hills, making it a favorite weekend picnic spot in Navi Mumbai."
  },
  {
    "title": "Pandavkada Waterfalls",
    "location": "Kharghar, Navi Mumbai, Maharashtra",
    "description": "Pandavkada Waterfalls is a scenic monsoon destination located near Kharghar Hills. Cascading from a height of around 107 meters, the falls are named after the Pandavas, who are believed to have bathed here during their exile. Surrounded by lush greenery, the site attracts nature lovers, trekkers, and photographers during the rainy season."
  },
  {
    "title": "Belapur Fort",
    "location": "CBD Belapur, Navi Mumbai, Maharashtra",
    "description": "Belapur Fort is a lesser-known historical fort built by the Siddis of Janjira in the 16th century and later captured by the Marathas. Although partially in ruins, it offers a glimpse into Navi Mumbai's historical past. Tucked away amid greenery, the fort remains a peaceful and offbeat spot for history buffs and locals looking for a quiet retreat."
  },
  {
    "title": "Wonders Park",
    "location": "Nerul, Navi Mumbai, Maharashtra",
    "description": "Wonders Park in Nerul is a family-friendly amusement park featuring miniatures of the Seven Wonders of the World. The park also includes a toy train ride, jogging tracks, a children's play area, and a beautiful lake. It's a great destination for kids and adults alike, combining fun, education, and recreation in one place."
  },
  {
    "title": "Rock Garden",
    "location": "Sector 21, Nerul, Navi Mumbai, Maharashtra",
    "description": "Rock Garden is a beautifully landscaped park known for its sculptures, fountains, and well-maintained walking paths. It’s a quiet and relaxing space for evening walks, meditation, and family outings. The park also features artistic rock structures and flower gardens, attracting locals looking for some peaceful downtime in the city."
  },
  {
    "title": "ISKCON Temple",
    "location": "Kharghar, Navi Mumbai, Maharashtra",
    "description": "The ISKCON Temple in Kharghar is a spiritual oasis dedicated to Lord Krishna. Set against the scenic Kharghar hills, the temple features beautiful architecture, devotional chanting, and regular satsangs. Visitors come here for peace, bhakti, and a serene escape from urban hustle. The temple also has a Govinda’s restaurant offering pure vegetarian food."
  },
  {
    "title": "Mini Seashore",
    "location": "Vashi, Navi Mumbai, Maharashtra",
    "description": "Mini Seashore is a lakeside promenade in Vashi that’s ideal for early morning jogs, cycling, or relaxing evening strolls. With clean walking paths, shaded benches, and views of flamingos in winter, it’s a peaceful recreational area for residents. The calm atmosphere makes it popular with families, couples, and fitness enthusiasts alike."
  },
  {
    "title": "Palm Beach Road",
    "location": "Navi Mumbai, Maharashtra",
    "description": "Palm Beach Road is a wide, scenic boulevard connecting Vashi to Belapur, often dubbed the 'Marine Drive of Navi Mumbai.' Lined with palm trees and skyscrapers, the road offers a smooth driving experience and stunning views, especially during sunset. It’s a favorite among bikers, photographers, and those seeking a breezy escape within the city."
  },
  {
    "title": "Karnala Bird Sanctuary",
    "location": "Panvel, Navi Mumbai, Maharashtra",
    "description": "Located near Panvel, Karnala Bird Sanctuary is a lush forest reserve home to over 200 species of birds. The sanctuary is also known for the historic Karnala Fort, which offers panoramic views after a moderate trek. It's a paradise for bird watchers, hikers, and nature lovers, offering a quick escape into the wild just outside the city."
  },
  {
    "title": "DY Patil Stadium",
    "location": "Nerul, Navi Mumbai, Maharashtra",
    "description": "DY Patil Stadium is a world-class sports venue known for hosting IPL cricket matches, football games, and music concerts. With a seating capacity of over 55,000, it's one of India’s premier multi-purpose stadiums. Its modern design, energetic atmosphere, and central location make it a landmark destination for sports and entertainment lovers in Navi Mumbai."
  }
],



"services": [
  {
    "name": "Navi Mumbai Car Rental Service",
    "description": "Deva Cabs offers reliable and flexible car rental services in Navi Mumbai tailored for business, leisure, and local travel needs. Whether you're a resident, a corporate client, or a tourist, we provide well-maintained cars with options ranging from hatchbacks to luxury sedans and SUVs. Choose between chauffeur-driven or self-drive vehicles with hourly, daily, and monthly plans. Our fleet is sanitized, insured, and supported by 24x7 customer service. Enjoy affordable pricing, GPS-enabled cars, and professional drivers who understand Navi Mumbai’s routes and traffic patterns. Travel with peace of mind when you choose Deva Cabs for car rentals in Navi Mumbai."
  },
  {
    "name": "Book car in Navi Mumbai",
    "description": "Looking to book a car in Navi Mumbai for personal or professional use? Deva Cabs makes it easy with a quick online booking system, transparent pricing, and multiple car categories to choose from. Whether you need a small car for local errands, a sedan for city meetings, or an SUV for a weekend trip, we have the right vehicle for you. You can select chauffeur-driven or self-drive options, all available with full fuel and insurance coverage. We also provide door-to-door delivery, special packages for airport transfers, and discounts on long-term bookings."
  },
  {
    "name": "Navi Mumbai self-drive cars",
    "description": "Enjoy complete freedom with Deva Cabs’ self-drive car rentals in Navi Mumbai. Ideal for those who love driving or need privacy during travel, our fleet includes hatchbacks, sedans, and SUVs from trusted brands. All vehicles are regularly maintained, sanitized, and available with hourly, daily, weekly, or monthly rental plans. Documents are minimal, pricing is transparent, and we provide doorstep delivery for your convenience. Whether it's a short city ride or a long weekend getaway, drive at your pace with our reliable self-drive services."
  },
  {
    "name": "Chauffeur car hire Navi Mumbai",
    "description": "Deva Cabs provides professional chauffeur-driven car hire services in Navi Mumbai for business executives, tourists, and special occasions. Our drivers are trained, uniformed, and punctual—ensuring a smooth and stress-free travel experience. Choose from a wide selection of AC sedans, SUVs, and luxury vehicles, all of which come with verified drivers familiar with Navi Mumbai’s roads and traffic. Whether it’s a business meeting, airport pickup, or city sightseeing, our chauffeur service offers comfort, safety, and class."
  },
  {
    "name": "Corporate car rental Navi Mumbai",
    "description": "Deva Cabs offers premium corporate car rental services in Navi Mumbai tailored for business meetings, employee transfers, and VIP transport. Our fleet includes executive sedans, SUVs, and premium cars with uniformed chauffeurs and complete billing support. Whether it's a one-time requirement or a long-term corporate tie-up, we provide flexible packages, monthly invoicing, and priority customer support. Ensure your team or guests travel in comfort and on schedule with our reliable, well-maintained vehicles and professional service."
  },
  {
    "name": "Luxury cars Navi Mumbai",
    "description": "Travel in style with Deva Cabs’ luxury car rentals in Navi Mumbai. We offer a premium fleet including BMW, Audi, and Mercedes-Benz for weddings, corporate VIP transport, and high-end personal use. All vehicles are chauffeur-driven, impeccably maintained, and available with hourly or full-day rental plans. Our luxury service includes complimentary water, tissue boxes, music systems, and customer-first attention. Whether it’s for a special event, red carpet arrival, or a comfortable intercity trip, our luxury rides deliver unmatched experience and elegance."
  },
  {
    "name": "Economy car hire Navi Mumbai",
    "description": "Deva Cabs offers affordable economy car rentals in Navi Mumbai for daily commute, errands, and short city travel. Our economy fleet includes compact hatchbacks and entry-level sedans, all well-maintained, fuel-efficient, and easy to drive. Choose from self-drive or chauffeur-driven options with flexible rental durations and doorstep pickup/drop. We ensure clean interiors, AC comfort, and excellent mileage, making it a perfect budget solution for students, working professionals, or tourists visiting Navi Mumbai."
  },
  {
    "name": "Monthly rental Navi Mumbai car",
    "description": "Need a car for a month or longer? Deva Cabs provides convenient and economical monthly car rental services in Navi Mumbai. Our long-term rental plans are ideal for NRIs, business professionals, or families who prefer private transport without buying a car. Choose from hatchbacks, sedans, SUVs, or luxury cars—all available with or without a driver. Monthly rentals include insurance, servicing, and basic maintenance support, ensuring a worry-free driving experience. Enjoy discounted rates, minimal documentation, and flexible renewal terms with our monthly plans."
  },
  {
    "name": "Navi Mumbai airport transfer car",
    "description": "Book reliable airport transfer services in Navi Mumbai with Deva Cabs. Whether you're heading to or coming from Mumbai International Airport or nearby domestic terminals, our punctual drivers and well-kept vehicles ensure a smooth, stress-free ride. Choose from sedans, SUVs, or luxury cars depending on your need and comfort level. Our airport transfers include real-time flight tracking, luggage handling, and fixed pricing. Available 24x7, this service is perfect for solo travelers, families, or business guests needing a professional travel experience."
  },
  {
    "name": "Sedan rental Navi Mumbai",
    "description": "Deva Cabs offers sedan rentals in Navi Mumbai for city travel, outstation trips, or corporate transport. Our sedan fleet includes vehicles like Toyota Etios, Honda Amaze, and Maruti Ciaz—perfect for smooth and fuel-efficient rides. Choose from chauffeur-driven or self-drive rentals, available with flexible hours or daily booking options. Each vehicle is regularly cleaned, AC-fitted, and comes with full documentation. Ideal for 3–4 passengers, our sedans offer both comfort and affordability for business and leisure travelers alike."
  },
  {
    "name": "SUV rental Navi Mumbai",
    "description": "Looking for spacious and powerful rides in Navi Mumbai? Deva Cabs offers SUV rentals including Toyota Innova, Ertiga, and Mahindra XUV for family trips, corporate events, or weekend getaways. Our SUVs provide ample legroom, luggage space, and ride stability—ideal for long-distance travel or hilly terrains. Available in self-drive and chauffeur-driven formats, each vehicle is thoroughly checked and insured. Whether it's a city ride or outstation journey, our SUV rentals guarantee comfort, safety, and peace of mind."
  },
  {
    "name": "Navi Mumbai car hire with driver",
    "description": "Hire a car with a professional driver in Navi Mumbai from Deva Cabs and enjoy safe, convenient travel. We provide a wide range of cars including hatchbacks, sedans, SUVs, and premium vehicles for all types of needs—from daily commuting to event transport. Our drivers are trained, background-verified, and customer-friendly. You can book by the hour, by the day, or for a full journey including outstation trips. This is a perfect solution for those who want to relax and let someone else take the wheel."
  },
  {
    "name": "Wedding car rental Navi Mumbai",
    "description": "Make your special day even more memorable with Deva Cabs’ wedding car rentals in Navi Mumbai. We offer a luxurious and decorative fleet including BMWs, Audis, vintage cars, and classic sedans for bride and groom entries. Our service includes driver, fuel, and floral decorations as per your theme. We also provide bulk vehicles for guest transport—AC sedans, SUVs, and tempo travellers. Whether it’s a grand wedding or a small ceremony, we ensure timely service and beautifully presented vehicles to elevate your celebration."
  },
  {
    "name": "Outstation car rental Navi Mumbai",
    "description": "Planning a weekend getaway or a business trip outside Navi Mumbai? Deva Cabs provides outstation car rental services with experienced drivers and comfortable cars. Choose from sedans, SUVs, and luxury vehicles for your travel to Pune, Lonavala, Goa, Nashik, Shirdi, and more. We offer both one-way and round-trip packages with flexible timing and route customization. Our outstation rentals include tolls, fuel, driver allowance, and 24x7 on-road assistance for a worry-free journey."
  },
  {
    "name": "Navi Mumbai sightseeing cab rental",
    "description": "Explore the best of Navi Mumbai with Deva Cabs’ sightseeing cab rentals. Visit places like Central Park, Pandavkada Falls, Kharghar Hills, or Belapur Fort with a local driver who knows the area. Our sightseeing packages are perfect for families, tourists, or photography groups who want to cover multiple spots in a single day. Vehicles are clean, AC-equipped, and available for full-day hire with customizable itineraries. Enjoy a relaxing local tour with professional service and comfortable travel."
  },
  {
    "name": "Reliable car rental Navi Mumbai",
    "description": "When it comes to dependable car rentals in Navi Mumbai, Deva Cabs stands out for punctuality, clean vehicles, and verified drivers. We cater to daily commuters, tourists, business travelers, and special event needs with a wide range of vehicle types. Our services include real-time tracking, transparent billing, 24/7 support, and emergency backup vehicles if needed. With Deva Cabs, you don’t just book a car—you get a smooth, safe, and satisfying travel experience every time."
  }
],
"tableData": [
  ["Navi Mumbai Car Rental Service", "-Book car in Navi Mumbai"],
  ["Navi Mumbai self-drive cars", "-Chauffeur car hire Navi Mumbai"],
  ["Corporate car rental Navi Mumbai", "-Luxury cars Navi Mumbai"],
  ["Economy car hire Navi Mumbai", "-Monthly rental Navi Mumbai car"],
  ["Navi Mumbai airport transfer car", "-Sedan rental Navi Mumbai"],
  ["SUV rental Navi Mumbai", "-Navi Mumbai car hire with driver"],
  ["Wedding car rental Navi Mumbai", "-Outstation car rental Navi Mumbai"],
  ["Navi Mumbai sightseeing cab rental", "-Reliable car rental Navi Mumbai"]
],

whychoose: [
  {
    "WhyChooseheading": "Wide Range of Vehicles to Suit Your Needs",
    "WhyChoosedescription": "We offer a diverse fleet of cars, from budget-friendly hatchbacks to premium sedans and SUVs, catering to all your travel requirements in and around Navi Mumbai."
  },
  {
    "WhyChooseheading": "Flexible Rental Plans for Convenience",
    "WhyChoosedescription": "Choose from hourly, daily, or long-term rental options designed to fit your itinerary and budget, making your travel hassle-free and affordable."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are skilled, knowledgeable about Navi Mumbai’s routes and traffic, and committed to providing safe and comfortable journeys."
  },
  {
    "WhyChooseheading": "Well-Maintained and Clean Vehicles",
    "WhyChoosedescription": "All cars undergo regular maintenance and cleaning to ensure reliability, safety, and a pleasant travel experience for every customer."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "We provide competitive rates with no hidden charges, so you can plan your trip confidently without any surprises."
  },
  {
    "WhyChooseheading": "Easy and Quick Booking Process",
    "WhyChoosedescription": "Book your Navi Mumbai car rental effortlessly through our website or customer support, available 24/7 for your convenience."
  },
  {
    "WhyChooseheading": "24/7 Availability and Support",
    "WhyChoosedescription": "Whether it’s a last-minute rental or a planned trip, our services are available round the clock to meet your travel needs."
  },
  {
    "WhyChooseheading": "Safety First with GPS and Security Features",
    "WhyChoosedescription": "Our vehicles are equipped with GPS tracking and safety features to ensure a secure and worry-free travel experience."
  }
]











    }










const faqData = [
  {
    question: "Does Deva Cabs offer car rental services in Navi Mumbai?",
    answer: "Yes, Deva Cabs provides reliable and affordable car rental services across all areas of Navi Mumbai for local and outstation travel."
  },
  {
    question: "What types of cars are available for rent in Navi Mumbai?",
    answer: "We offer a wide range of cars including hatchbacks, sedans, SUVs, Ertiga, Innova Crysta, and luxury vehicles to suit every travel need."
  },
  {
    question: "Can I rent a car in Navi Mumbai with a driver?",
    answer: "Yes, all rentals come with experienced, professional drivers to ensure a safe and convenient journey."
  },
  {
    question: "Is Deva Cabs suitable for daily or hourly rentals in Navi Mumbai?",
    answer: "Absolutely. We offer flexible rental plans by the hour, day, or for custom durations based on your travel requirements."
  },
  {
    question: "Can I hire a car for outstation trips from Navi Mumbai?",
    answer: "Yes, you can book a car for outstation destinations like Lonavala, Pune, Mahabaleshwar, Shirdi, Goa, and more."
  },
  {
    question: "How can I book a car rental in Navi Mumbai?",
    answer: "Booking is easy via our website, mobile app, or by calling our customer care team for quick assistance."
  },
  {
    question: "Are Deva Cabs' vehicles well-maintained and sanitized?",
    answer: "Yes, all our vehicles are regularly serviced, cleaned, and sanitized to provide a comfortable and hygienic experience."
  },
  {
    question: "What are the rental charges for cars in Navi Mumbai?",
    answer: "Rental prices vary based on vehicle type, trip duration, and distance. Contact us for a detailed, transparent quote."
  },
  {
    question: "Is fuel included in the car rental service?",
    answer: "Yes, fuel is included in the package when you book a car with a driver. There are no hidden charges."
  },
  {
    question: "Why choose Deva Cabs for car rental in Navi Mumbai?",
    answer: "Deva Cabs stands out with its reliable fleet, courteous drivers, transparent pricing, and seamless booking experience."
  }
];

const testimonialData = [
  {
    id: 11,
    name: 'Mr. Sandeep Rane',
    role: 'Local Commuter',
    review: 'Booked a car in Navi Mumbai through Deva Cabs for a day trip. The car was clean and the driver was very polite and punctual. Great service!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 12,
    name: 'Ms. Alisha Verma',
    role: 'Freelance Consultant',
    review: 'Needed a sedan for client meetings across Navi Mumbai. Deva Cabs provided excellent service and flexibility. Will definitely book again.',
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
  "name": "Navi Mumbai Car Rental Service",
  "image": "https://devacab.com/assets/images/navi-mumbai-car-rental.jpg", // Replace with actual image URL
  "description": "Book reliable car rental services in Navi Mumbai with Deva Cabs. Choose from self-drive, chauffeur-driven, luxury, economy, SUV, and sedan cars for corporate travel, airport transfers, weddings, sightseeing, and outstation trips.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "1200"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2000",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/navi-mumbai-car-rental-service" // Replace with actual page URL
  }
};




    return (
        <div>

<Helmet>
  <title>Navi Mumbai Car Rental Service | Self-drive & Chauffeur Cars | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book car rental services in Navi Mumbai with Deva Cabs. Self-drive and chauffeur-driven cars available for corporate travel, airport transfers, weddings, sightseeing, and outstation trips. Reliable and affordable." 
  />
  <meta 
    name="keywords" 
    content="Navi Mumbai Car Rental Service, Book car in Navi Mumbai, Navi Mumbai self-drive cars, Chauffeur car hire Navi Mumbai, Corporate car rental Navi Mumbai, Luxury cars Navi Mumbai, Economy car hire Navi Mumbai, Monthly rental Navi Mumbai car, Navi Mumbai airport transfer car, Sedan rental Navi Mumbai, SUV rental Navi Mumbai, Navi Mumbai car hire with driver, Wedding car rental Navi Mumbai, Outstation car rental Navi Mumbai, Navi Mumbai sightseeing cab rental, Reliable car rental Navi Mumbai" 
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
                            <img src='./images/keyword/14.jpg' alt='img' />
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

export default Navibookingcarrentalservice;