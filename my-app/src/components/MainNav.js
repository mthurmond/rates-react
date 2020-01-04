import React from 'react';
import logo from '../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function MainNav() {
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

                <Nav activeKey="">
                    {/* use nav.link "as" property to render as "Links" and not default "a" elements, otherwise console throws error, can't next "a" within "a". 
                    then wrapped each link in anonymous function due to app error */}
                    <Nav.Link href="/home" as={() => <Link className="nav-link" to="/home">Rate Alerts</Link>} />
                    <Nav.Link as={() => <Link className="nav-link" to="/profile">Profile</Link>} />
                    <Nav.Link as={() => <Link className="nav-link" to="/login">Log in</Link>} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default MainNav;