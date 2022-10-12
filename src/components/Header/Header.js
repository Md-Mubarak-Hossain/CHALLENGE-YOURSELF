import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
const Header = () => {
    return (


        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Challenge Yourself</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='block text-decoration-none px-4 fs-4 fw-bold btn text-primary border-0 btn-outline-info
                ' to='/'>Home</Link>
                            <Link className='block text-decoration-none px-4 fs-4 fw-bold btn text-primary border-0 btn-outline-info
                ' to='/topics'>Topics</Link>
                            <Link className='block text-decoration-none px-4 fs-4 fw-bold btn text-primary border-0 btn-outline-info
                ' to='/statchart'>StatChart</Link>
                            <Link className='block text-decoration-none px-4 fs-4 fw-bold btn text-primary border-0 btn-outline-info
                ' to='/blog'>Blog</Link>
                            <Link className='block text-decoration-none px-4 fs-4 fw-bold btn text-primary border-0 btn-outline-info
                ' to='/about'>About</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;