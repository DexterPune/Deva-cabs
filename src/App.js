import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import About from './pages/About';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Services from './pages/Services';
import OurFleet from './pages/OurFleet';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import Galleryy from './pages/Gallery';
import ContactInfo from './pages/ContactInfo';
import Enquiry from './pages/Enquiry';
import Cabserviceinpune from './pages/Cab Service in Mumbai';
import ScrollToTop from './components/ScrollToTop';
import Cabserviceinnavimumbai from './pages/Cab Service in Navi Mumbai';
import Cabserviceinthane from './pages/Cab Service in Thane';
import CabSetvicenearmemumbai from './pages/Cab Service Near Me Mumbai';
import Carrentalmumbai from './pages/Car Rental Mumbai';
import Corporatecabserviceinmumbai from './pages/Corporate cab services in mumbai';
import Onlinetaxibookingmumbai from './pages/Online taxi booking mumbai';
import Weddingcarrentalmumbai from './pages/Wedding car rental mumbai';
import TempoTravelleronrentmumbai from './pages/Tempo Traveller On Rent Mumbai';
import Innovacrystaonrentinmumbai from './pages/Innova Crysta on Rent in Mumbai';
import Ertigaonrentinmumbai from './pages/Ertiga on Rent in Mumbai';
import Minibusonrentinmumbai from './pages/Mini Bus on Rent in Mumbai';
import Mumbaiairportcabbooking from './pages/Mumbai Airport Cab Booking';
import Navibookingcarrentalservice from './pages/Navi Mumbai Car Rental Service';
import Mumbaiairporttopunecab from './pages/Mumbai Airport to Pune Cab ';
import Mumbaiairporttoshirditaxi from './pages/Mumbai Airport to Shirdi Taxi';
import Punetomumbaiairportcab from './pages/Pune to Mumbai Airport Cab';
import Puneairporttomumbaicab from './pages/Pune Airport to Mumbai Cab';
import Surattomumbaiairporttaxi from './pages/Surat to Mumbai Airport Taxi';
import Nashiktomumbaiairportcab from './pages/Nashik to Mumbai Airport Cab';
import Mumbaitonashikcab from './pages/Mumbai to Nashik Cab';
import Mumbaitoshirdicabs from './pages/Mumbai to Shirdi Cab';
import Mumbaitolonavalacab from './pages/Mumbai to Lonavala Cab';
import Mumbaitokhandalacab from './pages/Mumbai to Khandala Cab';
import Mumbaitolavasacab from './pages/Mumbai to Lavasa Cab';
import Mumbaitomatherancab from './pages/Mumbai to Matheran Cab';
import Mumbaitokolhapurcab from './pages/Mumbai to Kolhapur Cab';
import Mumbaitomahabalehsawar from './pages/Mumbai to Mahabaleshwar Cab';
import Mumbaitopanchganicab from './pages/Mumbai to Panchgani Cab';
import Mumbaitopandharpurcab from './pages/Mumbai to Pandharpur Cab';
import Mumbaitoashtavinayakcabservice from './pages/Mumbai to Ashtavinayak Cab Service';
import Mumbaitofivejyotilingacabd from './pages/Mumbai to 5 Jyotirlinga Cab';
import Mumbaitobhimashankarcab from './pages/Mumbai to Bhimashankar Cab';
import Mumbaitogoacabs from './pages/Mumbai to Goa Cab';
import Mumbaitoalibaugcab from './pages/Mumbai to Alibaug Cab';
import Mumbaitoimagicacab from './pages/Mumbai to Imagica Cab';
import Mumbaitoindorecab from './pages/Mumbai to Indore Cab';
import Mumbaitojaipurcab from './pages/Mumbai to Jaipur Cab';
import Mumbaitojalgaoncabs from './pages/Mumbai to Jalgaon Cab';
import Mumbaitodhulecabs from './pages/Mumbai to Dhule Cab';
import Mumbaitosataracab from './pages/Mumbai to Satara  Cab';
import Mumbaitosuratcabs from './pages/Mumbai to Surat Cab';
import Mumbaitovadodaracab from './pages/Mumbai to Vadodara (Baroda) Cab';
import Mumbaitoahemdabadcab from './pages/Mumbai to Ahmedabad Cab';
import Mumbaitokonkandarshancab from './pages/Mumbai to Konkan Darshan Cab';
import Mumbaitoganpatipunecab from './pages/Mumbai to Ganpatipule Cab';
import Mumbaitotarkalicab from './pages/Mumbai to Tarkarli Cab';
import Mumbaitomalvancab from './pages/Mumbai to Malvan Cab';
import Mumbaitoraigadcab from './pages/Mumbai to Raigad Cab';
import Punetomumbaicab from './pages/Pune to Mumbai Cab';
import Nashiktomumbaicab from './pages/Nashik to Mumbai Cab';
import Kolhapurtomumbaicabs from './pages/Kolhapur to Mumbai Cab';
import Ahemdabadtomumbaicabs from './pages/Ahmedabad to Mumbai Cab';
import Surattomumbaicab from './pages/Surat to Mumbai Cab';
import Mahabaleshwartomumbaicab from './pages/Mahabaleshwar to Mumbai Cab';
import Panchganitomumbaicabs from './pages/Panchgani to Mumbai Cab';
import Goatomumbaicabs from './pages/Goa to Mumbai Cab';
import Mumbaitokonkancab from './pages/Mumbai to Konkan Cab';
import Mumbaitoaurangabadcab from './pages/Mumbai to Aurangabad Cab';
import Mumbaitoakkalkotcab from './pages/Mumbai to Akkalkot Cab Fare';
import Mumbaitotuljapurcarrental from './pages/Mumbai to Tuljapur Car Rental';
import Mumbaitobanglorecab from './pages/Mumbai to Bangalore Cab';
import Mumbaitodamantaxi from './pages/Mumbai to Daman Taxi';
import Mumbaitokhandalataxi from './pages/Mumbai to Khandala Taxi Fare';
import Mumbaitovapicab from './pages/Mumbai to Vapi Cab';
import Toyotaetionrentinmumbai from './pages/Toyota Etios on Rent in Mumbai';
import Taxiserviceatmumbaiinternationalairport from './pages/Taxi Service at Mumbai International Airport';
import Swiftdzireonrentinmumbai from './pages/Swift Dzire on Rent in Mumbai';
import Sedancabservicemumbai from './pages/Sedan Cab Service Mumbai';
import Roundtripcabbookingmumbai from './pages/Round Trip Cab Booking Mumbai';
import Mumbaioutstationcabs from './pages/Mumbai Outstation Cabs';
import Mumbaidarshancabs from './pages/Mumbai Darshan Cabs';
import Besttaxiserviceinmumbai from './pages/Best Taxi Service in Mumbai';
import ContactButtons from './components/ContactButtons';

import { BrowserRouter } from 'react-router-dom';




function App() {





  return (
    <BrowserRouter>
<ScrollToTop/>
<Header/>
<ContactButtons/>
  
      <Routes>
        
        <Route path="/" element={<HeroSection/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/term-condition" element={<TermsConditions/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/our-fleet" element={<OurFleet/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/gallery" element={<Galleryy/>} />
        <Route path="/contact-us" element={<ContactInfo/>} />
        <Route path="/enquiry" element={<Enquiry/>} />

        <Route path="/Cab-Service-in-Mumbai" element={<Cabserviceinpune/>} />

<Route path="/Cab-Service-in-Navi-Mumbai" element={<Cabserviceinnavimumbai />} />
<Route path="/Cab-Service-in-Thane" element={<Cabserviceinthane />} />
<Route path="/Cab-Service-Near-Me-Mumbai" element={<CabSetvicenearmemumbai />} />
<Route path="/Car-Rental-in-Mumbai" element={<Carrentalmumbai />} />
<Route path="/Corporate-Cab-Services-in-Mumbai" element={<Corporatecabserviceinmumbai />} />
<Route path="/Online-Taxi-Booking-Mumbai" element={<Onlinetaxibookingmumbai />} />
<Route path="/Wedding-Car-Rental-Mumbai" element={<Weddingcarrentalmumbai />} />
<Route path="/Tempo-Traveller-on-Rent-in-Mumbai" element={<TempoTravelleronrentmumbai />} />
<Route path="/Innova-Crysta-on-Rent-in-Mumbai" element={<Innovacrystaonrentinmumbai />} />
<Route path="/Ertiga-on-Rent-in-Mumbai" element={<Ertigaonrentinmumbai />} />
<Route path="/Mini-Bus-on-Rent-in-Mumbai" element={<Minibusonrentinmumbai />} />
<Route path="/Mumbai-Airport-Cab-Booking" element={<Mumbaiairportcabbooking />} />
<Route path="/Navi-Mumbai-Car-Rental-Service" element={<Navibookingcarrentalservice />} />
<Route path="/Mumbai-Airport-to-Pune-Cab" element={<Mumbaiairporttopunecab />} />
<Route path="/Mumbai-Airport-to-Shirdi-Taxi" element={<Mumbaiairporttoshirditaxi />} />
<Route path="/Pune-to-Mumbai-Airport-Cab" element={<Punetomumbaiairportcab />} />
<Route path="/Pune-Airport-to-Mumbai-Cab" element={<Puneairporttomumbaicab />} />
<Route path="/Surat-to-Mumbai-Airport-Taxi" element={<Surattomumbaiairporttaxi />} />



<Route path="/Nashik-to-Mumbai-Airport-Cab" element={<Nashiktomumbaiairportcab />} />
<Route path="/Mumbai-to-Nashik-Cab" element={<Mumbaitonashikcab />} />
<Route path="/Mumbai-to-Shirdi-Cab" element={<Mumbaitoshirdicabs />} />
<Route path="/Mumbai-to-Lonavala-Cab" element={<Mumbaitolonavalacab />} />
<Route path="/Mumbai-to-Khandala-Cab" element={<Mumbaitokhandalacab />} />
<Route path="/Mumbai-to-Lavasa-Cab" element={<Mumbaitolavasacab />} />
<Route path="/Mumbai-to-Matheran-Cab" element={<Mumbaitomatherancab />} />
<Route path="/Mumbai-to-Kolhapur-Cab" element={<Mumbaitokolhapurcab />} />
<Route path="/Mumbai-to-Mahabaleshwar-Cab" element={<Mumbaitomahabalehsawar />} />
<Route path="/Mumbai-to-Panchgani-Cab" element={<Mumbaitopanchganicab />} />
<Route path="/Mumbai-to-Pandharpur-Cab" element={<Mumbaitopandharpurcab />} />
<Route path="/Mumbai-to-Ashtavinayak-Cab-Service" element={<Mumbaitoashtavinayakcabservice />} />
<Route path="/Mumbai-to-5-Jyotirlinga-Cab" element={<Mumbaitofivejyotilingacabd />} />
<Route path="/Mumbai-to-Bhimashankar-Cab" element={<Mumbaitobhimashankarcab />} />
<Route path="/Mumbai-to-Goa-Cab" element={<Mumbaitogoacabs />} />
<Route path="/Mumbai-to-Alibaug-Cab" element={<Mumbaitoalibaugcab />} />
<Route path="/Mumbai-to-Imagica-Cab" element={<Mumbaitoimagicacab />} />
<Route path="/Mumbai-to-Indore-Cab" element={<Mumbaitoindorecab />} />
<Route path="/Mumbai-to-Jaipur-Cab" element={<Mumbaitojaipurcab />} />



<Route path="/Mumbai-to-Jalgaon-Cab" element={<Mumbaitojalgaoncabs />} />
<Route path="/Mumbai-to-Dhule-Cab" element={<Mumbaitodhulecabs />} />
<Route path="/Mumbai-to-Satara-Cab" element={<Mumbaitosataracab />} />
<Route path="/Mumbai-to-Surat-Cab" element={<Mumbaitosuratcabs />} />
<Route path="/Mumbai-to-Vadodara-Baroda-Cab" element={<Mumbaitovadodaracab />} />
<Route path="/Mumbai-to-Ahmedabad-Cab" element={<Mumbaitoahemdabadcab />} />
<Route path="/Mumbai-to-Konkan-Darshan-Cab" element={<Mumbaitokonkandarshancab />} />
<Route path="/Mumbai-to-Ganpatipule-Cab" element={<Mumbaitoganpatipunecab />} />
<Route path="/Mumbai-to-Tarkarli-Cab" element={<Mumbaitotarkalicab />} />
<Route path="/Mumbai-to-Malvan-Cab" element={<Mumbaitomalvancab />} />
<Route path="/Mumbai-to-Raigad-Cab" element={<Mumbaitoraigadcab />} />
<Route path="/Pune-to-Mumbai-Cab" element={<Punetomumbaicab />} />
<Route path="/Nashik-to-Mumbai-Cab" element={<Nashiktomumbaicab />} />
<Route path="/Kolhapur-to-Mumbai-Cab" element={<Kolhapurtomumbaicabs />} />
<Route path="/Ahmedabad-to-Mumbai-Cab" element={<Ahemdabadtomumbaicabs />} />
<Route path="/Surat-to-Mumbai-Cab" element={<Surattomumbaicab />} />
<Route path="/Mahabaleshwar-to-Mumbai-Cab" element={<Mahabaleshwartomumbaicab />} />
<Route path="/Panchgani-to-Mumbai-Cab" element={<Panchganitomumbaicabs />} />
<Route path="/Goa-to-Mumbai-Cab" element={<Goatomumbaicabs />} />



<Route path="/Mumbai-to-Konkan-Cab" element={<Mumbaitokonkancab />} />
<Route path="/Mumbai-to-Aurangabad-Cab" element={<Mumbaitoaurangabadcab />} />
<Route path="/Mumbai-to-Akkalkot-cab-fare" element={<Mumbaitoakkalkotcab />} />
<Route path="/Mumbai-to-Tuljapur-Car-Rental" element={<Mumbaitotuljapurcarrental />} />
<Route path="/Mumbai-to-Bangalore-cab" element={<Mumbaitobanglorecab />} />
<Route path="/Mumbai-to-Daman-taxi" element={<Mumbaitodamantaxi />} />
<Route path="/Mumbai-to-Khandala-Taxi-Fare" element={<Mumbaitokhandalataxi />} />
<Route path="/Mumbai-to-Vapi-Cab" element={<Mumbaitovapicab />} />
<Route path="/Toyota-Etios-on-Rent-in-Mumbai" element={<Toyotaetionrentinmumbai />} />
<Route path="/Taxi-Service-at-Mumbai-International-Airport" element={<Taxiserviceatmumbaiinternationalairport />} />
<Route path="/Swift-Dzire-on-Rent-in-Mumbai" element={<Swiftdzireonrentinmumbai />} />
<Route path="/Sedan-Cab-Service-Mumbai" element={<Sedancabservicemumbai />} />
<Route path="/Round-Trip-Cab-Booking-Mumbai" element={<Roundtripcabbookingmumbai />} />
<Route path="/Mumbai-Outstation-Cabs" element={<Mumbaioutstationcabs />} />
<Route path="/Mumbai-darshan-cabs" element={<Mumbaidarshancabs />} />
<Route path="/Best-taxi-service-in-mumbai" element={<Besttaxiserviceinmumbai />} />

        </Routes>
    <Footer/>
    </BrowserRouter>
 

  );
}

export default App;
