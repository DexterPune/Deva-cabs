
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Corporatecabserviceinmumbai() {



    const cardData =
    {
        keyword: ' Corporate cab services in mumbai ',
        heading: 'Deva Cabs:  Corporate cab services in mumbai ',
        headingDescription: 'Deva Cabs provides reliable, comfortable, and hassle-free corporate cab services in Mumbai tailored for business professionals and corporate teams. Whether it is daily employee transportation, client pickups, or executive travel, our punctual service and professional drivers ensure a seamless travel experience. Navigating Mumbai’s busy roads is easier with our fleet of well-maintained vehicles suited for all corporate needs. Choose Deva Cabs for safe, efficient, and comfortable rides that reflect your company’s commitment to quality and reliability.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

   "topPlaces": [
    {
      "title": "Gateway of India",
      "location": "Mumbai, Maharashtra",
      "description": "Located at the waterfront in Colaba, the Gateway of India is Mumbai’s most iconic monument. Built in 1924 to honor the visit of King George V and Queen Mary, this massive basalt arch combines Indo-Saracenic architecture with colonial flair. Overlooking the Arabian Sea and facing the Taj Mahal Palace Hotel, it serves as a central tourist hub, with ferry rides to Elephanta Caves and local photographers capturing the city’s vibrant pulse. The Gateway is not just a historic landmark—it’s a symbol of Mumbai’s pride and resilience."
    },
    {
      "title": "Marine Drive",
      "location": "Mumbai, Maharashtra",
      "description": "Marine Drive is a 3.6-kilometer-long arc-shaped boulevard that stretches from Nariman Point to Girgaon Chowpatty. Also known as the 'Queen’s Necklace' for its glowing curve of street lights at night, it is a beloved seaside promenade for evening walks, breezy bike rides, and romantic sunsets. The backdrop of art deco buildings and the peaceful sound of waves create a rare urban serenity, making Marine Drive a timeless retreat in the heart of Mumbai."
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
      "name": "Cab Service for Corporate",
      "description": "Deva Cabs offers specialized cab services tailored for corporate clients across Mumbai. Whether you need daily employee transportation, client pick-ups, or executive travel, we provide professional cab services that are punctual, safe, and efficient. Our corporate cab plans come with monthly billing, dedicated account management, and access to a fleet of clean, AC vehicles operated by uniformed drivers. Make business travel seamless with Deva Cabs’ trusted corporate solutions."
    },
    {
      "name": "Corporate Taxi Services",
      "description": "Our corporate taxi services in Mumbai are designed for businesses that value reliability and professionalism. Deva Cabs provides point-to-point transfers, hourly rentals, and outstation options for companies looking to streamline employee and executive mobility. We offer pre-negotiated rates, GPS tracking, and real-time ride monitoring for peace of mind. Whether for meetings, airport runs, or VIP transfers — we deliver top-tier corporate taxi services with consistency and care."
    },
    {
      "name": "Taxi Business in Mumbai",
      "description": "Deva Cabs is a leading name in the Mumbai taxi business, offering high-quality service to corporate and individual clients. Our reputation is built on reliability, safety, and excellent customer support. We serve over 500 businesses in Mumbai with dedicated fleet services, executive cabs, and fully managed transport solutions. Join the many companies that trust Deva Cabs as their transportation partner in Mumbai’s busy business environment."
    },
    {
      "name": "Corporate Events Cab Service",
      "description": "Planning a corporate event in Mumbai? Deva Cabs provides end-to-end cab services for conferences, product launches, team outings, and business meets. We offer a wide range of vehicles for single or group transfers, backed by a trained operations team to manage schedules and routes. Ensure seamless transportation for your staff and guests with our reliable, scalable corporate event cab service."
    },
    {
      "name": "Business Taxi Services Mumbai",
      "description": "For fast, dependable business taxi services in Mumbai, Deva Cabs is your trusted provider. We offer priority dispatch, executive vehicles, and discreet, professional drivers suited for business travel. Whether you need cabs for meetings, client visits, or partner transfers, our business taxi solutions help your team stay productive and on time. Custom contracts and flexible billing available."
    },
    {
      "name": "Corporate Travel Solutions Mumbai",
      "description": "Deva Cabs delivers comprehensive corporate travel solutions across Mumbai for companies of all sizes. Our services include employee transportation, management-level cab services, airport transfers, and more — all with centralized billing, 24/7 customer support, and GPS monitoring. Reduce overhead and improve efficiency with our corporate travel services designed to meet your specific business needs."
    },
    {
      "name": "Executive Cab Services Mumbai",
      "description": "Upgrade your travel experience with Deva Cabs’ executive cab services in Mumbai. Perfect for CEOs, senior executives, and important clients, our executive cabs offer premium vehicles like Innova Crysta, Dzire, and sedans with professional, English-speaking chauffeurs. Enjoy comfort, privacy, and punctuality every time you travel with us for corporate engagements or high-level meetings."
    },
    {
      "name": "Airport Transfer Services Mumbai Corporate",
      "description": "Deva Cabs provides timely and professional airport transfer services tailored for corporate travelers in Mumbai. We handle pickup and drop services to and from both domestic and international terminals, ensuring your employees and guests travel in comfort. Our flight-tracking system, real-time updates, and chauffeur-driven cabs make airport transfers smooth and stress-free for your business."
    },
    {
      "name": "Corporate Cab Booking Mumbai",
      "description": "Book your corporate cabs in Mumbai with ease through Deva Cabs’ dedicated booking portal or hotline. We provide instant confirmation, priority dispatch, and detailed ride logs for HR and admin teams. Our booking platform supports both one-time and recurring rides, with dedicated support staff available 24/7. Simplify your company’s cab booking process with Deva Cabs — fast, reliable, and professional."
    }
  ],
  "tableData": [
    ["Cab Service for Corporate", "-Corporate Taxi Services"],
    ["Taxi Business in Mumbai", "-Corporate Events Cab Service"],
    ["Business Taxi Services Mumbai", "-Corporate Travel Solutions Mumbai"],
    ["Executive Cab Services Mumbai", "-Airport Transfer Services Mumbai Corporate"],
    ["Corporate Cab Booking Mumbai", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Professional and Reliable Transportation Partner",
    "WhyChoosedescription": "Deva Cabs is a trusted name in corporate cab services across Mumbai, offering timely and reliable transportation for businesses of all sizes. Whether it’s daily employee commutes, executive travel, or outstation business trips, we ensure professionalism, punctuality, and smooth operations to support your company’s travel needs."
  },
  {
    "WhyChooseheading": "Fleet Tailored for Business Needs",
    "WhyChoosedescription": "Our fleet includes premium sedans, comfortable SUVs, and luxury cars, all maintained to the highest standards to suit different levels of corporate travel. Whether it’s an airport pickup for a client or a monthly employee shuttle service, we have the right vehicle to match your brand and comfort expectations."
  },
  {
    "WhyChooseheading": "Dedicated Account Management",
    "WhyChoosedescription": "For companies using our corporate cab services regularly, we offer a dedicated account manager to streamline bookings, coordinate scheduling, and resolve any issues promptly. Our goal is to make corporate travel management easy, centralized, and worry-free for your HR or administration team."
  },
  {
    "WhyChooseheading": "Flexible Billing & Invoicing Options",
    "WhyChoosedescription": "Deva Cabs provides businesses with flexible billing cycles—weekly, bi-weekly, or monthly—along with GST-compliant invoices for easy expense reporting. Custom pricing packages and credit options are available for long-term corporate engagements, helping you stay within budget while getting quality service."
  },
  {
    "WhyChooseheading": "Verified and Trained Drivers",
    "WhyChoosedescription": "All our corporate drivers are background-verified, trained in professional conduct, and well-versed in Mumbai’s roadways. They ensure a respectful, punctual, and safe travel experience for your staff and clients, creating a positive impression of your organization at every touchpoint."
  },
  {
    "WhyChooseheading": "Real-Time Tracking and Safety Monitoring",
    "WhyChoosedescription": "Our cabs are equipped with GPS tracking, allowing companies to monitor route progress in real-time. This feature not only improves route planning but also enhances employee safety, especially during late-night shifts or travel across high-traffic zones in Mumbai."
  },
  {
    "WhyChooseheading": "Scalable Solutions for Growing Teams",
    "WhyChoosedescription": "Whether you need daily cab services for 5 employees or 500, Deva Cabs offers scalable solutions that grow with your business. From one-time event logistics to regular office pickup/drop schedules, we adapt to your changing transportation needs without disruption."
  },
  {
    "WhyChooseheading": "24/7 Corporate Support Team",
    "WhyChoosedescription": "Our dedicated corporate support line is available 24/7 to help with urgent bookings, route adjustments, or emergency needs. With Deva Cabs, your business always has a reliable transport partner ready to respond anytime you need us."
  }
]



















    }







const faqData = [
  {
    question: "What corporate cab services does Deva Cabs offer in Mumbai?",
    answer: "Deva Cabs provides tailored corporate cab solutions in Mumbai including employee transportation, executive travel, event logistics, and airport transfers."
  },
  {
    question: "Can Deva Cabs handle daily employee transportation for our company?",
    answer: "Yes, we specialize in daily employee pick-up and drop-off services, ensuring safe, punctual, and hassle-free travel for your staff across Mumbai."
  },
  {
    question: "What types of vehicles are available for corporate travel in Mumbai?",
    answer: "Our fleet includes sedans, SUVs, tempo travellers, and premium vehicles to accommodate both individual executives and larger corporate groups."
  },
  {
    question: "Is there an option for monthly billing or contracts for corporate clients?",
    answer: "Yes, we offer flexible monthly billing plans, service level agreements, and custom contracts to suit your company’s travel and budgeting requirements."
  },
  {
    question: "Are Deva Cabs’ corporate drivers trained and verified?",
    answer: "All our corporate cab drivers are background-verified, professionally trained, and punctual to ensure the highest level of service and safety."
  },
  {
    question: "Do you provide airport cab services for corporate clients in Mumbai?",
    answer: "Absolutely. We offer dedicated airport transfers for corporate executives with real-time tracking and flight coordination for smooth pickups and drop-offs."
  },
  {
    question: "Can we schedule cabs in advance for meetings and events?",
    answer: "Yes, you can pre-schedule cabs for business meetings, client visits, and corporate events with guaranteed on-time arrivals."
  },
  {
    question: "What safety measures are in place for corporate cab services?",
    answer: "We implement strict safety protocols including GPS-tracked vehicles, emergency support, sanitization, and 24/7 customer assistance."
  },
  {
    question: "Is Deva Cabs suitable for long-term corporate transport solutions?",
    answer: "Yes, many companies in Mumbai rely on us for long-term transport partnerships, including dedicated cabs, on-site drivers, and managed fleet services."
  },
  {
    question: "Why choose Deva Cabs for corporate cab services in Mumbai?",
    answer: "Deva Cabs stands out with reliable service, professional drivers, corporate billing, and a dedicated support team to meet your business transportation needs in Mumbai."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Rohit Bansal',
    role: 'HR Manager, FinTech Company',
    review: 'We’ve been using Deva Cabs for over a year for our employee transport in Mumbai. Their reliability, clean cars, and professionalism have made them an invaluable partner.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Nidhi Verma',
    role: 'Admin Lead, IT Firm',
    review: 'Deva Cabs helped streamline our corporate travel logistics. From executive airport pickups to large team movements, their service is always on point.',
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
  "name": "Corporate Cab Services in Mumbai",
  "image": "https://devacab.com/assets/images/corporate-cab-services-mumbai.jpg", // Replace with actual image URL
  "description": "Deva Cabs provides reliable corporate cab services in Mumbai, including office cab hires, employee transport, business travel, client pickups, airport transfers, and MICE cab services. Flexible monthly rentals and premium corporate cars available.",
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
    "price": "750",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/corporate-cab-services-mumbai" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Corporate Cab Services in Mumbai | Employee Transport & Business Travel | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book corporate cab services in Mumbai with Deva Cabs. Employee transport, business travel, airport transfers, client pickups, and MICE cab services with premium corporate cars and flexible monthly rentals." 
  />
  <meta 
    name="keywords" 
    content="Corporate Cab Services in Mumbai, Mumbai office cab hire, Mumbai employee transport service, Mumbai business travel cabs, Mumbai monthly corporate cab rental, Mumbai IT company cab service, Chauffeur-driven corporate cabs Mumbai, Mumbai cab for meetings, Mumbai client pickup drop service, Mumbai airport transfer for corporate, Mumbai MICE cab services, Corporate cab booking Mumbai, Executive cab rental Mumbai, Reliable corporate transport Mumbai, Mumbai B2B cab service, Premium corporate cars Mumbai, Mumbai business cab hire, Mumbai daily office cab service" 
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
                            <img src='/images/keyword/6.jpg' alt='img' />
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

export default Corporatecabserviceinmumbai;