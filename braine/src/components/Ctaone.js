import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import card from "../images/cta-cards.png";
import girl from "../images/cta.png";
export default function Ctaone () {
    return (
        <>
        <section className="cta-one">
                <Container>
                <div className="inner-container">
                <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                <div className="cta-inner mb-4">
                    <h2>Craft your next great <span><i>content now.</i></span> </h2>
                    <Link to={"/"}>Get started free</Link>
                </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                <div className="cta-one-image-outer">
                    <div className="cta-cards">
                        <img src={card} />
                    </div>
                    <div className="cta-image">
                        <img src={girl} />
                    </div>
                </div>
                </Col>
                </Row>
            </div>
            </Container>
        </section>
        </>
    )
}