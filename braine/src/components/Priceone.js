import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import star from "../images/price-stars.png";
export default function Priceone () {
    return (
        <>
        <section className="price-one">
            <Container>
                <div className="price text-center mb-3">
                    <h6>Our Peicing</h6>
                    <h2 className="animate__animated animate__aimated">Join for <span><i>free</i></span> Today</h2>
                        <div className="btn-outer mt-4">
                            <Link to={"/"} className="tab-btn active">Monthly</Link>
                            <Link to={"/"} className="tab">Yearly</Link>
                        </div>
                </div>
                <Row>
                    <Col sm={12} md={12} lg={4} xl={4}>
                    <div className="price-box my-4">
                        <h4>Starter</h4>
                        <h6>Up to 2,000 words / mo</h6>
                    
                    <div className="price-box-content">
                        <span>
                            <sup>$</sup>
                            3
                            <sub>/mo</sub>
                        </span>
                        <small>*Get Braine tailored</small>
                    </div>
                    <Link to-={"/"}>Start 1 month free trail</Link>
                    <div className="check">
                    <h6><i class="fa-solid fa-check"></i>
                        Up to 10,000 words
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to basic tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to AI copywriting tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Email support only
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Advance 700+ tools
                        </h6>
                    </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={4} xl={4}>
                    <div className="professional my-4">
                        <div className="star">
                        <img src={star} />
                        </div>
                    <h4>Starter
                    </h4>
                    <h6>Up to 2,000 words / mo</h6>
                    <div className="professional-box">
                        <span>
                            <sup>$</sup>
                            3
                            <sub>/mo</sub>
                        </span>
                        <small>*Get Braine tailored</small>
                    </div>
                    <Link to-={"/"}>Start 1 month free trail</Link>
                    <div className="check">
                    <h6><i class="fa-solid fa-check"></i>
                        Up to 10,000 words
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to basic tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to AI copywriting tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Email support only
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Advance 700+ tools
                        </h6>
                    </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={4} xl={4}>
                    <div className="price-box my-4">
                        <h4>Starter</h4>
                        <h6>Up to 2,000 words / mo</h6>
                    
                    <div className="price-box-content">
                        <span>
                            <sup>$</sup>
                            3
                            <sub>/mo</sub>
                        </span>
                        <small>*Get Braine tailored</small>
                    </div>
                    <Link to-={"/"}>Start 1 month free trail</Link>
                    <div className="check">
                    <h6><i class="fa-solid fa-check"></i>
                        Up to 10,000 words
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to basic tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Access to AI copywriting tools
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Email support only
                        </h6>
                        <h6><i class="fa-solid fa-check"></i>
                        Advance 700+ tools
                        </h6>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
   
}