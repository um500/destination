import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from"../components/Hero";
import Navbar from"../components/Navbar";
import Trip from "../components/Trip";
import HomeImg from "../assests/40.jpg";



function Home(props) {
return(
    <>
    
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg ={HomeImg}
    title="Map Your Dreams with ExploreMate"
    text = "Where Dreams Become Destinations, Your Journey Awaits."
    buttonText = "Create a trip"
    url ="/"
    btnClass = "show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
)
}
export default Home;