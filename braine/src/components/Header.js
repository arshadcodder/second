import { Container} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import "../pages/App.scss";
import flag from "../images/flag.png";
import Arabic from "../images/arabic.png";
import German from "../images/germany.png";
import French from "../images/france.png";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.svg";

export default function Header () {
  const [showDropdown, setShowDropdown] = useState({});

  const handleMouseEnter = (menu) => {
    setShowDropdown((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setShowDropdown((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <>
      <Navbar expand="lg" className="py-4 main">
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-white'>
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto p-0 my-lg-0" navbarScroll>
              <NavDropdown
                title="Home"
                className="home"
                id="navbarScrollingDropdown"
                show={showDropdown['home']}
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={() => handleMouseLeave('home')}
              >
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="About"
                className="home"
                id="navbarScrollingDropdown"
                show={showDropdown['about']}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={() => handleMouseLeave('about')}
              >
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Pages"
                className="home"
                id="navbarScrollingDropdown"
                show={showDropdown['pages']}
                onMouseEnter={() => handleMouseEnter('pages')}
                onMouseLeave={() => handleMouseLeave('pages')}
              >
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Blog"
                className="home"
                id="navbarScrollingDropdown"
                show={showDropdown['blog']}
                onMouseEnter={() => handleMouseEnter('blog')}
                onMouseLeave={() => handleMouseLeave('blog')}
              >
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Contact"
                className="home"
                id="navbarScrollingDropdown"
                show={showDropdown['contact']}
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={() => handleMouseLeave('contact')}
              >
                <NavDropdown.Item as={Link} to="/action3" className="home">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4" className="home">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={flag} alt="Flag" />
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/">
                  <span className="dropdown-item">
                    <img src={flag} alt="English" />
                    English
                  </span>
                </Link>
                <Link className="dropdown-item" to="/arabic">
                  <span className="dropdown-item">
                    <img src={Arabic} alt="Arabic" />
                    Arabic
                  </span>
                </Link>
                <Link className="dropdown-item" to="/german">
                  <span className="dropdown-item">
                    <img src={German} alt="German" />
                    German
                  </span>
                </Link>
                <Link className="dropdown-item" to="/french">
                  <span className="dropdown-item">
                    <img src={French} alt="French" />
                    French
                  </span>
                </Link>
              </div>
            </div>

            <div className="login-btn d-flex gap-3">
              <Link to="/" className="login">Login</Link>
              <Link to="/" className="join">Join now</Link>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
