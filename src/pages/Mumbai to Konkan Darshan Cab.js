
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitokonkandarshancab() {



    const cardData =
    {
        keyword: ' Mumbai to Konkan Darshan Cab  ',
        heading: 'Deva Cabs: Mumbai to Konkan Darshan Cab  ',
        headingDescription: 'Deva Cabs offers immersive and hassle-free Konkan Darshan cab services from Mumbai, ideal for leisure travelers, families, and nature enthusiasts. Immerse yourself in the scenic beauty of the Konkan coastline—covering picturesque locations like Alibaug, Murud, Harihareshwar, Diveagar, Shrivardhan, and Harihareshwar—while traveling in comfort and style. Choose from our well-maintained fleet, including Sedans, SUVs, and Innova Crysta, each driven by knowledgeable chauffeurs familiar with the region’s routes and hidden gems. With fixed fare packages, customized itineraries, door-to-door pickups, and 24/7 support, Deva Cabs ensures your Mumbai to Konkan Darshan journey is unforgettable, relaxing, and tailored to your preferences.',

        top: 'Top Places to Visit in Konkan with Deva Cabs',

"topPlaces": [
  {
    "title": "Ganpatipule",
    "location": "Ratnagiri District, Konkan, Maharashtra",
    "description": "A coastal pilgrimage town with a centuries-old self-manifested Ganpati temple perched on a hill overlooking serene beaches. Ganpatipule’s golden sands, clear blue waters, and nearby Aare Ware Beach create a tranquil and spiritual escape."
  },
  {
    "title": "Sindhudurg Fort",
    "location": "Malvan, Sindhudurg District, Konkan, Maharashtra",
    "description": "An imposing island fortress built by Chhatrapati Shivaji between 1664–67, featuring thick stone walls, sea-facing bastions, and submerged naval defenses. A protected heritage and the highlight of Sindhudurg’s maritime legacy."
  },
  {
    "title": "Alibaug & Kolaba Fort",
    "location": "Raigad District, Konkan, Maharashtra",
    "description": "Alibaug’s sandy coastline and water-sports offerings are complemented by the historic Kolaba sea fort—reachable on foot at low tide. The fort showcases Maratha-era artillery and provides panoramic sea views."
  },
  {
    "title": "Dapoli",
    "location": "Ratnagiri District, Konkan, Maharashtra",
    "description": "Dubbed 'Mini-Mahabaleshwar', Dapoli combines lush hillocks, multiple uncrowded beaches like Anjarle and Kelshi, ancient temples (such as Keshavraj), and opportunities for dolphin sightings and forest treks."
  },
  {
    "title": "Murud-Janjira Fort",
    "location": "Murud, Raigad District, Konkan, Maharashtra",
    "description": "One of India’s most formidable sea forts, built on an islet and never conquered by colonial powers. Accessible by boat, the fort’s massive walls and hidden passages offer a glimpse into maritime military architecture."
  },
  {
    "title": "Tarkarli",
    "location": "Sindhudurg District, Konkan, Maharashtra",
    "description": "Known for its pristine white-sand beach, crystal-clear waters and backwaters, Tarkarli is ideal for snorkeling, scuba diving in coral reefs, dolphin tours, and peaceful seafront relaxation."
  },
  {
    "title": "Harihareshwar",
    "location": "Raigad District, Konkan, Maharashtra",
    "description": "A serene temple-town where the Savitri River meets the Arabian Sea, Harihareshwar is famed for its ancient Shiva temple flanked by two beaches. Often called ‘Dakshin Kashi’, it offers a calm, spiritual coastal retreat."
  },
  {
    "title": "Amboli",
    "location": "Sindhudurg District, Konkan, Maharashtra",
    "description": "A misty hill-station on the Konkan edge of the Western Ghats, Amboli undergoes dramatic transformation during monsoon—cascading waterfalls, dense evergreen forest, and panoramic viewpoint thrills like Shirgaonkar Point."
  },
  {
    "title": "Diving deeper: Harnai & Malvan",
    "location": "Ratnagiri & Sindhudurg Districts, Konkan, Maharashtra",
    "description": "Harnai’s quiet beaches, fishing harbour, and proximity to Suvarnadurg Fort offer coastal charm, while Malvan combines historic forts, local seafood delights, and a relaxed seaside village atmosphere."
  },
  {
    "title": "Roha & Savarcha Fort Trail",
    "location": "Raigad District, Konkan, Maharashtra",
    "description": "A lesser-known trekking destination with the historic Avchitgad Fort overlooking the Kundalika River—ideal for rafting, riverside hikes, and quiet encounters with Konkan’s forested landscapes."
  }
],



  "services": [
    {
      "name": "Mumbai to Konkan Darshan Cab",
      "description": "Explore the scenic beauty of the Konkan coast with Deva Cabs’ Mumbai to Konkan Darshan cab service. Whether you're planning to visit beaches, forts, temples, or coastal towns like Ratnagiri, Ganpatipule, or Sindhudurg, we provide comfortable, chauffeur-driven AC cabs for a smooth ride. Ideal for pilgrims, families, and nature lovers seeking a peaceful retreat, our service ensures safe travel, customized routes, and competitive pricing."
    },
    {
      "name": "Konkan tour cab from Mumbai",
      "description": "Plan a memorable Konkan tour with our reliable cab service from Mumbai. Our multi-day packages cover key destinations along the picturesque Konkan belt. Enjoy personalized itineraries, spacious vehicles, and experienced drivers who know the coastal routes well. Perfect for group travel, cultural exploration, or a relaxing beach holiday."
    },
    {
      "name": "Book cab Mumbai to Konkan trip",
      "description": "Booking a cab for your Mumbai to Konkan trip is quick and easy with Deva Cabs. Choose from a range of sedans, SUVs, and luxury vehicles, all equipped for long-distance comfort. We provide instant confirmation, on-time pickup, and a smooth booking process—ideal for weekend getaways, extended vacations, or family road trips."
    },
    {
      "name": "Chauffeur cab for Konkan Darshan",
      "description": "Hire a chauffeur-driven cab for your Konkan Darshan journey from Mumbai. Our trained drivers are courteous, punctual, and knowledgeable about popular and hidden gems along the Konkan coastline. Sit back and relax while we take care of your travel logistics from start to finish."
    },
    {
      "name": "SUV cab hire Mumbai to Konkan",
      "description": "Travel comfortably with our spacious SUV cabs from Mumbai to Konkan. Whether you’re navigating hilly terrains or planning a family coastal adventure, our SUVs offer ample luggage space, powerful AC, and a smooth ride. Ideal for group travel and long-distance routes with mixed road conditions."
    },
    {
      "name": "AC cab Mumbai to Konkan sightseeing",
      "description": "Explore the coastal beauty of Konkan with our air-conditioned cabs. From historic forts and temples to serene beaches and local cuisine spots, our AC cab service ensures you enjoy every destination in comfort. Book full-day or multi-day sightseeing packages tailored to your interests."
    },
    {
      "name": "Affordable Konkan cab Mumbai",
      "description": "Looking for an affordable yet comfortable ride from Mumbai to Konkan? Our budget-friendly cab options offer transparent pricing, no hidden charges, and quality vehicles with all essential amenities. Perfect for solo travelers, couples, or small families planning a scenic coastal road trip."
    },
    {
      "name": "Family cab for Konkan trip Mumbai",
      "description": "Planning a Konkan family holiday from Mumbai? Book a family-friendly cab with spacious interiors, safety features, and courteous drivers. We make your journey fun and stress-free with well-maintained vehicles, flexible stops, and plenty of room for kids and luggage."
    },
    {
      "name": "Luxury cab hire Konkan Darshan",
      "description": "Experience Konkan Darshan in style with our premium luxury cab service from Mumbai. Choose from top-class vehicles offering plush interiors, entertainment systems, and top-tier comfort. Ideal for honeymooners, VIP guests, or anyone seeking a superior travel experience along the Konkan coast."
    }
  ],
  "tableData": [
    ["Mumbai to Konkan Darshan Cab", "-Konkan tour cab from Mumbai"],
    ["Book cab Mumbai to Konkan trip", "-Chauffeur cab for Konkan Darshan"],
    ["SUV cab hire Mumbai to Konkan", "-AC cab Mumbai to Konkan sightseeing"],
    ["Affordable Konkan cab Mumbai", "-Family cab for Konkan trip Mumbai"],
    ["Luxury cab hire Konkan Darshan", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Scenic Mumbai to Konkan Darshan Cab Service",
    "WhyChoosedescription": "Embark on a picturesque journey from Mumbai to the enchanting Konkan region with our specialized cab service. Whether you're planning a spiritual tour, a coastal holiday, or a heritage getaway, we ensure a comfortable ride through lush landscapes, serene beaches, and vibrant villages that define Konkan Darshan."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles for Long Road Trips",
    "WhyChoosedescription": "Our air-conditioned sedans, SUVs, and tempo travellers offer ample space for passengers and luggage, ideal for families or groups exploring multiple destinations in the Konkan belt. Enjoy reclining seats, smooth suspension, and clean interiors as you travel along the scenic coastal highways and ghats."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Knowledge of Konkan Routes",
    "WhyChoosedescription": "Our drivers are not only skilled and professional, but also well-versed in the geography and tourist spots of the Konkan region. From Ganpatipule to Tarkarli and Murud to Malvan, they guide you through local gems while ensuring your safety and comfort on winding roads and coastal routes."
  },
  {
    "WhyChooseheading": "Customizable Tour Packages for Konkan Darshan",
    "WhyChoosedescription": "No two journeys are the same. Choose from one-way, round-trip, or multi-day itineraries, and customize your Konkan Darshan route based on your interests—beaches, temples, forts, seafood, or all of the above. We tailor your ride to fit your plan and pace."
  },
  {
    "WhyChooseheading": "Transparent and Reasonable Pricing",
    "WhyChoosedescription": "Our Konkan cab packages come with clear, all-inclusive pricing—covering tolls, fuel, and driver allowances. No hidden charges, no last-minute surprises. Plan your coastal escape with confidence and stay within budget."
  },
  {
    "WhyChooseheading": "24/7 Availability and Flexible Scheduling",
    "WhyChoosedescription": "Whether you’re setting out early to catch the sunrise on the beach or need a late-night pickup after a local festival, our services operate around the clock. We adapt to your travel schedule, not the other way around."
  },
  {
    "WhyChooseheading": "Easy Booking with Dedicated Support",
    "WhyChoosedescription": "Booking your Mumbai to Konkan Darshan cab is quick and seamless. Use our online portal or speak directly with our customer care team to confirm your ride, get travel tips, and make changes to your itinerary effortlessly."
  },
  {
    "WhyChooseheading": "Well-Maintained, GPS-Enabled Cabs for a Safe Journey",
    "WhyChoosedescription": "Your safety is our top priority. All our vehicles undergo routine maintenance and come equipped with GPS tracking, seat belts, emergency kits, and sanitization for a safe and worry-free journey through Maharashtra’s stunning Konkan coast."
  }
]










    }




const faqData = [
  {
    question: "Can I book a cab from Mumbai to Konkan Darshan with Deva Cabs?",
    answer: "Yes, Deva Cabs offers customizable cab services for Konkan Darshan tours starting from Mumbai, covering scenic coastal destinations."
  },
  {
    question: "What is included in a Konkan Darshan cab package?",
    answer: "Our Konkan Darshan packages typically include travel to major Konkan destinations like Ratnagiri, Ganpatipule, Sindhudurg, Tarkarli, and more."
  },
  {
    question: "How many days are ideal for a Konkan Darshan trip from Mumbai?",
    answer: "A Konkan Darshan tour usually ranges from 3 to 7 days depending on the number of destinations and your travel preferences."
  },
  {
    question: "What types of vehicles are available for the Konkan trip?",
    answer: "We offer sedans, SUVs, Innova Crysta, Ertiga, and tempo travellers to suit families, groups, and solo travelers."
  },
  {
    question: "Are the Konkan Darshan trips customizable?",
    answer: "Yes, you can customize your itinerary including the destinations, halts, and duration based on your interests and schedule."
  },
  {
    question: "Are tolls, parking, and driver allowance included in the fare?",
    answer: "These charges are generally extra and will be transparently shared with you at the time of booking."
  },
  {
    question: "Is this service available throughout the year?",
    answer: "Yes, you can book Mumbai to Konkan Darshan cab service all year round, though the post-monsoon and winter seasons are most preferred."
  },
  {
    question: "Is the cab service safe and suitable for families and senior citizens?",
    answer: "Absolutely. Our vehicles are clean and comfortable, and our drivers are trained and courteous, ensuring a safe journey for all."
  },
  {
    question: "Can I book the Konkan Darshan cab online or via phone?",
    answer: "Yes, you can book your cab easily through our website, mobile app, or by calling our customer care team."
  },
  {
    question: "Why choose Deva Cabs for Konkan Darshan from Mumbai?",
    answer: "Deva Cabs offers experienced drivers, customizable routes, clean vehicles, and reliable service, making us your best choice for Konkan tours."
  }
];

const testimonialData = [
  {
    id: 73,
    name: 'Mr. Prakash Joshi',
    role: 'Nature Enthusiast',
    review: 'Our Konkan Darshan trip with Deva Cabs was incredible. Beautiful coastal views, excellent driver, and a smooth ride throughout.',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 74,
    name: 'Mrs. Deepa Chavan',
    role: 'Family Traveler',
    review: 'Deva Cabs helped us explore the best of Konkan in comfort. The cab was clean, and the driver was very knowledgeable about the region.',
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
  "name": "Mumbai to Konkan Darshan Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-konkan-darshan-cab.jpg", // Replace with actual image URL
  "description": "Book Mumbai to Konkan Darshan cab with Deva Cabs. Enjoy affordable, luxury, AC, and SUV cabs for sightseeing and family trips. Chauffeur-driven and reliable service.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "350",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5500",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-konkan-darshan-cab" // Replace with actual URL
  }
};




    return (
        <div>

<Helmet>
  <title>Mumbai to Konkan Darshan Cab | Book Konkan Tour Taxi | Deva Cabs</title>
  <meta
    name="description"
    content="Book Mumbai to Konkan Darshan cab with Deva Cabs. Chauffeur-driven AC and SUV cabs for Konkan sightseeing, family trips, and tours. Affordable luxury car hire with online booking."
  />
  <meta
    name="keywords"
    content="Mumbai to Konkan Darshan Cab, Konkan tour cab from Mumbai, Book cab Mumbai to Konkan trip, Chauffeur cab for Konkan Darshan, SUV cab hire Mumbai to Konkan, AC cab Mumbai to Konkan sightseeing, Affordable Konkan cab Mumbai, Family cab for Konkan trip Mumbai, Luxury cab hire Konkan Darshan"
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
                            <img src='./images/keyword/46.jpg' alt='img' />
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

export default Mumbaitokonkandarshancab;