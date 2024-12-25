import { Container, Row, Col } from "react-bootstrap";
import author from "../images/author2.png";
import author3 from "../images/author3.png";
import author4 from "../images/author4.png";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation} from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react";
import React from "react";
export default function Testimonial () {
    return (
        <>
        <section className="testimonial">
            <Container>
                <div className="t-title text-center">
                    <h6>
                    TESTIMONIAL
                    </h6>
                    <h2 className="mx-auto mt-3 mb-3">
                    What our respectable <span><i>clients says</i></span>
                    </h2>
                </div>
      <div className="main-color">
      <Swiper
       pagination={{
        clickable: true,
    }}
    modules={[Pagination, Navigation]}
    navigation={true}
    autoplay={{
        disableOnInteraction: false,
    }}
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1224: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }}
      >
        <SwiperSlide className="mb-4">
  
    <div className="testimonial-block my-4">
      <div className="star mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, 
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
      </p>
      <div className="author mt-4">
        <img src={author} />
          <h5>Marian R. Vieira
          <span>Social Media Manger</span>
          </h5>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="mb-4">
  
    <div className="testimonial-block my-4">
      <div className="star mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, 
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
      </p>
      <div className="author mt-4">
        <img src={author} />
          <h5>Marian R. Vieira
          <span>Social Media Manger</span>
          </h5>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="mb-4 d-none d-xxl-block">  
    <div className="testimonial-block my-4">
      <div className="star mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, 
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
      </p>
      <div className="author mt-4">
        <img src={author3} />
          <h5>Marian R. Vieira
          <span>Social Media Manger</span>
          </h5>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="mb-4 d-none d-xxl-block">  
    <div className="testimonial-block my-4">
      <div className="star mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, 
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
      </p>
      <div className="author mt-4">
        <img src={author3} />
          <h5>Marian R. Vieira
          <span>Social Media Manger</span>
          </h5>
      </div>
    </div>
  </SwiperSlide>
<SwiperSlide className="mb-4 d-none d-xxl-block">
    <div className="testimonial-block my-4">
      <div className="star mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, 
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
      </p>
      <div className="author mt-4">
        <img src={author4} />
          <h5>Marian R. Vieira
          <span>Social Media Manger</span>
          </h5>
      </div>
    </div>
</SwiperSlide>
      </Swiper>
      </div>
            </Container>
        </section>
        </>
    )
}