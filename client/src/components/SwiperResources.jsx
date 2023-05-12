import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
//import images
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";

const ResourceSwiper =  [
  
    {
        title: "Orchid",
        description: "Orchids are plants that belong to the family Orchidaceae, a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Orchidaceae is one of the two largest families of flowering plants, along with the Asteraceae.",
        
        explore: "https://en.wikipedia.org/wiki/Orchid"
      },
      {
        title: "Hydrangea",
        description: "Hydrangea, commonly named the hortensia, is a genus of more than 75 species of flowering plants native to Asia and the Americas. By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan.",
        
        explore: "https://en.wikipedia.org/wiki/Hydrangea"
      },
      {
        title: "Lily",
        description: "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world.",
       
        explore: "https://en.wikipedia.org/wiki/Lily"
      },
    
      {
        title: "Tulip",
        description: "Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.",
       
        explore: "https://en.wikipedia.org/wiki/Tulip"
      },
      {
        title: "Chrysanthemum",
        description: "Chrysanthemums, sometimes called mums or chrysanths, are flowering plants of the genus Chrysanthemum in the family Asteraceae. They are native to East Asia and northeastern Europe. Most species originate from East Asia and the center of diversity is in China. Countless horticultural varieties and cultivars exist.",
       
        explore: "https://en.wikipedia.org/wiki/Chrysanthemum"
      },
  ]


const Resources = () => {
  return (
    <div className='carousel'>
    <div>
        <div className='carousel-content'>
            <span>discover</span>
            <h1>React Image Slider</h1>
            <hr />
            <p>React Image Slider using the Swiper Framework</p>
        </div>
    </div>

    <Swiper 
    className='myswiper'
    modules={[Pagination, EffectCoverflow, Autoplay]}
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    }}
    loop={true}
    pagination={{clickable: true}}

    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
    breakpoints={{
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        },
    }}
    
    >
       <SwiperSlide>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="slide_image" />
        </SwiperSlide> <SwiperSlide>
          <img src={img15} alt="slide_image" />
        </SwiperSlide>

        {
            ResourceSwiper.map(data => (
                <SwiperSlide style={{ backgroundimg: `url(${data.img})` }} className="myswiper-slider">
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <a href={`${data.explore}`} target="_blank" className='slider-btn'>explore</a>
                    </div>
                </SwiperSlide>
            ))
        }
    

    <img src={img1} alt="bg image" className='bgdonut1' />
    <img src={img2} alt="bg image" className='bgdonut2' />
    <img src={img3} alt="bg image" className='bgdonut2' />
    <img src={img4} alt="bg image" className='bgdonut2' />
    <img src={img5} alt="bg image" className='bgdonut2' />
    <img src={img6} alt="bg image" className='bgdonut2' />
    <img src={img7} alt="bg image" className='bgdonut2' />
    <img src={img8} alt="bg image" className='bgdonut2' />
    <img src={img9} alt="bg image" className='bgdonut2' />
    <img src={img10} alt="bg image" className='bgdonut2' />
    <img src={img13} alt="bg image" className='bgdonut2' />
    <img src={img14} alt="bg image" className='bgdonut2' />
    <img src={img15} alt="bg image" className='bgdonut2' />
    </Swiper>
</div>
)
}



export default Resources;


     
     
       
       
