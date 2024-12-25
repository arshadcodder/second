import { Container, Form } from "react-bootstrap";
import logo from "../images/social-logo.png";
import { Link } from "react-router-dom";
import social1 from "../images/social-1.png";
import social2 from "../images/social2.png";
import social3 from "../images/social3.png";
import social4 from "../images/social4.png";
import social5 from "../images/social5.png";
import social6 from "../images/social6.png";
import social7 from "../images/social7.png";
import social8 from "../images/social8.png";
import social9 from "../images/social9.png";
import social10 from "../images/social10.png";
import social11 from "../images/social11.png";
import social12 from "../images/social12.png";
import social13 from "../images/social3.png";
import social14 from "../images/social4.png";
export default function Socialone () {
    return (
        <>
        <section className="social-one">
        <div className="bgg"></div>
        <Container>
            <div className="social-title text-center ">
                <h6>Integrations</h6>
                <h2 className="mx-auto mt-3">Incorporate our tool into <span><i>your everyday tasks</i></span> </h2>
            </div>
            <div className="social-one_logo">
                <span>
                    <img src={logo} width={"100%"} />
                </span>
            </div>
            <div className="inner-container"> 
                <div className="social-one-bg"></div>
                <div className="social-one_bg-two"></div>
                <marquee direction="left" behavior="alternate">
                    <Link to={"/"}>
                    <img src={social1} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social2} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social3} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social4} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social5} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social6} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social7} />
                    </Link>
                </marquee>
                <marquee direction="right" behavior="alternate">
                    <Link to={"/"}>
                    <img src={social8} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social9} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social10} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social11} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social12} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social3} />
                    </Link>
                    <Link to={"/"}>
                    <img src={social14} />
                    </Link>
                </marquee>
            </div>
        </Container>
        </section>
        </>
    )
}