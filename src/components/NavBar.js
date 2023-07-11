import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

import logo from '../assets/img/logo.svg'
import navIcon from '../assets/img/nav-icon2.svg'
import { Link, Outlet } from "react-router-dom"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div className="main-container d-flex flex-column">
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                <Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  to={"/"}>
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'primer' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('primer')}
              >
                <Link className={activeLink === 'primer' ? 'active navbar-link' : 'navbar-link'} to={"/primer-parcial"}>
                  Primer Parcial
                </Link>
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'segundo' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('segundo')}
              >
                <Link className={activeLink === 'segundo' ? 'active navbar-link' : 'navbar-link'} to={"/segundo-parcial"}>
                  Segundo Parcial
                </Link>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}