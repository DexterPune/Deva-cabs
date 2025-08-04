
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitojalgaoncabs() {



    const cardData =
    {
        keyword: ' Mumbai to Jalgaon Cab  ',
        heading: 'Deva Cabs: Mumbai to Jalgaon Cab  ',
        headingDescription: 'Deva Cabs offers reliable and comfortable cab services from Mumbai to Jalgaon, ideal for long-distance travel, business visits, and family trips. Covering a distance of approximately 580 km, our well-maintained vehicles—Sedans, SUVs, and Innova Crysta—ensure a smooth and comfortable journey through scenic highway routes. Travel with confidence thanks to experienced chauffeurs, fixed fare packages, and convenient door-to-door pickup. With 24/7 availability and transparent pricing, Deva Cabs makes your Mumbai to Jalgaon cab journey safe, efficient, and stress-free.',

        top: 'Top Places to Visit in Jalgaon with Deva Cabs',

"topPlaces": [
  {
    "title": "Gandhi Teerth (Gandhi Research Foundation)",
    "location": "Jalgaon, Maharashtra",
    "description": "A museum and research centre dedicated to Mahatma Gandhi, featuring interactive exhibits, archives, an auditorium, and a library. Established in 2012, it attracts scholars and visitors interested in Gandhian philosophy." 
  },
  {
    "title": "Mehrun Lake & Park",
    "location": "Jalgaon, Maharashtra",
    "description": "A natural lake surrounded by well-maintained parks and gardens. Popular for evening strolls, bird‑watching, and religious fairs like Chhath Puja among migrant communities." 
  },
  {
    "title": "Swinging Towers of Farkande",
    "location": "Farkande, Jalgaon District, Maharashtra",
    "description": "Architectural oddity over 250 years old—two stone towers that, when one is shaken, the other vibrates too. A curious engineering marvel and must‑see heritage spot." 
  },
  {
    "title": "Padmalaya Temple",
    "location": "Erandol Taluka, Jalgaon District, Maharashtra",
    "description": "A unique Ganapati shrine featuring two self‑manifested idols—one with a right‑curving trunk, the other left. It’s part of the ’three and a half Ganapati Peeths’ revered in Maharashtra." 
  },
  {
    "title": "Omkareshwar Temple",
    "location": "Jalgaon, Maharashtra",
    "description": "A prominent Shiva temple in town, revered for its divine ambience and frequent festivals such as Shivratri and Shravan observances." 
  },
  {
    "title": "Patna Devi Temple",
    "location": "Chandikawadi, Jalgaon District, Maharashtra",
    "description": "An ancient shrine dedicated to Goddess Patana Devi, nestled in lush surroundings and known for its spiritual significance and serene atmosphere." 
  },
  {
    "title": "Hatnur Dam",
    "location": "Jalgaon, Maharashtra",
    "description": "A scenic dam on the Tapi River, offering lush green views, a picnic spot, and the sight of controlled water release—especially beautiful in monsoon." 
  },
  {
    "title": "Parola Fort",
    "location": "Parola, Jalgaon District, Maharashtra",
    "description": "A 16th‑century fort featuring the distinctive ‘Delhi Darwaza’ gate, set along the Bori River. A great site for history enthusiasts and sunset photography." 
  },
  {
    "title": "Maharshi Kanva Ashram & Cave",
    "location": "Kanalda Village, Jalgaon District, Maharashtra",
    "description": "An ancient ashram and adjoining cave once used by Maharshi Kanva. It’s a peaceful spiritual retreat into history and meditation in a forest setting." 
  },
  {
    "title": "Yawal Wildlife Sanctuary",
    "location": "Yawal, Jalgaon District, Maharashtra",
    "description": "A protected forest reserve covering 176 km², home to chinkara, sloth bears, leopard, and diverse flora. It also includes nearby attractions like Padmalaya and Unapdev." 
  }
],



  "services": [
    {
      "name": "Mumbai to Jalgaon Cab",
      "description": "Travel comfortably and conveniently from Mumbai to Jalgaon with our reliable cab service. Whether you’re heading for business, leisure, or family visits, we provide well-maintained vehicles to suit all needs. Enjoy door-to-door service with professional chauffeurs ensuring a safe and smooth journey. Our fleet includes sedans, SUVs, and luxury cars to match your preferences."
    },
    {
      "name": "One-way cab Mumbai to Jalgaon",
      "description": "Our one-way cab service from Mumbai to Jalgaon offers flexibility and convenience for travelers needing a direct trip. Choose your preferred vehicle type, from budget-friendly options to premium rides, all driven by experienced chauffeurs who prioritize safety and comfort."
    },
    {
      "name": "Round trip Jalgaon cab Mumbai",
      "description": "Plan your round trip with ease using our cab service from Mumbai to Jalgaon and back. Perfect for business trips or leisure travel, enjoy seamless scheduling, comfortable vehicles, and professional drivers who ensure a stress-free journey on both legs of your trip."
    },
    {
      "name": "AC cab hire Mumbai to Jalgaon",
      "description": "Stay cool and comfortable throughout your journey with our air-conditioned cab service from Mumbai to Jalgaon. Our AC vehicles are equipped with modern amenities to make your long-distance travel pleasant and refreshing, ideal for family trips and corporate travel alike."
    },
    {
      "name": "Book Mumbai to Jalgaon taxi online",
      "description": "Easily book your Mumbai to Jalgaon taxi online with instant confirmation and transparent pricing. Our user-friendly platform offers multiple vehicle options to fit your budget and requirements, ensuring a hassle-free booking experience with round-the-clock customer support."
    },
    {
      "name": "Affordable cab Mumbai to Jalgaon",
      "description": "Travel without stretching your budget with our affordable cab services from Mumbai to Jalgaon. We offer competitive rates while maintaining high standards of safety, cleanliness, and customer service. Ideal for budget-conscious travelers seeking dependable transportation."
    },
    {
      "name": "SUV cab Mumbai to Jalgaon",
      "description": "Choose our spacious and comfortable SUV cabs for your Mumbai to Jalgaon trip. Perfect for families or groups, our SUVs offer ample luggage space and smooth rides, combined with the luxury of air conditioning and professional chauffeurs for a relaxed journey."
    },
    {
      "name": "Chauffeur-driven Jalgaon cab Mumbai",
      "description": "Experience premium chauffeur-driven cab service from Mumbai to Jalgaon with our professional drivers who focus on your comfort and safety. Sit back and enjoy a stress-free ride with personalized service tailored to your travel needs."
    },
    {
      "name": "Corporate cab Mumbai to Jalgaon",
      "description": "Our corporate cab service from Mumbai to Jalgaon caters to business travelers requiring punctuality, professionalism, and comfort. Benefit from well-maintained vehicles, experienced chauffeurs, and flexible booking options designed to support your corporate travel demands."
    }
  ],
  "tableData": [
    ["Mumbai to Jalgaon Cab", "-One-way cab Mumbai to Jalgaon"],
    ["Round trip Jalgaon cab Mumbai", "-AC cab hire Mumbai to Jalgaon"],
    ["Book Mumbai to Jalgaon taxi online", "-Affordable cab Mumbai to Jalgaon"],
    ["SUV cab Mumbai to Jalgaon", "-Chauffeur-driven Jalgaon cab Mumbai"],
    ["Corporate cab Mumbai to Jalgaon"]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Mumbai to Jalgaon Cab Service",
    "WhyChoosedescription": "Travel comfortably and reliably from Mumbai to Jalgaon with our dedicated cab service. Whether for business trips, family visits, or leisure travel, we ensure timely pickups and smooth journeys over the approximately 330 km route. Experience professional service designed to make your trip stress-free and enjoyable."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles for Medium-Distance Travel",
    "WhyChoosedescription": "Our fleet consists of well-maintained, air-conditioned cars and SUVs providing ample legroom and luggage space. Whether traveling alone or with a group, our vehicles are equipped to offer a relaxing and convenient journey from Mumbai to Jalgaon, ensuring you arrive refreshed and comfortable."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Mumbai-Jalgaon Route",
    "WhyChoosedescription": "Our skilled drivers know the best routes and traffic patterns between Mumbai and Jalgaon. Prioritizing safety and punctuality, they ensure a smooth, hassle-free trip while navigating highways and local roads efficiently for your convenience."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We provide clear, upfront pricing inclusive of tolls, fuel, and driver allowances, with no hidden charges. Our competitive rates allow you to plan your travel budget confidently, making our Mumbai to Jalgaon cab service both affordable and trustworthy."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel Plans",
    "WhyChoosedescription": "Our cabs are available round the clock to match your preferred departure times. Whether you wish to travel early morning or late at night, we offer the flexibility needed to fit your schedule and ensure seamless travel."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Booking your Mumbai to Jalgaon cab is quick and simple via our website or customer support. Receive instant confirmation along with driver details and fare breakdown, helping you plan your trip with ease and confidence."
  },
  {
    "WhyChooseheading": "Safety and Well-Maintained Vehicles",
    "WhyChoosedescription": "Safety is our priority. All vehicles undergo regular maintenance and sanitation before each trip. Equipped with seat belts, GPS tracking, and emergency kits, our cabs ensure a secure and comfortable journey."
  },
  {
    "WhyChooseheading": "Customizable Travel Packages",
    "WhyChoosedescription": "We offer flexible travel options including one-way trips, round trips, and multi-day plans with stops at points of interest. Our services can be tailored to suit your specific travel needs for the Mumbai to Jalgaon route."
  }
]















    }








const faqData = [
  {
    question: "Can I book a cab from Mumbai to Jalgaon with Deva Cabs?",
    answer: "Yes, Deva Cabs provides reliable and comfortable cab services from Mumbai to Jalgaon for business, leisure, and long-distance travel."
  },
  {
    question: "How long does the journey from Mumbai to Jalgaon take by cab?",
    answer: "The trip generally takes around 9 to 11 hours depending on traffic and route conditions."
  },
  {
    question: "What types of vehicles are available for the Mumbai to Jalgaon route?",
    answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, Ertiga, and tempo travellers to suit solo travelers and groups."
  },
  {
    question: "Can I book a one-way or round-trip cab from Mumbai to Jalgaon?",
    answer: "Yes, both one-way and round-trip cab services are available based on your travel plans."
  },
  {
    question: "Are tolls, parking, and driver charges included in the fare?",
    answer: "Additional charges such as tolls, parking, and driver allowances are usually extra and will be communicated upfront during booking."
  },
  {
    question: "Is the Mumbai to Jalgaon cab service available 24/7?",
    answer: "Yes, Deva Cabs operates around the clock to accommodate your preferred travel time."
  },
  {
    question: "Is it safe to travel long distances with Deva Cabs?",
    answer: "Absolutely. Our drivers are experienced, background-verified, and trained for long-distance journeys."
  },
  {
    question: "Can I customize my trip with stops or sightseeing on the way to Jalgaon?",
    answer: "Yes, customized itineraries with stops can be arranged upon request."
  },
  {
    question: "Is this service suitable for families and groups?",
    answer: "Yes, we provide vehicles suitable for families and groups of all sizes."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Jalgaon cab service?",
    answer: "Deva Cabs offers clean vehicles, professional drivers, transparent pricing, and reliable service for a hassle-free journey."
  }
];

const testimonialData = [
  {
    id: 61,
    name: 'Mr. Suresh Patil',
    role: 'Business Traveler',
    review: 'Deva Cabs made my Mumbai to Jalgaon trip comfortable and stress-free. The driver was professional and courteous.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 62,
    name: 'Ms. Pooja Desai',
    role: 'Family Traveler',
    review: 'Our family enjoyed a smooth and comfortable ride from Mumbai to Jalgaon with Deva Cabs. Highly recommended!',
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
  "name": "Mumbai to Jalgaon Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-jalgaon-cab.jpg", // Replace with actual image URL
  "description": "Book Mumbai to Jalgaon cab online with Deva Cabs. Get one-way and round-trip taxi services with AC, SUV, corporate, and chauffeur-driven cab options. Comfortable and affordable travel to Jalgaon.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "587"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8900",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-jalgaon-cab" // Replace with actual page URL
  }
};


    return (
        <div>



<Helmet>
  <title>Mumbai to Jalgaon Cab | Book One-Way & Round Trip Taxi | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Jalgaon cab with Deva Cabs. One-way and round-trip taxi services available. Choose from AC, SUV, chauffeur-driven, and corporate cab options for a comfortable ride to Jalgaon." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Jalgaon Cab, One-way cab Mumbai to Jalgaon, Round trip Jalgaon cab Mumbai, AC cab hire Mumbai to Jalgaon, Book Mumbai to Jalgaon taxi online, Affordable cab Mumbai to Jalgaon, SUV cab Mumbai to Jalgaon, Chauffeur-driven Jalgaon cab Mumbai, Corporate cab Mumbai to Jalgaon" 
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
                            <img src='/images/keyword/39.jpg' alt='img' />
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

export default Mumbaitojalgaoncabs;