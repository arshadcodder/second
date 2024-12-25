import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import faq from "../images/faq.png";
export default function Aianswer () {
    return (
        <>
        <section className="aianswer">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={5} xl={5}>
                    <div className="ai-title">
                    <h6>
                        AI ANSWERS
                    </h6>
                    <h2 className="mt-3">
                    Gain <span><i>full control</i></span> of your information docs and many more
                    </h2>
                    <div className="check mt-4">
                    <i class="fa-solid fa-check"></i>
                    <p>
                    Create a personalized knowledge base on your own Braine library
                    </p>
                    </div>
                    <div className="check mt-2">
                    <i class="fa-solid fa-check"></i>
                    <p>
                    Use your trusted sources to find the answers you need Ai ?
                    </p>
                    </div>
                    <div className="check mt-2">
                    <i class="fa-solid fa-check"></i>
                    <p>
                    Stay in the know with AI Q&A and semantic search
                    </p>
                    </div>
                    <Link to={"/"} className="know mt-4">know more</Link>
                </div>
                    </Col>
                    <Col sm={12} md={12} lg={7} xl={7}>
                    <div className="content-outer">
                        <div className="outer">
                        </div>
                        <div>
                        <img src={faq} width={"100%"} />
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}