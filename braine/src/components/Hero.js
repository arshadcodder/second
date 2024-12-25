import { Col, Container, Row } from "react-bootstrap";
import hand from "../images/hand.png";
import { Link } from "react-router-dom";
import girl from "../images/girl.png";
import small from "../images/small.png";   
import percentage from "../images/percentage.png";
import graph from "../images/graph.png"; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react";
import React from "react";
export default function Hero () {
    return (
        <>
       <div className="main-match">
       <Swiper
       pagination={{
        clickable: true,
    }}
    modules={[Pagination, Navigation, Autoplay]}
    navigation={true}
    autoplay={{
        delay: 2000,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }}
      >
        <SwiperSlide>  <section className="hero-sectione">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={7} xl={7}>
                    <div className="slider-one-content my-4">
                        <div className="one-title">
                        <h5 className="d-flex gap-3">
                            <i>
                                <img src={hand} />
                            </i>
                        AI makes content fast & easy
                        </h5>   
                        </div>
                        <h1 className="mt-3">
                        Crafting digital brilliance <span>AI-Driven</span> copywriting
                        </h1>
                        <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        </p>
                        <div className="started d-flex gap-4 mt-4">
                            <Link to={"/"} className="get">Get started free</Link>
                            <Link to={"https://www.youtube.com/watch?v=kxPCFljwJws"} className="play"><i class="fa-solid fa-play"></i></Link>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={5} xl={5}>
                    <div className="slider-one_image-outer my-4">
                        <div>
                        <img src={girl} width={"100%"}/>
                        </div>
                        <div className="author-name">
                            <i><img src={small} /></i>
                            <h5 className="mt-2">Sara Ven</h5>
                            <p className="mt-2">Social media mange</p>
                        </div>
                        <div className="percentage">
                            <img src={percentage} width={"170px"}/>
                            <div className="percent">
                            <span>
                            <i class="fa-solid fa-arrow-up aerrow"></i>
                                90
                                <sub>%</sub>
                            </span>
                                <p>efficiency</p>
                            </div>
                        </div>
                        <div className="graph">
                            <div className="graph-title">
                                <h5>Annual goal</h5>
                                <span>$98,541
                                    <sup>
                                    <i class="fa-solid fa-angle-up"></i>
                                    110%
                                    </sup>
                                </span>
                            </div>
                            <img src={graph} />
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section></SwiperSlide>
        <SwiperSlide>  <section className="hero-sectione">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={7} xl={7}>
                    <div className="slider-one-content my-4">
                        <div className="one-title">
                        <h5 className="d-flex gap-3">
                            <i>
                                <img src={hand} />
                            </i>
                        AI makes content fast & easy
                        </h5>   
                        </div>
                        <h1 className="mt-3">
                        Crafting digital brilliance <span>AI-Driven</span> copywriting
                        </h1>
                        <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        </p>
                        <div className="started d-flex gap-4 mt-4">
                            <Link to={"/"} className="get">Get started free</Link>
                            <Link to={"https://www.youtube.com/watch?v=kxPCFljwJws"} className="play"><i class="fa-solid fa-play"></i></Link>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={5} xl={5}>
                    <div className="slider-one_image-outer my-4">
                        <div>
                        <img src={girl} width={"100%"}/>
                        </div>
                        <div className="author-name">
                            <i><img src={small} /></i>
                            <h5 className="mt-2">Sara Ven</h5>
                            <p className="mt-2">Social media mange</p>
                        </div>
                        <div className="percentage">
                            <img src={percentage} width={"170px"}/>
                            <div className="percent">
                            <span>
                            <i class="fa-solid fa-arrow-up aerrow"></i>
                                90
                                <sub>%</sub>
                            </span>
                                <p>efficiency</p>
                            </div>
                        </div>
                        <div className="graph">
                            <div className="graph-title">
                                <h5>Annual goal</h5>
                                <span>$98,541
                                    <sup>
                                    <i class="fa-solid fa-angle-up"></i>
                                    110%
                                    </sup>
                                </span>
                            </div>
                            <img src={graph} />
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section></SwiperSlide>
        <SwiperSlide>  <section className="hero-sectione">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={7} xl={7}>
                    <div className="slider-one-content my-4">
                        <div className="one-title">
                        <h5 className="d-flex gap-3">
                            <i>
                                <img src={hand} />
                            </i>
                        AI makes content fast & easy
                        </h5>   
                        </div>
                        <h1 className="mt-3">
                        Crafting digital brilliance <span>AI-Driven</span> copywriting
                        </h1>
                        <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        </p>
                        <div className="started d-flex gap-4 mt-4">
                            <Link to={"/"} className="get">Get started free</Link>
                            <Link to={"https://www.youtube.com/watch?v=kxPCFljwJws"} className="play"><i class="fa-solid fa-play"></i></Link>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={5} xl={5}>
                    <div className="slider-one_image-outer my-4">
                        <div>
                        <img src={girl} width={"100%"}/>
                        </div>
                        <div className="author-name">
                            <i><img src={small} /></i>
                            <h5 className="mt-2">Sara Ven</h5>
                            <p className="mt-2">Social media mange</p>
                        </div>
                        <div className="percentage">
                            <img src={percentage} width={"170px"}/>
                            <div className="percent">
                            <span>
                            <i class="fa-solid fa-arrow-up aerrow"></i>
                                90
                                <sub>%</sub>
                            </span>
                                <p>efficiency</p>
                            </div>
                        </div>
                        <div className="graph">
                            <div className="graph-title">
                                <h5>Annual goal</h5>
                                <span>$98,541
                                    <sup>
                                    <i class="fa-solid fa-angle-up"></i>
                                    110%
                                    </sup>
                                </span>
                            </div>
                            <img src={graph} />
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section></SwiperSlide>
      </Swiper>
       </div>
        </>
    );
};
   