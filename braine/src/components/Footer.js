import { Col, Container, Row } from "react-bootstrap";

export default function Footer () {
    return (
        <>
<section className="footer">
        <Container>
            <Row className="justify-content-between">
                    <Col xl={5}>
                        <div className="footer-newsletter">
                            <h3>Newsletter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis.</p>
                            <form>
                                <div className="input-container">
                                    <i className="fa-regular fa-envelope icon-email"></i>
                                    <input type="email" placeholder="Enter your mail" />
                                </div>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </Col>
                    <Col xl={2}>
                        <ul className="provide-services">
                            <li><a href="#" className="service">Services</a></li>
                            <li><a href="#" className="ai">AI-powered copywriting</a></li>
                            <li><a href="#" className="ai">Blog post generation</a></li>
                            <li><a href="#" className="ai">Social media content</a></li>
                            <li><a href="#" className="ai">Product descriptions</a></li>
                            <li><a href="#" className="ai">Email campaigns</a></li>
                            <li><a href="#" className="ai">Copy writings</a></li>
                            <li><a href="#" className="ai">SEO specialist</a></li>
                        </ul>
                    </Col>
                    <Col xl={2}>
                        <ul className="provide-services">
                            <li><a href="#" className="service">resources</a></li>
                            <li><a href="#" className="ai">Blog</a></li>
                            <li><a href="#" className="ai">FAQs</a></li>
                            <li><a href="#" className="ai">Help center</a></li>
                            <li><a href="#" className="ai">case studies</a></li>
                            <li><a href="#" className="ai">whitepapers</a></li>
                            <li><a href="#" className="ai">Services</a></li>
                        </ul>
                    </Col>
                    <Col xl={2}>
                        <ul className="provide-services">
                            <li><a href="#" className="service">about us</a></li>
                            <li><a href="#" className="ai">Our story</a></li>
                            <li><a href="#" className="ai">Team</a></li>
                            <li><a href="#" className="ai">Careers</a></li>
                            <li><a href="#" className="ai">Testimonials</a></li>
                            <li><a href="#" className="ai">Error 404</a></li>
                        </ul>
                    </Col>
            </Row>
        </Container>
</section>

        </>
    )
}