import Hero from"../components/Hero";
import Navbar from"../components/Navbar";
import ContactImg from"../assests/18.jpg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";


function Contact() {
    return(
        <>
    <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg = {ContactImg}
    title="Contact Us"
    text = "Choose Your Favourite Destination.Start Your Journey"
    btnClass = "hide"
     />

     <ContactUs/>
         <Footer/>  
        
        </>
    )
    }
    export default Contact;