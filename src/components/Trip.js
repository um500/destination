import "./TripStyles.css";
import React, { useRef, useEffect } from 'react';
import pic1 from "../assests/29.jpg"
import pic2 from "../assests/28.jpg"
import pic3 from "../assests/33.jpg"
import pic4 from "../assests/42.jpg"
import pic5 from "../assests/34.jpg"
import pic6 from "../assests/41.jpg"
import pic7 from "../assests/27.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
function Trip() {
  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const tripData = [
    { id: 1, imgSrc: pic1, Head: 'Restaurant', Data: 'Indulge in diverse cuisines at our curated restaurants, where culinary adventures await at every turn. Enjoy dining excellence today! ' },
    { id: 2, imgSrc: pic2, Head: 'Holy Places', Data: 'Embark on spiritual journeys at revered holy sites, where serenity and reverence await your exploration. Find peace in prayer.' },
    { id: 3, imgSrc: pic3, Head: 'Club', Data: 'Dive into the vibrant nightlife scene at our featured clubs. Dance, socialize, and create unforgettable memories. Lets party!' },
    { id: 4, imgSrc: pic4, Head: 'Park', Data: 'Explore natures beauty at our featured parks. Serene escapes, lush landscapes, and outdoor adventures await your discovery. ' },
    { id: 5, imgSrc: pic5, Head: 'Beach', Data: 'Dive into bliss at our sun-kissed beaches. Relax, unwind, and soak up the coastal charm. Your seaside paradise awaits!' },
    { id: 6, imgSrc: pic7, Head: 'Waterfall', Data: 'Experience natures majesty at our breathtaking waterfalls. Hear the roar, feel the mist, and marvel at cascading wonders.' },
    { id: 7, imgSrc: pic6, Head: 'Monuments', Data: 'Discover historys grandeur at our iconic monuments. Immerse yourself in culture, heritage, and awe-inspiring architecture. Explore monumental legacies today!' }
  ]
  return (
    <div className="trip">
      <h1 > Embark on a Journey</h1>
      <p className="trip-para">Explore Local Delights, Retail Wonders, and Nature Escapes!</p>
      <div className="tripcard">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            560: {
              slidesPerView: 2,
            },
            937: {
              slidesPerView: 2,
            },
            1271: {
              slidesPerView: 3,
            },
          }}
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ type: 'fraction' }}
          className=""
        >
          {tripData.map(collection => (
            <SwiperSlide key={collection.id}>
              <div className="t-card">
                <div className="t-image">
                  <img src={collection.imgSrc} alt="image" />
                </div>
                <h4>{collection.Head}</h4>
                <p>{collection.Data}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="handle_buttons">
        <button className="left" onClick={handlePrev}>
          <IoMdArrowRoundBack />
        </button>
        <button className='right' onClick={handleNext}>
          <IoMdArrowRoundForward />
        </button>

      </div>

    </div>
  )
}


export default Trip;