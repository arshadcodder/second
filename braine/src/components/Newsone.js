import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import newsai from "../images/news-1.jpg";
import newsai2 from "../images/news-2.jpg";
import newsai3 from "../images/news-3.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation} from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react";
import React from "react";
export default function Newsone () {
    return (
        <>
        <section className="news-one">
            <div className="new-one-shadow"></div>
            <div className="new-one-shadow-2"></div>
            <Container>
                <div className="news-title text-center">
                    <h6>our blog</h6>
                    <h2 className="mx-auto mt-2">Read our latest <span><i>blogs</i></span></h2>
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
        <div className="new-block-one-inner mb-5">
      <div className="box-image">
          <Link to={"/"}>
      <img src={newsai} width={"100%"} />
      </Link>
       </div>
       <div className="new-block-content">
       <Link to={"/"}>Transforming industries and shaping the future</Link>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
       </div>
       <div className="style-btn">
          <Link to={"/"}>Read more</Link>
       </div>
   </div>
   </SwiperSlide>
   <SwiperSlide className="mb-4">
        <div className="new-block-one-inner mb-5">
      <div className="box-image">
          <Link to={"/"}>
      <img src={newsai2} width={"100%"} />
      </Link>
       </div>
       <div className="new-block-content">
       <Link to={"/"}>Transforming industries and shaping the future</Link>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
       </div>
       <div className="style-btn">
          <Link to={"/"}>Read more</Link>
       </div>
   </div>
   </SwiperSlide>
   <SwiperSlide className="mb-4 d-none d-xxl-block">
        <div className="new-block-one-inner mb-5">
      <div className="box-image">
          <Link to={"/"}>
      <img src={newsai3} width={"100%"} />
      </Link>
       </div>
       <div className="new-block-content">
       <Link to={"/"}>Transforming industries and shaping the future</Link>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
       </div>
       <div className="style-btn">
          <Link to={"/"}>Read more</Link>
       </div>
   </div>
   </SwiperSlide>
   <SwiperSlide className="mb-4 d-none d-xxl-block">
        <div className="new-block-one-inner mb-5">
      <div className="box-image">
          <Link to={"/"}>
      <img src={newsai} width={"100%"} />
      </Link>
       </div>
       <div className="new-block-content">
       <Link to={"/"}>Transforming industries and shaping the future</Link>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
       </div>
       <div className="style-btn">
          <Link to={"/"}>Read more</Link>
       </div>
   </div>
   </SwiperSlide>
   <SwiperSlide className="mb-4 d-none d-xxl-block">
        <div className="new-block-one-inner mb-5">
      <div className="box-image">
          <Link to={"/"}>
      <img src={newsai2} width={"100%"} />
      </Link>
       </div>
       <div className="new-block-content">
       <Link to={"/"}>Transforming industries and shaping the future</Link>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
       </div>
       <div className="style-btn">
          <Link to={"/"}>Read more</Link>
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