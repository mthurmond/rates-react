import React from 'react';
import logo from '../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function MainNav() {
    return (

        <Navbar
            collapseOnSelect
            bg="dark"
            variant="dark"
            expand="lg"
            className="mb-5"
        >

            <Navbar.Brand>
                <Link to="/home">
                    <img src={logo} alt="Chart icon" height="30" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">            

                <Nav
                    activeKey=""
                >
                    <Nav.Link href="/home">
                        <Link className="nav-link" to="/home">Rate Alerts</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav-link" to="/login">Log out</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}