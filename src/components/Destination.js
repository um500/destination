import Mountain1 from "../assests/2.jpg";
import Mountain2 from "../assests/6.jpg";
import Mountain3 from "../assests/5.jpg";
import Mountain4 from "../assests/8.jpg";

import "./DestinationStyles.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
     <div className="destination">
     <h1> Your Journey</h1>
     <p>Tours give you the opportunity to see a lot, within a time frame.</p>
     <DestinationData 
     className="first-des"
     heading="Plan Your Adventure"
     text = "Unlock the world's wonders with our user-friendly trip planner. Seamlessly navigate destinations, accommodations, and activities to craft your perfect itinerary.Embark on seamless journeys with our intuitive trip planner. Explore destinations, book accommodations, and create unforgettable itineraries with ease."
     img1 ={Mountain1}
     img2 ={Mountain3} 

    />
     <DestinationData 
       className="first-des-reverse"
     heading="Your Journey Awaits"
     text = "Embrace the excitement of exploration using our comprehensive trip planner. From flights to sightseeing, trust us to map out every detail for an unforgettable travel experience.Discover the world with confidence using our comprehensive trip planner. From flights to activities, map out every detail for a memorable travel experience. "
     img1 ={Mountain4}
     img2 ={Mountain2} 

    />


     </div>



    );
}

export default Destination;