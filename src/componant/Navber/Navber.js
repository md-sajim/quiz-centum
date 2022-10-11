import { faBoltLightning, faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./Navber.css"


const Navber = () => {
    // this style for active router
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <Navbar className='navber-container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='nab-brand'>
                    <h1>QuizCentum<FontAwesomeIcon icon={faBrain}></FontAwesomeIcon></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/">Topic</NavLink>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="statistics">Statistics</NavLink>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="blog">Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;