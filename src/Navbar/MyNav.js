import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';



function MyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'mynav scrolled fixed-top my-navbar' : 'mynav fixed-top my-navbar'}>
      <Container>
        <Navbar.Brand href="/">Oasis salon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Главная</Nav.Link>
            <Nav.Link as={Link} to="/AboutSalon">О мастере</Nav.Link>

            <Nav.Link as={Link} to="/CardPrice">Цены</Nav.Link>
            <Nav.Link as={Link} to="/FirstPage">SPA программы</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Контакты</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
