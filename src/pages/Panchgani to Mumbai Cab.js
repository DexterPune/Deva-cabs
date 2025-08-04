
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Panchganitomumbaicabs() {



    const cardData =
    {
        keyword: ' Panchgani to Mumbai Cab   ',
        heading: 'Deva Cabs: Panchgani to Mumbai Cab   ',
        headingDescription: 'Deva Cabs offers reliable and comfortable cab services from Panchgani to Mumbai, perfect for weekend returns, family travel, and business trips. Covering approximately 245 km, our well-maintained vehicles—including Sedans, SUVs, and Innova Crysta—ensure a smooth and scenic journey through the Sahyadri hills and Konkan plains. Travel with confidence thanks to professional chauffeurs, fixed-fare packages, and convenient door-to-door pickup from your guesthouse or resort. With 24/7 availability, transparent pricing, and attentive customer support, Deva Cabs makes your Panchgani to Mumbai cab journey efficient, stress-free, and thoroughly enjoyable.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

"topPlaces": [
  {
    "title": "Elephanta Caves",
    "location": "Elephanta Island, Mumbai Harbour",
    "description": "A UNESCO World Heritage site reachable by an hour-long ferry ride from the Gateway. These rock-cut caves dating from the 5th–8th centuries feature grand sculptures, including the iconic Trimurti of Shiva. The island’s lush hillscape and views of the bay create a serene journey back in time."
  },
    {
    "title": "Marine Drive",
    "location": "South Mumbai, Maharashtra",
    "description": "Known as the ‘Queen’s Necklace’, this 3.6 km C-shaped promenade along the Arabian Sea is lined with art-deco buildings and palm trees. Perfect for sunset strolls or evening breezes, it lights up like a string of pearls at night. Whether it’s a quiet morning jog or enjoying street-side chai, Marine Drive encapsulates Mumbai’s coastal charm and historical elegance."
  },
  {
    "title": "Gateway of India",
    "location": "Colaba, South Mumbai, Maharashtra",
    "description": "Erected in 1924 to commemorate the visit of King George V and Queen Mary, this majestic basalt arch stands majestically by the sea, with the iconic Taj Mahal Palace Hotel beside it. A starting point for ferry trips to Elephanta Caves, it buzzes with street performers, photographers, and tourists soaking in its colonial history."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "location": "Mumbai, Maharashtra",
    "description": "This UNESCO-listed masterpiece from 1887 fuses Victorian Gothic with Indian architectural elements. A living monument, CSMT is one of India’s busiest railway stations, featuring stunning stonework, arched windows, turrets, and intricate carvings that echo Mumbai’s colonial past."
  },
  {
    "title": "Juhu Beach",
    "location": "Juhu, Mumbai, Maharashtra",
    "description": "A bustling sandy stretch known for its vibrant street-snack culture—vada pav, bhel puri, pav bhaji—sunset seekers, and Bollywood celebrity neighborhood. Joggers, kite-flyers, and families mingle here as foamy waves lap the shore, making it a quintessential slice of Mumbai life."
  },
  {
    "title": "Siddhivinayak Temple",
    "location": "Prabhadevi, Mumbai, Maharashtra",
    "description": "Renowned for its black stone idol of Lord Ganesha with a trunk curving to the right, this temple sees millions of devotees, especially on Tuesdays. The atmosphere is charged with faith, and the temple’s ornate gold-plated sanctum adds to its spiritual grandeur."
  },
  {
    "title": "Haji Ali Dargah",
    "location": "Worli, Mumbai, Maharashtra",
    "description": "A white-domed Sufi shrine built on a sea-locked islet and accessible via a narrow causeway at low tide. Known for its sense of peace amidst the waves, the Dargah draws visitors of all faiths seeking blessings and views of the open sea."
  },
  {
    "title": "Girgaon Chowpatty",
    "location": "Girgaon, South Mumbai, Maharashtra",
    "description": "At the northern end of Marine Drive, this busy beach is a hub for Ganesh Visarjan celebrations every year. Known for its lively street‑food scene—pani puri, kulfi, corn—it’s a place to soak in Mumbai's festive spirit and beach culture."
  },
  {
    "title": "Colaba Causeway & Kala Ghoda",
    "location": "Colaba & Fort, South Mumbai, Maharashtra",
    "description": "A vibrant cultural corridor known for its bohemian charm—flea markets, street art, galleries, colonial facades, chic cafés, and heritage museums. Strolling here offers tastes of fashion, art, history, and street-life all in one eclectic walk."
  },
  {
    "title": "Sanjay Gandhi National Park & Kanheri Caves",
    "location": "Borivali, Mumbai, Maharashtra",
    "description": "A verdant break from city bustle, this rare urban jungle spans over 100 km² and houses wildlife like leopards, deer, and monkeys. Within it lies the ancient Kanheri Caves—Buddhist-carved sanctuaries and temples set among forest trails and streams."
  }
],



  "services": [
    {
      "name": "Panchgani to Mumbai Cab",
      "description": "Travel smoothly from the serene hill station of Panchgani to the vibrant city of Mumbai with our dependable cab service. Whether for leisure or business, enjoy a comfortable and safe journey with professional drivers and well-maintained vehicles."
    },
    {
      "name": "One-way cab Panchgani to Mumbai",
      "description": "Book a convenient one-way cab from Panchgani to Mumbai, ideal for travelers who need a direct, hassle-free ride without worrying about return trips. Punctuality and comfort are guaranteed for your journey."
    },
    {
      "name": "Book taxi Panchgani to Mumbai",
      "description": "Easily reserve your taxi from Panchgani to Mumbai using our seamless online booking platform. Choose from a variety of vehicles to suit your budget and preferences, backed by 24/7 customer support."
    },
    {
      "name": "Round trip cab Panchgani to Mumbai",
      "description": "Plan your round trip between Panchgani and Mumbai with our reliable round trip cab services. Enjoy the comfort of the same vehicle and driver throughout, providing flexibility and ease for your travel plans."
    },
    {
      "name": "AC cab Panchgani to Mumbai",
      "description": "Stay cool and comfortable on your journey from Panchgani to Mumbai with our air-conditioned cab options. Perfect for long-distance travel, our AC cabs ensure a pleasant ride."
    },
    {
      "name": "SUV cab Panchgani to Mumbai",
      "description": "Travel with extra space and comfort in our SUV cabs from Panchgani to Mumbai, ideal for families, groups, or those carrying more luggage. Experience a smooth and spacious journey."
    },
    {
      "name": "Chauffeur-driven cab Panchgani to Mumbai",
      "description": "Relax and let our professional chauffeurs handle your trip from Panchgani to Mumbai. Enjoy a safe, timely, and courteous service tailored to your convenience."
    },
    {
      "name": "Affordable cab Panchgani to Mumbai",
      "description": "Choose our budget-friendly cab services from Panchgani to Mumbai without compromising on quality. Reliable, safe, and comfortable travel at competitive prices."
    }
  ],
  "tableData": [
    ["Panchgani to Mumbai Cab", "-One-way cab Panchgani to Mumbai"],
    ["Book taxi Panchgani to Mumbai", "-Round trip cab Panchgani to Mumbai"],
    ["AC cab Panchgani to Mumbai", "-SUV cab Panchgani to Mumbai"],
    ["Chauffeur-driven cab Panchgani to Mumbai", "-Affordable cab Panchgani to Mumbai"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Panchgani to Mumbai Cab Service",
    "WhyChoosedescription": "Travel comfortably from the beautiful hill station of Panchgani to Mumbai with our trusted cab service. Whether you’re heading back after a peaceful retreat or traveling for business, our well-maintained vehicles and skilled drivers ensure a safe and timely journey covering approximately 250 km."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for All Group Sizes",
    "WhyChoosedescription": "Our fleet includes air-conditioned sedans, SUVs, and tempo travellers with ergonomic seating and ample luggage space. Whether you’re traveling alone, with family, or in a group, our vehicles provide a relaxing and enjoyable ride after your stay in the hills."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Route and Terrain",
    "WhyChoosedescription": "Our professional drivers are well-versed with the winding roads and highways between Panchgani and Mumbai. They prioritize safety, punctuality, and comfort, ensuring a smooth and stress-free journey despite the challenging terrain."
  },
  {
    "WhyChooseheading": "Flexible Rental Packages to Fit Your Itinerary",
    "WhyChoosedescription": "Choose from one-way, round-trip, or hourly rental packages tailored to your travel plans. Whether you need a quick transfer or a multi-day trip with sightseeing stops, we offer customizable options to suit your schedule and budget."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our all-inclusive pricing covers tolls, fuel, parking, and driver allowances without any hidden charges. This transparency allows you to plan your Panchgani to Mumbai cab journey confidently and without surprises."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability for Your Convenience",
    "WhyChoosedescription": "Our services operate round the clock to accommodate your travel needs. Whether it’s an early morning departure or a late-night arrival, our Panchgani to Mumbai cabs are available whenever you require them."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Book your cab quickly and easily via our website or customer support. Receive instant confirmation along with driver and vehicle details for a hassle-free travel experience from Panchgani to Mumbai."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "All our vehicles undergo regular maintenance and sanitization. Equipped with GPS tracking, seat belts, and emergency kits, we prioritize your safety and comfort throughout your journey."
  }
]


















    }




const faqData = [
  {
    question: "Can I book a cab from Panchgani to Mumbai with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Panchgani to Mumbai for both one-way and round-trip travel."
  },
  {
    question: "How long does it take to travel from Panchgani to Mumbai by cab?",
    answer: "The journey usually takes around 4 to 5 hours depending on traffic and road conditions."
  },
  {
    question: "What vehicle options are available for Panchgani to Mumbai trips?",
    answer: "We provide various vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit your travel needs."
  },
  {
    question: "Is one-way cab booking available from Panchgani to Mumbai?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip cab services for this route."
  },
  {
    question: "Are tolls, parking fees, and driver allowances included in the fare?",
    answer: "Toll charges, parking fees, and driver allowances are generally extra and will be clearly communicated during booking."
  },
  {
    question: "Can I book a cab from Panchgani to Mumbai at any time?",
    answer: "Yes, our cab services operate 24/7, allowing you to book rides at your convenience."
  },
  {
    question: "Is the trip safe and comfortable for families and senior citizens?",
    answer: "Absolutely. Our vehicles are well-maintained and our professional drivers ensure a safe and comfortable journey."
  },
  {
    question: "Can I request stops or sightseeing during the Panchgani to Mumbai trip?",
    answer: "Yes, you can customize your journey with stops or sightseeing. Please inform us while booking."
  },
  {
    question: "Is this service suitable for airport transfers to Mumbai?",
    answer: "Yes, we provide timely and reliable airport transfers from Panchgani to Mumbai."
  },
  {
    question: "Why choose Deva Cabs for Panchgani to Mumbai cab service?",
    answer: "Deva Cabs offers professional drivers, transparent pricing, clean vehicles, and excellent customer support for a hassle-free experience."
  }
];

const testimonialData = [
  {
    id: 95,
    name: 'Mr. Prashant Deshpande',
    role: 'Family Traveler',
    review: 'Our trip from Panchgani to Mumbai was comfortable and hassle-free thanks to Deva Cabs. The driver was courteous and punctual.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 96,
    name: 'Ms. Kavita Joshi',
    role: 'Tourist',
    review: 'I highly recommend Deva Cabs for travel from Panchgani to Mumbai. Great service and clean vehicles.',
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
  "name": "Panchgani to Mumbai Cab",
  "image": "https://devacab.com/assets/images/panchgani-to-mumbai-cab.jpg", // Update with actual image URL
  "description": "Book affordable Panchgani to Mumbai cab service with AC and SUV cabs. Chauffeur-driven one-way and round trip taxi options available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "80",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2200",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/panchgani-to-mumbai-cab" // Replace with actual URL
  }
};






    return (
        <div>
<Helmet>
  <title>Panchgani to Mumbai Cab | Taxi Service Panchgani to Mumbai | Deva Cabs</title>
  <meta
    name="description"
    content="Affordable Panchgani to Mumbai cab service with AC and SUV taxis. Chauffeur-driven one-way and round trip options. Book online with Deva Cabs."
  />
  <meta
    name="keywords"
    content="Panchgani to Mumbai Cab, One-way cab Panchgani to Mumbai, Book taxi Panchgani to Mumbai, Round trip cab Panchgani to Mumbai, AC cab Panchgani to Mumbai, SUV cab Panchgani to Mumbai, Chauffeur-driven cab Panchgani to Mumbai, Affordable cab Panchgani to Mumbai"
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
                            <img src='/images/keyword/60.jpg' alt='img' />
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

export default Panchganitomumbaicabs;