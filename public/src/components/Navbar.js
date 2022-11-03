import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";
import Cart from "./Cart";
import Logout from "./Logout";

const NavbarUser = ({size}) => {

    
    return(
        <>
        <Navbar className="navBg" variant="Dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Dummy Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <ul className="navbar-nav bienvenidoNavBar d-none">
                  <li className="nav-item dropdown me-auto mb-2 mb-lg-0">
                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <span>Bienvenido <b className="userNameLogged">fulanito</b></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item " onclick="logOut()">Cerrar Sesión</a></li>
                    </ul>
                  </li>
                </ul>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="#cart">
                          <i className="fas fa-cart-plus">{size}</i>
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <script src="Common.jsx" type="text/javascript" charset="utf-8"></script>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>

    )
}

export default NavbarUser;