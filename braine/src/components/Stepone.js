import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import tone from "../images/tone.png";
import tone2 from "../images/tone2.png";
import tone3 from "../images/tone3.png";
export default function Stepone() {
  return (
    <>
      <section className="step-one">
        <div className="step-one-bg"></div>
        <div className="step"></div>
        <Container>
          <div className="inner">
            <div className="circle-layer"></div>
            <div className="dots-layer">
              <div className="dot-one"></div>
              <div className="dot-two"></div>
            </div>
          </div>
         <Row>
         <Col sm={12} md={12} lg={6} xl={6}>
            <div className="step-title">
              <h6>How its work</h6>
              <h2 className="mt-3">
                 Braine  <span>
                  <i>typically operate</i>
                </span> in a three steps
              </h2>
              <Link to={"/"} className="mt-3">know more</Link>
              <div className="step-block_one my-5">
                <Link to={"/"} className="step-01">step 01</Link>
                <h5 className="mt-4">Algorithm processing</h5>
                <p className="mt-4">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</p>
                <div className="step-block_one-content mt-4">
                <img src={tone} width={"100%"} />
              </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
          <div className="step-title">
          <div className="step-block_one ">
                <Link to={"/"} className="step-01">step 01</Link>
                <h5 className="mt-4">Algorithm processing</h5>
                <p className="mt-4">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</p>
                <div className="step-block_one-content mt-4">
                <img src={tone2} width={"100%"} />
              </div>
              </div>
              <div className="step-block_one mt-5">
                <Link to={"/"} className="step-01">step 01</Link>
                <h5 className="mt-4">Algorithm processing</h5>
                <p className="mt-4">Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</p>
                <div className="step-block_one-content mt-4">
                <img src={tone3} width={"100%"} />
              </div>
              </div>
              </div>
          </Col>
          
         </Row>
        </Container>
      </section>
    </>
  );
}
