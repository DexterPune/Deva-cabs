
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Carrentalmumbai() {



    const cardData =
    {
        keyword: ' Car Rental Mumbai ',
        heading: 'Deva Cabs:  Car Rental Mumbai ',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free car rental services in Mumbai for all your travel needs. Whether you are exploring the city, attending business meetings, or planning a weekend getaway, our fleet of well-maintained cars and professional drivers ensure a smooth and pleasant journey. From compact sedans to spacious SUVs, we provide flexible rental options to suit your preferences and budget. Enjoy the convenience of on-time service, clean vehicles, and a comfortable ride across Mumbai with Deva Cabs.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

   "topPlaces": [
    {
      "title": "Gateway of India",
      "location": "Mumbai, Maharashtra",
      "description": "The Gateway of India stands as Mumbai’s most prominent historical landmark, built in 1924 to welcome British royals. This colossal basalt arch overlooks the Arabian Sea and symbolizes the city’s colonial heritage. Today, it serves as a popular starting point for ferry rides to Elephanta Caves, and a favorite gathering spot for both tourists and locals. With its majestic architecture, proximity to the Taj Mahal Palace Hotel, and stunning sea views, it’s a must-visit destination capturing the essence of Mumbai."
    },
    {
      "title": "Marine Drive",
      "location": "Mumbai, Maharashtra",
      "description": "Marine Drive, famously known as the Queen’s Necklace, is a 3.6 km promenade stretching along the Arabian Sea. By day, it's a peaceful coastal road perfect for walks and jogs. By night, the streetlights form a sparkling necklace pattern, creating one of Mumbai’s most romantic sights. The boulevard is lined with iconic art deco buildings and connects major attractions like Chowpatty Beach and Nariman Point. It’s the city’s go-to place for catching sea breezes, sunsets, and a slice of urban calm."
    },
    {
      "title": "Elephanta Caves",
      "location": "Elephanta Island, Mumbai Harbour",
      "description": "A UNESCO World Heritage Site, the Elephanta Caves are an awe-inspiring complex of rock-cut temples located on Elephanta Island. Accessible via a ferry from the Gateway of India, these caves date back to the 5th–7th centuries and are dedicated to Lord Shiva. The site features impressive sculptures, including the iconic Trimurti—a 20-foot-tall three-headed Shiva. The island's quiet, green setting offers a peaceful contrast to Mumbai’s fast-paced life and is perfect for history buffs and nature lovers."
    },
    {
      "title": "Siddhivinayak Temple",
      "location": "Prabhadevi, Mumbai, Maharashtra",
      "description": "One of Mumbai's most visited temples, Siddhivinayak is a revered shrine dedicated to Lord Ganesha. Known for fulfilling wishes, the temple draws devotees from all over India, including Bollywood stars and political leaders. The black stone idol with a curved trunk is adorned in gold and flowers, housed in a beautifully constructed temple with intricate wooden doors and carvings. Tuesdays see the largest crowds, with visitors seeking blessings for prosperity, wisdom, and success."
    },
    {
      "title": "Chhatrapati Shivaji Maharaj Terminus",
      "location": "Mumbai, Maharashtra",
      "description": "Chhatrapati Shivaji Maharaj Terminus (CSMT), formerly Victoria Terminus, is a UNESCO World Heritage Site that combines Victorian Gothic architecture with Indian elements. This active railway station, built in 1887, features ornate stone domes, turrets, and stained glass, and serves as one of India’s busiest transit hubs. Its architectural magnificence and historical relevance make it a top stop for travelers exploring Mumbai’s British-era legacy."
    },
    {
      "title": "Juhu Beach",
      "location": "Mumbai, Maharashtra",
      "description": "Juhu Beach is a lively coastal stretch in suburban Mumbai, perfect for sunset views, street food, and celebrity sightings. It’s popular with locals for jogging, yoga, and weekend outings. Vendors sell everything from pav bhaji to ice gola, making it a haven for food lovers. Nearby are many Bollywood stars' homes, adding a touch of glamour to the beach’s laid-back charm. It’s a must-visit for those looking to enjoy Mumbai’s shoreline."
    },
    {
      "title": "Haji Ali Dargah",
      "location": "Worli, Mumbai, Maharashtra",
      "description": "Floating in the Arabian Sea, the Haji Ali Dargah is one of Mumbai’s most iconic religious landmarks. Built in the 15th century, it houses the tomb of Sufi saint Haji Ali Shah Bukhari and is connected to the city via a narrow causeway. Visitors from all religions come to seek blessings and experience the spiritual calm. During high tide, the dargah appears to float on water, offering a mystical and awe-inspiring view."
    },
    {
      "title": "Sanjay Gandhi National Park",
      "location": "Borivali, Mumbai, Maharashtra",
      "description": "A rare wildlife sanctuary within a major city, Sanjay Gandhi National Park spans over 100 sq km and offers lush greenery, trekking trails, and biodiversity. It's home to leopards, spotted deer, monkeys, and over 270 species of birds. The ancient Kanheri Caves inside the park showcase Buddhist rock-cut architecture dating back over 2,000 years. Nature lovers, families, and adventure seekers will find it a refreshing escape from city life."
    },
    {
      "title": "Chor Bazaar",
      "location": "South Mumbai, Maharashtra",
      "description": "Chor Bazaar, or 'Thieves Market', is a bustling flea market known for antiques, curios, vintage Bollywood posters, furniture, and electronics. Despite its name, the market is legal and known for bargains and rare finds. With narrow lanes packed with history and chaos, it offers a unique shopping experience full of surprises for collectors, decorators, and adventurous tourists alike."
    },
    {
      "title": "Girgaon Chowpatty",
      "location": "Girgaon, Mumbai, Maharashtra",
      "description": "Located along Marine Drive, Girgaon Chowpatty is a favorite beach destination famous for its food stalls, family-friendly vibe, and cultural celebrations. The beach becomes a spectacle during Ganesh Visarjan when thousands gather for idol immersions. It’s perfect for watching sunsets, flying kites, or enjoying bhel puri and kulfi. With a backdrop of city lights and sea breeze, Chowpatty offers a quintessential Mumbai experience."
    }
  ],



  "services": [
    {
      "name": "Car Rental in Mumbai",
      "description": "Deva Cabs offers flexible and affordable car rental services in Mumbai for all your travel needs. Whether you need a car for a few hours, a full day, or multiple days, our rental plans are designed to suit every customer. We provide clean, well-maintained cars with professional drivers or self-drive options. From business trips to leisure drives or shopping days, our car rental services ensure a comfortable, reliable, and affordable experience across Mumbai."
    },
    {
      "name": "Tempo Traveller on Rent in Mumbai",
      "description": "Planning a group trip in Mumbai? Deva Cabs provides spacious and comfortable Tempo Travellers on rent, perfect for group travel, family outings, and corporate events. Choose from 9, 12, 15, or 17-seater options, all equipped with ample legroom, luggage space, and air conditioning. Our experienced drivers ensure a smooth and safe ride, whether you’re heading out for a local city tour or a long-distance journey."
    },
    {
      "name": "Monthly Car Rental in Mumbai",
      "description": "Need a vehicle for long-term use? Deva Cabs offers cost-effective monthly car rental plans in Mumbai for individuals, corporates, and business owners. Choose from a range of sedans, SUVs, and hatchbacks with or without drivers. Our monthly plans include regular servicing, insurance, and round-the-clock customer support. It's the ideal solution for employees, consultants, and frequent travelers who need reliable transport without the hassle of ownership."
    },
    {
      "name": "Pune to Mumbai Car Rental",
      "description": "Traveling from Pune to Mumbai? Deva Cabs offers premium car rental services for this popular intercity route. Whether it’s a business meeting, airport drop, or personal travel, our Pune to Mumbai rental service provides timely pickups, comfortable rides, and competitive pricing. Choose from economy to luxury vehicles and travel with professional drivers who prioritize your safety and schedule."
    },
    {
      "name": "One Way Cab from Mumbai",
      "description": "Looking for an affordable one-way cab from Mumbai to your destination? Deva Cabs offers convenient one-way taxi services from Mumbai to Pune, Nashik, Lonavala, Shirdi, and more. No need to pay return charges — just book and go. Our one-way cabs are ideal for business trips, student travel, and leisure journeys, with reliable service, transparent pricing, and comfortable vehicles."
    },
    {
      "name": "Online Cab Booking in Mumbai",
      "description": "Book your cab in seconds with Deva Cabs’ easy online booking system in Mumbai. Whether you're booking for now or scheduling a future ride, our platform offers a seamless experience. Select your vehicle, pickup point, and drop location — we handle the rest. Our online booking system supports all major payment methods, real-time driver tracking, and instant confirmations for a hassle-free travel experience."
    },
    {
      "name": "Mumbai to Goa Cab Services",
      "description": "Planning a scenic road trip from Mumbai to Goa? Deva Cabs provides luxurious and affordable cab services for the long-distance Mumbai-Goa route. Enjoy a comfortable ride in AC sedans or SUVs with experienced drivers who know the best and safest routes. Ideal for family vacations, couples, and group getaways, our Mumbai to Goa cab service offers flexible departure times, reliable vehicles, and excellent service."
    },
    {
      "name": "Innova on Rent in Mumbai",
      "description": "Need a spacious ride for your family or group? Deva Cabs offers Toyota Innova rentals in Mumbai with flexible hourly, daily, and outstation packages. Perfect for city tours, airport transfers, or road trips, our Innovas are equipped with plush seating, air conditioning, and experienced drivers. Enjoy premium comfort and extra legroom — ideal for 6 to 7 passengers traveling together."
    },
    {
      "name": "Cab from Pune to Mumbai Airport",
      "description": "Catch your flight on time with Deva Cabs’ reliable Pune to Mumbai Airport cab service. We specialize in timely, comfortable airport transfers with professional drivers and clean, GPS-enabled vehicles. Choose from multiple car options based on your budget and luggage needs. We monitor traffic and flight status to ensure punctuality and a stress-free ride to the airport."
    }
  ],
  "tableData": [
    ["Car Rental in Mumbai", "-Tempo Traveller on Rent in Mumbai"],
    ["Monthly Car Rental in Mumbai", "-Pune to Mumbai Car Rental"],
    ["One Way Cab from Mumbai", "-Online Cab Booking in Mumbai"],
    ["Mumbai to Goa Cab Services", "-Innova on Rent in Mumbai"],
    ["Cab from Pune to Mumbai Airport", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Wide Range of Rental Cars for Every Need",
    "WhyChoosedescription": "At Deva Cabs, we offer an extensive fleet of rental cars in Mumbai—from compact hatchbacks and stylish sedans to spacious SUVs and luxury vehicles. Whether you need a car for a business meeting, a family outing, a weekend getaway, or a wedding, we have the right car to match your purpose and preference."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages",
    "WhyChoosedescription": "We understand that every travel need is different. That’s why we offer flexible rental options including hourly, daily, weekly, and even long-term rentals. Choose the package that suits your schedule—whether it’s a quick 2-hour shopping run or a full-day outstation trip—and pay only for what you use."
  },
  {
    "WhyChooseheading": "Affordable Rates with Transparent Billing",
    "WhyChoosedescription": "Our car rental services in Mumbai are designed to be budget-friendly without compromising quality. With Deva Cabs, you get competitive pricing and absolutely no hidden charges. All costs—including fuel, taxes, and driver allowance (if applicable)—are clearly communicated upfront so you can plan your travel expenses with confidence."
  },
  {
    "WhyChooseheading": "Self-Drive and Chauffeur-Driven Options",
    "WhyChoosedescription": "Enjoy the freedom of choice with our self-drive and chauffeur-driven car rental options. Want full control over your ride? Go for a self-drive rental. Prefer to relax while someone else drives? Our professional chauffeurs will ensure a smooth, stress-free ride across Mumbai and beyond."
  },
  {
    "WhyChooseheading": "Well-Maintained & Sanitized Vehicles",
    "WhyChoosedescription": "Each car in our rental fleet is thoroughly inspected and regularly serviced to deliver optimum performance. Clean interiors, working AC, and proper sanitization make every journey with Deva Cabs safe, hygienic, and pleasant—whether it’s a short city ride or a long outstation trip."
  },
  {
    "WhyChooseheading": "Instant Booking and Easy Cancellations",
    "WhyChoosedescription": "Booking a rental car with Deva Cabs is quick and seamless. You can reserve your vehicle online, through our app, or by calling our customer care. We also offer flexible cancellation policies in case your plans change—making your experience stress-free from start to finish."
  },
  {
    "WhyChooseheading": "Round-the-Clock Customer Support",
    "WhyChoosedescription": "Our 24/7 support team is always available to assist you with queries, bookings, breakdown assistance, or any issues during your rental period. We’re just a call away—any time you need help in your journey across Mumbai or outside the city."
  },
  {
    "WhyChooseheading": "Perfect for Tourists and Locals Alike",
    "WhyChoosedescription": "Whether you're a visitor wanting to explore Mumbai on your own schedule, or a local in need of a temporary ride, Deva Cabs provides car rentals that make transportation easy, convenient, and reliable—helping you travel Mumbai like never before."
  }
]



















    }






const faqData = [
  {
    question: "How do I book a car rental in Mumbai with Deva Cabs?",
    answer: "Booking a car rental with Deva Cabs is simple. Visit our website, use our mobile app, or call our customer support to reserve your vehicle in Mumbai."
  },
  {
    question: "What types of rental cars are available with Deva Cabs in Mumbai?",
    answer: "We offer a variety of rental cars including hatchbacks, sedans, SUVs, and luxury vehicles, suitable for every occasion and budget."
  },
  {
    question: "Is Deva Cabs’ car rental service available for self-drive or chauffeur-driven options?",
    answer: "Currently, we provide chauffeur-driven rental cars in Mumbai. Our professional drivers ensure a smooth and stress-free experience."
  },
  {
    question: "Can I rent a car in Mumbai for outstation travel?",
    answer: "Yes, Deva Cabs offers car rental services for both local and outstation travel from Mumbai to destinations like Pune, Nashik, Lonavala, and more."
  },
  {
    question: "Are Deva Cabs available for airport transfers as part of the car rental service in Mumbai?",
    answer: "Absolutely. Our car rental service includes timely airport pick-up and drop-off to and from Mumbai Airport."
  },
  {
    question: "What is the duration flexibility for car rentals in Mumbai?",
    answer: "You can rent a car for a few hours, a full day, or even multiple days. We offer flexible rental durations based on your travel needs."
  },
  {
    question: "What are the payment options for Deva Cabs’ car rental service in Mumbai?",
    answer: "We accept payments via cash, UPI, credit/debit cards, and online methods through our app or website."
  },
  {
    question: "Are your car rentals in Mumbai safe and reliable?",
    answer: "Yes, all our vehicles are regularly maintained and our drivers are background-verified to ensure a safe and comfortable experience."
  },
  {
    question: "Can I rent a car for corporate or business travel in Mumbai?",
    answer: "Yes, we provide tailored car rental solutions for corporate clients including daily rentals, event travel, and executive car services."
  },
  {
    question: "Why choose Deva Cabs for car rental in Mumbai?",
    answer: "Deva Cabs offers dependable service, a wide selection of vehicles, professional drivers, and transparent pricing, making us a top choice for car rentals in Mumbai."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Saurabh Mishra',
    role: 'Frequent Traveler',
    review: 'I booked a car rental in Mumbai with Deva Cabs for a weekend trip. The car was clean, the driver was professional, and the entire process was seamless. Great experience!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Kavita Joshi',
    role: 'Event Organizer',
    review: 'Deva Cabs helped us with car rentals for our corporate event in Mumbai. Timely service, courteous drivers, and well-maintained cars. Highly recommended!',
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
  "name": "Car Rental in Mumbai",
  "image": "https://devacab.com/assets/images/car-rental-in-mumbai.jpg", // Replace with actual image URL
  "description": "Deva Cabs offers flexible car rental services in Mumbai including self-drive and chauffeur-driven options. Choose from daily, weekly, and monthly rentals with luxury, budget, SUV, and sedan cars available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "4000"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1200",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/car-rental-in-mumbai" // Replace with actual page URL
  }
};




    return (
        <div>
<Helmet>
  <title>Car Rental in Mumbai | Self-Drive & Chauffeur Driven Cars | Deva Cabs</title>
  <meta 
    name="description" 
    content="Rent cars in Mumbai with Deva Cabs. Self-drive and chauffeur-driven car rentals available for daily, weekly, and monthly needs. Luxury, budget, SUV, sedan options and airport transfers." 
  />
  <meta 
    name="keywords" 
    content="Car Rental in Mumbai, Self-drive car hire Mumbai, Chauffeur-driven car rental Mumbai, Daily car rental Mumbai, Weekly rental car Mumbai, Monthly rental car Mumbai, Luxury car rental Mumbai, Budget car hire Mumbai, SUV rental Mumbai, Sedan rental Mumbai, Mumbai airport car rental, Wedding car rental Mumbai, Corporate car hire Mumbai, Family car rental Mumbai, Long term car hire Mumbai, Economy car rental Mumbai, One way car rental Mumbai, Premium car rental Mumbai" 
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
                            <img src='./images/keyword/5.jpg' alt='img' />
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

export default Carrentalmumbai;