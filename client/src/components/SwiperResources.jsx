import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import PictureCard from "./Card";

//import images
// import img1 from "../img/img1.jpg";
// import img2 from "../img/img2.jpg";
// import img3 from "../img/img3.jpg";
// import img4 from "../img/img4.jpg";
// import img5 from "../img/img5.jpg";

const PowerPointSwiper = () => {
  return (
    <div className="container py-4 px-4 justify-content-center bg-">
      <Swiper
        freeMode={true}
        grapCursor={true}
        modules={[FreeMode]}
        classNmae="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
      >
        <SwiperSlide>
           
          <PictureCard data={{imgSrc :img1, text:'aa', title:'gggg'}} />
        </SwiperSlide>
       
        <SwiperSlide>
          
          <PictureCard data={{imgSrc :img2, text:'aa', title:'gggg'}} />
        </SwiperSlide>
        <SwiperSlide>
          
          <PictureCard data={{imgSrc :img3, text:'aa', title:'gggg'}} />
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 9</h1>
          <PictureCard data={{imgSrc :img4, text:'aa', title:'gggg'}} />
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 10</h1>
          <PictureCard data={{imgSrc :img5, text:'aa', title:'gggg'}} />
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 11</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PowerPointSwiper;
