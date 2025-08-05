
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitodamantaxi() {



    const cardData =
    {
        keyword: ' Mumbai to Daman Taxi',
        heading: 'Deva Cabs:  Mumbai to Daman Taxi',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free taxi services from Mumbai to Daman. Whether you are planning a beach getaway, a relaxing weekend, or a business trip, our trained drivers and clean, well-maintained vehicles ensure a smooth and enjoyable ride. Daman, with its serene beaches, Portuguese heritage, and duty-free shopping, is a popular coastal destination. With affordable fares, timely pickups, and a variety of vehicle options, Deva Cabs guarantees a convenient and pleasant journey from Mumbai to Daman every time.',

        top: 'Top Places to Visit in Daman with Deva Cabs',

"topPlaces": [
  {
    "title": "Jampore Beach",
    "location": "Daman, Dadra & Nagar Haveli and Daman & Diu",
    "description": "A popular stretch of golden sand known for clear waters and water-sport options like jet‑skiing and parasailing. Ideal for families and adventure seekers, with local food stalls and camel rides on weekends." 
  },
  {
    "title": "Devka Beach",
    "location": "Nani-Daman, Daman",
    "description": "A calm, rocky beach with black sand and shallow shores—great for scenic walks, sunset views, camel/horse rides, and seafood stalls. Note: swimming is not recommended due to rocky terrain." 
  },
  {
    "title": "Moti Daman Fort (Fort of Daman)",
    "location": "Moti-Daman, Daman",
    "description": "A 16th-century Portuguese fort featuring intact walls, cannons, a lighthouse, the Basilica of Bom Jesus, and the ruins of the Dominican Monastery. Offers panoramic seaside views and colonial architecture." 
  },
  {
    "title": "Nani Daman Fort (St. Jerome Fort)",
    "location": "Nani-Daman, Daman",
    "description": "A smaller coastal fortress built in the early 17th century, housing St. Jerome’s statue, a co-cathedral of Our Lady of the Sea, a Jain temple, and a lighthouse with sunset vistas." 
  },
  {
    "title": "Church of Bom Jesus",
    "location": "Moti-Daman, Daman",
    "description": "A historic 1603 Portuguese-style cathedral within Moti Daman Fort, known for its Gothic architecture, elaborate altarpiece, and religious importance in the local Catholic community." 
  },
  {
    "title": "Dominican Monastery",
    "location": "Moti-Daman, Daman",
    "description": "Now mostly in ruins, this former theological center once thrived inside Moti Daman Fort. Its arches and crumbling walls evoke a haunting colonial past." 
  },
  {
    "title": "Jetty Garden (Satya Sagar Udyan)",
    "location": "Nani-Daman, Daman",
    "description": "A landscaped promenade along the riverfront with benches, walking paths, and food kiosks—perfect for evening strolls and local cultural vibes." 
  },
  {
    "title": "Mirasol Lake Garden & Water Park",
    "location": "Near Nani‑Daman, Daman",
    "description": "A family-friendly escape with a lakeside garden, butterfly park, water slides, mini railway, and playground—especially popular with kids and day‑trippers." 
  },
  {
    "title": "Lighthouse, Daman",
    "location": "Nani-Daman, Daman",
    "description": "Situated near Nani Daman Fort, this historic Portuguese lighthouse provides sweeping sunset views over the Arabian Sea and the city below." 
  },
  {
    "title": "Somnath Mahadev Temple",
    "location": "Daman, Dadra & Nagar Haveli and Daman & Diu",
    "description": "An ancient Hindu shrine dedicated to Lord Shiva, famous for the annual Masi fair. It’s a serene retreat for devotees and those seeking spiritual calm." 
  }
],



"services": [
    {
        "name": "Mumbai to Daman Taxi",
        "description": "Reliable and convenient taxi service from Mumbai to Daman, perfect for business and leisure travel."
    },
    {
        "name": "Book Cab from Mumbai to Daman",
        "description": "Easy online cab booking from Mumbai to Daman with instant confirmation and a variety of vehicle options."
    },
    {
        "name": "One Way Taxi Mumbai to Daman",
        "description": "Flexible one-way taxi service from Mumbai to Daman, ideal for quick and comfortable travel."
    },
    {
        "name": "Round Trip Daman Cab from Mumbai",
        "description": "Round trip cab services between Mumbai and Daman with competitive pricing and reliable drivers."
    },
    {
        "name": "Outstation Taxi to Daman",
        "description": "Safe and affordable outstation taxi service from Mumbai to Daman, ensuring a smooth journey."
    },
    {
        "name": "Mumbai to Daman AC Cab",
        "description": "Travel comfortably with air-conditioned cabs from Mumbai to Daman for a pleasant ride."
    },
    {
        "name": "Affordable Daman Cab Mumbai",
        "description": "Budget-friendly cab options from Mumbai to Daman without compromising on quality and safety."
    },
    {
        "name": "Luxury Cab Hire to Daman",
        "description": "Premium luxury cab hire service from Mumbai to Daman for special occasions and corporate travel."
    },
    {
        "name": "SUV Taxi to Daman from Mumbai",
        "description": "Spacious and comfortable SUV taxis for Mumbai to Daman trips, perfect for families and groups."
    },
    {
        "name": "Online Cab Booking Mumbai to Daman",
        "description": "Seamless online cab booking platform for Mumbai to Daman with multiple vehicle choices."
    },
    {
        "name": "Chauffeur-driven Daman Taxi Mumbai",
        "description": "Professional chauffeur-driven taxi service from Mumbai to Daman ensuring safety and comfort."
    },
    {
        "name": "Mumbai to Daman Sightseeing Cab",
        "description": "Explore Daman’s top attractions with our specialized sightseeing cab service from Mumbai."
    },
    {
        "name": "Family Cab to Daman",
        "description": "Comfortable and spacious family cabs from Mumbai to Daman designed for safe group travel."
    },
    {
        "name": "Premium Cab Mumbai to Daman",
        "description": "High-end premium cab services from Mumbai to Daman with luxury vehicles and exceptional service."
    },
    {
        "name": "Weekend Trip Cab to Daman",
        "description": "Perfect weekend trip cab packages from Mumbai to Daman offering flexible timings and affordable rates."
    }
],

"tableData": [
    ["Mumbai to Daman Taxi", "-Book Cab from Mumbai to Daman"],
    ["One Way Taxi Mumbai to Daman", "-Round Trip Daman Cab from Mumbai"],
    ["Outstation Taxi to Daman", "-Mumbai to Daman AC Cab"],
    ["Affordable Daman Cab Mumbai", "-Luxury Cab Hire to Daman"],
    ["SUV Taxi to Daman from Mumbai", "-Online Cab Booking Mumbai to Daman"],
    ["Chauffeur-driven Daman Taxi Mumbai", "-Mumbai to Daman Sightseeing Cab"],
    ["Family Cab to Daman", "-Premium Cab Mumbai to Daman"],
    ["Weekend Trip Cab to Daman"]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable and On-Time Pickup from Mumbai",
    "WhyChoosedescription": "Planning a getaway to Daman? Deva Cabs ensures punctual pickups from anywhere in Mumbai, so you can start your journey on time without any last-minute rush or delays."
  },
  {
    "WhyChooseheading": "Comfortable and Clean Taxis for Intercity Travel",
    "WhyChoosedescription": "Our taxis are ideal for a scenic drive to Daman. Equipped with air-conditioning, spacious seating, and clean interiors, we make your Mumbai to Daman ride pleasant and relaxing."
  },
  {
    "WhyChooseheading": "Experienced Drivers for Safe and Smooth Travel",
    "WhyChoosedescription": "Our drivers are familiar with the Mumbai to Daman route and drive safely through highways and local roads. Sit back and enjoy your trip without worrying about directions or traffic."
  },
  {
    "WhyChooseheading": "Fair and Transparent Fare Structure",
    "WhyChoosedescription": "With Deva Cabs, you get upfront pricing—no hidden costs or last-minute surprises. Get a clear fare estimate for your Mumbai to Daman taxi ride before you confirm your booking."
  },
  {
    "WhyChooseheading": "24/7 Taxi Availability from Mumbai to Daman",
    "WhyChoosedescription": "Travel plans can happen anytime—day or night. That’s why Deva Cabs operates 24/7, making it easy to book a ride to Daman at your convenience."
  },
  {
    "WhyChooseheading": "Safety and Cleanliness Always a Priority",
    "WhyChoosedescription": "Our vehicles are sanitized regularly and equipped with GPS tracking. With trained and professional drivers, you can be assured of a secure journey from Mumbai to Daman."
  },
  {
    "WhyChooseheading": "Quick and Easy Booking Experience",
    "WhyChoosedescription": "Book your Mumbai to Daman taxi in just a few clicks through our app or website. Get instant booking confirmation and real-time driver updates for a smooth experience."
  },
  {
    "WhyChooseheading": "Flexible Travel Options for Every Need",
    "WhyChoosedescription": "Whether it’s a one-way trip, same-day return, or a weekend stay, Deva Cabs offers customizable travel plans for your Mumbai to Daman journey—at rates that suit your budget."
  }
]








    }




const faqData = [
  {
    question: "Can I book a taxi from Mumbai to Daman with Deva Cabs?",
    answer: "Yes, Deva Cabs offers convenient and comfortable taxi services from Mumbai to Daman. You can easily book a taxi via our website, mobile app, or by contacting our customer support."
  },
  {
    question: "What are the vehicle options for the Mumbai to Daman trip?",
    answer: "We offer a variety of vehicle options including hatchbacks, sedans, SUVs, and premium cars for a comfortable ride from Mumbai to Daman."
  },
  {
    question: "How long does the journey from Mumbai to Daman take?",
    answer: "The journey from Mumbai to Daman typically takes around 3 to 4 hours, depending on traffic and road conditions."
  },
  {
    question: "Can I book a one-way taxi from Mumbai to Daman?",
    answer: "Yes, you can easily book a one-way taxi from Mumbai to Daman. We provide one-way trips without any extra charges."
  },
  {
    question: "What payment options are available for the Mumbai to Daman taxi ride?",
    answer: "We accept various payment methods including cash, credit/debit cards, UPI, and online payments via our mobile app or website."
  },
  {
    question: "Can I pre-schedule my taxi ride from Mumbai to Daman?",
    answer: "Yes, you can pre-schedule your ride through our booking portal or mobile app. Just select your preferred date and time for guaranteed pick-up."
  },
  {
    question: "Are the drivers experienced for the Mumbai to Daman taxi ride?",
    answer: "Yes, all our drivers are experienced, verified, and familiar with the Mumbai to Daman route, ensuring a safe and smooth journey."
  },
  {
    question: "Is it safe to travel from Mumbai to Daman with Deva Cabs?",
    answer: "Absolutely! Our taxis are GPS-enabled, and all drivers undergo a verification process. We prioritize your safety and comfort on every trip."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Ramesh Kumar',
    role: 'Frequent Traveler',
    review: 'I travel from Mumbai to Daman frequently for both work and leisure. Deva Cabs provides a smooth and safe ride every time. The drivers are friendly, and the cars are always clean.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Priya Verma',
    role: 'Tourist',
    review: 'I had a fantastic trip from Mumbai to Daman with Deva Cabs. The ride was comfortable, and the driver made sure I was well taken care of throughout the journey. Highly recommend!',
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
  "name": "Mumbai to Daman Taxi",
  "image": "https://devacab.com/assets/images/mumbai-to-daman-taxi.jpg", // Replace with actual image URL
  "description": "Book reliable and affordable Mumbai to Daman taxi service with Deva Cabs. One-way and round trip outstation cabs with AC, SUV, economy, and luxury options. Ideal for sightseeing, family travel, and weekend getaways.",
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
    "price": "3200", // Example price, adjust as needed
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-daman-taxi" // Replace with actual page URL
  }
};






    return (
        <div>


<Helmet>
  <title>Mumbai to Daman Taxi | Book One-Way & Round Trip Cabs | Deva Cabs</title>
  <meta
    name="description"
    content="Book Mumbai to Daman taxi with Deva Cabs. Affordable outstation cab service for one-way and round trips. AC, SUV, luxury, and family-friendly options available for sightseeing and weekend travel."
  />
  <meta
    name="keywords"
    content="Mumbai to Daman Taxi, Book cab from Mumbai to Daman, One way taxi Mumbai to Daman, Round trip Daman cab from Mumbai, Outstation taxi to Daman, Mumbai to Daman AC cab, Affordable Daman cab Mumbai, Luxury cab hire to Daman, SUV taxi to Daman from Mumbai, Online cab booking Mumbai to Daman, Chauffeur-driven Daman taxi Mumbai, Mumbai to Daman sightseeing cab, Family cab to Daman, Premium cab Mumbai to Daman, Weekend trip cab to Daman"
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
                            <img src='./images/keyword/67.jpg' alt='img' />
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

export default Mumbaitodamantaxi;