
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Mumbaitonashikcab() {



    const cardData =
    {
        keyword: ' Mumbai to Nashik Cab  ',
        heading: 'Deva Cabs: Mumbai to Nashik Cab    ',
        headingDescription: 'Deva Cabs offers reliable and comfortable cab services from Mumbai to Nashik, ideal for weekend getaways, pilgrimages, or business trips. Covering a distance of around 170 km, our well-maintained cabs ensure a smooth and scenic ride through the highway route. Choose from a range of vehicles like Sedans, SUVs, or Innova Crysta, all driven by courteous professionals. With fixed fares, flexible pickup timings, and 24/7 availability, Deva Cabs makes your journey from Mumbai to Nashik effortless and enjoyable.',

        top: 'Top Places to Visit in Nashik with Deva Cabs',

"topPlaces": [
  {
    "title": "Trimbakeshwar Temple",
    "location": "Trimbak, Nashik, Maharashtra",
    "description": "Trimbakeshwar Temple is one of the twelve Jyotirlingas of Lord Shiva in India and a major spiritual center. Located at the source of the Godavari River, the temple is known for its unique architecture and the presence of three lingams representing Brahma, Vishnu, and Mahesh. It attracts pilgrims year-round and is especially significant during the Kumbh Mela."
  },
  {
    "title": "Sula Vineyards",
    "location": "Gangapur, Nashik, Maharashtra",
    "description": "Sula Vineyards is India’s most famous winery, offering vineyard tours, wine tastings, and a beautiful landscape of grape plantations. Visitors can enjoy scenic views, gourmet food, and luxurious stays at their resort. The vineyard also hosts music festivals and events, making it a lifestyle destination in Nashik."
  },
  {
    "title": "Pandav Leni Caves",
    "location": "Nashik, Maharashtra",
    "description": "Pandav Leni, also known as the Pandav Caves, are a group of 24 ancient rock-cut Buddhist caves dating back to the 1st century BCE. Located on a hill, the caves feature beautiful carvings, prayer halls, and stunning views of Nashik city. A short trek to the top is rewarded with spiritual and historical richness."
  },
  {
    "title": "Kalaram Temple",
    "location": "Panchavati, Nashik, Maharashtra",
    "description": "Kalaram Temple is an important Hindu shrine dedicated to Lord Rama, known for its striking black stone idol. Built in the 18th century, the temple is surrounded by historical and mythological significance, as it's located in Panchavati, where Lord Rama is believed to have lived during exile."
  },
  {
    "title": "Anjneri Hill",
    "location": "Trimbak Road, Nashik, Maharashtra",
    "description": "Anjneri Hill is believed to be the birthplace of Lord Hanuman and is a popular trekking and spiritual destination near Nashik. With scenic landscapes, ancient caves, and panoramic views from the summit, it is perfect for both nature lovers and pilgrims seeking peace and adventure."
  },
  {
    "title": "Saptashrungi Devi Temple",
    "location": "Vani, Nashik District, Maharashtra",
    "description": "Situated on a cliff with 500+ steps, Saptashrungi Devi Temple is one of the 51 Shakti Peethas in India. The temple is dedicated to Goddess Durga and offers breathtaking views of the Sahyadri hills. A ropeway is also available for easy access, making it a favorite pilgrimage destination."
  },
  {
    "title": "Ramkund",
    "location": "Panchavati, Nashik, Maharashtra",
    "description": "Ramkund is a sacred ghat on the Godavari River, where devotees come to take holy dips and perform rituals for ancestors. According to mythology, Lord Rama is said to have bathed here during his exile. It is one of the most spiritually significant spots in Nashik and a central site during Kumbh Mela."
  },
  {
    "title": "Someshwar Waterfall",
    "location": "Someshwar, Nashik, Maharashtra",
    "description": "Someshwar Waterfall, also known as Dudhsagar Waterfall (not to be confused with the one in Goa), is a serene natural retreat near the Someshwar temple. Surrounded by lush greenery and rocky landscapes, it’s a popular monsoon destination and picnic spot for families and nature lovers."
  },
  {
    "title": "Coin Museum",
    "location": "Anjneri, Nashik, Maharashtra",
    "description": "The Indian Coin Museum in Nashik is the only one of its kind in Asia. It showcases a rich collection of coins, artifacts, and documentation that highlight the history of currency in India. It’s an educational stop that’s ideal for history enthusiasts and curious travelers alike."
  },
  {
    "title": "Dugarwadi Waterfall",
    "location": "Near Trimbakeshwar, Nashik, Maharashtra",
    "description": "Dugarwadi Waterfall is a hidden gem located about 30 km from Nashik. Surrounded by dense forests and rolling hills, it's an unspoiled natural beauty perfect for monsoon treks and photography. Visitors should be cautious during heavy rains due to sudden water level rises."
  }
],



"services": [
  {
    "name": "Mumbai to Nashik Cab",
    "description": "Deva Cabs offers reliable and comfortable Mumbai to Nashik cab services tailored for every traveler. Whether it’s a family trip, business travel, or leisure, our fleet includes a variety of vehicles to suit your preferences. Enjoy a smooth ride on well-maintained cars driven by professional chauffeurs who prioritize your safety and comfort throughout the journey."
  },
  {
    "name": "One-way cab Mumbai to Nashik",
    "description": "Looking for a hassle-free one-way taxi from Mumbai to Nashik? Deva Cabs provides affordable and efficient one-way cab services with transparent pricing. Perfect for solo travelers, families, or groups who want a direct, comfortable transfer without any detours or stops."
  },
  {
    "name": "Book cab Mumbai to Nashik online",
    "description": "Experience the convenience of online booking for your Mumbai to Nashik cab with Deva Cabs. Our user-friendly website and app enable you to book your preferred vehicle instantly, select pick-up times, and receive immediate confirmation, making your travel planning stress-free and efficient."
  },
  {
    "name": "SUV cab Mumbai to Nashik",
    "description": "Travel spaciously and comfortably with Deva Cabs’ SUV rental service from Mumbai to Nashik. Ideal for families or groups carrying extra luggage, our SUVs provide ample space, air-conditioning, and a smooth ride to ensure a relaxed journey on this popular route."
  },
  {
    "name": "AC taxi Mumbai to Nashik",
    "description": "Beat the heat with our fully air-conditioned taxis for Mumbai to Nashik travel. Deva Cabs maintains a fleet of well-serviced AC vehicles to ensure you enjoy a cool and refreshing ride regardless of the weather conditions or traffic along the route."
  },
  {
    "name": "Sedan cab Mumbai to Nashik",
    "description": "Choose from a variety of premium sedans for your Mumbai to Nashik trip. Our sedans combine comfort, style, and fuel efficiency, making them perfect for individuals, couples, or small groups looking for a reliable and smooth journey."
  },
  {
    "name": "Chauffeur cab service Mumbai to Nashik",
    "description": "Our chauffeur-driven cab services from Mumbai to Nashik provide a professional and courteous travel experience. Our trained drivers ensure safe, timely pick-ups and drop-offs, assist with luggage, and follow all traffic regulations for a worry-free journey."
  },
  {
    "name": "Affordable taxi Mumbai to Nashik",
    "description": "Deva Cabs offers cost-effective taxi services from Mumbai to Nashik without compromising on quality or safety. Ideal for budget-conscious travelers, our affordable cabs provide comfortable rides with transparent pricing and no hidden fees."
  },
  {
    "name": "Round trip cab Mumbai to Nashik",
    "description": "Planning a round trip between Mumbai and Nashik? Our round trip cab services provide flexible scheduling, ensuring your vehicle is available for both onward and return journeys. Perfect for business trips, events, or leisure travel with fixed, competitive pricing."
  },
  {
    "name": "Luxury car Mumbai to Nashik",
    "description": "For those seeking a premium travel experience, Deva Cabs offers luxury car rentals from Mumbai to Nashik. Choose from top-tier vehicles such as Mercedes, Audi, or BMW with plush interiors and added amenities for a stylish and comfortable journey."
  },
  {
    "name": "Family trip cab Mumbai to Nashik",
    "description": "Traveling with family? Our family-friendly cabs from Mumbai to Nashik offer spacious seating, safety features, and attentive service to ensure a pleasant and comfortable ride for all members, including children and elderly travelers."
  },
  {
    "name": "Mumbai to Nashik corporate cab",
    "description": "Deva Cabs provides specialized corporate cab services from Mumbai to Nashik, tailored for business travelers. Enjoy punctual pickups, premium vehicles, and professional drivers, with flexible billing and priority support to meet your corporate travel needs."
  },
  {
    "name": "Outstation cab Mumbai to Nashik",
    "description": "Planning an outstation trip from Mumbai to Nashik? Our outstation cab service includes well-maintained vehicles equipped for long-distance travel, ensuring safety, comfort, and convenience for your journey whether for business or leisure."
  },
  {
    "name": "Premium cab Mumbai to Nashik",
    "description": "Choose Deva Cabs’ premium cab service for an upscale and luxurious ride from Mumbai to Nashik. Experience high-end cars with added comfort features, professional chauffeurs, and exceptional customer service for an exclusive travel experience."
  },
  {
    "name": "Fast cab hire Mumbai to Nashik",
    "description": "Need to get to Nashik quickly? Our fast cab hire service ensures prompt pickups and optimized routes, reducing travel time without compromising safety. Ideal for urgent business meetings or last-minute travel plans."
  }
],
"tableData": [
  ["Mumbai to Nashik Cab", "-One-way cab Mumbai to Nashik"],
  ["Book cab Mumbai to Nashik online", "-SUV cab Mumbai to Nashik"],
  ["AC taxi Mumbai to Nashik", "-Sedan cab Mumbai to Nashik"],
  ["Chauffeur cab service Mumbai to Nashik", "-Affordable taxi Mumbai to Nashik"],
  ["Round trip cab Mumbai to Nashik", "-Luxury car Mumbai to Nashik"],
  ["Family trip cab Mumbai to Nashik", "-Mumbai to Nashik corporate cab"],
  ["Outstation cab Mumbai to Nashik", "-Premium cab Mumbai to Nashik"],
  ["Fast cab hire Mumbai to Nashik", ""]
],

whychoose: [
  {
    "WhyChooseheading": "Reliable and Timely Mumbai to Nashik Cab Service",
    "WhyChoosedescription": "Our Mumbai to Nashik cab service is built on punctuality and dependability. Whether you're heading to Nashik for a business meeting, family visit, religious trip, or leisure tour, we ensure timely pickups and well-planned drop-offs. We monitor traffic conditions and keep buffer time in mind so that you experience a smooth, delay-free journey every time you book with us."
  },
  {
    "WhyChooseheading": "Comfortable and Clean Vehicles for Long-Distance Travel",
    "WhyChoosedescription": "Traveling from Mumbai to Nashik takes around 4–5 hours, and comfort matters. Our fleet includes spacious sedans, SUVs, and premium cars equipped with plush seating, air conditioning, and ample luggage space. We regularly clean and maintain each vehicle to provide a relaxing and hygienic environment, ensuring you arrive in Nashik fresh and stress-free, no matter the time of day or road conditions."
  },
  {
    "WhyChooseheading": "Experienced Drivers with In-Depth Route Knowledge",
    "WhyChoosedescription": "Our drivers are well-versed with the Mumbai–Nashik highway and alternate routes, allowing them to navigate through traffic, roadblocks, or construction zones efficiently. They are professional, courteous, and prioritize your safety and comfort. With years of experience in long-distance driving, they ensure a smooth and safe journey from pickup to drop."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Fare Structure",
    "WhyChoosedescription": "With our Mumbai to Nashik cab service, what you see is what you pay. We offer upfront pricing with no hidden fees or last-minute surprises. Your fare includes fuel, tolls, and driver charges, clearly mentioned during booking. Our competitive rates ensure you get excellent value while enjoying premium comfort and convenience."
  },
  {
    "WhyChooseheading": "24/7 Availability to Match Your Schedule",
    "WhyChoosedescription": "Whether you need an early morning ride to Nashik or a late-night return trip, our services are available 24/7. We cater to all types of schedules — business travel, spontaneous weekend getaways, or scheduled tours. With our always-on availability, you’ll never have to worry about transportation at odd hours or on holidays."
  },
  {
    "WhyChooseheading": "Fast and Hassle-Free Booking Experience",
    "WhyChoosedescription": "Booking your cab is quick and simple with our online platform or phone support. Select your preferred car type, pickup location, and time — and we’ll take care of the rest. Our booking process is designed for speed and ease, with instant confirmations, flexible payment options, and real-time support if you need help along the way."
  },
  {
    "WhyChooseheading": "Well-Maintained and Safe Vehicles",
    "WhyChoosedescription": "We take your safety seriously. All our cars undergo routine mechanical inspections and regular servicing. Vehicles are equipped with seat belts, GPS tracking, and safety essentials. Our drivers are trained in defensive driving techniques and follow all traffic laws, ensuring a secure and worry-free ride to Nashik for you and your loved ones."
  },
  {
    "WhyChooseheading": "Personalized and Customer-Focused Service",
    "WhyChoosedescription": "Every passenger is important to us. Whether you're traveling solo, with family, elderly passengers, or young children, we tailor the ride to your needs. From assisting with luggage to accommodating stops along the way, our drivers and support team go the extra mile to make your Mumbai to Nashik journey smooth, enjoyable, and stress-free."
  }
]


















    }










const faqData = [
  {
    question: "Can I book a cab from Mumbai to Nashik with Deva Cabs?",
    answer: "Yes, Deva Cabs offers reliable cab services from Mumbai to Nashik for all travel needs."
  },
  {
    question: "How long does the journey from Mumbai to Nashik by cab take?",
    answer: "The trip usually takes around 3.5 to 4.5 hours depending on traffic conditions."
  },
  {
    question: "What types of vehicles are available for Mumbai to Nashik transfers?",
    answer: "We offer sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers suitable for solo travelers and groups."
  },
  {
    question: "Can I pre-book a cab for the Mumbai to Nashik route?",
    answer: "Yes, you can easily pre-book through our website, app, or by contacting customer support."
  },
  {
    question: "Are one-way cab services available from Mumbai to Nashik?",
    answer: "Yes, Deva Cabs provides convenient one-way cab services with no return fare required."
  },
  {
    question: "Are tolls and parking charges included in the fare?",
    answer: "Toll and parking fees are generally extra and will be disclosed at the time of booking."
  },
  {
    question: "Is the cab service available at night and early morning?",
    answer: "Yes, we operate 24/7 to accommodate your travel schedule anytime."
  },
  {
    question: "Is it safe to travel alone from Mumbai to Nashik by cab?",
    answer: "Absolutely. All drivers are verified and trained to ensure passenger safety."
  },
  {
    question: "Will the driver wait in case of any delays?",
    answer: "Yes, our drivers are flexible and will wait if you inform them in advance."
  },
  {
    question: "Why choose Deva Cabs for Mumbai to Nashik cab service?",
    answer: "We provide clean vehicles, punctual drivers, transparent pricing, and excellent customer support."
  }
];

const testimonialData = [
  {
    id: 25,
    name: 'Mr. Sunil Patil',
    role: 'Frequent Traveler',
    review: 'Deva Cabs made my trip from Mumbai to Nashik very comfortable and hassle-free. The driver was professional and the vehicle was clean.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 26,
    name: 'Ms. Kavita Rao',
    role: 'Tourist',
    review: 'Highly recommend Deva Cabs for Mumbai to Nashik travel. Reliable service with courteous drivers and comfortable vehicles.',
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
  "name": "Mumbai to Nashik Cab",
  "image": "https://devacab.com/assets/images/mumbai-to-nashik-cab.jpg", // Replace with actual image URL
  "description": "Book affordable and reliable Mumbai to Nashik cab service with Deva Cabs. Choose from AC, SUV, sedan, and chauffeur-driven cabs for one-way, round trip, corporate, and family travel with easy online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Deva Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4200",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/mumbai-to-nashik-cab" // Replace with actual page URL
  }
};





    return (
        <div>

<Helmet>
  <title>Mumbai to Nashik Cab | Affordable & Reliable Taxi Service | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Nashik cab with Deva Cabs. AC, SUV, sedan, and chauffeur-driven cabs available for one-way, round trip, corporate, and family travel. Online booking available." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Nashik Cab, One-way cab Mumbai to Nashik, Book cab Mumbai to Nashik online, SUV cab Mumbai to Nashik, AC taxi Mumbai to Nashik, Sedan cab Mumbai to Nashik, Chauffeur cab service Mumbai to Nashik, Affordable taxi Mumbai to Nashik, Round trip cab Mumbai to Nashik, Luxury car Mumbai to Nashik, Family trip cab Mumbai to Nashik, Mumbai to Nashik corporate cab, Outstation cab Mumbai to Nashik, Premium cab Mumbai to Nashik, Fast cab hire Mumbai to Nashik" 
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
                            <img src='/images/keyword/21.jpg' alt='img' />
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

export default Mumbaitonashikcab;