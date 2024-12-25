import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import service from "../images/service.png";
import service1 from "../images/service1.png";
export default function Service1 () {
    return (
        <>
        <section className="service1">
            <Container>
            <div className="service-title">
                <h6>
                OUR SERVICE
                </h6>
                <h2 className="mx-auto">
                Experience our latest <span><i>new feature</i></span>
                </h2>
            </div>
            <Row>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="marketers my-4">
              <div className="main-mike">
              <i class="fa-solid fa-bullhorn mike"></i>
              </div>
              <h4 className="mt-4">Digital marketers</h4>
             <p className="mt-3"> Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..</p>
             <div className="lower d-flex justify-content-between">
                <h6>01</h6>
                <Link to={"/"}>Join now +</Link>
             </div>
                </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="marketers my-4">
              <div className="main-mike">
              <i class="fa-solid fa-bullhorn mike"></i>
              </div>
              <h4 className="mt-4">Digital marketers</h4>
             <p className="mt-3"> Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..</p>
             <div className="lower d-flex justify-content-between">
                <h6>01</h6>
                <Link to={"/"}>Join now +</Link>
             </div>
                </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="marketers my-4">
              <div className="main-mike">
              <i class="fa-solid fa-bullhorn mike"></i>
              </div>
              <h4 className="mt-4">Digital marketers</h4>
             <p className="mt-3"> Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..</p>
             <div className="lower d-flex justify-content-between">
                <h6>01</h6>
                <Link to={"/"}>Join now +</Link>
             </div>
                </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="marketers my-4">
              <div className="main-mike">
              <i class="fa-solid fa-bullhorn mike"></i>
              </div>
              <h4 className="mt-4">Digital marketers</h4>
             <p className="mt-3"> Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..</p>
             <div className="lower d-flex justify-content-between">
                <h6>01</h6>
                <Link to={"/"}>Join now +</Link>
             </div>
                </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="marketers my-4">
              <div className="main-mike">
              <i class="fa-solid fa-bullhorn mike"></i>
              </div>
              <h4 className="mt-4">Digital marketers</h4>
             <p className="mt-3"> Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..</p>
             <div className="lower d-flex justify-content-between">
                <h6>01</h6>
                <Link to={"/"}>Join now +</Link>
             </div>
                </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={12}>
                <div className="more my-4">
                    <img src={service} />
                    <h4 className="mt-4">More service</h4>
                    <p className="mt-4">
                    Lorem ipsum dolor sit ame consectetur.
                    </p>
                    <Link to={"/"} className="mt-4">learn more</Link>
                    <span>
                     <img src={service1} />
                    </span>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
        </>
    )
}