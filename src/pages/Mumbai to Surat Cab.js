
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitosuratcabs() {



    const cardData =
    {
        keyword: ' Mumbai to Surat Cab ',
        heading: 'Deva Cabs: Mumbai to Surat Cab ',
        headingDescription: 'Deva Cabs offers reliable and comfortable cab services from Mumbai to Surat, ideal for long-distance travel, business visits, and family trips. Covering a distance of approximately 280 km, our well-maintained vehicles—Sedans, SUVs, and Innova Crysta—ensure a smooth and enjoyable journey through the scenic route along the coast and highways. With experienced drivers, fixed-fare packages, and convenient door-to-door pickup, you can travel with ease and confidence. Backed by 24/7 availability and transparent pricing, Deva Cabs makes your Mumbai to Surat cab journey efficient, stress-free, and enjoyable.',

        top: 'Top Places to Visit in Surat with Deva Cabs',

"topPlaces": [
  {
    "title": "Surat Castle",
    "location": "Chowk Bazaar, Surat, Gujarat",
    "description": "A 16th‑century fortress built by Sultan Mahmood III to defend against Portuguese attacks. With robust stone walls and bastions overlooking the Tapi River, it’s a key historical monument in Surat." 
  },
  {
    "title": "Dumas Beach",
    "location": "Near Surat, Gujarat",
    "description": "A semi‑urban beach with black sand and an eerie reputation. Popular for sunset strolls and street food, the beach is said to be haunted and adds an intriguing vibe to your visit." 
  },
  {
    "title": "Ambika Niketan Temple",
    "location": "Surat, Gujarat",
    "description": "Built in 1969 on the banks of the Tapi River, this temple is dedicated to Goddess Ambika and is known for its white‑marble idol, serene ambiance, and Navratri celebrations." 
  },
  {
    "title": "Sarthana Nature Park & Zoo",
    "location": "Surat, Gujarat",
    "description": "Gujarat’s largest zoo and nature park, home to lions, tigers, leopards, exotic birds, and a successful smooth‑coated otter breeding program. Highly popular with families and wildlife lovers." 
  },
  {
    "title": "Jagdishchandra Bose Aquarium",
    "location": "Surat, Gujarat",
    "description": "India’s first multidisciplinary aquarium featuring over 100 aquatic species across themed tanks, including a shark exhibit, Amazon biotope, and interactive touch pools." 
  },
  {
    "title": "Sardar Patel Museum & Planetarium",
    "location": "Surat, Gujarat",
    "description": "Also known as Winchester Museum, it was founded in 1891 and features archaeological relics, an art gallery, science exhibits, a planetarium, and a 3D laser show." 
  },
  {
    "title": "Gopi Talav",
    "location": "Gopipura, Surat, Gujarat",
    "description": "Constructed around 1510 CE by Malik Gopi, this 16th‑century artificial lake has been renovated into a recreational amphitheater with fountains, food zones, and heritage walking paths." 
  },
  {
    "title": "Suvali Beach",
    "location": "Hazira, Surat, Gujarat",
    "description": "Also known as Swally Beach, located ~25 km from Surat. A clean sandy beach known as the gateway of the Indian Navy and the landing spot of the East India Company in 1612." 
  },
  {
    "title": "Science Centre",
    "location": "Surat, Gujarat",
    "description": "Interactive science museum with engaging exhibits and educational activities—ideal for children and curious minds." 
  },
  {
    "title": "Surat Diamond Bourse",
    "location": "DREAM City, Khajod, Surat, Gujarat",
    "description": "Dubbed the world’s largest office building and diamond trading hub (opened Dec 2023), it spans 7.1 million sq ft with 131 elevators and is a modern architectural marvel." 
  }
],



  "services": [
    {
      "name": "Mumbai to Surat Cab",
      "description": "Travel from Mumbai to Surat in comfort and convenience with our reliable cab services. Whether you're heading for a business meeting, a family visit, or a leisure trip, we offer well-maintained cars with professional drivers. Choose from a wide range of vehicles including sedans, SUVs, and premium models. All our cabs are equipped with AC, and we offer door-to-door pickup and flexible travel timings for one-way or round trips."
    },
    {
      "name": "One-way cab Mumbai to Surat",
      "description": "Looking for a hassle-free one-way ride to Surat from Mumbai? Our one-way cab service ensures timely pickup, smooth travel, and affordable pricing. Ideal for individuals, families, or professionals, our service includes AC vehicles, experienced drivers, and no hidden charges."
    },
    {
      "name": "Round trip Surat cab from Mumbai",
      "description": "Book a round trip cab from Mumbai to Surat for complete travel convenience. Our round trip packages are perfect for weekend getaways, family visits, or business tours. Enjoy flexible return schedules, professional chauffeurs, and competitive fares when you book in advance."
    },
    {
      "name": "Chauffeur-driven taxi Mumbai to Surat",
      "description": "Experience stress-free travel with our chauffeur-driven taxis from Mumbai to Surat. Our drivers are courteous, well-trained, and knowledgeable about the route, ensuring your safety and comfort throughout the journey. Choose this option for a relaxed and productive travel experience."
    },
    {
      "name": "AC cab hire Mumbai to Surat",
      "description": "Beat the heat on your Mumbai to Surat trip with our air-conditioned cab hire service. All vehicles are regularly serviced and offer a comfortable ride for long-distance travel. Ideal for solo passengers or groups, this service includes clean interiors and professional drivers."
    },
    {
      "name": "SUV cab Mumbai to Surat",
      "description": "Need more space for your luggage or traveling with a group? Hire an SUV cab from Mumbai to Surat for a spacious, powerful, and smooth ride. Our SUVs are perfect for family trips, group outings, or corporate travel and come with top-tier comfort and safety features."
    },
    {
      "name": "Online Mumbai to Surat taxi booking",
      "description": "Book your Mumbai to Surat cab online in just a few clicks. Our intuitive booking platform provides instant confirmation, clear pricing, and multiple vehicle options. Save time and enjoy a transparent, seamless experience every time you book with us."
    },
    {
      "name": "Corporate cab Mumbai to Surat",
      "description": "For professionals traveling between Mumbai and Surat, our corporate cab service offers punctuality, privacy, and executive-level comfort. Book sedans, SUVs, or premium vehicles equipped for business needs, complete with trained drivers and on-time service."
    },
    {
      "name": "Affordable Surat cab from Mumbai",
      "description": "Get the best value for your journey with our affordable cab service from Mumbai to Surat. We offer clean vehicles, transparent fares, and reliable drivers—making it ideal for budget-conscious travelers who don’t want to compromise on quality or comfort."
    }
  ],
  "tableData": [
    ["Mumbai to Surat Cab", "-One-way cab Mumbai to Surat"],
    ["Round trip Surat cab from Mumbai", "-Chauffeur-driven taxi Mumbai to Surat"],
    ["AC cab hire Mumbai to Surat", "-SUV cab Mumbai to Surat"],
    ["Online Mumbai to Surat taxi booking", "-Corporate cab Mumbai to Surat"],
    ["Affordable Surat cab from Mumbai", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Mumbai to Surat Cab Service",
    "WhyChoosedescription": "Enjoy a smooth and dependable journey from Mumbai to Surat with our dedicated cab service. Whether you’re traveling for business, family visits, or leisure, we guarantee timely pickups and a comfortable ride across the approximately 280 km distance. Our professional drivers and well-maintained vehicles ensure your trip is hassle-free and enjoyable."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles for Medium-Distance Travel",
    "WhyChoosedescription": "Our fleet features air-conditioned cars and SUVs that offer ample legroom and luggage space, making your journey to Surat comfortable and relaxing. Whether you’re traveling solo, with family, or in a group, our vehicles provide the perfect environment for a pleasant trip."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Mumbai-Surat Route",
    "WhyChoosedescription": "Our drivers are highly experienced and knowledgeable about the best routes and traffic conditions between Mumbai and Surat. They prioritize safety, punctuality, and passenger comfort, ensuring a smooth and timely journey."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer upfront pricing that includes tolls, fuel, and driver allowances with no hidden charges. Our competitive rates allow you to plan your travel budget confidently, making our Mumbai to Surat cab service affordable and reliable."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel Plans",
    "WhyChoosedescription": "Our cabs are available round the clock to accommodate your preferred travel times. Whether you prefer early morning or late-night departures, we offer the flexibility to fit your schedule and ensure seamless travel."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Booking your Mumbai to Surat cab is quick and convenient through our website or customer support. Receive instant confirmation along with detailed fare and driver information, allowing you to plan your trip with ease."
  },
  {
    "WhyChooseheading": "Safety and Well-Maintained Vehicles",
    "WhyChoosedescription": "All our vehicles undergo regular maintenance and sanitization before every trip. Equipped with seat belts, GPS tracking, and emergency kits, we prioritize your safety and comfort throughout the journey."
  },
  {
    "WhyChooseheading": "Customizable Travel Packages",
    "WhyChoosedescription": "We offer flexible travel options including one-way, round trip, and multi-day plans with stops along the route. Our services can be tailored to meet your specific travel needs for the Mumbai to Surat route."
  }
]








    }




const faqData = [
  {
    question: "Can I book a cab from Mumbai to Surat with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and comfortable cab services from Mumbai to Surat for both business and personal travel needs."
  },
  {
    question: "How long does it take to travel from Mumbai to Surat by cab?",
    answer: "The journey usually takes around 4 to 5 hours depending on traffic and the route taken."
  },
  {
    question: "What types of vehicles are available for Mumbai to Surat travel?",
    answer: "We offer a range of vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers based on your group size and preference."
  },
  {
    question: "Can I book a one-way cab from Mumbai to Surat?",
    answer: "Yes, Deva Cabs provides both one-way and round-trip cab services for this route."
  },
  {
    question: "Are tolls and parking charges included in the fare?",
    answer: "Tolls, parking, and driver allowances are usually extra and will be communicated transparently at the time of booking."
  },
  {
    question: "Is the cab service available 24/7 from Mumbai to Surat?",
    answer: "Yes, Deva Cabs operates round-the-clock, so you can book a cab to Surat any time of day or night."
  },
  {
    question: "Is it safe to travel from Mumbai to Surat with Deva Cabs?",
    answer: "Yes, your safety is our priority. All our drivers are trained, experienced, and background-verified for long-distance travel."
  },
  {
    question: "Can I make stops during the Mumbai to Surat journey?",
    answer: "Yes, planned halts and custom stops can be arranged on request."
  },
  {
    question: "Is this service suitable for business travel and airport transfers?",
    answer: "Yes, we provide punctual and professional service suitable for business travel and airport pickups/drops."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Surat cab service?",
    answer: "Deva Cabs offers clean vehicles, professional drivers, 24/7 support, and transparent pricing for a smooth travel experience."
  }
];

const testimonialData = [
  {
    id: 67,
    name: 'Mr. Dinesh Patel',
    role: 'Business Traveler',
    review: 'Deva Cabs made my Mumbai to Surat travel seamless. On-time pickup and very professional driver.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 68,
    name: 'Ms. Rupal Shah',
    role: 'Frequent Commuter',
    review: 'I frequently travel between Mumbai and Surat and always choose Deva Cabs for their reliable and clean service.',
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
  "name": "Mumbai to Surat Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-surat-cab.jpg", // Replace with actual image URL
  "description": "Book Mumbai to Surat cab online with Deva Cabs. One-way and round-trip taxi service available with AC, SUV, corporate, and chauffeur-driven cab options. Enjoy a safe and affordable ride to Surat.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "512"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5600",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-surat-cab" // Replace with actual page URL
  }
};




    return (
        <div>
<Helmet>
  <title>Mumbai to Surat Cab | One-Way & Round Trip Taxi | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book your Mumbai to Surat cab with Deva Cabs. One-way and round-trip taxi available with options like AC, SUV, corporate, and chauffeur-driven rides. Affordable, safe & reliable." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Surat Cab, One-way cab Mumbai to Surat, Round trip Surat cab from Mumbai, Chauffeur-driven taxi Mumbai to Surat, AC cab hire Mumbai to Surat, SUV cab Mumbai to Surat, Online Mumbai to Surat taxi booking, Corporate cab Mumbai to Surat, Affordable Surat cab from Mumbai" 
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
                            <img src='./images/keyword/43.jpg' alt='img' />
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

export default Mumbaitosuratcabs;