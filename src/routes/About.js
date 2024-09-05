import Hero from"../components/Hero";
import Navbar from"../components/Navbar";
import AboutImg from"../assests/19.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return(
        <>
    <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg = {AboutImg}
    title="About Us"
    text = "Choose Your Favourite Destination.Start Your Journey"
    btnClass = "hide"
     />
         <AboutUs/>
            <Footer/>
        
        </>
    )
    }
    export default About;