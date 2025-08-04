
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQ from './FAQ';


function Cabserviceinpune() {



    const cardData =
    {
        keyword: 'Cab service in Mumbai',
        heading: 'Deva Cabs: Cab service in Mumbai',
        headingDescription: 'Deva Cabs offers reliable, comfortable, and hassle-free cab services across Mumbai. Whether you are heading to a business meeting, a local attraction, or catching a flight, our professional drivers and well-maintained fleet ensure a smooth and safe journey. Mumbai is a bustling city with heavy traffic, and our experienced chauffeurs navigate it efficiently to get you to your destination on time. We offer a variety of vehicle options tailored to your travel needs, ensuring every ride is convenient, comfortable, and punctual.',

        top: 'Top Places to Visit in Mumbai with Deva Cabs',

        "topPlaces": [
            {
                "title": "Gateway of India",
                "location": "Mumbai, Maharashtra",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built in 1924 to commemorate the visit of King George V and Queen Mary. Overlooking the Arabian Sea, this grand archway is a popular gathering spot for locals and tourists alike. Surrounded by bustling street vendors and historical buildings like the Taj Mahal Palace Hotel, it’s an excellent starting point for exploring South Mumbai’s colonial architecture and coastal charm."
            },
            {
                "title": "Marine Drive",
                "location": "Mumbai, Maharashtra",
                "description": "Marine Drive is a scenic 3.6-kilometer-long boulevard along the coast of South Mumbai, often called the 'Queen’s Necklace' because of its glittering lights at night. This seaside promenade offers mesmerizing sunset views, cool sea breezes, and a peaceful atmosphere, making it a favorite spot for evening walks, jogging, or simply relaxing by the Arabian Sea. It's also a cultural hotspot, close to art deco buildings and theatres like NCPA."
            },
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "location": "Mumbai, Maharashtra",
                "description": "A UNESCO World Heritage Site, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus) is a breathtaking example of Victorian Gothic architecture fused with Indian influences. This historic railway station is not just a transit hub but a marvel of craftsmanship, with ornate domes, turrets, and stained-glass windows. Its grandeur reflects the colonial era’s architectural ambition and remains a must-see for architecture and history enthusiasts."
            },
            {
                "title": "Elephanta Caves",
                "location": "Elephanta Island, Mumbai Harbour",
                "description": "The Elephanta Caves are a UNESCO World Heritage Site located on Elephanta Island, just a ferry ride away from Mumbai’s Gateway of India. These ancient rock-cut caves date back to the 5th to 7th centuries and are dedicated primarily to Lord Shiva. The intricate sculptures and carvings, including the famous Trimurti sculpture, offer deep insights into India’s rich religious and artistic heritage. Surrounded by lush greenery and scenic views, the island is a peaceful escape from the city."
            },
            {
                "title": "Siddhivinayak Temple",
                "location": "Prabhadevi, Mumbai, Maharashtra",
                "description": "Shree Siddhivinayak Ganapati Temple is one of Mumbai’s most revered spiritual sites, dedicated to Lord Ganesha. Devotees from across the country visit this temple to seek blessings, especially on Tuesdays. With its gold-plated inner sanctum and beautifully carved wooden doors, the temple is not only a religious landmark but also an architectural gem that reflects devotion and faith amidst the city’s hustle."
            },
            {
                "title": "Juhu Beach",
                "location": "Mumbai, Maharashtra",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai, known for its vibrant street food scene, especially local favorites like pav bhaji, bhel puri, and kulfi. The beach is a hotspot for both tourists and locals, offering a relaxed atmosphere to watch the sunset, fly kites, or simply enjoy a casual stroll. It’s also frequented by Bollywood celebrities due to its proximity to upscale residential areas."
            },
            {
                "title": "Haji Ali Dargah",
                "location": "Worli, Mumbai, Maharashtra",
                "description": "The Haji Ali Dargah is a stunning example of Indo-Islamic architecture, located on an islet off the coast of Worli. Connected by a narrow causeway, the dargah houses the tomb of Pir Haji Ali Shah Bukhari and attracts people of all faiths. With the sea surrounding it on all sides, it offers a serene and spiritual ambiance, especially during high tide when the path appears to float on water."
            },
            {
                "title": "Chor Bazaar",
                "location": "Mumbai, Maharashtra",
                "description": "Chor Bazaar, meaning 'Thieves Market', is one of the oldest and most fascinating flea markets in India. A treasure trove for antique lovers, this bustling bazaar offers everything from vintage Bollywood posters and brassware to rare collectibles and furniture. While the name has a mysterious origin, the market’s quirky charm and eclectic finds make it a favorite for bargain hunters and culture seekers."
            },
            {
                "title": "Sanjay Gandhi National Park",
                "location": "Borivali, Mumbai, Maharashtra",
                "description": "Sanjay Gandhi National Park is a lush green haven in the middle of Mumbai’s urban sprawl. Covering over 100 square kilometers, it offers walking trails, boating, a mini-zoo, and the famous Kanheri Caves—ancient Buddhist rock-cut monuments. Ideal for nature lovers, hikers, and families, the park provides a refreshing escape with its diverse flora, fauna, and tranquil atmosphere."
            },
            {
                "title": "Chowpatty Beach",
                "location": "Girgaon, Mumbai, Maharashtra",
                "description": "Girgaon Chowpatty is another iconic beach in Mumbai known for its lively atmosphere and festive celebrations, especially during Ganesh Visarjan. Lined with street vendors, balloon sellers, and snack stalls, it's a perfect place to enjoy local treats while watching the waves. The beach offers a mix of cultural vibrancy and scenic beauty, right at the heart of the city."
            }
        ],




        "services": [
            {
                "name": "Gateway of India Taxi Service",
                "description": "Explore the iconic Gateway of India with Deva Cabs. We offer reliable and affordable taxi services to and from this historic landmark, ensuring a smooth and enjoyable ride."
            },
            {
                "name": "Shirdi Taxi Services",
                "description": "Deva Cabs provides safe and comfortable taxi services from Mumbai to Shirdi. Whether for a pilgrimage or a relaxing trip, our professional drivers will get you there stress-free."
            },
            {
                "name": "Mumbai Darshan Cabs",
                "description": "Discover Mumbai’s top tourist attractions with Deva Cabs' Mumbai Darshan services. Our experienced drivers and well-maintained vehicles make sightseeing easy and comfortable."
            },
            {
                "name": "Taxi Service for Outstation Travel",
                "description": "Planning an outstation trip? Deva Cabs offers dependable and affordable taxi services for outstation travel from Mumbai. Choose from a variety of vehicles for a comfortable journey."
            },
            {
                "name": "Cheapest Cab Service in Mumbai",
                "description": "Looking for budget-friendly taxi options in Mumbai? Deva Cabs offers the most affordable cab services in the city without compromising on quality and safety."
            },
            {
                "name": "Pune to Mumbai Taxi",
                "description": "Travel from Pune to Mumbai with ease using Deva Cabs. Our professional taxi services ensure timely pick-up, safe travel, and comfortable vehicles for your convenience."
            },
            {
                "name": "Best Cab Service in Mumbai",
                "description": "Deva Cabs is known for providing the best cab services in Mumbai. With trained drivers, clean cars, and timely service, we make every journey a pleasant experience."
            },
            {
                "name": "Cabs in Mumbai for Outstation",
                "description": "Need a cab from Mumbai to an outstation destination? Deva Cabs offers convenient and reliable outstation cab services with a wide fleet of cars to choose from."
            },
            {
                "name": "Online Cab Booking in Mumbai",
                "description": "Book your ride online with Deva Cabs in just a few clicks. Our easy-to-use booking system allows you to schedule a cab in Mumbai from the comfort of your home."
            },
            {
                "name": "Mumbai Car Rental Service",
                "description": "Deva Cabs offers flexible and affordable car rental services in Mumbai. Whether for business, leisure, or daily commuting, we have a wide range of vehicles to suit your needs."
            }
        ],
        "tableData": [
            ["Gateway of India Taxi Service", "-Shirdi Taxi Services"],
            ["Mumbai Darshan Cabs", "-Taxi Service for Outstation Travel"],
            ["Cheapest Cab Service in Mumbai", "-Pune to Mumbai Taxi"],
            ["Best Cab Service in Mumbai", "-Cabs in Mumbai for Outstation"],
            ["Online Cab Booking in Mumbai", "-Mumbai Car Rental Service"]
        ],

        whychoose: [
            {
                "WhyChooseheading": "Reliable and On-Time Service",
                "WhyChoosedescription": "At Deva Cabs, we value your time. Whether you’re commuting for work or catching a flight, our drivers ensure prompt pickups and drop-offs across Mumbai, making your journey hassle-free and punctual."
            },
            {
                "WhyChooseheading": "Comfortable and Spacious Vehicles",
                "WhyChoosedescription": "Our fleet includes a wide range of clean and well-maintained vehicles with ample legroom, air conditioning, and modern features to ensure your comfort throughout the ride in Mumbai."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Deva Cabs drivers are highly trained and well-versed with Mumbai’s roads and traffic patterns. Their professional behavior and navigation skills guarantee a smooth and safe journey."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing",
                "WhyChoosedescription": "We offer competitive and clear pricing without hidden charges. With Deva Cabs, what you see is what you pay—making it easier to manage your travel budget."
            },
            {
                "WhyChooseheading": "Safe and Comfortable Journey",
                "WhyChoosedescription": "Your safety is our top priority. Our cabs are regularly inspected and equipped with essential safety features, including GPS, airbags, and seat belts, to ensure a secure trip every time."
            },
            {
                "WhyChooseheading": "24/7 Availability",
                "WhyChoosedescription": "Whether it's early morning or late at night, Deva Cabs is available round the clock to serve your transportation needs anywhere in Mumbai."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process",
                "WhyChoosedescription": "Book your ride quickly through our website or call our customer support. Deva Cabs makes the booking process smooth, fast, and user-friendly."
            },
            {
                "WhyChooseheading": "Customized Travel Solutions",
                "WhyChoosedescription": "From one-way drops to hourly rentals or full-day hires, Deva Cabs offers tailored travel solutions to suit your specific needs in and around Mumbai."
            }
        ]

















    }


    const faqData = [
        {
            question: "How can I book a cab with Deva Cabs in Mumbai?",
            answer: "Booking a cab with Deva Cabs is easy. You can reserve your ride through our website, mobile app, or by calling our customer support team directly."
        },
        {
            question: "What areas do Deva Cabs operate in within Mumbai?",
            answer: "Deva Cabs provides reliable cab service across all major areas in Mumbai, including South Mumbai, Western and Eastern suburbs, Navi Mumbai, and more."
        },
        {
            question: "What types of vehicles are available with Deva Cabs?",
            answer: "We offer a wide range of vehicles including hatchbacks, sedans, SUVs, and premium cars to suit your travel preferences and group size."
        },
        {
            question: "Are Deva Cabs available 24/7 in Mumbai?",
            answer: "Yes, our cab services in Mumbai are available 24/7, ensuring you have access to safe and comfortable rides any time of the day or night."
        },
        {
            question: "Can I book a cab for outstation travel from Mumbai?",
            answer: "Absolutely. Deva Cabs offers outstation travel options from Mumbai to destinations like Pune, Nashik, Lonavala, and more. Pre-booking is recommended."
        },
        {
            question: "Do Deva Cabs offer airport transfer services in Mumbai?",
            answer: "Yes, we specialize in airport pick-up and drop-off services for both domestic and international terminals at Mumbai Airport."
        },
        {
            question: "What are the payment options for Deva Cabs?",
            answer: "You can pay via cash, credit/debit cards, UPI, or through our mobile app for a seamless experience."
        },
        {
            question: "Are Deva Cabs safe for solo and female travelers?",
            answer: "Yes, we prioritize passenger safety. Our cabs are GPS-enabled, and our drivers are verified and trained to ensure a safe journey."
        },
        {
            question: "Can I schedule a ride in advance with Deva Cabs?",
            answer: "Yes, advance bookings are available. Just choose your date and time while booking online or via phone, and we’ll ensure timely pick-up."
        },
        {
            question: "Why should I choose Deva Cabs for cab service in Mumbai?",
            answer: "Deva Cabs stands out for its reliability, clean vehicles, courteous drivers, and competitive pricing. Whether you're commuting within Mumbai or traveling outstation, we offer a smooth and dependable service."
        }
    ];

    const testimonialData = [
        {
            id: 1,
            name: 'Mr. Rajesh Mehta',
            role: 'Frequent Commuter',
            review: 'Deva Cabs made my daily commute in Mumbai stress-free. The drivers are always on time, and the vehicles are clean and comfortable. Highly recommend their services!',
            rating: 5,
            quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
            id: 2,
            name: 'Ms. Priya Nair',
            role: 'Corporate Executive',
            review: 'I regularly use Deva Cabs for airport transfers and business meetings across Mumbai. Their punctuality and professionalism are unmatched!',
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
  "name": "Cab Service in Mumbai",
  "image": "https://devacab.com/assets/images/cab-service-in-mumbai.jpg", // Replace with actual image URL
  "description": "Reliable and affordable cab service in Mumbai by Deva Cabs. Book taxis for airport transfers, city tours, daily hires, corporate travel, weddings, events, and more. Luxury and economy cabs available.",
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
    "price": "499",
    "availability": "https://schema.org/InStock",
    "url": "https://devacab.com/cab-service-in-mumbai" 
  }
};




    return (
        <div>

<Helmet>
  <title>Cab Service in Mumbai | Mumbai Taxi Booking & Airport Cab | Deva Cabs</title>
  <meta 
    name="description" 
    content="Book reliable cab service in Mumbai with Deva Cabs. Mumbai airport transfers, city tours, corporate travel, weddings, events & daily hire cabs. Affordable luxury and economy taxis available." 
  />
  <meta 
    name="keywords" 
    content="Cab Service in Mumbai, Mumbai taxi booking, Mumbai local cab service, Mumbai airport cab service, Mumbai city tour cab, Mumbai daily hire taxi, Mumbai corporate cab, Mumbai outstation taxi, Mumbai wedding car service, Mumbai limo rental, Mumbai cab for events, Mumbai monthly cab hire, Mumbai chauffeur service, Affordable cab Mumbai, Luxury cab Mumbai, Mumbai cab near me, Book cab Mumbai online, Economy cab Mumbai, Premium cab Mumbai, Mumbai cab for family trips" 
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
                            <img src='/images/keyword/1.jpg' alt='img' />
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

export default Cabserviceinpune;