import { Col, Container, Row } from "react-bootstrap";

export default function Chooseone  () {
    return (
        <>
        <section className="chooseone">
            <Container>
                <div className="c-title text-center">
                    <h5>
                    WHY CHOSE US
                    </h5>
                    <h2 className="mx-auto mt-3 mb-4">Reason to chose our <span><i>platform</i></span></h2>
                </div>
                <Row>
                <Col sm={12} md={12} lg={4} xl={4} >
                <div className="counter my-4">
                <i class="fa-brands fa-instagram"></i>
                <h3 className="mt-3">8,000+</h3>
                <p className="mt-3">More than 8,000 customers have experimented with Kafkai</p>
                </div>
                </Col>
                <Col sm={12} md={12} lg={4} xl={4} >
                <div className="counter my-4">
                <i class="fa-brands fa-instagram"></i>
                <h3 className="mt-3">500,000+</h3>
                <p className="mt-3">More than 8,000 customers have experimented with Kafkai</p>
                </div>
                </Col>
                <Col sm={12} md={12} lg={4} xl={4} >
                <div className="counter my-4">
                <i class="fa-brands fa-instagram"></i>
                <h3 className="mt-3">200,000+</h3>
                <p className="mt-3">More than 8,000 customers have experimented with Kafkai</p>
                </div>
                </Col>
                </Row>
                
            </Container>
            </section> 
        </>
    )
}