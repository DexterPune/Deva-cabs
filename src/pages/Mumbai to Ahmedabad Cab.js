
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitoahemdabadcab() {



    const cardData =
    {
        keyword: ' Mumbai to Ahmedabad Cab ',
        heading: 'Deva Cabs: Mumbai to Ahmedabad Cab ',
        headingDescription: 'Deva Cabs offers efficient and comfortable cab services from Mumbai to Ahmedabad, ideal for business trips, family visits, and long-distance travel. Covering a distance of approximately 530 km, our well-maintained fleet—including Sedans, SUVs, and Innova Crysta—ensures a smooth, comfortable, and enjoyable journey. Travel with confidence thanks to our experienced chauffeurs, fixed-fare packages, and convenient door-to-door pickup and drop-off. With 24/7 availability, transparent pricing, and exceptional customer support, Deva Cabs guarantees a stress-free and reliable Mumbai to Ahmedabad cab experience.',

        top: 'Top Places to Visit in Ahmedabad with Deva Cabs',

"topPlaces": [
  {
    "title": "Sabarmati Riverfront",
    "location": "Ahmedabad, Gujarat",
    "description": "A beautifully designed 11+ km riverside promenade developed since 2005, featuring dual-level walkways, cycling tracks, boating stations, pop-up event spaces, and eleven architecturally striking bridges including the kite-inspired Atal Pedestrian Bridge (opened 2022). A hub of urban life, it hosts riverfront festivals, marathons, food stalls, and cultural events, making it a vibrant recreational and social focal point for the city."
  },
  {
    "title": "Sabarmati Ashram",
    "location": "Sabarmati, Ahmedabad, Gujarat",
    "description": "Mahatma Gandhi’s historic residence from 1917–1930, from which he led the iconic Salt March. The peaceful complex includes his simple living quarters, a charkha (spinning wheel), prayer grounds, and a Charles Correa–designed museum commemorating his philosophy of non-violence and community living—a must-visit for history and spirituality."
  },
  {
    "title": "Sabarmati Riverfront Bicycle & Bird Trail",
    "location": "Ahmedabad, Gujarat",
    "description": "Beyond its promenades, the riverfront has become a sanctuary for over 120 bird species, including flamingos, herons, and jacanas. Early mornings offer serene bird-watching experiences, while the trails and landscaping support biodiversity and urban greening efforts."
  },
  {
    "title": "Bhadra Fort & Teen Darwaza",
    "location": "Old City, Ahmedabad, Gujarat",
    "description": "Built in 1411 by Sultan Ahmed Shah I, Bhadra Fort with its ornate gates—including the majestic Teen Darwaza—has been restored into a cultural hub. It houses museums, performance spaces, and heritage plazas, offering a glimpse into medieval urban life in the heart of the walled city."
  },
  {
    "title": "Jama Masjid",
    "location": "Manek Chowk, Old City, Ahmedabad, Gujarat",
    "description": "A 15th-century architectural masterpiece of burnished yellow sandstone, featuring 260 intricately carved pillars and superb jalis (latticework). Built by Ahmad Shah I, the mosque merges Hindu and Islamic styles, with dome carvings reminiscent of lotus motifs."
  },
  {
    "title": "Sidi Saiyyed Mosque",
    "location": "Old City, Ahmedabad, Gujarat",
    "description": "Famed for its iconic 'Tree of Life' sandstone jali window, this 16th-century mosque is a fine example of Sidi (African) craftsmanship and symbolizes Ahmedabad’s heritage. A must-see for its serene artistry and cultural significance."
  },
  {
    "title": "Swaminarayan Temple (Kalupur)",
    "location": "Kalupur, Ahmedabad, Gujarat",
    "description": "Founded in 1822, this stunning marble and Burma-teak temple showcases craftsmanship that merges Gujarati, Rajasthani, Mughal, and British architectural styles. Its richly carved wooden columns, vibrant frescoes, and peaceful sanctum make it one of the city’s spiritual and architectural jewels."
  },
  {
    "title": "Hutheesing Jain Temple",
    "location": "Paldi, Ahmedabad, Gujarat",
    "description": "Constructed in 1848, this exquisite temple is dedicated to the 15th Jain Tirthankara and features stunning Maru-Gurjara-style architecture: ornate spires, domes, and extensive stone carvings. Built by a wealthy trader, it stands as a testament to Jain devotion and artistry."
  },
  {
    "title": "Kankaria Lake & Nagina Wadi",
    "location": "Maninagar, Ahmedabad, Gujarat",
    "description": "A lively, 76-acre artificial lakefront redeveloped in 2008, featuring a zoo, toy train, water rides, tethered balloon (Ahmedabad Eye), kids’ city, aquarium, and the serene Nagina Wadi island with musical fountains. The annual Kankaria Carnival in December turns it into a vibrant celebration of culture and fun."
  },
  {
    "title": "Auto World Vintage Car Museum",
    "location": "Vejalpur, Ahmedabad, Gujarat",
    "description": "A hidden gem for automobile enthusiasts: this private car museum showcases classics like Bentleys, Rolls-Royces, and vintage Indian vehicles in pristine condition. It offers a nostalgic journey through automotive history and rare collector vehicles."
  }
],



  "services": [
    {
      "name": "Mumbai to Ahmedabad Cab",
      "description": "Travel from Mumbai to Ahmedabad with ease and comfort by booking our reliable outstation cab service. Whether you’re heading to Ahmedabad for business, family functions, or leisure, we offer a range of vehicles—sedans, SUVs, and luxury cars—suitable for all needs. Enjoy door-to-door pickup, experienced chauffeurs, and well-maintained, air-conditioned cars that make your long-distance journey smooth and stress-free."
    },
    {
      "name": "One-way taxi Mumbai to Ahmedabad",
      "description": "Looking for a one-way taxi from Mumbai to Ahmedabad? Our one-way cab service is perfect for travelers who don’t require a return ride. Get professional drivers, clean AC vehicles, and transparent pricing. Ideal for solo travelers, couples, or families looking for a hassle-free intercity ride."
    },
    {
      "name": "Round trip cab Mumbai to Ahmedabad",
      "description": "Book a round trip cab from Mumbai to Ahmedabad for complete travel flexibility and value. Whether it's a weekend trip, corporate visit, or family outing, our round-trip packages offer convenience, return scheduling flexibility, and discounted rates. Enjoy reliable service and courteous chauffeurs on both legs of your journey."
    },
    {
      "name": "SUV cab hire Mumbai to Ahmedabad",
      "description": "Need more space for luggage or traveling with a group? Our SUV cab service from Mumbai to Ahmedabad is designed for comfort, space, and safety. Featuring powerful engines, AC, and roomy interiors, our SUVs are perfect for families, friends, or corporate groups heading to Ahmedabad."
    },
    {
      "name": "AC taxi Mumbai to Ahmedabad",
      "description": "Book an air-conditioned taxi from Mumbai to Ahmedabad for a relaxing long-distance ride. Our vehicles are regularly maintained, sanitized, and driven by experienced chauffeurs. Whether you choose a sedan, SUV, or luxury cab, comfort and safety are guaranteed throughout your journey."
    },
    {
      "name": "Chauffeur-driven cab Mumbai to Ahmedabad",
      "description": "Travel worry-free from Mumbai to Ahmedabad with our professional chauffeur-driven cabs. Our drivers are polite, punctual, and well-versed with the highway routes. Whether for business or personal travel, you can sit back and relax while our trained chauffeurs ensure a smooth and pleasant journey."
    },
    {
      "name": "Luxury car Mumbai to Ahmedabad",
      "description": "Upgrade your travel experience with a luxury car from Mumbai to Ahmedabad. Choose from our premium fleet including top-end sedans and SUVs, all equipped with plush interiors, AC, and entertainment options. Perfect for VIP guests, executives, or anyone seeking travel in style and comfort."
    },
    {
      "name": "Online Ahmedabad cab booking Mumbai",
      "description": "Book your cab from Mumbai to Ahmedabad online with ease. Our digital platform offers instant booking, transparent fares, and multiple vehicle options. Choose your route, vehicle type, and travel date in just a few clicks and receive instant confirmation with driver details for a hassle-free start."
    },
    {
      "name": "Corporate taxi Mumbai to Ahmedabad",
      "description": "Choose our corporate taxi service for reliable and professional travel from Mumbai to Ahmedabad. Ideal for executives, client visits, or official travel, our service includes well-maintained cars, punctual chauffeurs, invoicing support, and flexible pickup/drop timings tailored for business needs."
    }
  ],
  "tableData": [
    ["Mumbai to Ahmedabad Cab", "-One-way taxi Mumbai to Ahmedabad"],
    ["Round trip cab Mumbai to Ahmedabad", "-SUV cab hire Mumbai to Ahmedabad"],
    ["AC taxi Mumbai to Ahmedabad", "-Chauffeur-driven cab Mumbai to Ahmedabad"],
    ["Luxury car Mumbai to Ahmedabad", "-Online Ahmedabad cab booking Mumbai"],
    ["Corporate taxi Mumbai to Ahmedabad", ""]
  ],

whychoose: [
  {
    "WhyChooseheading": "Reliable Mumbai to Ahmedabad Cab Service",
    "WhyChoosedescription": "Travel comfortably and reliably from Mumbai to Ahmedabad with our professional cab service. Whether for business, family visits, or leisure trips, we guarantee punctual pickups and a smooth ride across the approximately 530 km route. Our experienced drivers and well-maintained vehicles ensure your journey is hassle-free and enjoyable."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles for Long-Distance Travel",
    "WhyChoosedescription": "Our fleet includes air-conditioned sedans, SUVs, and larger vehicles that provide ample legroom and luggage space. With ergonomic seating and modern amenities, your long journey from Mumbai to Ahmedabad will be relaxing and comfortable."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Mumbai-Ahmedabad Route",
    "WhyChoosedescription": "Our skilled drivers are well-acquainted with the highways and traffic conditions between Mumbai and Ahmedabad. They prioritize your safety, punctuality, and comfort, ensuring a smooth and timely journey."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer upfront pricing inclusive of tolls, fuel, and driver allowances, with no hidden fees. Our competitive rates allow you to budget your trip confidently, making our Mumbai to Ahmedabad cab service affordable and trustworthy."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel Plans",
    "WhyChoosedescription": "Our cabs are available around the clock to match your preferred travel times. Whether you prefer an early morning or late-night departure, we provide the flexibility to suit your schedule."
  },
  {
    "WhyChooseheading": "Easy Booking with Instant Confirmation",
    "WhyChoosedescription": "Booking your Mumbai to Ahmedabad cab is quick and convenient via our website or customer support. Receive instant confirmation along with fare and driver details to plan your trip confidently."
  },
  {
    "WhyChooseheading": "Safety and Well-Maintained Vehicles",
    "WhyChoosedescription": "Safety is paramount to us. All vehicles undergo regular maintenance and sanitization before each trip. Equipped with seat belts, GPS tracking, and emergency kits, our cabs ensure a secure and comfortable journey."
  },
  {
    "WhyChooseheading": "Customizable Travel Packages",
    "WhyChoosedescription": "We offer flexible travel packages including one-way trips, round trips, and multi-day plans with stops along the route. Our services can be tailored to meet your specific travel requirements for the Mumbai to Ahmedabad route."
  }
]










    }




const faqData = [
  {
    question: "Can I book a cab from Mumbai to Ahmedabad with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable and safe cab services from Mumbai to Ahmedabad for business trips, personal travel, and group journeys."
  },
  {
    question: "How long does the journey from Mumbai to Ahmedabad take by cab?",
    answer: "The journey usually takes around 8 to 10 hours depending on traffic and chosen route."
  },
  {
    question: "What types of vehicles are available for the Mumbai to Ahmedabad route?",
    answer: "We provide a variety of vehicle options including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers based on your travel needs."
  },
  {
    question: "Is one-way cab booking available from Mumbai to Ahmedabad?",
    answer: "Yes, Deva Cabs offers both one-way and round-trip cab services between Mumbai and Ahmedabad."
  },
  {
    question: "Are tolls, parking fees, and driver allowance included in the price?",
    answer: "These charges are generally additional and will be shared clearly during the booking process for complete transparency."
  },
  {
    question: "Is the Mumbai to Ahmedabad cab service available 24/7?",
    answer: "Yes, you can book a cab with Deva Cabs any time, as our services are available round-the-clock."
  },
  {
    question: "Is it safe to travel long distances like Mumbai to Ahmedabad with Deva Cabs?",
    answer: "Yes, safety is a top priority at Deva Cabs. Our drivers are experienced, professional, and background-verified."
  },
  {
    question: "Can I make stops during the journey from Mumbai to Ahmedabad?",
    answer: "Yes, you can request stops or detours during the trip. Just inform us while booking for a customized route."
  },
  {
    question: "Is this service suitable for corporate travel and family trips?",
    answer: "Absolutely. Our fleet and services cater to solo travelers, families, senior citizens, and corporate professionals."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Ahmedabad travel?",
    answer: "Deva Cabs ensures timely pickups, well-maintained vehicles, experienced drivers, and transparent pricing for a stress-free journey."
  }
];

const testimonialData = [
  {
    id: 71,
    name: 'Mr. Harshad Mehta',
    role: 'Frequent Business Traveler',
    review: 'Deva Cabs is my go-to for Mumbai to Ahmedabad travel. Always punctual, clean cars, and courteous drivers.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 72,
    name: 'Ms. Jinal Bhatt',
    role: 'Family Traveler',
    review: 'Our Mumbai to Ahmedabad road trip with Deva Cabs was excellent. Comfortable vehicle and very polite driver.',
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
  "name": "Mumbai to Ahmedabad Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-ahmedabad-cab.jpg", // Replace with actual image URL
  "description": "Book Mumbai to Ahmedabad cab with Deva Cabs. Chauffeur-driven, AC and SUV taxis available for one-way and round trip travel. Affordable and luxury car hire options.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "480",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7000",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-ahmedabad-cab" // Replace with actual URL
  }
};




    return (
        <div>

<Helmet>
  <title>Mumbai to Ahmedabad Cab | Book Taxi Online | Deva Cabs</title>
  <meta
    name="description"
    content="Book your Mumbai to Ahmedabad cab with Deva Cabs. Enjoy chauffeur-driven AC and SUV taxis for one-way or round trip. Affordable luxury car rental with online booking."
  />
  <meta
    name="keywords"
    content="Mumbai to Ahmedabad Cab, One-way taxi Mumbai to Ahmedabad, Round trip cab Mumbai to Ahmedabad, SUV cab hire Mumbai to Ahmedabad, AC taxi Mumbai to Ahmedabad, Chauffeur-driven cab Mumbai to Ahmedabad, Luxury car Mumbai to Ahmedabad, Online Ahmedabad cab booking Mumbai, Corporate taxi Mumbai to Ahmedabad"
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
                            <img src='/images/keyword/45.jpg' alt='img' />
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

export default Mumbaitoahemdabadcab;