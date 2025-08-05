
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitoshirdicabs() {



    const cardData =
    {
        keyword: ' Mumbai to Shirdi Cab   ',
        heading: 'Deva Cabs: Mumbai to Shirdi Cab     ',
        headingDescription: 'Deva Cabs provides comfortable and affordable cab services from Mumbai to Shirdi, perfect for pilgrimage trips, family outings, and group travel. Covering a distance of approximately 240 km, our well-maintained vehicles ensure a peaceful and hassle-free journey to the sacred town of Shirdi. Choose from Sedans, SUVs, or Innova Crysta based on your group size and comfort preference. With professional drivers, fixed pricing, and 24/7 service, Deva Cabs is your trusted travel partner for a serene Shirdi trip.',

        top: 'Top Places to Visit in Shirdi with Deva Cabs',

"topPlaces": [
  {
    "title": "Shirdi Sai Baba Samadhi Mandir",
    "location": "Shirdi, Maharashtra",
    "description": "The Samadhi Mandir is the main temple in Shirdi and the final resting place of Shri Sai Baba. Constructed from white marble, the temple houses a beautifully carved idol of Sai Baba seated over his tomb. Devotees from all over the world visit this sacred site to offer prayers, participate in aarti, and experience divine peace. It is the spiritual heart of Shirdi and the most visited attraction in the town."
  },
  {
    "title": "Dwarkamai",
    "location": "Shirdi, Maharashtra",
    "description": "Dwarkamai is the mosque where Sai Baba spent a significant part of his life. It houses sacred items like Baba's stone seat, his grinding stone, and the sacred fire (dhuni) which still burns today. The place exudes divine energy and historical importance, drawing pilgrims who wish to witness the humble setting of Sai Baba’s miracles and teachings."
  },
  {
    "title": "Chavadi",
    "location": "Shirdi, Maharashtra",
    "description": "Chavadi is a revered building where Sai Baba used to sleep every alternate night during the later years of his life. The site is now preserved with photographs, his wooden bed, and other relics. On Thursdays, a ceremonial procession carries Baba's portrait from Dwarkamai to Chavadi, recreating the same tradition with great devotion."
  },
  {
    "title": "Shri Sai Baba Sansthan Trust",
    "location": "Shirdi, Maharashtra",
    "description": "The Shri Sai Baba Sansthan Trust is the official organization that manages all the spiritual and infrastructural activities in Shirdi. The complex includes the main temple, prasadalaya (dining hall), accommodation facilities, hospitals, and donation counters. It ensures a smooth and spiritual experience for all pilgrims visiting Shirdi."
  },
  {
    "title": "Sai Heritage Village",
    "location": "Shirdi, Maharashtra",
    "description": "Sai Heritage Village is a themed museum and park that portrays the life and times of Sai Baba through life-sized statues, village scenes, and traditional settings. It offers an informative and visual journey of Baba’s life, ideal for children and families who wish to understand the history and culture of the time."
  },
  {
    "title": "Lendi Baug",
    "location": "Shirdi, Maharashtra",
    "description": "Lendi Baug is a serene garden where Sai Baba used to meditate and water plants daily. The place houses the Nanda Deep lamp which Baba kept lit under a Peepal tree, and it still continues to burn today. The garden is peaceful and ideal for meditation and reflection amidst nature."
  },
  {
    "title": "Khandoba Mandir",
    "location": "Shirdi, Maharashtra",
    "description": "Khandoba Mandir is a small yet significant temple dedicated to Lord Khandoba, where Sai Baba was first welcomed into Shirdi by Mahalsapati with the words 'Aao Sai'. The temple is closely associated with the saint’s arrival and holds a special spiritual aura for devotees tracing his early steps in the town."
  },
  {
    "title": "Wet N Joy Water Park",
    "location": "Shirdi, Maharashtra",
    "description": "Located just a few minutes from the Sai Temple, Wet N Joy is a fun-filled water park perfect for families and children visiting Shirdi. With thrilling water rides, wave pools, and kid zones, it offers a refreshing break from spiritual sightseeing. It’s a great blend of devotion and recreation in one trip."
  },
  {
    "title": "Sai Teerth Theme Park",
    "location": "Shirdi, Maharashtra",
    "description": "Sai Teerth is India’s first devotional theme park dedicated to Sai Baba’s life and teachings. It features attractions like a 5D show, animatronics-based storytelling, a train ride through key spiritual locations, and replicas of sacred temples. The park offers an immersive, modern way to experience the spiritual journey of Sai Baba."
  },
  {
    "title": "Upasani Maharaj Ashram",
    "location": "Shirdi, Maharashtra",
    "description": "Upasani Maharaj Ashram is the resting place of one of Sai Baba’s key disciples. Located close to the main temple, the ashram is calm and spiritual, housing Samadhis and relics of Upasani Maharaj. Devotees interested in the extended teachings and lineage of Sai Baba often visit this peaceful ashram."
  }
],



"services": [
  {
    "name": "Mumbai to Shirdi Cab",
    "description": "Deva Cabs offers comfortable and reliable Mumbai to Shirdi cab services designed to make your pilgrimage or leisure trip seamless and stress-free. Our well-maintained vehicles, professional drivers, and flexible booking options ensure you enjoy a safe and smooth journey to the holy town of Shirdi, known for its spiritual significance and peaceful environment."
  },
  {
    "name": "One-way cab Mumbai to Shirdi",
    "description": "Need a hassle-free one-way taxi from Mumbai to Shirdi? Deva Cabs provides punctual and affordable one-way cab services perfect for pilgrims, tourists, and families who want a direct, comfortable ride without any unnecessary stops or detours. Our vehicles come equipped with all safety features for a smooth and peaceful journey."
  },
  {
    "name": "Mumbai to Shirdi taxi service",
    "description": "Experience top-quality Mumbai to Shirdi taxi services with Deva Cabs, offering a range of vehicles including sedans, SUVs, and luxury cars. Our expert drivers are knowledgeable about the route, ensuring timely pickups and drop-offs, while providing courteous and professional service throughout your trip."
  },
  {
    "name": "Affordable Shirdi cab from Mumbai",
    "description": "Travel from Mumbai to Shirdi without breaking your budget! Deva Cabs offers affordable cab services with transparent pricing, no hidden fees, and excellent vehicle quality. Ideal for families, groups, or solo travelers looking for value-for-money transport without compromising on comfort and safety."
  },
  {
    "name": "Online cab booking Mumbai to Shirdi",
    "description": "Book your Mumbai to Shirdi cab easily online with Deva Cabs through our website or mobile app. Get instant confirmation, flexible payment options, and real-time updates on your ride. Our hassle-free online system simplifies your travel planning, allowing you to focus on your pilgrimage or vacation."
  },
  {
    "name": "SUV cab Mumbai to Shirdi",
    "description": "Choose spacious and comfortable SUVs for your Mumbai to Shirdi trip. Perfect for families or groups with extra luggage, our SUVs provide ample seating, air-conditioning, and smooth suspension to handle the road conditions, making your pilgrimage or tour a truly relaxing experience."
  },
  {
    "name": "AC taxi Mumbai to Shirdi",
    "description": "Beat the heat on your way to Shirdi with our fully air-conditioned taxis. Deva Cabs’ AC vehicles guarantee a cool and refreshing ride, regardless of the season or traffic conditions. Enjoy a comfortable and pleasant journey in our modern, well-maintained fleet."
  },
  {
    "name": "Luxury car hire Mumbai to Shirdi",
    "description": "For those who prefer to travel in style and sophistication, Deva Cabs offers luxury car rentals from Mumbai to Shirdi. Choose from premium brands with plush interiors and top-notch amenities for a first-class travel experience to this sacred destination."
  },
  {
    "name": "Chauffeur-driven cab Mumbai to Shirdi",
    "description": "Our chauffeur-driven cabs from Mumbai to Shirdi provide a professional and courteous service. Skilled drivers ensure a safe journey, assist with luggage, and maintain punctuality, so you can relax and enjoy the ride without any worries or stress."
  },
  {
    "name": "Round trip cab Mumbai to Shirdi",
    "description": "Planning a round trip to Shirdi from Mumbai? Deva Cabs offers flexible round trip cab services with competitive pricing. Whether it’s a day trip or an overnight pilgrimage, we ensure your return journey is as smooth and comfortable as the onward trip."
  },
  {
    "name": "Family cab Mumbai to Shirdi",
    "description": "Travel comfortably with your family to Shirdi using Deva Cabs’ family-friendly cabs. Our vehicles provide spacious seating, safety features, and a smooth ride to accommodate travelers of all ages, including children and seniors, making your pilgrimage joyful and hassle-free."
  },
  {
    "name": "Mumbai to Shirdi Darshan cab",
    "description": "Make your Shirdi Darshan hassle-free with Deva Cabs’ dedicated Mumbai to Shirdi Darshan cab services. We provide timely pickups and drops, helping you maximize your time at the shrine. Our drivers are familiar with the best routes and local guidelines, ensuring a respectful and efficient trip."
  },
  {
    "name": "Corporate taxi Mumbai to Shirdi",
    "description": "Deva Cabs also caters to corporate clients traveling from Mumbai to Shirdi. Our corporate taxi services offer punctuality, professionalism, and premium vehicles suitable for business groups or executives attending spiritual retreats or company events."
  },
  {
    "name": "Premium Mumbai to Shirdi cab",
    "description": "Experience premium comfort and service with Deva Cabs’ Mumbai to Shirdi premium cab options. Our luxury fleet, professional chauffeurs, and attention to detail guarantee a first-rate travel experience to this sacred destination."
  },
  {
    "name": "Mumbai to Shirdi pilgrimage taxi",
    "description": "Make your pilgrimage journey memorable with Deva Cabs’ specialized Mumbai to Shirdi pilgrimage taxi service. We understand the spiritual significance of this trip and provide comfortable, reliable transport with knowledgeable drivers who respect the sanctity of your travel, ensuring a peaceful and fulfilling journey."
  }
],
"tableData": [
  ["Mumbai to Shirdi Cab", "-One-way cab Mumbai to Shirdi"],
  ["Mumbai to Shirdi taxi service", "-Affordable Shirdi cab from Mumbai"],
  ["Online cab booking Mumbai to Shirdi", "-SUV cab Mumbai to Shirdi"],
  ["AC taxi Mumbai to Shirdi", "-Luxury car hire Mumbai to Shirdi"],
  ["Chauffeur-driven cab Mumbai to Shirdi", "-Round trip cab Mumbai to Shirdi"],
  ["Family cab Mumbai to Shirdi", "-Mumbai to Shirdi Darshan cab"],
  ["Corporate taxi Mumbai to Shirdi", "-Premium Mumbai to Shirdi cab"],
  ["Mumbai to Shirdi pilgrimage taxi", ""]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable Mumbai to Shirdi Cab Service",
    "WhyChoosedescription": "Traveling from Mumbai to Shirdi requires dependable transport, especially for early morning darshan or spiritual getaways. Our cab service ensures punctual pickups, carefully planned routes, and safe driving practices, so you reach Shirdi on time, comfortably and without any stress. Whether it’s a same-day return trip or a longer stay, we tailor the experience around your schedule."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Vehicles for a Long Journey",
    "WhyChoosedescription": "The journey from Mumbai to Shirdi takes around 6 to 7 hours, and we know comfort is key. Our vehicles are chosen for long-distance comfort and come equipped with AC, reclining seats, and ample legroom. You’ll also get plenty of luggage space, smooth suspension for rough patches, and a clean, sanitized cabin so you arrive refreshed and ready for your spiritual visit."
  },
  {
    "WhyChooseheading": "Experienced Drivers with Route and Local Knowledge",
    "WhyChoosedescription": "Our professional drivers are familiar with the Mumbai–Shirdi route via Nashik Highway, Expressway, or alternate roads, depending on traffic and road conditions. They are courteous, trained for long-distance trips, and understand the importance of punctuality, especially when customers are traveling for darshan or temple visits. Your safety and comfort are their top priority."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing Structure",
    "WhyChoosedescription": "We provide fair, upfront pricing with no hidden fees for your Mumbai to Shirdi taxi service. Our pricing includes fuel, tolls, and driver allowances — clearly communicated at the time of booking. This ensures there are no surprises later and that you get excellent value for money for a premium outstation cab experience."
  },
  {
    "WhyChooseheading": "Available 24/7 for Pilgrimages and Travel Flexibility",
    "WhyChoosedescription": "Whether you’re heading to Shirdi for a special puja, a weekend trip, or a last-minute darshan plan, our cabs are available round the clock. We operate 24/7 to align with temple timings and your personal schedule, offering unmatched flexibility for solo travelers, families, or large groups heading to Shirdi."
  },
  {
    "WhyChooseheading": "Easy Booking with Fast Confirmation",
    "WhyChoosedescription": "Booking your Mumbai to Shirdi cab is quick and hassle-free. Use our website, mobile app, or call our support team to reserve your ride instantly. We provide immediate confirmation, driver details before pickup, and complete journey tracking — giving you peace of mind and control over your travel."
  },
  {
    "WhyChooseheading": "Safe and Clean Vehicles for Every Passenger",
    "WhyChoosedescription": "Your safety is non-negotiable. All cabs are regularly inspected, serviced, and sanitized before every ride. Vehicles are equipped with seat belts, GPS tracking, and first-aid kits. Our drivers follow COVID-19 protocols and traffic regulations to ensure that your spiritual journey is safe and uninterrupted."
  },
  {
    "WhyChooseheading": "Customizable Travel Options and Customer Support",
    "WhyChoosedescription": "Need multiple pick-up points, an overnight stay, or a return trip the next day? We offer fully customizable packages and a customer support team ready to help with your needs. Whether you're a solo pilgrim or traveling with family, we adjust the service to match your exact requirements for a comfortable, personalized ride."
  }
]



















    }









const faqData = [
  {
    question: "Can I book a cab from Mumbai to Shirdi with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable cab services from Mumbai to Shirdi for pilgrims, tourists, and travelers."
  },
  {
    question: "How long does it take to travel from Mumbai to Shirdi by cab?",
    answer: "The journey typically takes around 5 to 6 hours depending on traffic and road conditions."
  },
  {
    question: "What types of vehicles are available for Mumbai to Shirdi transfers?",
    answer: "We provide sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers for solo and group travel."
  },
  {
    question: "Can I pre-book a cab for Mumbai to Shirdi?",
    answer: "Yes, you can easily pre-book through our website, app, or by contacting customer support."
  },
  {
    question: "Are one-way cab services available from Mumbai to Shirdi?",
    answer: "Yes, Deva Cabs offers convenient one-way cab services without any return fare obligation."
  },
  {
    question: "Will the driver wait if there are delays?",
    answer: "Yes, our drivers monitor your schedule and wait as needed to ensure a smooth trip."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Tolls and parking fees are typically extra and will be clearly communicated during booking."
  },
  {
    question: "Is the cab service available late night or early morning?",
    answer: "Yes, Deva Cabs operates 24/7 to fit your travel schedule."
  },
  {
    question: "Is it safe to travel alone from Mumbai to Shirdi by cab?",
    answer: "Yes, all our drivers are background-verified and trained for passenger safety."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Shirdi cab services?",
    answer: "We provide punctual pickups, clean vehicles, professional drivers, and transparent pricing for a stress-free journey."
  }
];

const testimonialData = [
  {
    id: 27,
    name: 'Mr. Sandeep Kulkarni',
    role: 'Pilgrim',
    review: 'Booked a cab from Mumbai to Shirdi with Deva Cabs. The vehicle was comfortable and the driver was very courteous. Highly recommend!',
    rating: 5,
    quoteIcon: './img/icon/testi-quote.svg',
  },
  {
    id: 28,
    name: 'Ms. Anjali Mehta',
    role: 'Tourist',
    review: 'Deva Cabs made my trip to Shirdi from Mumbai smooth and hassle-free. Excellent service and professional drivers.',
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
  "name": "Mumbai to Shirdi Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-shirdi-cab.jpg", // Replace with actual image URL
  "description": "Book affordable and reliable Mumbai to Shirdi cab service with Deva Cabs. Choose from AC, SUV, luxury, and chauffeur-driven cabs for one-way, round trip, family, corporate, and pilgrimage travel with easy online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "1400"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4600",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-shirdi-cab" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Mumbai to Shirdi Cab | Affordable & Luxury Taxi Service | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Shirdi cab with Deva Cabs. AC, SUV, luxury, and chauffeur-driven cabs available for one-way, round trip, family, corporate, and pilgrimage travel. Easy online booking." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Shirdi Cab, One-way cab Mumbai to Shirdi, Mumbai to Shirdi taxi service, Affordable Shirdi cab from Mumbai, Online cab booking Mumbai to Shirdi, SUV cab Mumbai to Shirdi, AC taxi Mumbai to Shirdi, Luxury car hire Mumbai to Shirdi, Chauffeur-driven cab Mumbai to Shirdi, Round trip cab Mumbai to Shirdi, Family cab Mumbai to Shirdi, Mumbai to Shirdi Darshan cab, Corporate taxi Mumbai to Shirdi, Premium Mumbai to Shirdi cab, Mumbai to Shirdi pilgrimage taxi" 
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
                            <img src='./images/keyword/22.jpg' alt='img' />
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

export default Mumbaitoshirdicabs;