import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';




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
    <Navbar expand="lg" className={scrolled ? 'mynav scrolled fixed-top' : 'mynav fixed-top'}>
      <Container>
        <Navbar.Brand href="/">Oasis salon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/AboutSalon">О мастере</Nav.Link>
            <Nav.Link href="/Service">Услуги</Nav.Link>
            <Nav.Link href="/Testimonial">Отзывы</Nav.Link>
            <Nav.Link href="/Contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;