import { Col, Container, Row } from "react-bootstrap";
import tabs from "../images/tabs.png";
import { Link } from "react-router-dom";
export default function Aboutone () {
    return (
        <>
        <section className="about-one">
            <Container>
               <Row>
                <Col xl={6}>
                <div className="shadow">
                    <img src={tabs} width={"100%"}/>
                </div>
                </Col>
                <Col xl={6}>
                <div className="sec-title">
                    <h6>About us
                    </h6>
                    <h2 className="mt-3">
                    Crafting of your digital <span><i>narrative discover</i></span> our journey
                    </h2>
                    <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. <h5>Pellentesque sit amet</h5> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue
                    </p>
                    <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.
                    </p>
                    <div className="btn-wrap mt-3 ">
                    <Link to={"/"} className="know">Know more</Link>
                    <h4>4.7</h4>
                    <div className="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <small>Customer rating</small>
                    </div>
                    </div>
                </div>
                </Col>
               </Row>
            </Container>
        </section>
        </>
    )
}