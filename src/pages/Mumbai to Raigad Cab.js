
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitoraigadcab() {



    const cardData =
    {
        keyword: ' Mumbai to Raigad Cab ',
        heading: 'Deva Cabs: Mumbai to Raigad Cab ',
        headingDescription: 'Deva Cabs offers reliable and comfortable cab services from Mumbai to Raigad, ideal for historical tours, fort visits, and weekend escapes. Located approximately 125 km from Mumbai, the iconic Raigad Fort and nearby attractions await, and our well-maintained vehicles—Sedans, SUVs, and Innova Crysta—ensure a smooth and scenic ride through the Western Ghats. Whether you are planning a day excursion or an overnight trip, enjoy the convenience of experienced drivers, fixed‑fare packages, and flexible door‑to‑door pickups. With 24/7 availability, transparent pricing, and attentive customer support, Deva Cabs makes your Mumbai to Raigad cab journey easy, safe, and memorable.',

        top: 'Top Places to Visit in Raigad with Deva Cabs',

"topPlaces": [
  {
    "title": "Raigad Fort",
    "location": "Raigad District, Maharashtra",
    "description": "Once the capital of Shivaji Maharaj’s Maratha Empire (crowned here in 1674), this hill‑fort stands at 820 m within the Sahyadri. Its imposing basalt ramparts, royally designed gates (Maha Darwaja, Nagarkhana), royal durbar hall, queen’s quarters, Hirakani Buruj cliff bastion, and panoramic views are now accessible via a 1,737‑step trek or the modern ropeway. A recently unveiled ASI museum and rediscovered astrolabe (dated 1597) deepen its historical resonance."
  },
  {
    "title": "Raigad Ropeway & Museum",
    "location": "Pachad Village, Raigad District, Maharashtra",
    "description": "India’s only non-commercial ropeway brings you 420 m uphill to the fort in under 4 minutes. The midway museum, curated by Babasaheb Purandare and Ninad Bedekar, immerses visitors in Maratha strategy and Shivaji’s coronation story, making the ascent both comfortable and enlightening."
  },
  {
    "title": "Kondhane Buddhist Caves",
    "location": "Near Raigad Fort, Maharashtra",
    "description": "These lesser-known rock‑cut caves date back to the 1st‑2nd century CE, offering a calm contrast to fort exploration. Carved into the Sahyadri cliff, the caves feature prayer halls and meditation cells with stunning valley views—a hidden historical gem."
  },
  {
    "title": "Diveagar Beach",
    "location": "Diveagar Village, Raigad District, Maharashtra",
    "description": "A serene, sandy beach framed by swaying palms and the Shastri river estuary. Ideal for evening relaxation after trekking, family picnics, and spotting gulls at the nearby estuarine sanctuary—an easy add‑on to a Raigad visit."
  },
  {
    "title": "Jagadishwar Temple",
    "location": "Raigad District, Maharashtra",
    "description": "An ancient Shiva temple believed to have been visited daily by Shivaji. Located near the royal palace site, it blends spiritual charisma and Mughal-inflected domed architecture, reflecting the medieval cultural fabric."
  },
  {
    "title": "Raj Bhavan (Old Governor’s Residence)",
    "location": "Raigad District, Maharashtra",
    "description": "A colonial-era building built for Maratha royalty that now serves as the state’s governor’s retreat. Its heritage architecture and hillside position offer great photo opportunities and a link between eras."
  },
  {
    "title": "Madhe Ghat Waterfall",
    "location": "Near Raigad, Maharashtra",
    "description": "A seasonal monsoon cascade nestled in dense forest at ~850 m elevation. The trek path offers a thrilling historical route, with views of Raigad Fort, Lingana, and lush valleys—ideal for trekkers combining heritage and nature."
  },
  {
    "title": "Korlai Fort & Village",
    "location": "Korlai, Raigad District, Maharashtra",
    "description": "A Portuguese-built coastal fort featuring a ruined church and lighthouse overlooking the sea. The nearby village—home to a unique Portuguese Creole-speaking community—adds cultural depth to the visit."
  },
  {
    "title": "Padmadurg (Kasa Fort)",
    "location": "Off the coast of Raigad, Maharashtra",
    "description": "One of Shivaji’s five sea forts, built in 1676 to challenge Janjira’s maritime power. Though accessible only by special ASI‑sanctioned boat trips, its six bastions, dry water tanks, and cannon remains recall early Maratha naval strength."
  },
  {
    "title": "Sudhagad Fort",
    "location": "Raigad District, Maharashtra",
    "description": "Known as ‘Good Fort’, this forested hill-fort lies ~50 km away and offers a tranquil trekking experience. With Thaanale caves, temple ruins, and commanding views of nearby forts, it’s a peaceful off‑beat heritage escape."
  }
],



  "services": [
    {
      "name": "Mumbai to Raigad Cab",
      "description": "Visit the historic Raigad Fort with Deva Cabs’ reliable Mumbai to Raigad cab service. Ideal for history enthusiasts, families, and weekend travelers, this route offers a scenic drive into Maharashtra’s rich Maratha legacy. Our clean, AC-equipped vehicles and trained drivers ensure a safe, smooth, and comfortable journey. Whether you’re visiting the fort or surrounding areas, travel stress-free with our premium outstation service."
    },
    {
      "name": "One-way cab Mumbai to Raigad",
      "description": "Deva Cabs offers affordable and dependable one-way cabs from Mumbai to Raigad, perfect for tourists planning to stay longer or continue their journey elsewhere. With flexible pickup times, door-to-door service, and no hidden fees, our one-way cab option provides great convenience for solo travelers, couples, or families visiting the historic fort."
    },
    {
      "name": "Historical tour cab Mumbai to Raigad",
      "description": "Step into history with Deva Cabs’ dedicated historical tour cab service from Mumbai to Raigad. Our knowledgeable drivers and comfortable vehicles make your heritage trip enjoyable and insightful. Ideal for educational tours, heritage walks, or weekend retreats to Raigad Fort and its surroundings."
    },
    {
      "name": "Chauffeur-driven cab to Raigad from Mumbai",
      "description": "Travel in ease with our chauffeur-driven cab service to Raigad. Our experienced drivers are familiar with the terrain and ensure a smooth, punctual, and relaxed journey. Whether it’s a family outing or a photography trip, enjoy the scenic drive through the Sahyadris with a professional behind the wheel."
    },
    {
      "name": "Round trip Raigad taxi Mumbai",
      "description": "Planning a same-day or weekend visit to Raigad Fort? Book a round trip cab from Mumbai to Raigad with Deva Cabs and enjoy the convenience of waiting time and flexible return schedules. Great for families and groups seeking a complete travel solution without any hassle."
    },
    {
      "name": "Book Mumbai to Raigad cab online",
      "description": "Book your Mumbai to Raigad taxi online in just a few clicks. Our easy-to-use booking platform ensures instant confirmation, transparent pricing, and multiple vehicle options—from sedans to SUVs. Perfect for planning historical day trips or short breaks."
    },
    {
      "name": "SUV cab Mumbai to Raigad Fort",
      "description": "For added comfort and space, opt for our SUV cab service to Raigad Fort from Mumbai. Ideal for families, groups, or those carrying extra luggage, our SUVs offer smooth suspension and extra legroom—perfect for the slightly hilly terrain leading up to the fort."
    },
    {
      "name": "Family cab Mumbai to Raigad",
      "description": "Deva Cabs offers safe, spacious, and comfortable family cabs from Mumbai to Raigad. Our vehicles are regularly sanitized, fully AC, and come with ample room for passengers and luggage—ideal for weekend escapes and educational trips with children."
    },
    {
      "name": "Affordable cab hire Mumbai to Raigad",
      "description": "Looking for a cost-effective way to visit Raigad? Deva Cabs provides affordable cab options from Mumbai to Raigad without compromising on service. Enjoy competitive rates, trained drivers, and well-maintained vehicles for a budget-friendly historical trip."
    }
  ],
  "tableData": [
    ["Mumbai to Raigad Cab", "-One-way cab Mumbai to Raigad"],
    ["Historical tour cab Mumbai to Raigad", "-Chauffeur-driven cab to Raigad from Mumbai"],
    ["Round trip Raigad taxi Mumbai", "-Book Mumbai to Raigad cab online"],
    ["SUV cab Mumbai to Raigad Fort", "-Family cab Mumbai to Raigad"],
    ["Affordable cab hire Mumbai to Raigad", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Comfortable Mumbai to Raigad Cab Service",
    "WhyChoosedescription": "Travel from Mumbai to the historic town of Raigad with our reliable cab service. Whether you're visiting the iconic Raigad Fort, exploring the surrounding Konkan belt, or enjoying a weekend getaway, we offer smooth and stress-free transportation over the 170+ km scenic route."
  },
  {
    "WhyChooseheading": "Spacious and Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from air-conditioned sedans, SUVs, and tempo travellers—ideal for solo travelers, families, or groups. Our vehicles are maintained to high standards, offering comfortable seating, large luggage space, and a pleasant interior for your long journey through winding roads and hilly terrain."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Local Route Knowledge",
    "WhyChoosedescription": "Our drivers are trained and highly experienced on the Mumbai–Raigad route. They navigate the mountain passes and ghat sections with ease, ensuring a safe and comfortable ride while providing insights into key historical points and optional sightseeing en route."
  },
  {
    "WhyChooseheading": "Flexible Packages for One-Way, Round Trip, and Sightseeing",
    "WhyChoosedescription": "Whether you need a simple drop to Raigad, a round trip, or a full-day excursion with stops like Raigad Fort Ropeway, Mahad, or Mangaon, we provide fully customizable travel options tailored to your schedule and interests."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our fares are all-inclusive—covering tolls, parking, fuel, and driver allowance. You’ll know exactly what you’re paying for upfront, making it easier to plan your trip without worrying about last-minute costs or surprises."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability for Hassle-Free Travel Planning",
    "WhyChoosedescription": "Need to leave early in the morning or return late at night? No problem. Our cab services are available 24/7, offering complete flexibility to match your itinerary and ensure convenience at any hour."
  },
  {
    "WhyChooseheading": "Easy Online Booking and Instant Confirmation",
    "WhyChoosedescription": "Book your Mumbai to Raigad cab through our website or with assistance from our customer support team. Get instant confirmation, clear fare details, and driver contact information so you can travel with complete peace of mind."
  },
  {
    "WhyChooseheading": "Safe, Sanitized, and GPS-Enabled Vehicles",
    "WhyChoosedescription": "Your safety is our top priority. All vehicles are sanitized before each trip and equipped with GPS tracking, first-aid kits, and seat belts. You can enjoy your Raigad journey knowing you're in secure, clean, and professionally managed transport."
  }
]













    }




const faqData = [
  {
    question: "Can I book a cab from Mumbai to Raigad with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable cab services from Mumbai to Raigad for historical tours, treks, and leisure travel."
  },
  {
    question: "How long does the trip from Mumbai to Raigad take by cab?",
    answer: "The journey typically takes around 4 to 6 hours, depending on traffic and the specific location in Raigad district."
  },
  {
    question: "What cab options are available for the Mumbai to Raigad trip?",
    answer: "You can choose from sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers based on your group size and preference."
  },
  {
    question: "Can I book a one-way or round-trip cab to Raigad from Mumbai?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip options for Mumbai to Raigad travel."
  },
  {
    question: "Are toll charges and driver allowance included in the fare?",
    answer: "Toll, parking, and driver charges are usually additional and will be communicated transparently at the time of booking."
  },
  {
    question: "Is this service available 24/7?",
    answer: "Yes, you can book a cab to Raigad from Mumbai any time, as our services are available round-the-clock."
  },
  {
    question: "Is the trip safe for senior citizens and children?",
    answer: "Absolutely. Our vehicles are clean, comfortable, and our drivers are trained to ensure safety and care for all passengers."
  },
  {
    question: "Can I plan sightseeing or a stop at Raigad Fort?",
    answer: "Yes, you can customize your itinerary to include Raigad Fort and other local attractions. Just let us know during booking."
  },
  {
    question: "Is Deva Cabs suitable for trekking groups heading to Raigad?",
    answer: "Yes, we frequently serve trekking and hiking groups with large vehicles and flexible timing options."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Raigad cab service?",
    answer: "Deva Cabs provides professional drivers, well-maintained vehicles, transparent pricing, and flexible travel plans for a hassle-free trip."
  }
];

const testimonialData = [
  {
    id: 81,
    name: 'Mr. Aniket More',
    role: 'Trekker',
    review: 'Booked Deva Cabs for a trek to Raigad Fort. The cab was on time, clean, and the driver was very friendly and helpful.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 82,
    name: 'Mrs. Sushma Khedekar',
    role: 'Family Traveler',
    review: 'Our family trip to Raigad was smooth with Deva Cabs. Safe driving and great service throughout.',
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
  "name": "Mumbai to Raigad Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-raigad-cab.jpg", // Update with actual image URL
  "description": "Book affordable Mumbai to Raigad cab online. Chauffeur-driven SUVs for historical tours and family trips. One-way and round trip cab service available.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-raigad-cab" // Update with actual URL
  }
};




    return (
        <div>
<Helmet>
  <title>Mumbai to Raigad Cab | Book Raigad Taxi Online | Deva Cabs</title>
  <meta
    name="description"
    content="Affordable Mumbai to Raigad cab service with chauffeur-driven SUVs for historical tours and family trips. Book one-way or round trip Raigad taxi online."
  />
  <meta
    name="keywords"
    content="Mumbai to Raigad Cab, One-way cab Mumbai to Raigad, Historical tour cab Mumbai to Raigad, Chauffeur-driven cab to Raigad from Mumbai, Round trip Raigad taxi Mumbai, Book Mumbai to Raigad cab online, SUV cab Mumbai to Raigad Fort, Family cab Mumbai to Raigad, Affordable cab hire Mumbai to Raigad"
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
                            <img src='./images/keyword/50.jpg' alt='img' />
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

export default Mumbaitoraigadcab;